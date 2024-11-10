/* eslint-disable react/prop-types */

import useLocalStorage from '../../hooks/useLocaleStorage.hook';
import i18n from '../../languages';
import { languages } from './header.data';

const HeaderLanguage = ({ className }) => {
  const [currentLanguage, setCurrentLanguage] = useLocalStorage(
    'language',
    'PL',
  );

  const handleClickChangeLanguage = () => {
    const newLanguage = languages.find((el) => el !== currentLanguage);
    i18n.changeLanguage(newLanguage);

    setCurrentLanguage(newLanguage);
  };

  return (
    <div className={className} onClick={handleClickChangeLanguage}>
      <span className={`${currentLanguage === 'PL' ? 'bold' : ''}`}>PL</span> |{' '}
      <span className={`${currentLanguage === 'ENG' ? 'bold' : ''}`}>ENG</span>
    </div>
  );
};

export default HeaderLanguage;
