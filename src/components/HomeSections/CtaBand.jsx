import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { validateFormFields } from "../../helpers/validateForm";
import styles from "./ctaBand.module.css";

const MySwal = withReactContent(Swal);

const CtaBand = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedInterest, setSelectedInterest] = useState("Un proyecto para la Factory");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check URL parameters for interest or hash for open
    const searchParams = new URLSearchParams(window.location.search);
    const queryInterest = searchParams.get("interes");
    if (queryInterest) {
      setSelectedInterest(queryInterest);
      setIsOpen(true);
    }

    const checkHash = () => {
      if (window.location.hash.includes("contacto")) {
        setIsOpen(true);
        if (window.location.hash.includes("interes=")) {
          const hashParam = window.location.hash.split("interes=")[1]?.split("&")[0];
          if (hashParam) setSelectedInterest(decodeURIComponent(hashParam));
        }
      }
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);

    const handleOpenEvent = (e) => {
      setIsOpen(true);
      if (e?.detail?.interest) {
        setSelectedInterest(e.detail.interest);
      }
    };
    window.addEventListener("open-contact-form", handleOpenEvent);

    return () => {
      window.removeEventListener("hashchange", checkHash);
      window.removeEventListener("open-contact-form", handleOpenEvent);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        setTimeout(() => {
          const el = document.getElementById("contacto-desplegable");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
        }, 150);
      }
      return next;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Antispam honeypot check
    if (formData.get("website")) return;

    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const company = formData.get("company")?.toString() || "";
    const interest = selectedInterest || formData.get("interes")?.toString() || "Otro tema";
    const rawMessage = formData.get("message")?.toString() || "";

    const validationErrors = validateFormFields({
      name,
      email,
      phone: null,
      message: rawMessage,
    });

    if (validationErrors.length > 0) {
      MySwal.fire({
        title: "❌ Formulario incompleto",
        html: validationErrors.map((err) => `<p>${err}</p>`).join(""),
        icon: "error",
        confirmButtonText: "Revisar",
        customClass: {
          popup: "swal2-custom-popup",
          confirmButton: "swal2-confirm-button",
        },
      });
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: "No especificado",
      message: `[Interés: ${interest}${company ? ` | Empresa: ${company}` : ""}]\n\n${rawMessage.trim()}`,
    };

    try {
      const response = await fetch(
        "https://5a3n19yn44.execute-api.us-east-1.amazonaws.com/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        MySwal.fire({
          title: "✅ Mensaje enviado",
          text: "Gracias por contactarnos. Te responderemos para coordinar una primera conversación.",
          icon: "success",
          confirmButtonText: "Aceptar",
          customClass: {
            popup: "swal2-custom-popup",
            confirmButton: "swal2-confirm-button",
          },
        });
        form.reset();
        setSelectedInterest("Un proyecto para la Factory");
      } else {
        MySwal.fire({
          title: "❌ Error",
          text: "Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo o escribinos por WhatsApp.",
          icon: "error",
          confirmButtonText: "Cerrar",
          customClass: {
            popup: "swal2-custom-popup",
            confirmButton: "swal2-confirm-button",
          },
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      MySwal.fire({
        title: "⚠️ Error de conexión",
        text: "No se pudo conectar con el servidor. Escribinos directamente por WhatsApp.",
        icon: "warning",
        confirmButtonText: "Cerrar",
        customClass: {
          popup: "swal2-custom-popup",
          confirmButton: "swal2-confirm-button",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className={styles.ctaBand} aria-label="Llamado a la acción">
      <div className={styles.wrap}>
        <h2 className={styles.title}>
          {t("ctaBand.title", "¿Tenés una idea o un problema para resolver?")}
        </h2>

        <div className={styles.actions}>
          <button
            type="button"
            onClick={handleToggle}
            className={`${styles.btnPrimary} ${isOpen ? styles.btnActive : ""}`}
            aria-expanded={isOpen}
            aria-controls="contacto-desplegable"
          >
            <span>{t("ctaBand.talkBtn", "Hablemos")}</span>
            <svg
              className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <a
            href="https://wa.me/5490000000000"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnGhost}
          >
            {t("ctaBand.waBtn", "WhatsApp")}
          </a>
        </div>
      </div>

      {/* Accordion Desplegable */}
      <div
        id="contacto-desplegable"
        className={`${styles.accordion} ${isOpen ? styles.accordionOpen : ""}`}
        aria-hidden={!isOpen}
      >
        <div className={styles.accordionContent}>
          <div className={styles.contactDivider} />
          <div className={styles.contactWrap}>
            <div className={styles.contactGrid}>
              {/* Columna Izquierda: Introducción del mock */}
              <div className={styles.leftCol}>
                <h3 className={styles.contactTitle}>
                  {t("contact.title", "Hablemos.")}
                </h3>
                <p className={styles.contactIntro}>
                  {t(
                    "contact.intro",
                    "Con una idea o un problema alcanza. Te respondemos para coordinar una primera conversación."
                  )}
                </p>
                <div className={styles.altContact}>
                  <span className={styles.altMuted}>
                    {t("contact.altPrompt", "¿Preferís hablar directo?")}
                  </span>
                  <a
                    href="https://wa.me/5490000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.waLink}
                  >
                    <span>{t("contact.altWa", "Escribinos por WhatsApp")}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Columna Derecha: Formulario del mock */}
              <div className={styles.rightCol}>
                <form
                  id="contact-form"
                  className={styles.contactForm}
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className={styles.row}>
                    <label className={styles.fieldLabel}>
                      <span>{t("contact.form.name", "Nombre y apellido")} *</span>
                      <input
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                        placeholder={t("contact.form.namePlaceholder", "Tu nombre y apellido")}
                        className={styles.input}
                      />
                    </label>

                    <label className={styles.fieldLabel}>
                      <span>{t("contact.form.email", "Email")} *</span>
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                        placeholder={t("contact.form.emailPlaceholder", "nombre@empresa.com")}
                        className={styles.input}
                      />
                    </label>
                  </div>

                  <div className={styles.row}>
                    <label className={styles.fieldLabel}>
                      <span>{t("contact.form.company", "Empresa")}</span>
                      <input
                        type="text"
                        name="company"
                        autoComplete="organization"
                        placeholder={t("contact.form.companyPlaceholder", "Nombre de tu empresa")}
                        className={styles.input}
                      />
                    </label>

                    <label className={styles.fieldLabel}>
                      <span>{t("contact.form.interest", "¿Sobre qué querés hablar?")}</span>
                      <select
                        name="interes"
                        value={selectedInterest}
                        onChange={(e) => setSelectedInterest(e.target.value)}
                        className={styles.select}
                      >
                        <option value="Un proyecto para la Factory">
                          Un proyecto para la Factory
                        </option>
                        <option value="Desarrollo a medida">Desarrollo a medida</option>
                        <option value="Equipo dedicado">Equipo dedicado</option>
                        <option value="Cruxie">Cruxie</option>
                        <option value="Cruxie WhatsApp">Cruxie WhatsApp</option>
                        <option value="Kira">Kira</option>
                        <option value="Vinado">Vinado</option>
                        <option value="Otro tema">Otro tema</option>
                      </select>
                    </label>
                  </div>

                  <label className={styles.fieldLabel}>
                    <span>{t("contact.form.message", "Contanos qué necesitás")} *</span>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder={t(
                        "contact.form.messagePlaceholder",
                        "Describí brevemente tu proyecto, problema o requerimiento..."
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

                  <div className={styles.submitContainer}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={styles.btnSubmit}
                    >
                      {isSubmitting
                        ? t("contact.form.submitting", "Enviando mensaje...")
                        : t("contact.form.submit", "Enviar mensaje")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
