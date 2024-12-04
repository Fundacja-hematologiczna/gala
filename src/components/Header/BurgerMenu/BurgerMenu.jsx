/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import { menuOptions } from '../header.data';
import './burgerMenu.scss';
import { useRef } from 'react';
import HeaderLanguage from '../HeaderLanguage';

const BurgerMenu = ({ onClickOption, isActive, onClickButton }) => {
  const burgerMenu = useRef();

  const handleClickCloseMenu = () => {
    burgerMenu.current.classList.add('burgerMenu--close');
    burgerMenu.current.addEventListener(
      'animationend',
      () => {
        onClickButton();
      },
      { once: true },
    );
  };

  return (
    <section ref={burgerMenu} className="burgerMenu">
      <div className="burgerMenu__button" onClick={handleClickCloseMenu}></div>
      <ul className="burgerMenu__nav">
        {menuOptions.map((option) => (
          <li className="burgerMenu__item" key={option.name}>
            <NavLink
              onClick={() => onClickOption(option.name)}
              className={`burgerMenu__link ${isActive === option.name ? 'burgerMenu__link--active' : ''}`}
              to={option.to}>
              {option.title}
            </NavLink>
          </li>
        ))}
        <HeaderLanguage className="burgerMenu__link" />
      </ul>
    </section>
  );
};

export default BurgerMenu;
