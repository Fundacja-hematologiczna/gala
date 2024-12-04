import { useTranslation } from 'react-i18next';
import '../../styles/index.scss';
import './gallery.scss';
import { useState, useEffect } from 'react';
import { getImages } from '../../api/services';

const Gallery = () => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState('2022');
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getImages()
      .then((data) => {
        const gallery = data;

        setImages(gallery);
        setLoading(false);
      })
      .catch((e) => {
        console.log('error:', e);
      });
  }, []);

  const handleClick = (year) => {
    setIsActive(year);
  };

  return (
    <>
      <main className="Gallery">
        <div className="Gallery-container">
          <div className="Gallery__topContainer">
            <div className="Gallery__topContainer-greenLayer"></div>

            <h1 className="Gallery__topContainer-title">
              {t('GALLERY.HEADER_TITLE')}
            </h1>
            <p className="Gallery__topContainer-description">
              {t('GALLERY.HEADER_BODY_1')}
              <p>{t('GALLERY.HEADER_BODY_2')}</p>
            </p>
            <div className="Gallery__topContainer-content"></div>
          </div>
        </div>

        <section className="Gallery__pictures">
          <div className="container">
            <div className="Gallery__pictures__buttons">
              <button
                onClick={() => handleClick('2022')}
                className={`Gallery__pictures__buttons-button ${isActive === '2022' ? 'Gallery__pictures__buttons-button--active' : ''}`}>
                2022
              </button>
              <button
                onClick={() => handleClick('2023')}
                className={`Gallery__pictures__buttons-button ${isActive === '2023' ? 'Gallery__pictures__buttons-button--active' : ''}`}>
                2023
              </button>
              <button
                onClick={() => handleClick('2024')}
                className={`Gallery__pictures__buttons-button ${isActive === '2024' ? 'Gallery__pictures__buttons-button--active' : ''}`}>
                2024
              </button>
            </div>

            <div className="Gallery__pictures__grid">
              {!loading &&
                images[isActive].map((image, i) => (
                  <div className="Gallery__pictures__grid-item " key={image}>
                    <img
                      src={image}
                      alt={`image-${i}`}
                      className="Gallery__pictures__grid-item--img"
                    />
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Gallery;
