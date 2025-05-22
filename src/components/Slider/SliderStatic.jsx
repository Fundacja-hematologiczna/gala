import PropTypes from 'prop-types';
import './slider.scss';

export const SliderStatic = ({ slides }) => (
  <div className="Slider-static">
    {slides.map((logo) => (
      <div key={logo.id} className="Slider-static__item">
        <a href={logo.link} target="_blank" rel="noopener noreferrer">
          <img
            className="Slider-static__img"
            src={logo.logo}
            alt={logo.title}
            loading="lazy"
          />
        </a>
      </div>
    ))}
  </div>
);

SliderStatic.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
      logo: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
