import Navbar from './components/Navbar/Navbar';
import Landing from './views/Landing/Landing';
import About from './views/About/About';
import Footer from './components/Footer/Footer';

import { Route, Routes, useLocation } from 'react-router-dom';
import Faqs from './views/Faqs/Faqs';
// import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import WaitlistView from './views/Waitlist/WaitlistView';

function App() {
  const location = useLocation();
  const hasVisited = sessionStorage.getItem('visited');

  return (
    <div
      className={`${
        !hasVisited && location.pathname === '/' ? 'appContainer' : null
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
      {/* <ScrollToTop /> */}
    </div>
  );
}

export default App;
