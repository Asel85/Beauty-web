import React from 'react';
import logo from '../../assets/img/logo.png';
import style from './Header.module.scss';

function Header() {
  return (
    <nav className={`${style.navbar} navbar navbar-expand-lg navbar-darck`}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img src={logo} alt="Logo" width="100" height="100" className="me-2" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Главная
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Обо мне
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Услуги
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
