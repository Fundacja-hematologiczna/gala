import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getLogos } from '../../api/services';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { SliderSwiper } from './SliderSwiper';
import { SliderStatic } from './SliderStatic';
import { getSliderPerView } from './sliderConfig';
import './slider.scss';

export const Slider = () => {
  const { t } = useTranslation();

  const windowWidth = useWindowWidth();
  const [logos, setLogos] = useState({
    honor: [],
    media: [],
    patron: [],
    sponsor: [],
  });

  useEffect(() => {
    getLogos()
      .then((response) => {
        if (response.data.data && Array.isArray(response.data.data)) {
          const honor = response.data.data.filter(
            (logo) => logo.on_gala === true && logo.gala_category === 'honor',
          );

          const media = response.data.data.filter(
            (logo) => logo.on_gala === true && logo.gala_category === 'media',
          );

          const patron = response.data.data.filter(
            (logo) => logo.on_gala === true && logo.gala_category === 'patron',
          );

          const sponsor = response.data.data.filter(
            (logo) => logo.on_gala === true && logo.gala_category === 'sponsor',
          );

          setLogos({ honor, media, patron, sponsor });
        }
      })
      .catch(() => {
        console.error('Błąd podczas pobierania danych:');
      });
  }, []);

  const patrons = [
    {
      id: 'honor',
      title: t('MAIN_PAGE.HONORARY_PATRONS'),
      slides: logos.honor,
    },
    {
      id: 'media',
      title: t('MAIN_PAGE.MEDIA_PATRONS'),
      slides: logos.media,
    },
    {
      id: 'patron',
      title: t('MAIN_PAGE.PATRONS'),
      slides: logos.patron,
    },
    {
      id: 'sponsor',
      title: t('MAIN_PAGE.PARTNERS'),
      slides: logos.sponsor,
    },
  ];

  const shouldUseStaticLayout = (slidesCount) => {
    const expectedSlides = getSliderPerView(windowWidth);
    return slidesCount <= expectedSlides;
  };

  return (
    <>
      {patrons
        .filter((patron) => patron.slides.length > 0)
        .map((patron) => {
          const staticLayout = shouldUseStaticLayout(patron.slides.length);
          return (
            <div key={patron.id} className="Patrons">
              <h3 className="Patrons__title">{patron.title}</h3>
              <div className="Patrons__box">
                {staticLayout ? (
                  <SliderStatic slides={patron.slides} />
                ) : (
                  <SliderSwiper slides={patron.slides} />
                )}
              </div>
            </div>
          );
        })}
    </>
  );
};
