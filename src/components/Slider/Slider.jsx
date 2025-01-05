import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import { Autoplay } from 'swiper/modules';
import './slider.scss';

export const Slider = () => {
  const patronHonorowy = Array.from({ length: 6 }, (_, i) => i + 1);
  const patronMedialny = Array.from({ length: 6 }, (_, i) => i + 1);
  const patron = Array.from({ length: 5 }, (_, i) => i + 1);
  const partnerzy = Array.from({ length: 83 }, (_, i) => i + 1);

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
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
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
          {patronHonorowy.map((i) => (
            <SwiperSlide key={`patronHonorowy-${i}`}>
              <img
                className="Slider-img"
                src={`./partners&contibutors/patroniHonorowi/patron-${i}.png`}
                alt={`patronHonorowy-${i}`}
                loading="lazy"
              />
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
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
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
          {patronMedialny.map((i) => (
            <SwiperSlide key={`patronMedialny-${i}`}>
              <img
                className="Slider-img"
                key={i}
                src={`/partners&contibutors/patronMedialny/patron-${i}.jpg`}
                alt={`Patron medialny ${i}`}
                loading="lazy"
              />
            </SwiperSlide>
          ))}

          {patron.map((i) => (
            <SwiperSlide key={`patron-${i}`}>
              <img
                className="Slider-img"
                key={i}
                src={`./partners&contibutors/patron/patron-${i}.jpg`}
                alt={`Patron ${i}`}
                loading="lazy"
              />
            </SwiperSlide>
          ))}

          {partnerzy.map((i) => (
            <SwiperSlide key={`partner-${i}`}>
              <img
                className="Slider-img"
                key={i}
                src={`./partners&contibutors/partnerzy/patron-${i}.jpg`}
                alt={`partner ${i}`}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
