// dependencias
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
// imagenes
import menu from "../../img/menu";
//estilos
import styles from "./navBarMobile.module.css";
//Traduccion
import { Trans } from "react-i18next";

export default function Mobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.mobilContainer}>
      <div className={styles.mobileHeader}>
        <img src={menu.logo} alt="logo" />
        <nav className={styles.mobile} onClick={toggleMenu}>
          {menuOpen ? (
            <>
              <img className={styles.hamburger} src={menu.hamb} alt="" />
              <Mobile />
            </>
          ) : (
            <img className={styles.hamburger} src={menu.x} alt="" />
          )}
        </nav>
      </div>
      <nav className={styles.navMobile}>
        <NavLink to="/" className={styles.linkM}>
          <Trans i18nKey={"navbar.home"}>Home </Trans>
        </NavLink>
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#1E88E5" />
        </svg>

        <NavLink to="/about" className={styles.linkM}>
          <Trans i18nKey={"navbar.about"}>About US </Trans>
        </NavLink>
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#1E88E5" />
        </svg>

        <NavLink to="waitlist" className={styles.linkM}>
          <Trans i18nKey={"navbar.waitlist"}>Waitlist </Trans>
        </NavLink>
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#1E88E5" />
        </svg>
        <NavLink to="https://login.holocruxe.com" className={styles.linkM}>
          <Trans i18nKey={"navbar.login"}>Log In </Trans>
        </NavLink>
      </nav>
      <div className={styles.ligths}>
        <svg
          //width="100%"
          viewBox="0 0 237 32"
          //fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.3333 6C38.3333 7.47276 39.5272 8.66667 41 8.66667C42.4728 8.66667 43.6667 7.47276 43.6667 6C43.6667 4.52724 42.4728 3.33333 41 3.33333C39.5272 3.33333 38.3333 4.52724 38.3333 6ZM49.5 27V25.1007H48.5V27H49.5ZM49.5 25.1007C49.5 17.7851 46.5642 10.7756 41.3508 5.64367L40.6492 6.35633C45.6717 11.3003 48.5 18.0531 48.5 25.1007H49.5Z"
            fill="url(#paint0_linear_1118_671)"
          />
          <path
            d="M98.6667 7C98.6667 8.47276 97.4728 9.66667 96 9.66667C94.5272 9.66667 93.3333 8.47276 93.3333 7C93.3333 5.52724 94.5272 4.33333 96 4.33333C97.4728 4.33333 98.6667 5.52724 98.6667 7ZM94.3416 7.46025L95.7321 6.57784L96.2679 7.42216L94.8774 8.30458L94.3416 7.46025ZM82.5 29C82.5 20.2665 86.9676 12.1399 94.3416 7.46025L94.8774 8.30458C87.7925 12.8008 83.5 20.6088 83.5 29H82.5Z"
            fill="url(#paint1_linear_1118_671)"
          />
          <path
            d="M116.333 7C116.333 8.47276 117.527 9.66667 119 9.66667C120.473 9.66667 121.667 8.47276 121.667 7C121.667 5.52724 120.473 4.33333 119 4.33333C117.527 4.33333 116.333 5.52724 116.333 7ZM126.5 29V26.8813H125.5V29H126.5ZM126.5 26.8813C126.5 19.5363 123.991 12.4115 119.39 6.68674L118.61 7.31326C123.069 12.8604 125.5 19.7642 125.5 26.8813H126.5Z"
            fill="url(#paint2_linear_1118_671)"
          />
          <path
            d="M72.6667 17C72.6667 18.4728 71.4728 19.6667 70 19.6667C68.5272 19.6667 67.3333 18.4728 67.3333 17C67.3333 15.5272 68.5272 14.3333 70 14.3333C71.4728 14.3333 72.6667 15.5272 72.6667 17ZM63.5 29C63.5 24.1213 65.797 19.5272 69.7 16.6L70.3 17.4C66.6488 20.1384 64.5 24.436 64.5 29H63.5Z"
            fill="url(#paint3_linear_1118_671)"
          />
          <path
            d="M203.333 9C203.333 10.4728 204.527 11.6667 206 11.6667C207.473 11.6667 208.667 10.4728 208.667 9C208.667 7.52724 207.473 6.33333 206 6.33333C204.527 6.33333 203.333 7.52724 203.333 9ZM213.5 29V26.7591H212.5V29H213.5ZM213.5 26.7591C213.5 20.0399 210.95 13.571 206.366 8.65884L205.634 9.34116C210.046 14.0681 212.5 20.2932 212.5 26.7591H213.5Z"
            fill="url(#paint4_linear_1118_671)"
          />
          <path
            d="M22.3333 14C22.3333 15.4728 23.5272 16.6667 25 16.6667C26.4728 16.6667 27.6667 15.4728 27.6667 14C27.6667 12.5272 26.4728 11.3333 25 11.3333C23.5272 11.3333 22.3333 12.5272 22.3333 14ZM41.1371 16.7676L25.0995 13.51L24.9005 14.49L40.9381 17.7476L41.1371 16.7676ZM49.5 27C49.5 22.0346 46.0032 17.7561 41.1371 16.7676L40.9381 17.7476C45.3381 18.6414 48.5 22.5102 48.5 27H49.5Z"
            fill="url(#paint5_linear_1118_671)"
          />
          <path
            d="M156.667 3C156.667 4.47276 155.473 5.66667 154 5.66667C152.527 5.66667 151.333 4.47276 151.333 3C151.333 1.52724 152.527 0.333333 154 0.333333C155.473 0.333333 156.667 1.52724 156.667 3ZM148.5 29V23.7073H149.5V29H148.5ZM148.5 23.7073C148.5 16.4266 150.233 9.25037 153.555 2.77184L154.445 3.22816C151.195 9.56548 149.5 16.5853 149.5 23.7073H148.5Z"
            fill="url(#paint6_linear_1118_671)"
          />
          <path
            d="M165.667 13C165.667 14.4728 164.473 15.6667 163 15.6667C161.527 15.6667 160.333 14.4728 160.333 13C160.333 11.5272 161.527 10.3333 163 10.3333C164.473 10.3333 165.667 11.5272 165.667 13ZM157.994 14.6012L162.803 12.5404L163.197 13.4596L158.388 15.5204L157.994 14.6012ZM148.5 29C148.5 22.7334 152.235 17.0698 157.994 14.6012L158.388 15.5204C152.996 17.8313 149.5 23.1334 149.5 29H148.5Z"
            fill="url(#paint7_linear_1118_671)"
          />
          <path
            d="M188.661 4C188.661 5.47276 189.855 6.66667 191.328 6.66667C192.801 6.66667 193.995 5.47276 193.995 4C193.995 2.52724 192.801 1.33333 191.328 1.33333C189.855 1.33333 188.661 2.52724 188.661 4ZM181.22 30.4491C191.07 25.626 195.67 14.0865 191.796 3.82343L190.86 4.17657C194.551 13.9551 190.169 24.9538 180.78 29.5509L181.22 30.4491Z"
            fill="url(#paint8_linear_1118_671)"
          />
          <path
            d="M13.3333 6C13.3333 7.47276 14.5272 8.66667 16 8.66667C17.4728 8.66667 18.6667 7.47276 18.6667 6C18.6667 4.52724 17.4728 3.33333 16 3.33333C14.5272 3.33333 13.3333 4.52724 13.3333 6ZM6.88316 31.6617L6.28119 31.0065L5.54481 31.6831L6.14678 32.3383L6.88316 31.6617ZM7.6702 13.2583L16.3111 6.39145L15.6889 5.60855L7.04804 12.4754L7.6702 13.2583ZM4.36804 17.3228C5.16052 15.7442 6.28737 14.3572 7.6702 13.2583L7.04804 12.4754C5.5515 13.6647 4.33199 15.1657 3.47434 16.8741L4.36804 17.3228ZM6.28119 31.0065C2.86257 27.2857 2.10099 21.8385 4.36804 17.3228L3.47434 16.8741C1.02087 21.7612 1.84507 27.6563 5.54481 31.6831L6.28119 31.0065Z"
            fill="url(#paint9_linear_1118_671)"
          />
          <path
            d="M218.333 7C218.333 8.47276 219.527 9.66667 221 9.66667C222.473 9.66667 223.667 8.47276 223.667 7C223.667 5.52724 222.473 4.33333 221 4.33333C219.527 4.33333 218.333 5.52724 218.333 7ZM233.683 16.2707L233.233 16.4874L233.683 16.2707ZM225.532 30.4319L230.641 27.453L230.138 26.5891L225.028 29.5681L225.532 30.4319ZM230.776 12.3523L221.26 6.57264L220.74 7.42736L230.257 13.207L230.776 12.3523ZM234.134 16.054C233.397 14.5211 232.23 13.2352 230.776 12.3523L230.257 13.207C231.546 13.9894 232.579 15.129 233.233 16.4874L234.134 16.054ZM230.641 27.453C234.599 25.1451 236.12 20.1831 234.134 16.054L233.233 16.4874C234.993 20.1466 233.645 24.5439 230.138 26.5891L230.641 27.453Z"
            fill="url(#paint10_linear_1118_671)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1118_671"
              x1="50.7734"
              y1="-6.78456"
              x2="39.8018"
              y2="-6.71017"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1E88E5" />
              <stop offset="1" stop-color="#D9D9D9" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1118_671"
              x1="80.1181"
              y1="-6.39335"
              x2="97.9459"
              y2="-6.20586"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1E88E5" />
              <stop offset="1" stop-color="#D9D9D9" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1118_671"
              x1="127.844"
              y1="-5.21348"
              x2="116.435"
              y2="-5.13406"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D9D9D9" />
              <stop offset="1" stop-color="#1E88E5" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_1118_671"
              x1="62.6699"
              y1="9.69454"
              x2="70.8984"
              y2="9.76776"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1E88E5" />
              <stop offset="1" stop-color="#D9D9D9" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_1118_671"
              x1="214.552"
              y1="-3.17577"
              x2="204.952"
              y2="-3.11597"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1E88E5" />
              <stop offset="1" stop-color="#D9D9D9" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_1118_671"
              x1="54.3203"
              y1="6.08575"
              x2="21.4395"
              y2="7.16614"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1E88E5" />
              <stop offset="1" stop-color="#D9D9D9" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_1118_671"
              x1="147.892"
              y1="-12.8285"
              x2="154.749"
              y2="-12.805"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1E88E5" />
              <stop offset="1" stop-color="#D9D9D9" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_1118_671"
              x1="145.896"
              y1="3.25938"
              x2="165.093"
              y2="3.55833"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1E88E5" />
              <stop offset="1" stop-color="#D9D9D9" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_1118_671"
              x1="201.769"
              y1="-11.8285"
              x2="178.456"
              y2="-11.5572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1E88E5" />
              <stop offset="1" stop-color="#D9D9D9" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_1118_671"
              x1="19.5469"
              y1="-9.8285"
              x2="-2.39473"
              y2="-9.58819"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.453125" stop-color="#1E88E5" />
              <stop offset="1" stop-color="#D9D9D9" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_1118_671"
              x1="240.547"
              y1="-7.00214"
              x2="218.606"
              y2="-6.73048"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1E88E5" />
              <stop offset="0.916667" stop-color="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
