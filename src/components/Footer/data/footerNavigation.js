import { ROUTES } from "../../../constants/routes";
import { EXTERNAL_LINKS } from "../../../constants/externalLinks";

export const SOCIAL_LINKS = [
  {
    id: "linkedin",
    label: "LinkedIn de Holocruxe",
    href: "https://www.linkedin.com/company/holocruxe/",
    icon: "linkedin",
  },
  {
    id: "instagram",
    label: "Instagram de Holocruxe",
    href: "https://www.instagram.com/holocruxe/",
    icon: "instagram",
  },
];

export const FOOTER_NAV_COLUMNS = [
  {
    id: "company",
    titleKey: "footer.company",
    titleFallback: "Empresa",
    links: [
      {
        id: "about",
        labelKey: "footer.about",
        labelFallback: "Nosotros",
        to: ROUTES.ABOUT,
      },
      {
        id: "projects",
        labelKey: "footer.projects",
        labelFallback: "Proyectos",
        to: ROUTES.PROJECTS,
      },
      {
        id: "contact",
        labelKey: "footer.contact",
        labelFallback: "Contacto",
        href: "/#contacto",
        isContact: true,
      },
    ],
  },
  {
    id: "products",
    titleKey: "footer.products",
    titleFallback: "Productos",
    links: [
      {
        id: "kira",
        label: "Kira",
        href: EXTERNAL_LINKS.KIRA,
        isExternal: true,
      },
      {
        id: "cruxie_wa",
        label: "Cruxie WhatsApp",
        href: "/products#cruxie_wa",
      },
      {
        id: "vinado",
        label: "Vinado",
        href: EXTERNAL_LINKS.GOOGLE_PLAY_VINADO,
        isExternal: true,
      },
      {
        id: "cruxie",
        label: "Cruxie",
        href: EXTERNAL_LINKS.CRUXIE,
        isExternal: true,
      },
    ],
  },
  {
    id: "factory",
    titleKey: "footer.factory",
    titleFallback: "Factory",
    links: [
      {
        id: "factoryProject",
        labelKey: "footer.factoryProject",
        labelFallback: "Tu proyecto en una semana",
        href: EXTERNAL_LINKS.FACTORY,
        isExternal: true,
      },
      {
        id: "whatsapp",
        label: "WhatsApp",
        href: EXTERNAL_LINKS.WHATSAPP,
        isExternal: true,
      },
    ],
  },
];

export const FOOTER_LEGAL_LINKS = [
  {
    id: "privacy",
    labelKey: "footer.privacy",
    labelFallback: "Privacidad",
    to: ROUTES.PRIVACY,
  },
  {
    id: "terms",
    labelKey: "footer.terms",
    labelFallback: "Términos",
    to: ROUTES.TERMS,
  },
];
