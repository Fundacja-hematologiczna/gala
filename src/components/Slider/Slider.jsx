import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import { Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { getLogos } from '../../api/services';
import './slider.scss';

export const Slider = () => {
  const [slider1, setSlider1] = useState([]);
  const [slider2, setSlider2] = useState([]);

  useEffect(() => {
    getLogos()
      .then((response) => {
        if (response.data.data && Array.isArray(response.data.data)) {
          const logos = response.data.data.filter(
            (logo) => logo.on_gala === true,
          );

          console.log(response);

          const mid = Math.ceil(logos.length / 2);

          setSlider1(logos.slice(0, mid));
          setSlider2(logos.slice(mid));
        }
      })
      .catch(() => {
        console.error('Błąd podczas pobierania danych:');
      });
  }, []);

  return (
    <>
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
          {slider1.map((logo) => (
            <SwiperSlide key={`logo - ${logo.id}`}>
              <a href={logo.link} target="blank" rel="noopener noreferrer">
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
          {slider2.map((logo) => (
            <SwiperSlide key={`logo - ${logo.id}`}>
              <a href={logo.link} target="blank" rel="noopener noreferrer">
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
    </>
  );
};
