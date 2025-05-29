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
      <button id="closeButton" onClick={onClickClose}>
        <img src="menu-hamburger.svg" alt="Close button" />
      </button>
      <button
        className="galleryArrow galleryArrow--left"
        onClick={onClickNextImage}>
        <img src="/GalleryArrowLeft.svg" alt="Gallery Arrow left" />
      </button>
      <button
        className="galleryArrow galleryArrow--right"
        onClick={onClickPrevImage}>
        <img src="/GalleryArrowRight.svg" alt="Gallery Arrow right" />
      </button>
      <img className="galleryPhoto" src={chosenImage} alt={chosenImage} />
    </dialog>
  );
};

GalleryZoomed.propTypes = propTypes;
