import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Products.module.css";
import { forceScrollTop } from "../../utils/scroll";
import { EXTERNAL_LINKS } from "../../constants/externalLinks";

const Products = () => {
  const { t } = useTranslation();

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    forceScrollTop();
  }, []);

  const handleContactClick = (interest) => (e) => {
    e.preventDefault();
    window.location.href = `/#contacto?interes=${encodeURIComponent(interest)}`;
  };

  const productsList = [
    {
      id: "kira",
      letter: "K",
      iconClass: styles.cKira,
      image: "/images/kira.png",
      name: t("productsPage.kira.name", "Kira"),
      title: t(
        "productsPage.kira.h2",
        "Salí de cada reunión con la minuta y los accionables listos."
      ),
      lead: t(
        "productsPage.kira.lead",
        "Toma notas, traduce en tiempo real y arma la minuta de tus reuniones."
      ),
      features: t("productsPage.kira.features", {
        returnObjects: true,
        defaultValue: [
          "Toma notas de la reunión por vos",
          "Traduce en tiempo real",
          "Arma la minuta con los accionables de cada persona",
        ],
      }),
      forDesc: t(
        "productsPage.kira.forDesc",
        "Equipos con muchas reuniones, también en otros idiomas"
      ),
      visitUrl: EXTERNAL_LINKS.KIRA,
      visitText: t("productsPage.kira.visitBtn", "Visitar Kira"),
      ghostText: t("productsPage.kira.demoBtn", "Pedir demo"),
      isEven: false,
    },
    {
      id: "cruxie_wa",
      letter: "W",
      iconClass: styles.cWa,
      image: "/images/Cruxie-Wpp.png",
      name: t("productsPage.cruxieWa.name", "Cruxie WhatsApp"),
      title: t(
        "productsPage.cruxieWa.h2",
        "Tus clientes preguntan por WhatsApp. Cruxie responde, a cualquier hora."
      ),
      lead: t(
        "productsPage.cruxieWa.lead",
        "Un agente de IA que atiende a tus clientes por WhatsApp."
      ),
      features: t("productsPage.cruxieWa.features", {
        returnObjects: true,
        defaultValue: [
          "Responde consultas de clientes en WhatsApp",
          "Funciona sobre la API oficial de WhatsApp Business",
          "Se entrena con la información de tu negocio",
        ],
      }),
      forDesc: t(
        "productsPage.cruxieWa.forDesc",
        "Negocios con muchas consultas repetidas"
      ),
      visitUrl: null,
      visitText: null,
      ghostText: t("productsPage.cruxieWa.demoBtn", "Pedir demo"),
      isEven: true,
    },
    {
      id: "vinado",
      letter: "V",
      iconClass: styles.cVinado,
      image: "/images/vinado.png",
      name: t("productsPage.vinado.name", "Vinado"),
      title: t(
        "productsPage.vinado.h2",
        "Tu historia con el vino, en una app."
      ),
      lead: t(
        "productsPage.vinado.lead",
        "Registrá y puntuá los vinos que tomás, sumá puntos y conseguí descuentos."
      ),
      features: t("productsPage.vinado.features", {
        returnObjects: true,
        defaultValue: [
          "Registrá y puntuá cada vino que probás",
          "Sumá puntos a medida que puntuás",
          "Canjealos por descuentos en los Vinado Points",
          "Para bodegas y vinotecas: sumate como Vinado Point",
        ],
      }),
      forDesc: t(
        "productsPage.vinado.forDesc",
        "Quienes disfrutan el vino, y bodegas o vinotecas que quieren llegar a ellos"
      ),
      visitUrl: EXTERNAL_LINKS.GOOGLE_PLAY_VINADO,
      visitText: t("productsPage.vinado.visitBtn", "Descargar Vinado"),
      ghostText: t("productsPage.vinado.partnerBtn", "Soy bodega o vinoteca"),
      isEven: false,
    },
    {
      id: "cruxie",
      letter: "C",
      iconClass: styles.cCruxie,
      image: "/images/Cruxie.png",
      name: t("productsPage.cruxie.name", "Cruxie"),
      title: t(
        "productsPage.cruxie.h2",
        "El conocimiento de tu empresa, disponible para todo tu equipo."
      ),
      lead: t(
        "productsPage.cruxie.lead",
        "Asistentes de IA entrenados con el conocimiento de tu organización."
      ),
      features: t("productsPage.cruxie.features", {
        returnObjects: true,
        defaultValue: [
          "Creá asistentes y entrenalos con la información de tu organización",
          "Definí quién accede a cada asistente",
          "Conectalo con las herramientas que ya usan",
        ],
      }),
      forDesc: t(
        "productsPage.cruxie.forDesc",
        "Empresas con conocimiento repartido entre personas y documentos"
      ),
      visitUrl: EXTERNAL_LINKS.CRUXIE,
      visitText: t("productsPage.cruxie.visitBtn", "Visitar Cruxie"),
      ghostText: t("productsPage.cruxie.demoBtn", "Pedir demo"),
      isEven: true,
    },
  ];

  const renderKiraVisual = () => (
    <div
      className={`${styles.pv} ${styles.k}`}
      role="img"
      aria-label="Escena animada: Kira traduce la reunión en vivo y, al terminar, genera la minuta"
    >
      <div className={styles.kApp}>
        <div className={styles.kBar}>
          <b className={styles.kLogo}>Kira</b>
          <span className={styles.kOk}><i />CONECTADO</span>
          <span className={styles.kLang}>EN → ES</span>
          <span className={styles.kStop}>■ Detener</span>
          <span className={styles.kTime} />
        </div>
        <div className={styles.kLog}>
          <div className={`${styles.kEnt} ${styles.e1}`}>
            <small>10:42:07 a. m. · EN → ES</small>
            <em>Can you send the contract today?</em>
            <strong>¿Puedes enviar el contrato hoy?</strong>
          </div>
          <div className={`${styles.kEnt} ${styles.e2}`}>
            <small>10:42:31 a. m. · EN → ES</small>
            <em>Sure, I’ll send it this afternoon.</em>
            <strong>Claro, lo envío esta tarde.</strong>
          </div>
          <div className={styles.kLive}>
            <span className={styles.kEnvivo}><i />EN VIVO</span>
            <div className={styles.kSay}>
              <div className={styles.lv}>
                <em className={styles.v1}>Can you send the contract today?</em>
                <strong className={styles.v2}>¿Puedes enviar el contrato hoy?</strong>
              </div>
              <div className={styles.lv}>
                <em className={styles.v3}>Sure, I’ll send it this afternoon.</em>
                <strong className={styles.v4}>Claro, lo envío esta tarde.</strong>
              </div>
              <div className={styles.lv}>
                <em className={styles.v5}>Let’s close the proposal on Friday.</em>
                <strong className={styles.v6}>Cerremos la propuesta el viernes.</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.kModal}>
        <div className={styles.kmHead}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#5b7cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 3h8l4 4v14H6z" />
            <path d="M14 3v4h4M9 12h6M9 16h6" />
          </svg>
          <strong>Minuta de reunión</strong>
          <span>2 min y 42 seg</span>
          <i className={styles.kmX}>×</i>
        </div>
        <div className={styles.kmSaved}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#5b7cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 5l9 7-9 7zM19 5v14" />
          </svg>
          <div>
            <b>Minuta guardada</b>
            <p>Podés consultar o exportar el contenido, o reenviarlo por correo.</p>
          </div>
        </div>
        <div className={styles.kmDoc}>
          <h5>Resumen ejecutivo</h5>
          <p>Se acordó enviar el contrato hoy y cerrar la propuesta el viernes.</p>
          <h5>Accionables</h5>
          <ul>
            <li><em>A</em>Enviar propuesta</li>
            <li><em>L</em>Revisar contrato</li>
          </ul>
        </div>
        <div className={styles.kmFoot}>
          <span>Enviar a correo...</span>
          <b className={styles.bl}>Enviar</b>
          <b>Copiar</b>
          <b className={styles.md}>.md</b>
          <b className={styles.gr}>.html</b>
          <b className={styles.bl}>Listo</b>
        </div>
      </div>
    </div>
  );

  const renderWhatsAppVisual = () => (
    <div
      className={`${styles.pv} ${styles.wa}`}
      role="img"
      aria-label="Escena animada: un cliente pregunta por WhatsApp y Cruxie responde"
    >
      <div className={styles.waHead}>
        <span className={styles.waAv}>T</span>
        <div>
          <strong>Tu negocio</strong>
          <span className={styles.waSub}>
            <span className={styles.waOn}>en línea</span>
            <span className={styles.waTyp}>escribiendo…</span>
          </span>
        </div>
      </div>
      <div className={styles.waBody}>
        <span className={styles.waDay}>Hoy</span>
        <div className={`${styles.waMsg} ${styles.waIn} ${styles.s1}`}>
          Hola, ¿hacen envíos a Rosario?
          <time>10:42</time>
        </div>
        <div className={`${styles.waMsg} ${styles.waOut} ${styles.s3}`}>
          ¡Hola! Sí, hacemos envíos. ¿Te paso las opciones?
          <time>10:42 <em>✓✓</em></time>
        </div>
        <span className={`${styles.waNote} ${styles.s4}`}>Atendido por Cruxie</span>
      </div>
      <div className={styles.waInput}>
        <span>Escribí un mensaje</span>
        <i>
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path d="M3 20l18-8L3 4v6l12 2-12 2z" fill="#fff" />
          </svg>
        </i>
      </div>
    </div>
  );

  const renderVinadoVisual = () => (
    <div
      className={`${styles.pv} ${styles.vi}`}
      role="img"
      aria-label="Escena animada: en Vinado se escanea la botella, se registra el legado del vino y se ganan puntos"
    >
      <div className={styles.ph}>
        <div className={`${styles.scr} ${styles.sc1}`}>
          <div className={styles.scTop}>Escanear botella</div>
          <div className={styles.scCam}>
            <svg className={styles.scBottle} viewBox="0 0 60 160" aria-hidden="true">
              <path
                d="M24 4h12v32c0 8 12 12 12 30v84a6 6 0 01-6 6H18a6 6 0 01-6-6V66c0-18 12-22 12-30z"
                fill="#2d1a24"
                stroke="rgba(255,255,255,.14)"
                strokeWidth="1.2"
              />
              <rect x="24" y="4" width="12" height="14" rx="2" fill="#6b2f36" />
              <rect x="14" y="86" width="32" height="46" rx="2" fill="#e9dcc0" />
              <path d="M19 98h22M19 106h22M19 114h14" stroke="#9a8560" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div className={styles.scFrame}>
              <span /><span /><span /><span />
              <i className={styles.scLine} />
            </div>
          </div>
          <div className={styles.scFoot}>
            <span className={styles.scHint}>Apuntá a la etiqueta</span>
            <span className={styles.scChip}>✓ Malbec reserva</span>
          </div>
        </div>
        <div className={`${styles.scr} ${styles.sc2}`}>
          <div className={styles.fHead}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#5a5963" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Nuevo Legado
          </div>
          <div className={styles.fBody}>
            <div>
              <div className={styles.fLab}>1. ¿QUÉ TE PARECIÓ?</div>
              <div className={styles.fRate}>
                <div className={`${styles.fCard} ${styles.c1}`}>
                  <svg viewBox="0 0 24 24">
                    <path d="M17 14V2M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />
                  </svg>
                  No me gustó
                </div>
                <div className={`${styles.fCard} ${styles.c2}`}>
                  <svg viewBox="0 0 24 24">
                    <path d="M5 12h14" />
                  </svg>
                  Estuvo bien
                </div>
                <div className={`${styles.fCard} ${styles.c3}`}>
                  <svg viewBox="0 0 24 24">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  ¡Me encantó!
                </div>
              </div>
            </div>
            <div>
              <div className={styles.fLab}>2. ¿CUÁL FUE EL MOMENTO?</div>
              <div className={styles.fOpt}>Opcional - Seleccioná todos los que apliquen</div>
              <div className={styles.fChips}>
                <span className={styles.fChip}>Cena</span>
                <span className={`${styles.fChip} ${styles.on}`}>Amigos</span>
                <span className={styles.fChip}>Pareja</span>
                <span className={styles.fChip}>Regalo</span>
                <span className={styles.fChip}>Viaje</span>
                <span className={styles.fChip}>Casa</span>
              </div>
            </div>
            <div>
              <div className={styles.fLab}>3. NOTA PERSONAL</div>
              <div className={styles.fOpt}>Opcional - ¿Qué lo hizo especial?</div>
              <div className={styles.fNote}>Ej: Muy frutado, ideal con carnes.</div>
            </div>
          </div>
          <div className={styles.fFoot}>
            <span className={styles.fBtn}>✓ Guardar Legado</span>
          </div>
        </div>
        <div className={`${styles.scr} ${styles.sc3}`}>
          <div className={styles.vf} aria-hidden="true">
            <i style={{ left: "8%", background: "#d8b84e", animationDelay: "-0.1s" }} />
            <i style={{ left: "20%", background: "rgba(255,255,255,.75)", animationDelay: "-0.9s" }} />
            <i style={{ left: "32%", background: "#d8b84e", animationDelay: "-1.6s" }} />
            <i style={{ left: "44%", background: "rgba(255,255,255,.75)", animationDelay: "-0.4s" }} />
            <i style={{ left: "56%", background: "#d8b84e", animationDelay: "-1.2s" }} />
            <i style={{ left: "68%", background: "rgba(255,255,255,.75)", animationDelay: "-1.9s" }} />
            <i style={{ left: "80%", background: "#d8b84e", animationDelay: "-0.6s" }} />
            <i style={{ left: "90%", background: "rgba(255,255,255,.75)", animationDelay: "-1.4s" }} />
            <i style={{ left: "14%", background: "#d8b84e", animationDelay: "-2.0s" }} />
            <i style={{ left: "74%", background: "rgba(255,255,255,.75)", animationDelay: "-0.2s" }} />
          </div>
          <div className={styles.ck}>
            <svg viewBox="0 0 24 24">
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </div>
          <h4>¡Guardado!</h4>
          <p>Tu legado ha sido registrado en tu memoria de vinos</p>
          <div className={styles.gold}>
            <small>GANASTE</small>
            <div>
              <svg viewBox="0 0 24 24">
                <path d="M8 4h8v5a4 4 0 01-8 0zM8 6H5v2a3 3 0 003 3M16 6h3v2a3 3 0 01-3 3M12 13v4M8 20h8M9 17h6" />
              </svg>
              <b className={styles.vPts} />
            </div>
            <em>Puntos</em>
          </div>
          <div className={`${styles.bt} ${styles.w}`}>Volver al Inicio</div>
          <div className={`${styles.bt} ${styles.g}`}>Compartir en redes</div>
        </div>
      </div>
    </div>
  );

  const renderCruxieVisual = () => (
    <div
      className={`${styles.pv} ${styles.cx}`}
      role="img"
      aria-label="Escena animada: en Cruxie alguien pregunta y el asistente responde citando la fuente"
    >
      <div className={styles.cxHead}>
        <span className={styles.cxBot}>
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <rect x="6" y="8" width="20" height="16" rx="6" fill="#fff" />
            <rect x="2" y="13" width="3" height="6" rx="1.5" fill="#fff" />
            <rect x="27" y="13" width="3" height="6" rx="1.5" fill="#fff" />
            <circle cx="12" cy="15" r="2" fill="#0a0022" />
            <circle cx="20" cy="15" r="2" fill="#0a0022" />
            <path d="M12 20h8" stroke="#0a0022" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <i />
        </span>
        <div>
          <strong>Asistente de RR. HH.</strong>
          <small>Gestiona tu contenido</small>
        </div>
        <span className={styles.cxBtn}>Entrenar Cruxie</span>
      </div>
      <div className={styles.cxBody}>
        <div className={`${styles.cxMsg} ${styles.me} ${styles.s1}`}>
          ¿Cómo pido el reintegro de viáticos?
        </div>
        <div className={styles.cxAi}>
          <span className={`${styles.cxBot} ${styles.sm} ${styles.s2}`}>
            <svg viewBox="0 0 32 32" aria-hidden="true">
              <rect x="6" y="8" width="20" height="16" rx="6" fill="#fff" />
              <rect x="2" y="13" width="3" height="6" rx="1.5" fill="#fff" />
              <rect x="27" y="13" width="3" height="6" rx="1.5" fill="#fff" />
              <circle cx="12" cy="15" r="2" fill="#0a0022" />
              <circle cx="20" cy="15" r="2" fill="#0a0022" />
              <path d="M12 20h8" stroke="#0a0022" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <div className={styles.cxCol}>
            <div className={styles.slot}>
              <span className={`${styles.typing} ${styles.ai}`}>
                <i /><i /><i />
              </span>
              <div className={`${styles.cxMsg} ${styles.ai} ${styles.s3}`}>
                Sube los comprobantes al portal de gastos, según la política de viáticos.
              </div>
            </div>
            <span className={`${styles.src} ${styles.s4}`}>
              Fuente: Política de viáticos
            </span>
          </div>
        </div>
      </div>
      <div className={styles.cxInput}>
        <span>
          Escribe un mensaje...
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="9" y="3" width="6" height="12" rx="3" fill="#5aa9f5" />
            <path d="M5 11a7 7 0 0014 0M12 18v3" stroke="#5aa9f5" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </span>
        <b>Enviar</b>
      </div>
    </div>
  );

  const renderProductVisual = (id) => {
    switch (id) {
      case "kira":
        return renderKiraVisual();
      case "cruxie_wa":
        return renderWhatsAppVisual();
      case "vinado":
        return renderVinadoVisual();
      case "cruxie":
        return renderCruxieVisual();
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className={styles.wrap}>
          <h1>
            {t("productsPage.titlePart1", "Productos propios,")}
            <br />
            {t("productsPage.titlePart2", "en producción.")}
          </h1>
          <p className={styles.intro}>
            {t(
              "productsPage.intro",
              "Cuatro productos que diseñamos, construimos y operamos. Cada uno tiene su sitio, acá te contamos qué hace."
            )}
          </p>
        </div>
      </section>

      {/* Lista detallada de productos */}
      <div className={styles.wrap}>
        <div className={styles.productsList}>
          {productsList.map((prod) => (
            <article
              key={prod.id}
              id={prod.id}
              className={`${styles.pdetail} ${
                prod.isEven ? styles.reverseShot : ""
              }`}
            >
              <div>
                <div className={styles.plogo}>
                  {prod.image ? (
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className={styles.productAvatar}
                    />
                  ) : (
                    <i className={`${styles.icon} ${prod.iconClass}`}>
                      {prod.letter}
                    </i>
                  )}
                  <span>{prod.name}</span>
                </div>

                <h2 className={styles.productTitle}>{prod.title}</h2>
                <p className={styles.lead}>{prod.lead}</p>

                <ul className={styles.featuresList}>
                  {(Array.isArray(prod.features) ? prod.features : []).map(
                    (feat, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        {feat}
                      </li>
                    )
                  )}
                </ul>

                <p className={styles.forLabel}>
                  {t("productsPage.for", "Para:")}{" "}
                  <span className={styles.forDesc}>{prod.forDesc}</span>
                </p>

                <div className={styles.actions}>
                  {prod.visitUrl && (
                    <a
                      href={prod.visitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.btnPrimary}
                    >
                      {prod.id === "vinado" && (
                        <img
                          src="/images/google-play.svg"
                          alt="Google Play"
                          className={styles.playIcon}
                        />
                      )}
                      <span>{prod.visitText}</span>
                    </a>
                  )}
                  {prod.ghostText && (
                    <button
                      type="button"
                      onClick={handleContactClick(prod.name)}
                      className={prod.visitUrl ? styles.btnGhost : styles.btnPrimary}
                    >
                      {prod.ghostText}
                    </button>
                  )}
                </div>
              </div>

              {/* Escena visual animada según el producto */}
              {renderProductVisual(prod.id)}
            </article>
          ))}
        </div>
      </div>

      {/* Banda CTA inferior */}
      <section className={styles.ctaBand} aria-label="Llamado a la acción">
        <div className={styles.ctaWrap}>
          <h2 className={styles.ctaTitle}>
            {t(
              "productsPage.factoryCta",
              "¿Querés algo así para tu empresa?"
            )}
          </h2>
          <a
            href={EXTERNAL_LINKS.FACTORY}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            {t("productsPage.factoryBtn", "Conocer la Factory")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Products;
