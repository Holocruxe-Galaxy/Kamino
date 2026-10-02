import { ROUTES } from "../../../constants/routes";
import { EXTERNAL_LINKS } from "../../../constants/externalLinks";

export const NAV_ITEMS = [
  {
    id: "home",
    labelKey: "navbar.home",
    defaultLabel: "Inicio",
    to: ROUTES.HOME,
    end: true,
  },
  {
    id: "products",
    labelKey: "navbar.products",
    defaultLabel: "Productos",
    to: ROUTES.PRODUCTS,
  },
  {
    id: "projects",
    labelKey: "navbar.projects",
    defaultLabel: "Proyectos",
    to: ROUTES.PROJECTS,
  },
  {
    id: "about",
    labelKey: "navbar.about",
    defaultLabel: "Nosotros",
    to: ROUTES.ABOUT,
  },
  {
    id: "factory",
    labelKey: "navbar.factory",
    defaultLabel: "Factory",
    href: EXTERNAL_LINKS.FACTORY,
    isExternal: true,
  },
];

export default NAV_ITEMS;
