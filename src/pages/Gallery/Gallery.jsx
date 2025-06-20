import { useTranslation } from 'react-i18next';
import '../../styles/index.scss';
import './gallery.scss';
import { useState, useEffect, useRef } from 'react';
import { getImages } from '../../api/services';
import useScrollLock from '../../hooks/useScrollLock.hook';
import { GalleryZoomed } from './GalleryZoomed';

const Gallery = () => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState('2022');
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [visibleImages, setVisibleImages] = useState(15);
  const years = ['2022', '2023', '2024', '2025'];

  const dialogRef = useRef(null);
  const [chosenImage, setChosenImage] = useState('');
  const [isGalleryOpened, setIsGalleryOpened] = useState(false);

  const handleClickShowGallery = (img) => {
    dialogRef.current?.showModal();
    setIsGalleryOpened(true);
    const image = images[isActive][img];
    setChosenImage(image);
  };

  const handleClickCloseGallery = () => {
    dialogRef.current?.setAttribute('closing', '');
    dialogRef.current?.addEventListener(
      'animationend',
      () => {
        dialogRef.current?.removeAttribute('closing');
        dialogRef.current?.close();
        setIsGalleryOpened(false);
      },
      { once: true },
    );
  };

  const handleClickNextImg = () => {
    const imgIndex = images[isActive].indexOf(chosenImage) + 1;

    if (imgIndex > images[isActive].length - 1) {
      return setChosenImage(images[isActive][0]);
    }

    setChosenImage(images[isActive][imgIndex]);
  };

  const handleClickPrevImg = () => {
    const imgIndex = images[isActive].indexOf(chosenImage) - 1;

    if (imgIndex < 0) {
      return setChosenImage(images[isActive][images[isActive].length - 1]);
    }

    setChosenImage(images[isActive][imgIndex]);
  };

  useScrollLock(isGalleryOpened);

  useEffect(() => {
    getImages()
      .then((data) => {
        const gallery = data;
        setImages(gallery);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  dialogRef.current?.addEventListener('keyup', (e) => {
    switch (e.key) {
      case 'ArrowRight':
        handleClickNextImg();
        break;
      case 'ArrowLeft':
        handleClickPrevImg();
        break;
      case 'Escape':
        handleClickCloseGallery();
        break;
      default:
        break;
    }
  });

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

          <div className="Gallery__topContainer-description">
            <p>{t('GALLERY.HEADER_BODY_1')}</p>
            <p>{t('GALLERY.HEADER_BODY_2')}</p>
          </div>
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

          {!loading && images[isActive] === undefined && (
            <p className="Gallery__pictures-text">
              {t('GALLERY.NO_PHOTOS_YET', { year: isActive })}
            </p>
          )}

          {!loading && images[isActive] !== undefined && (
            <div className="Gallery__pictures__grid">
              {!loading &&
                images[isActive].slice(0, visibleImages).map((image, i) => (
                  <div className="Gallery__pictures__grid-item" key={image}>
                    <img
                      src={image}
                      onClick={() => handleClickShowGallery(i)}
                      alt={`image-${i}`}
                      className="Gallery__pictures__grid-item--img"
                      loading="lazy"
                    />
                  </div>
                ))}
            </div>
          )}

          <GalleryZoomed
            dialogRef={dialogRef}
            onClickClose={handleClickCloseGallery}
            chosenImage={chosenImage}
            onClickNextImage={handleClickNextImg}
            onClickPrevImage={handleClickPrevImg}
          />
        </div>
      </section>
    </main>
  );
};

export default Gallery;
