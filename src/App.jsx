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

function App() {
  const location = useLocation();
  const hasVisited = sessionStorage.getItem('visited');

  return (
    <div
      className={`${
        !hasVisited && location.pathname === "/" ? "appContainer" : null
      }`}
    >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/proyects" element={<Projects />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/factory" element={<Blog />} />
        <Route path="/privacy" element={<PrivacyView />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/holocruxe/TermsOfUse" element={<TermsOfUse />} />
        <Route path="/holocruxe/PrivacyView" element={<PrivacyView />} />
        <Route path="/vinado/delete-account" element={<VinadoDeleteAccount />} />      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
