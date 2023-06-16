import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Landing from './views/Landing/Landing';
import About from './views/About/About';
import Footer from './components/Footer/Footer';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
<<<<<<< HEAD
      <EarthCanvas/>
      <Landing />
      <Waitlist/>
=======
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
>>>>>>> 149dfc9068ed4537c2a2c01ad3d3434695005975
      <Footer />
    </>
  );
}

export default App;
