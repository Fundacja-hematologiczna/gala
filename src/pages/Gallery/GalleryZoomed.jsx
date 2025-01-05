import PropTypes from 'prop-types';
import './galleryZoomed.scss';
import { useSwipeable } from 'react-swipeable';

const propTypes = {
  chosenImage: PropTypes.string,
  onClickClose: PropTypes.func,
  onClickNextImage: PropTypes.func,
  onClickPrevImage: PropTypes.func,
  dialogRef: PropTypes.MutableRefObject,
};

export const GalleryZoomed = ({
  dialogRef,
  chosenImage,
  onClickClose,
  onClickNextImage,
  onClickPrevImage,
}) => {
  const handlers = useSwipeable({
    onSwipedLeft: onClickNextImage,
    onSwipedRight: onClickPrevImage,
    preventScrollOnSwipe: true,
    trackMouse: false,
  });

  return (
    <dialog id="galleryZoom" ref={dialogRef} {...handlers}>
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
        onClick={onClickPrevImage}>
        {'>'}
      </button>
      <img className="galleryPhoto" src={chosenImage} alt={chosenImage} />
    </dialog>
  );
};

GalleryZoomed.propTypes = propTypes;
