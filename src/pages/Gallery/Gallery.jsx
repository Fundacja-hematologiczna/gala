import { useTranslation } from 'react-i18next';
import '../../styles/index.scss';
import './gallery.scss';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
const images = import.meta.glob('/src/assets/gallery/*/*.{png,jpg,jpeg,svg}', {
  eager: true,
});
//const images = import.meta.glob('/public/partners&contibutors/partnerzy/*.{png,jpg,jpeg,svg}', { eager: true });

const Gallery = () => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState('2022');

  const [currentPage, setCurrentPage] = useState(1); // Numer aktualnej strony
  const imagesPerPage = 180; // Maksymalna liczba zdjęć na jednej stronie

  const [itemOffset, setItemOffset] = useState(6);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + imagesPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  // const currentItems = images.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(images.length / imagesPerPage);

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

  // Obliczanie całkowitej liczby stron
  const totalPages = Math.ceil(images.length / imagesPerPage);

  // Funkcja zmieniająca stronę
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // const images = import.meta.glob('/src/assets/gallery/*.{png,jpg,jpeg,svg}', {
  //   eager: true,
  // });

  console.log(currentImages);
  console.log(imageList);
  const handleClick = (date) => {
    setIsActive(date);
  };

  const doUsuniecia = () => {
    console.log(images.length);
  };

  const left = () => {
    const newPage = currentPage - 1;
    setCurrentPage(newPage);
  };

  const right = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
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
                {currentImages.map((image) => (
                  <div className="Gallery__pictures__grid-item " key={image}>
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
      </main>
    </>
  );
};

export default Gallery;
