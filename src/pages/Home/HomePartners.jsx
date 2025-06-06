import { Button } from '../../components/Button/Button';
import { Slider } from '../../components/Slider/Slider';
import { useTranslation } from 'react-i18next';
import { usePartnerCategories } from '../../hooks/usePartnerCategories';

const HomePartners = () => {
  const { t } = useTranslation();
  const { honor, media, patron, sponsor } = usePartnerCategories();

  const patrons = [
    {
      id: 'honor',
      title: t('MAIN_PAGE.HONORARY_PATRONS'),
      slides: honor,
    },
    {
      id: 'media',
      title: t('MAIN_PAGE.MEDIA_PATRONS'),
      slides: media,
    },
    {
      id: 'patron',
      title: t('MAIN_PAGE.PATRONS'),
      slides: patron,
    },
    {
      id: 'sponsor',
      title: t('MAIN_PAGE.PARTNERS'),
      slides: sponsor,
    },
  ];

  return (
    <section className="Home__partners">
      <div className="Home__partners-Backgroundimg">
        <div className="Home__partners-container">
          <p className="Home__partners-description">
            {t('MAIN_PAGE.WAITING_TITLE_1')}
            <br /> {t('MAIN_PAGE.WAITING_TITLE_2')}
          </p>
          <div className="Home__partners-buttonWrapper">
            <Button
              buttonLabel={t('MAIN_PAGE.WAITING_BUTTON')}
              backgroundColor={'#B7C274'}
              navigateTo={'/rejestracja'}
              arrow={true}
            />
          </div>
        </div>
      </div>
      <h2 className="Home__partners-title">{t('MAIN_PAGE.DONORS_PARTNERS')}</h2>
      <div className="Home__partners-slider">
        <Slider patrons={patrons} />
      </div>
    </section>
  );
};

export default HomePartners;
