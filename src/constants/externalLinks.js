const WPP_PHONE = import.meta.env.VITE_WHATSAPP_PHONE;
const WPP_MSG = "Hola! Me gustaria tener mas información sobre los productos de Holocruxe por favor";

export const EXTERNAL_LINKS = {
  WHATSAPP: `https://wa.me/${WPP_PHONE}?text=${encodeURIComponent(WPP_MSG)}`,
  MSg_WPP: WPP_MSG,
  FACTORY: "https://factory.holocruxe.com/",
  KIRA: "https://kira.holocruxe.com",
  CRUXIE: "https://cruxie.holocruxe.com/",
  VINADO: "https://vinado-app.com/",
};

export default EXTERNAL_LINKS;