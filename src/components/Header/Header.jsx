import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './header.scss';
import { menuOptions } from './header.data';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import useWindowSize from '../../hooks/useWindowSize.hook';
import HeaderLanguage from './HeaderLanguage';
import { useTranslation } from 'react-i18next';
import useLocalStorage from '../../hooks/useLocaleStorage.hook';

const Header = () => {
  const { width } = useWindowSize();
  const [isActive, setIsActive] = useLocalStorage('navigation', 'home');
  const [isBurgerMenuActive, setIsBurgerMenuActive] = useState(false);
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const handleClick = (page) => {
    setIsActive(page);
  };

  const handleClickBurgerMenu = () => {
    setIsBurgerMenuActive((prev) => !prev);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [isActive]);

  useEffect(() => {
    if (width > 1200) {
      setIsBurgerMenuActive(false);
    }
  }, [width]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <header className="header">
        <nav className="nav">
          <a href="https://fundacja.hematologiczna.org/" target="blink">
            <div className="header-logo" />
          </a>

          <ul className="nav__links">
            {menuOptions.map((option) => (
              <li className="nav__item" key={option.name}>
                <NavLink
                  onClick={() => handleClick(option.name)}
                  className={({ isActive: act }) =>
                    `nav-link ${act ? 'nav-link--active' : ''}`
                  }
                  to={option.to}>
                  {t(option.title)}
                </NavLink>
              </li>
            ))}
            <HeaderLanguage className="nav-language" />
          </ul>
          <div
            className={`nav__burgerMenu ${isBurgerMenuActive ? 'nav__burgerMenu--active' : ''}`}
            onClick={handleClickBurgerMenu}></div>

          <BurgerMenu
            onClickOption={handleClick}
            isActive={isActive}
            isBurgerMenuActive={isBurgerMenuActive}
            setIsBurgerMenuActive={setIsBurgerMenuActive}
          />
        </nav>
      </header>
    </>
  );
};

export default Header;
