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
  const [visibleImages, setVisibleImages] = useState(15);
  const years = ['2022', '2023', '2024'];

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

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 800;

      if (bottom && !loading && images[isActive]?.length > visibleImages) {
        setVisibleImages((prev) => prev + 6);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, images, isActive, visibleImages]);

  const handleClick = (year) => {
    setIsActive(year);
    setVisibleImages(10);
  };

  return (
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
        </div>
      </div>

      <section className="Gallery__pictures">
        <div className="container">
          <div className="Gallery__pictures__buttons">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => handleClick(year)}
                className={`Gallery__pictures__buttons-button ${
                  isActive === year
                    ? 'Gallery__pictures__buttons-button--active'
                    : ''
                }`}>
                {year}
              </button>
            ))}
          </div>

          <div className="Gallery__pictures__grid">
            {!loading &&
              images[isActive]
                .slice(0, visibleImages) // Wyświetlaj tylko widoczne obrazy
                .map((image, i) => (
                  <div className="Gallery__pictures__grid-item" key={image}>
                    <img
                      src={image}
                      alt={`image-${i}`}
                      className="Gallery__pictures__grid-item--img"
                      loading="lazy" // Lazy loading
                    />
                  </div>
                ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
