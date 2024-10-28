import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  const [isActive, setIsActive] = useState('home');

  const handleClick = (page) => {
    setIsActive(page);
  };

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="header-logo" />
          <ul className="nav__links">
            <li className="nav__item">
              <NavLink
                onClick={() => handleClick('home')}
                className={`nav-link ${isActive === 'home' ? 'nav-link--active' : ''}`}
                to={'/'}>
                strona główna
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                onClick={() => handleClick('rejestracja')}
                className={`nav-link ${isActive === 'rejestracja' ? 'nav-link--active' : ''}`}
                to={'/rejestracja'}>
                rejestracja
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                onClick={() => handleClick('miejsce')}
                className={`nav-link ${isActive === 'miejsce' ? 'nav-link--active' : ''}`}
                to={'/Place'}>
                miejsce
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                onClick={() => handleClick('program')}
                className={`nav-link ${isActive === 'program' ? 'nav-link--active' : ''}`}
                to={'/Program'}>
                program
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                onClick={() => handleClick('aukcja')}
                className={`nav-link ${isActive === 'aukcja' ? 'nav-link--active' : ''}`}
                to={'/Auction'}>
                aukcja
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                onClick={() => handleClick('dlaDarczyncow')}
                className={`nav-link ${isActive === 'dlaDarczyncow' ? 'nav-link--active' : ''}`}
                to={'/contributors'}>
                dla darczyńców
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                onClick={() => handleClick('galeria')}
                className={`nav-link ${isActive === 'galeria' ? 'nav-link--active' : ''}`}
                to={'/gallery'}>
                galeria
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                onClick={() => handleClick('kontakt')}
                className={`nav-link ${isActive === 'kontakt' ? 'nav-link--active' : ''}`}
                to={'/contact'}>
                kontakt
              </NavLink>
            </li>
          </ul>
          <div className="burger-menu"></div>
        </nav>
      </header>
    </>
  );
};

export default Header;
