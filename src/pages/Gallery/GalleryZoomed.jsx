import PropTypes from 'prop-types';
import './galleryZoomed.scss';

const propTypes = {
  chosenImage: PropTypes.string,
  onClickClose: PropTypes.func,
  onClickNextImage: PropTypes.func,
  onClickNextPrev: PropTypes.func,
  dialogRef: PropTypes.MutableRefObject,
};

export const GalleryZoomed = ({
  dialogRef,
  chosenImage,
  onClickClose,
  onClickNextImage,
  onClickNextPrev,
}) => {
  return (
    <dialog id="galleryZoom" ref={dialogRef}>
      <button id="closeButton" onClick={onClickClose}>
        <img src="/gala/menu-hamburger.svg" alt="Close button" />
      </button>
      <button
        className="galleryArrow galleryArrow--left"
        onClick={onClickNextImage}>
        {'<'}
      </button>
      <button
        className="galleryArrow galleryArrow--right"
        onClick={onClickNextPrev}>
        {'>'}
      </button>
      <img className="galleryPhoto" src={chosenImage} alt={chosenImage} />
    </dialog>
  );
};

GalleryZoomed.propTypes = propTypes;
