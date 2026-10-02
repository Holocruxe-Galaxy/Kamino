import { useEffect, useLayoutEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './views/Landing/Landing';
import About from './views/About/About';
import Footer from './components/Footer/Footer';
import Products from './views/Products/Products';
import Faqs from './views/Faqs/Faqs';
import { Route, Routes, useLocation } from 'react-router-dom';
import Blog from './views/Blog/Blog';
import Projects from './views/Projects/Projects';
import TermsOfUse from './views/TermsOfUse/TermsOfUse';
import PrivacyView from './views/Legal/PrivacyView';
import VinadoDeleteAccount from './views/VinadoDeleteAccount/VinadoDeleteAccount';
import { forceScrollTop } from './utils/scroll';

import { ROUTES } from "./constants/routes";

function App() {
  const location = useLocation();
  const hasVisited = sessionStorage.getItem('visited');

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    forceScrollTop();
    const rafId = requestAnimationFrame(forceScrollTop);
    const timer = setTimeout(forceScrollTop, 50);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, [location.pathname, location.search]);

  return (
    <div
      className={`${
        !hasVisited && location.pathname === "/" ? "appContainer" : null
      }`}
    >
      <Navbar/>
      <Routes>
        <Route path={ROUTES.HOME} element={<Landing />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.PRODUCTS} element={<Products />} />
        <Route path={ROUTES.FAQS} element={<Faqs />} />
        <Route path={ROUTES.PROJECTS_LEGACY} element={<Projects />} />
        <Route path={ROUTES.PROJECTS} element={<Projects />} />
        <Route path={ROUTES.FACTORY} element={<Blog />} />
        <Route path={ROUTES.PRIVACY} element={<PrivacyView />} />
        <Route path={ROUTES.TERMS} element={<TermsOfUse />} />
        <Route path={ROUTES.TERMS_LEGACY} element={<TermsOfUse />} />
        <Route path={ROUTES.PRIVACY_LEGACY} element={<PrivacyView />} />
        <Route path={ROUTES.VINADO_DELETE_ACCOUNT} element={<VinadoDeleteAccount />} />      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
