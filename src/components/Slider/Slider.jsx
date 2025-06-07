import { useWindowWidth } from '../../hooks/useWindowWidth';
import { SliderSwiper } from './SliderSwiper';
import { SliderStatic } from './SliderStatic';
import { getSliderPerView } from './sliderConfig';
import PropTypes from 'prop-types';

import './slider.scss';

export const Slider = ({ patrons = [] }) => {
  const windowWidth = useWindowWidth();
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

Slider.propTypes = {
  patrons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      slides: PropTypes.array.isRequired,
    }),
  ),
};

Slider.defaultProps = {
  patrons: [],
};
