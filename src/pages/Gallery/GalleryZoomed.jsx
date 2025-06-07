import PropTypes from 'prop-types';
import './galleryZoomed.scss';
import { useSwipeable } from 'react-swipeable';

const propTypes = {
  chosenImage: PropTypes.string,
  onClickClose: PropTypes.func,
  onClickNextImage: PropTypes.func,
  onClickPrevImage: PropTypes.func,
  dialogRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
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
    <dialog {...handlers} id="galleryZoom" ref={dialogRef}>
      <div className="galleryZoom__imageWrapper">
        <img className="galleryPhoto" src={chosenImage} alt={chosenImage} />
        <button id="closeButton" onClick={onClickClose}>
          <img src="menu-hamburger.svg" alt="Close button" />
        </button>
      </div>
      <div className="galleryZoom__buttons">
        <button
          className="galleryArrow galleryArrow--left"
          aria-label="Poprzednie zdjęcie"
          onClick={onClickPrevImage}>
          <img src="/GalleryArrowLeft.svg" alt="Previous image" />
        </button>

        <button
          className="galleryArrow galleryArrow--right"
          aria-label="Następne zdjęcie"
          onClick={onClickNextImage}>
          <img src="/GalleryArrowRight.svg" alt="Next image" />
        </button>
      </div>
    </dialog>
  );
};

GalleryZoomed.propTypes = propTypes;
