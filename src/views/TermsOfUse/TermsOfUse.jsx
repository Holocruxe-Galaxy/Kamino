import { useEffect } from "react";
import styles from "./TermsOfUse.module.css";

const TermsOfUse = () => {
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

      <div className={styles.text_section}>
        <div className={styles.text_title}>
          <h2>TÉRMINOS Y CONDICIONES DE USO</h2>
        </div>
      </div>

      <div className={styles.textBox}>
        <p><strong>1. Aceptación:</strong> Al descargar, instalar y usar CRUXIE el usuario acepta de manera íntegra estos términos. Si no está de acuerdo con alguna de las cláusulas aquí expuestas, debe abstenerse de utilizar la aplicación.</p>

        <p><strong>2. Propiedad Intelectual:</strong> Todo el contenido visual, interfaces, logotipos, diseños y código fuente son propiedad exclusiva de HOLOCRUXE. Queda prohibida la reproducción total o parcial sin autorización previa.</p>

        <p><strong>3. Uso Permitido y Restricciones:</strong> El usuario se compromete a utilizar la app de manera legal. Queda estrictamente prohibido intentar realizar ingeniería inversa, extraer el código, distribuir versiones modificadas o utilizar la plataforma para cualquier actividad que vulnere derechos de terceros o leyes vigentes.</p>

        <p><strong>4. Limitación de Responsabilidad:</strong> CRUXIE se proporciona "tal cual" y según disponibilidad. No garantizamos que el servicio sea ininterrumpido o libre de errores. HOLOCRUXE no será responsable de daños directos, indirectos o incidentales que resulten del uso o la imposibilidad de uso de la herramienta.</p>

        <p><strong>5. Suspensión de Servicio y Actualizaciones:</strong> Nos reservamos el derecho de modificar, suspender o retirar cualquier función de la aplicación en cualquier momento y sin previo aviso. Asimismo, estos términos pueden actualizarse para reflejar cambios legales o técnicos; el uso continuado de la app tras dichos cambios implica la aceptación de los nuevos términos.</p>

        <p><strong>6. Pagos, Suscripciones y Reembolsos:</strong> Al adquirir CRUXIE el usuario acepta pagar el precio estipulado en la Google Play Store. Todas las transacciones financieras son procesadas de forma segura por Google Play. Las políticas de reembolso se rigen por las normativas de Google, y cualquier solicitud de devolución deberá gestionarse a través de su plataforma. HOLOCRUXE se reserva el derecho de cambiar los precios en el futuro, previa notificación a través de la tienda o la propia aplicación.</p>

        <p><strong>7. Responsabilidad de la Cuenta:</strong> El usuario es el único responsable de mantener la confidencialidad de sus credenciales de acceso. Cualquier actividad realizada bajo su cuenta se considerará responsabilidad suya.</p>

        <p><strong>8. Responsabilidad por el Uso de la Información:</strong> La aplicación proporciona herramientas y datos que el usuario debe interpretar bajo su propio criterio. HOLOCRUXE no será responsable de las decisiones tomadas por el usuario ni de los resultados obtenidos mediante el uso de la app. Cualquier consecuencia derivada de un uso negligente, ilegal o contrario a las instrucciones de la plataforma será responsabilidad exclusiva del usuario final.</p>

        <p><strong>9. Requisitos del Sistema y Actualizaciones:</strong> Para el correcto funcionamiento de CRUXIE, se requiere un dispositivo compatible y acceso a internet. Nos reservamos el derecho de lanzar actualizaciones obligatorias para mejorar la seguridad o funcionalidad; el usuario acepta que la falta de actualización puede limitar el uso de la aplicación.</p>

        <p><strong>10. Uso de Servicios de Terceros:</strong> La aplicación puede integrarse con servicios externos (como Google, Notion, OneDrive, etc). El usuario acepta que el uso de dichas funciones también está sujeto a los términos de esos terceros, sobre los cuales no tenemos control ni responsabilidad.</p>

        <p><strong>11. Exclusión de Garantías:</strong> No garantizamos que la aplicación sea compatible con todos los dispositivos o proveedores de red. El uso de la app es bajo el propio riesgo del usuario.</p>

        <p><strong>12. Jurisdicción y Ley Aplicable:</strong> Estos términos se rigen por las leyes de Argentina. Cualquier conflicto relacionado con el uso de la aplicación será sometido a la jurisdicción de los tribunales ordinarios de la Ciudad de Córdoba, Argentina.</p>

        <p><strong>13. Divisibilidad:</strong> Si alguna de estas cláusulas es declarada nula o inválida por un tribunal competente, las demás cláusulas permanecerán vigentes y seguirán produciendo plenos efectos legales.</p>

        <p><strong>14. Prohibición de Actividades Fraudulentas y Abuso:</strong> Queda estrictamente prohibido el uso de emuladores, scripts automatizados o cualquier software de terceros que altere el funcionamiento normal de CRUXIE. Cualquier intento de manipular los sistemas de pago, saltarse las restricciones de seguridad o realizar compras fraudulentas resultará en el baneo inmediato y permanente del usuario, sin derecho a reembolso de las cantidades abonadas previamente.</p>

        <p><strong>15. Terminación del Servicio:</strong> Nos reservamos el derecho de suspender o cancelar el acceso de un usuario a la aplicación de forma discrecional, especialmente en casos de violación de estos términos, conducta fraudulenta o por requerimiento de las autoridades legales.</p>
      </div>
    </div>
  );
};

export default TermsOfUse;
