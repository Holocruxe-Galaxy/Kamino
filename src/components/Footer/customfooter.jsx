import React from 'react';
import './customFooter.css';

const CustomFooter = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-right">
        <a href="#"><img src="../public/instagram.png" alt="Instagram" /></a>
        <a href="#"><img src="../public/facebook.png" alt="Facebook" /></a>
        <a href="#"><img src="../public/twitter.png" alt="Twitter" /></a>
        <a href="#"><img src="../public/linkedin.png" alt="LinkedIn" /></a>
      </div>

      <div className="footer-left">
        <p className="footer-links">
          <a className="link-1" href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">FAQ</a>
          <a href="#">Join the team</a>
        </p>

        <p>Holocruxe &copy; 2023</p>
      </div>
    </footer>
  );
};

export default CustomFooter;
