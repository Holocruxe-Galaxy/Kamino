// Components
import Navbar from './components/Navbar/Navbar';
import Landing from './views/Landing/Landing';
import About from './views/About/About';
import Footer from './components/Footer/Footer';
import WaitlistView from './views/Waitlist/WaitlistView';
import Faqs from './views/Faqs/Faqs';
// dependencies
import { Route, Routes, useLocation } from 'react-router-dom';




function App() {
  const location = useLocation();
  const hasVisited = sessionStorage.getItem('visited');

  return (
    <div
      className={`${
        !hasVisited && location.pathname === "/" ? "appContainer" : null
      }`}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/waitlist" element={<WaitlistView />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
