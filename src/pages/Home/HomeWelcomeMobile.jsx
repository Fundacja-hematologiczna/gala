import { useTranslation } from 'react-i18next';
import { Button } from '../../components/Button/Button';

export const HomeWelcomeMobile = () => {
  const { t } = useTranslation();

  return (
    <section className="home__sectionWelcomeMobile">
      <div className="home__sectionWelcomeMobile__buttons">
        <Button
          buttonLabel={t('MAIN_PAGE.MOBILE_BUTTON_1')}
          backgroundColor={'#B7C274'}
          navigateTo={'/rejestracja'}
        />
        <Button
          buttonLabel={t('MAIN_PAGE.MOBILE_BUTTON_2')}
          backgroundColor={'#FFFFFF'}
          navigateTo={'/rejestracja'}
          border={'1px solid #000000'}
        />
      </div>
      <div className="home__sectionWelcomeMobile__titleContainer">
        <h1 className="home__sectionWelcomeMobile__titleContainer-title">
          {t('MAIN_PAGE.HEADER_TITLE')}
        </h1>
        <p className="home__sectionWelcomeMobile__titleContainer-description">
          {t('MAIN_PAGE.HEADER_DATE')}
        </p>
      </div>
      <div className="home__sectionWelcomeMobile-video"></div>
    </section>
  );
};
