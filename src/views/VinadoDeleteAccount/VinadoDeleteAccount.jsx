import { useEffect } from "react";
import styles from "./VinadoDeleteAccount.module.css";

const VinadoDeleteAccount = () => {
  const hasVisited = sessionStorage.getItem("visited");

  useEffect(() => {
    if (!hasVisited) {
      sessionStorage.setItem("visited", "true");
    }
  }, [hasVisited]);

  return (
    <div className={styles.container}>
      <div className={styles.semicircle}></div>
      <div className={styles.wavesBackground}></div>

      <div className={styles.header}>
        <h1>Vinado</h1>
        <p>Solicitud de Eliminación de Cuenta y Datos</p>
      </div>

      <div className={styles.content}>
        <div className={styles.section}>
          <h2>Cómo Solicitar la Eliminación de tu Cuenta</h2>
          <p className={styles.introText}>
            En Vinado respetamos tu privacidad y tu derecho a eliminar tu cuenta y
            datos personales. Sigue estos pasos para solicitar la eliminación
            completa de tu cuenta:
          </p>

          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <strong>Envía un correo electrónico</strong>
                <p>
                  Haz clic en el botón de abajo o envía un correo a{" "}
                  <strong>contacto@holocruxe.com</strong>
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <strong>Incluye tu información de cuenta</strong>
                <p>
                  En el correo, indica el correo electrónico o nombre de usuario
                  asociado a tu cuenta de Vinado y menciona que deseas eliminar tu
                  cuenta permanentemente.
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <strong>Confirma tu solicitud</strong>
                <p>
                  Recibirás una respuesta de nuestro equipo para confirmar tu
                  identidad y procesar la solicitud de eliminación.
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <strong>Eliminación completada</strong>
                <p>
                  Una vez confirmada, tu cuenta y datos serán eliminados según los
                  plazos indicados más abajo.
                </p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <a
              href="mailto:contacto@holocruxe.com?subject=Solicitud%20de%20Eliminación%20de%20Cuenta%20-%20Vinado&body=Hola%2C%0A%0AQuiero%20solicitar%20la%20eliminación%20de%20mi%20cuenta%20de%20Vinado.%0A%0AMi%20cuenta%20es%3A%20%5Bescribe%20tu%20correo%20o%20usuario%5D%0A%0AGracias."
              className={styles.emailButton}
            >
              Solicitar Eliminación de Cuenta
            </a>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Datos que se Eliminarán</h2>
          <div className={styles.dataInfo}>
            <h3>Se eliminarán permanentemente:</h3>
            <ul className={styles.dataList}>
              <li>
                Información de perfil (nombre, correo electrónico, foto de perfil)
              </li>
              <li>Preferencias y configuraciones de usuario</li>
              <li>Contenido publicado por el usuario</li>
              <li>Historial de actividad dentro de la aplicación</li>
              <li>Datos de uso y preferencias personalizadas</li>
              <li>Cualquier otra información personal asociada a tu cuenta</li>
            </ul>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Datos que se Conservarán</h2>
          <div className={styles.retentionInfo}>
            <h3>Datos retenidos por obligación legal:</h3>
            <ul className={styles.dataList}>
              <li>
                Registros de transacciones (si aplicable) por requisitos fiscales
                y contables
              </li>
              <li>
                Información requerida por ley para cumplir con regulaciones
                legales
              </li>
              <li>
                Datos anonimizados para análisis estadísticos (sin información
                identificable)
              </li>
            </ul>
            <p style={{ marginTop: "15px" }}>
              <strong>Periodo de retención:</strong> Los datos que deben
              conservarse por ley se mantendrán durante el tiempo mínimo
              requerido por la legislación aplicable (generalmente entre 3 y 7
              años según el tipo de datos).
            </p>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.importantNote}>
            <h3>⚠️ Importante</h3>
            <ul className={styles.dataList}>
              <li>
                La eliminación de tu cuenta es{" "}
                <strong>permanente e irreversible</strong>.
              </li>
              <li>
                Una vez eliminada, no podrás recuperar tu cuenta ni tus datos.
              </li>
              <li>
                El proceso de eliminación puede tardar hasta{" "}
                <strong>30 días</strong> en completarse.
              </li>
              <li>
                Durante este periodo, tu cuenta quedará desactivada y no será
                accesible.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Tiempo de Procesamiento</h2>
          <p>Después de recibir tu solicitud:</p>
          <ul className={styles.dataList}>
            <li>
              <strong>Confirmación inicial:</strong> Dentro de 48 horas laborables
            </li>
            <li>
              <strong>Desactivación de cuenta:</strong> Inmediata tras
              confirmación
            </li>
            <li>
              <strong>Eliminación completa:</strong> Hasta 30 días desde la
              confirmación
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VinadoDeleteAccount;
