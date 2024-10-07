// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import { type TvShow, type Movie, imageApiUrl } from '@/utils';

type trendingProps = {
  trending: TvShow[] | Movie[];
  text: string;
};

function SwiperSliderEffect({ trending, text }: trendingProps) {
  return (
    <>
      <h1 className='capitalize font-semibold text-3xl tracking-wide mt-4'>
        {text}
      </h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className='mySwiper'
      >
        {trending.map((trend) => {
          return (
            <SwiperSlide key={trend.id}>
              <img src={`${imageApiUrl}${trend.poster_path}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default SwiperSliderEffect;
