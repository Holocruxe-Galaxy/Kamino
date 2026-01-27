import { useEffect } from "react";
import styles from "./PrivacyView.module.css";

const PrivacyView = () => {
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
          <h2>POLÍTICA DE PRIVACIDAD</h2>
        </div>
      </div>

      <div className={styles.textBox}>
        <p><strong>1. Información que recopilamos:</strong></p>
        <p>Datos proporcionados por el usuario: (Ejemplo: nombre, correo si hay registro).</p>
        <ol style={{ paddingLeft: '20px', margin: '15px 0' }}>
          <li><strong>Datos automáticos:</strong> Podemos recopilar información técnica como el modelo del dispositivo y la versión del sistema operativo.</li>
          <li><strong>Uso de la Información:</strong> Los datos se utilizan exclusivamente para mejorar la experiencia del usuario y el funcionamiento técnico de la app.</li>
          <li><strong>Terceros:</strong> (Si usan Google Analytics o AdMob, deben ponerlo aquí). "Esta app utiliza servicios de terceros que pueden recopilar información identificativa".</li>
          <li><strong>Seguridad:</strong> Implementamos medidas para proteger sus datos personales, pero recordamos que ningún método de transmisión por internet es 100% seguro.</li>
          <li><strong>Enlaces a otros sitios:</strong> Nuestra app puede contener enlaces a sitios externos no operados por nosotros.</li>
          <li><strong>Menores de edad:</strong> No recopilamos conscientemente información de niños menores de 13 años.</li>
        </ol>

        <p><strong>2. Uso de la Información:</strong> Los datos recolectados se destinan exclusivamente a la personalización de la experiencia del usuario, la mejora de las funcionalidades de la app y el soporte técnico. No vendemos ni alquilamos bases de datos personales a terceros con fines comerciales.</p>

        <p><strong>3. Principio de Minimización:</strong> Nuestra arquitectura técnica sigue este principio. Esto significa que la aplicación solo solicita y procesa el conjunto mínimo de datos estrictamente necesario para que las automatizaciones y soluciones de IA funcionen correctamente. No recolectamos información “de más”. Si un dato no es vital para la ejecución del servicio contratado, no es almacenado en nuestros sistemas.</p>

        <p><strong>4. Gestión de Permisos de Integraciones (APIs):</strong> Dado que nuestras soluciones permiten conectar diferentes herramientas digitales, el usuario otorga permisos específicos para que HOLOCRUXE interactúe con APIs de terceros. Nosotros no almacenamos las credenciales de acceso maestras; utilizamos tokens de acceso temporales y revocables. El usuario mantiene el control total y puede revocar estos permisos en cualquier momento desde los ajustes de la aplicación o desde la plataforma de terceros vinculada.</p>

        <p><strong>5. Proveedores de Servicios y Terceros:</strong> Podemos utilizar servicios de terceros (como Google Analytics, AdMob o Firebase) para analizar el tráfico o mostrar anuncios. Estos proveedores tienen sus propias políticas de privacidad y pueden recopilar información técnica de forma automática para cumplir con sus funciones de análisis o publicidad.</p>

        <p><strong>6. Seguridad y Retención de Datos:</strong> Aplicamos estándares de seguridad razonables para proteger su información contra accesos no autorizados. Los datos personales se conservarán únicamente durante el tiempo necesario para cumplir con las finalidades descritas o mientras el usuario mantenga su cuenta activa en nuestra plataforma.</p>

        <p><strong>7. Derechos del Usuario y Menores:</strong> El usuario tiene derecho a solicitar el acceso, rectificación o eliminación de sus datos personales enviando una solicitud al correo de contacto. Esta aplicación no está dirigida a menores de 13 años y no recopilamos información de menores de forma consciente; de detectarse, se eliminará de inmediato.</p>

        <p><strong>8. Procesamiento de Datos Financieros:</strong> Nuestra aplicación utiliza la pasarela de pagos oficial de Google Play para procesar transacciones. CRUXIE no recolecta, almacena ni tiene acceso a los datos de sus tarjetas de crédito, cuentas bancarias o información de facturación sensible. Toda esa información es gestionada exclusivamente por Google bajo sus propios estándares de seguridad y privacidad. Solo recibimos confirmaciones de pago exitosas para habilitar el acceso al contenido adquirido.</p>

        <p><strong>9. Transferencia Internacional de Datos:</strong> Dado que utilizamos servicios de infraestructura global (como servidores de Google), su información puede ser procesada en países fuera de su lugar de residencia. Al usar la app, usted consiente esta transferencia siempre bajo estándares de seguridad adecuados.</p>

        <p><strong>10. Base Legal para el Procesamiento:</strong> Procesamos sus datos basándonos en:</p>
        <ol type="a" style={{ paddingLeft: '20px', margin: '15px 0' }}>
          <li>Su consentimiento explícito al aceptar esta política;</li>
          <li>La necesidad de ejecutar el contrato de servicio; y</li>
          <li>El interés legítimo para mejorar la seguridad y calidad de la aplicación.</li>
        </ol>

        <p><strong>11. Retención de Información:</strong> Conservaremos sus datos personales únicamente mientras su cuenta esté activa o sea necesario para prestarle el servicio. Una vez finalizada la relación, los datos podrán ser bloqueados o eliminados, salvo que la ley exija su conservación por un periodo mayor.</p>

        <p><strong>12. Comunicaciones y Notificaciones:</strong> Podemos enviarle correos electrónicos técnicos o administrativos relacionados con el funcionamiento de la app. Las comunicaciones comerciales solo se enviarán si usted ha optado por recibirlas previamente.</p>

        <p><strong>13. Integridad y Modificaciones:</strong> Esta política constituye el acuerdo completo sobre privacidad entre el usuario HOLOCRUXE. Cualquier cambio futuro será publicado en esta misma URL y, en caso de cambios sensibles, se notificará a través de la interfaz de la aplicación.</p>

        <p><strong>14. Eliminación de Cuenta:</strong> El usuario puede solicitar la eliminación definitiva de su cuenta y todos sus datos asociados en cualquier momento enviando un correo a <a href="mailto:contacto@holocruxe.com" style={{ color: '#349aef', textDecoration: 'underline' }}>contacto@holocruxe.com</a>. Procesaremos la solicitud en un plazo máximo de 7 días.</p>

        <p>Última actualización: 27-01-2026</p>
      </div>
    </div>
  );
};

export default PrivacyView;
