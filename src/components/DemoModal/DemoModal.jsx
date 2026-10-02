import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { validateFormFields } from "../../utils/validation";
import { sendCustomMail } from "../../services/mailerService";
import styles from "./DemoModal.module.css";

const DemoModal = ({ isOpen, onClose, productName = "Kira" }) => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedData, setSubmittedData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
  });
  const modalRef = useRef(null);

  // Cerrar con tecla Escape y bloquear scroll del body
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsSuccess(false);
    setFormErrors([]);
    setErrorMessage("");
    onClose();
  };

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors([]);
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Antispam honeypot check
    if (formData.get("website")) return;

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const company = formData.get("company")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const rawMessage = formData.get("message")?.toString() || "";

    const finalMessage =
      rawMessage.trim() ||
      `Solicito una demostración personalizada para el producto ${productName}.`;

    const validationErrors = validateFormFields({
      name,
      email,
      phone,
      message: finalMessage,
    });

    if (validationErrors.length > 0) {
      setFormErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await sendCustomMail({
        name: name.trim(),
        email: email.trim(),
        company: company.trim(),
        phone: phone.trim(),
        interest: productName,
        message: finalMessage,
        isDemo: true,
        productName: productName,
      });

      setSubmittedData({
        name: name.trim(),
        email: email.trim(),
        company: company.trim(),
        phone: phone.trim(),
      });
      setIsSuccess(true);
    } catch (error) {
      console.error("Error al enviar demo:", error);
      setErrorMessage(
        "Hubo un problema al procesar tu pedido. Por favor intenta de nuevo o escribinos directamente por WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={styles.backdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <div className={styles.modalCard} ref={modalRef}>
        <button
          type="button"
          onClick={handleClose}
          className={styles.closeBtn}
          aria-label={t("common.close", "Cerrar")}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {isSuccess ? (
          <div className={styles.successContainer}>
            <div className={styles.successIconWrap}>
              <svg
                className={styles.successCheckSvg}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <div className={styles.badgeSuccess}>
              <span>{t("demoModal.successBadge", "✓ ¡Solicitud recibida!")}</span>
            </div>

            <h2 id="demo-modal-title" className={styles.titleSuccess}>
              {t("demoModal.successGreeting", "¡Gracias, {{name}}!", {
                name: submittedData.name,
              })}
            </h2>

            <p className={styles.subtitleSuccess}>
              {t(
                "demoModal.successSubtitle",
                "Recibimos tu pedido de demo de {{product}}. Nos pondremos en contacto contigo a la brevedad para coordinar una sesión personalizada.",
                { product: productName }
              )}
            </p>

            <button
              type="button"
              onClick={handleClose}
              className={styles.btnSuccessClose}
            >
              {t("demoModal.successBtn", "Entendido")}
            </button>
          </div>
        ) : (
          <>
            <div className={styles.header}>
              <div className={styles.badge}>
                <span>{t("demoModal.badge", "🚀 Demo personalizada")}</span>
              </div>
              <h2 id="demo-modal-title" className={styles.title}>
                {t("demoModal.titlePrefix", "Pedir demo de ")}
                <span className={styles.productHighlight}>{productName}</span>
              </h2>
              <p className={styles.subtitle}>
                {t(
                  "demoModal.subtitle",
                  "Completá tus datos y coordinamos una sesión en vivo para mostrarte cómo funciona en tu negocio."
                )}
              </p>
            </div>

            {formErrors.length > 0 && (
              <div className={styles.formErrorBanner}>
                {formErrors.map((err, i) => (
                  <p key={i}>⚠️ {err}</p>
                ))}
              </div>
            )}

            {errorMessage && (
              <div className={styles.formErrorBanner}>
                <p>⚠️ {errorMessage}</p>
              </div>
            )}

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <label className={styles.fieldLabel}>
                  <span>
                    {t("demoModal.nameLabel", "Nombre y apellido")}{" "}
                    <strong className={styles.requiredStar}>*</strong>
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder={t("demoModal.namePlaceholder", "Ej. Juan Pérez")}
                    className={styles.input}
                  />
                </label>

                <label className={styles.fieldLabel}>
                  <span>
                    {t("demoModal.emailLabel", "Email corporativo")}{" "}
                    <strong className={styles.requiredStar}>*</strong>
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder={t("demoModal.emailPlaceholder", "juan@empresa.com")}
                    className={styles.input}
                  />
                </label>
              </div>

              <div className={styles.row}>
                <label className={styles.fieldLabel}>
                  <span>{t("demoModal.companyLabel", "Empresa u organización")}</span>
                  <input
                    type="text"
                    name="company"
                    autoComplete="organization"
                    placeholder={t(
                      "demoModal.companyPlaceholder",
                      "Nombre de tu empresa o startup"
                    )}
                    className={styles.input}
                  />
                </label>

                <label className={styles.fieldLabel}>
                  <span>
                    {t("demoModal.phoneLabel", "Teléfono")}{" "}
                    <strong className={styles.requiredStar}>*</strong>
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    placeholder={t("demoModal.phonePlaceholder", "Ej. +54 9 351 000 0000")}
                    className={styles.input}
                  />
                </label>
              </div>

              <label className={styles.fieldLabel}>
                <span>
                  {t(
                    "demoModal.messageLabel",
                    "¿Qué te gustaría ver en la demo? (Opcional)"
                  )}
                </span>
                <textarea
                  name="message"
                  rows={3}
                  placeholder={t(
                    "demoModal.messagePlaceholder",
                    "Contanos qué desafíos tiene tu equipo o cómo planean utilizar {{product}}...",
                    { product: productName }
                  )}
                  className={styles.textarea}
                />
              </label>

              {/* Honeypot antispam */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className={styles.hp}
              />

              <div className={styles.actions}>
                <button
                  type="button"
                  onClick={handleClose}
                  className={styles.btnCancel}
                  disabled={isSubmitting}
                >
                  {t("demoModal.cancelBtn", "Cancelar")}
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.btnSubmit}
                >
                  {isSubmitting ? (
                    <>
                      <span className={styles.spinner} aria-hidden="true" />
                      <span>{t("demoModal.submittingBtn", "Enviando solicitud...")}</span>
                    </>
                  ) : (
                    <span>{t("demoModal.submitBtn", "Solicitar demo")}</span>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default DemoModal;
