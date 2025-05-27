import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropTypes from 'prop-types';

import 'swiper/scss';
import 'swiper/scss/autoplay';

export const SliderSwiper = ({ slides }) => (
  <div className="Slider">
    <Swiper
      loop={true}
      autoplay={{
        delay: 2700,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={5}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}>
      {slides.map((logo) => (
        <SwiperSlide key={`logo - ${logo.id}`}>
          <a href={logo.link} target="_blank" rel="noopener noreferrer">
            <img
              className="Slider-img"
              src={logo.logo}
              alt={logo.title}
              loading="lazy"
            />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

SliderSwiper.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
      logo: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
