import React from 'react';
import Landing from './views/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Waitlist from './components/Waitlist/waitlist';
import EarthCanvas from './components/models/Earth';

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Waitlist/>
      <EarthCanvas/>
      <Footer />
    </>
  );
}

export default App;
