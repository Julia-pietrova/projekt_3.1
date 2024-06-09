import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p className="footer-text">Nazwa firmy - wszelkie prawa zastrzeżone, 2019</p>
      <span className="icon-box">
        <a href="#"><i className="fa-brands fa-instagram"></i></a>
        <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
      </span>
    </div>
  </footer>
);

export default Footer;