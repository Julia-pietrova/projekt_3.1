import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <nav className="nav">
      <div className="container">
        <a className="header-text roboto-bold">moja firma</a>
        <a className="mobil-header roboto-bold">nazwa firmy</a>
        <div className="header-right">
          <a href="#specialisty" className="header-text marg">o nas</a>
          <a href="#services" className="header-text marg">oferta</a>
          <span className="header-text marg display contacts">kontakt</span>
        </div>
      </div>
    </nav>
    <div className="header">
      <div className="header-shadow">
        <div className="header-container">
          <div className="contenr-info-text">
            <div className="info-text">
              <h1 className="roboto-bold text-header">
                Nasza firma oferuje najwyższej jakości produkty.
              </h1>
              <p className="header-text-content">
                Nie wierz nam na słowo - sprawdź
              </p>
              <a href="#services" className="click-oferta roboto-bold">
                oferta
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;