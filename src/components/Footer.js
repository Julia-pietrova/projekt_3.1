import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p className="footer-text">Nazwa firmy - wszelkie prawa zastrzeżone, 2019</p>
      <span className="icon-box">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
        </span>
    </div>
  </footer>
);

export default Footer;