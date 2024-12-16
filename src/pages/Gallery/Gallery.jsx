import { useTranslation } from 'react-i18next';
import '../../styles/index.scss';
import './gallery.scss';
import { useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { GalleryZoomed } from './GalleryZoomed';
import useScrollLock from '../../hooks/useScrollLock.hook';
const images = import.meta.glob('/src/assets/gallery/*/*.{png,jpg,jpeg,svg}', {
  eager: true,
});

const Gallery = () => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState('2022');
  const dialogRef = useRef(null);
  const [chosenImage, setChosenImage] = useState('');
  const [isGalleryOpened, setIsGalleryOpened] = useState(false);

  useScrollLock(isGalleryOpened);

  const [currentPage, setCurrentPage] = useState(1); // Numer aktualnej strony
  const imagesPerPage = 180; // Maksymalna liczba zdjęć na jednej stronie

  const [itemOffset, setItemOffset] = useState(6);

  const endOffset = itemOffset + imagesPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * imagesPerPage) % images.length;
    setCurrentPage(event.selected + 1);
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };

  const imageList = Object.values(images).map((image) => image.default);
  // Obliczanie indeksów pierwszego i ostatniego zdjęcia na aktualnej stronie
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;

  // Wyciągnięcie zdjęć dla aktualnej strony
  const currentImages = imageList.slice(indexOfFirstImage, indexOfLastImage);

  console.log(currentImages);
  console.log(imageList);
  const handleClick = (date) => {
    setIsActive(date);
  };

  const left = () => {
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
  };

  const right = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
  };

  const handleClickShowGallery = (img) => {
    dialogRef.current?.showModal();
    setIsGalleryOpened(true);
    const image = imageList[img];
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

  const handleClickNextPhoto = () => {
    const imgIndex = imageList.indexOf(chosenImage) + 1;

    if (imgIndex > imageList.length - 1) {
      return setChosenImage(imageList[0]);
    }

    setChosenImage(imageList[imgIndex]);
  };

  const handleClickPrevImg = () => {
    const imgIndex = imageList.indexOf(chosenImage) - 1;

    if (imgIndex < 0) {
      return setChosenImage(imageList[imageList.length - 1]);
    }

    setChosenImage(imageList[imgIndex]);
  };

  return (
    <>
      <main className="Gallery">
        <div className="Gallery-container">
          <div className="Gallery__topContainer">
            <div className="Gallery__topContainer-content">
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

              <div>{images.length}</div>

              <div className="Gallery__pictures__grid">
                {currentImages.map((image, index) => (
                  <div
                    className="Gallery__pictures__grid-item"
                    key={image}
                    onClick={() => handleClickShowGallery(index)}>
                    <img
                      src={image}
                      alt={`image-${image.id}`}
                      className="itemek"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="Gallery__pictures__pagination">
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={18}
                previousLabel="<"
                renderOnZeroPageCount={null}
              />
            </div>
            <button onClick={left}>left</button>
            <button onClick={right}>right</button>
          </section>
        </div>

        <GalleryZoomed
          dialogRef={dialogRef}
          onClickClose={handleClickCloseGallery}
          chosenImage={chosenImage}
          onClickNextImage={handleClickNextPhoto}
          onClickNextPrev={handleClickPrevImg}
        />
      </main>
    </>
  );
};

export default Gallery;
