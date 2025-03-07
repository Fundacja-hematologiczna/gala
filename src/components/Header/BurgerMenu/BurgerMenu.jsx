/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { menuOptions } from '../header.data';
import './burgerMenu.scss';
import { useRef } from 'react';
import HeaderLanguage from '../HeaderLanguage';
import { useTranslation } from 'react-i18next';

const BurgerMenu = ({
  onClickOption,
  isActive,
  isBurgerMenuActive,
  setIsBurgerMenuActive,
}) => {
  const burgerMenu = useRef();
  const { t } = useTranslation();

  const handleClickCloseMenu = () => {
    burgerMenu.current.classList.add('burgerMenu--close');
    setIsBurgerMenuActive(false);
  };

  return (
    <section
      ref={burgerMenu}
      className={`burgerMenu ${isBurgerMenuActive ? '' : 'burgerMenu--close'}`}>
      <div className="burgerMenu__button" onClick={handleClickCloseMenu}></div>
      <ul className="burgerMenu__nav">
        {menuOptions.map((option) => (
          <li className="burgerMenu__item" key={option.name}>
            <NavLink
              onClick={() => {
                onClickOption(option.name);
                handleClickCloseMenu();
              }}
              className={`burgerMenu__link ${isActive === option.name ? 'burgerMenu__link--active' : ''}`}
              to={option.to}>
              {t(option.title)}
            </NavLink>
          </li>
        ))}
        <HeaderLanguage className="burgerMenu__link" />
      </ul>
    </section>
  );
};

export default BurgerMenu;
