/**
 * Servicio para envío de correos a través del endpoint de mailing de AWS
 */

const MAILING_ENDPOINT =
  import.meta.env.VITE_MAILING_ENDPOINT ||
  "https://556jmn3ttd.execute-api.us-east-1.amazonaws.com/mailing/custom";

const DEFAULT_RECIPIENT =
  import.meta.env.VITE_MAILING_RECIPIENT || "rociomigliarese3@gmail.com";

/**
 * Genera la plantilla HTML con diseño profesional para correos de contacto o demo
 */
const buildHtmlTemplate = ({
  name,
  email,
  company,
  interest,
  message,
  isDemo,
  productName,
  dateStr,
}) => {
  const accentColor = isDemo ? "#7C3AED" : "#2563EB";
  const badgeBg = isDemo ? "#EDE9FE" : "#EFF6FF";
  const badgeBorder = isDemo ? "#DDD6FE" : "#DBEAFE";
  const badgeText = isDemo ? "#6D28D9" : "#1D4ED8";
  const titleText = isDemo
    ? `Nueva Solicitud de Demo: ${productName || interest || "Producto"}`
    : `Nueva Consulta de Contacto: ${interest || "General"}`;

  const cleanMessage = (message || "Sin mensaje adicional")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br/>");

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${titleText}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b0f19; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f1f5f9; line-height: 1.6;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0b0f19; padding: 40px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background: #131b2e; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);" cellspacing="0" cellpadding="0">
          
          <!-- Top Accent Bar -->
          <tr>
            <td style="height: 6px; background: linear-gradient(90deg, #7C3AED 0%, #3B82F6 100%);"></td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="padding: 32px 32px 24px 32px; border-bottom: 1px solid rgba(255, 255, 255, 0.06);">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="font-size: 22px; font-weight: 800; letter-spacing: -0.5px; color: #ffffff;">
                      Holo<span style="color: #a78bfa;">cruxe</span>
                    </span>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; padding: 6px 14px; border-radius: 9999px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; background-color: ${badgeBg}; color: ${badgeText}; border: 1px solid ${badgeBorder};">
                      ${isDemo ? "🚀 Pedido de Demo" : "💬 Contacto Web"}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 32px;">
              <h1 style="margin: 0 0 8px 0; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.3px;">
                ${titleText}
              </h1>
              <p style="margin: 0 0 24px 0; font-size: 14px; color: #94a3b8;">
                Recibido el ${dateStr} a través del sitio web oficial.
              </p>

              <!-- Lead Data Table -->
              <table role="presentation" width="100%" style="background-color: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 16px; margin-bottom: 24px;" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding: 10px 14px; width: 140px; font-size: 13px; color: #94a3b8; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid rgba(255, 255, 255, 0.04);">
                    Nombre
                  </td>
                  <td style="padding: 10px 14px; font-size: 15px; color: #f8fafc; font-weight: 600; border-bottom: 1px solid rgba(255, 255, 255, 0.04);">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-size: 13px; color: #94a3b8; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid rgba(255, 255, 255, 0.04);">
                    Email
                  </td>
                  <td style="padding: 10px 14px; font-size: 15px; border-bottom: 1px solid rgba(255, 255, 255, 0.04);">
                    <a href="mailto:${email}" style="color: #60a5fa; text-decoration: none; font-weight: 600;">
                      ${email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-size: 13px; color: #94a3b8; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid rgba(255, 255, 255, 0.04);">
                    Empresa
                  </td>
                  <td style="padding: 10px 14px; font-size: 15px; color: #e2e8f0; border-bottom: 1px solid rgba(255, 255, 255, 0.04);">
                    ${company || "<em>No especificada</em>"}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 14px; font-size: 13px; color: #94a3b8; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                    ${isDemo ? "Producto" : "Interés"}
                  </td>
                  <td style="padding: 10px 14px; font-size: 15px; color: #a78bfa; font-weight: 700;">
                    ${isDemo ? productName || interest : interest}
                  </td>
                </tr>
              </table>

              <!-- Message Section -->
              <div style="margin-bottom: 24px;">
                <div style="font-size: 12px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.6px; margin-bottom: 8px;">
                  ${isDemo ? "Comentarios / Requerimiento del usuario:" : "Mensaje del usuario:"}
                </div>
                <div style="background-color: rgba(15, 23, 42, 0.6); border-left: 3px solid ${accentColor}; border-radius: 4px 8px 8px 4px; padding: 16px 20px; font-size: 14px; color: #e2e8f0; line-height: 1.6; word-break: break-word;">
                  ${cleanMessage}
                </div>
              </div>

              <!-- Quick reply button -->
              <table role="presentation" cellspacing="0" cellpadding="0" style="margin-top: 24px;">
                <tr>
                  <td align="center" style="border-radius: 8px; background: linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%);">
                    <a href="mailto:${email}?subject=${encodeURIComponent(`Re: ${titleText}`)}" style="display: inline-block; padding: 12px 24px; font-size: 14px; font-weight: 600; color: #ffffff; text-decoration: none; border-radius: 8px;">
                      Responder a ${name}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background-color: #0d121f; border-top: 1px solid rgba(255, 255, 255, 0.05); text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #64748b;">
                Mensaje generado automáticamente por el portal web de <strong>Holocruxe</strong> (holocruxe.com)
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
};

/**
 * Envía un correo con HTML maquetado al endpoint /mailing/custom
 *
 * @param {Object} options
 * @param {string} options.name - Nombre de la persona que contacta
 * @param {string} options.email - Correo de contacto
 * @param {string} [options.company] - Empresa (opcional)
 * @param {string} [options.interest] - Tema de interés o producto
 * @param {string} [options.message] - Mensaje adicional
 * @param {boolean} [options.isDemo=false] - Si es una solicitud de demo
 * @param {string} [options.productName=""] - Nombre del producto si es demo
 * @param {string} [options.toEmail] - Destinatario (por defecto rociomigliarese3@gmail.com)
 */
export const sendCustomMail = async ({
  name,
  email,
  company = "",
  interest = "General",
  message = "",
  isDemo = false,
  productName = "",
  toEmail = DEFAULT_RECIPIENT,
}) => {
  const dateStr = new Date().toLocaleString("es-AR", {
    timeZone: "America/Argentina/Cordoba",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const subject = isDemo
    ? `🚀 [DEMO - ${productName || interest}] ${name}${company ? ` (${company})` : ""}`
    : `💬 [Contacto] ${name} - ${interest}`;

  const html = buildHtmlTemplate({
    name,
    email,
    company,
    interest,
    message,
    isDemo,
    productName,
    dateStr,
  });

  const payload = {
    to_email: toEmail,
    subject,
    html,
  };

  const response = await fetch(MAILING_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(
      `Error al enviar correo (${response.status}): ${errorText || "Respuesta no exitosa"}`
    );
  }

  return response;
};

export default sendCustomMail;
