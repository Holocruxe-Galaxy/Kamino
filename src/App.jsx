import Navbar from './components/Navbar/Navbar';
import NavbarHome from './components/Navbar/NavbarHome';
import Landing from './views/Landing/Landing';
import About from './views/About/About';
import Footer from './components/Footer/Footer';
import Faqs from './views/Faqs/Faqs';
import ChatBotIcon from './components/Chat-Icon/Chat-Icon';
import Chat from './components/ChatComponent/ChatComponent';
import { Route, Routes, useLocation } from 'react-router-dom';
import Blog from './views/Blog/Blog';
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
      <ChatBotIcon />
      <Chat />
      {location.pathname === '/' ? <NavbarHome /> : <Navbar/>}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/holocruxe/TermsOfUse" element={<TermsOfUse />} />
        <Route path="/holocruxe/PrivacyView" element={<PrivacyView />} /> 
        <Route path="/vinado/delete-account" element={<VinadoDeleteAccount />} />      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
