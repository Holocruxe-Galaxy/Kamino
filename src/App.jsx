import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./views/Landing/Landing";
import About from "./views/About/About";
import Footer from "./components/Footer/Footer";

import { Route, Routes } from "react-router-dom";
import Faqs from "./views/Faqs/Faqs";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
