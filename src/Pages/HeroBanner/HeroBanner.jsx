import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const heroImage = [
  {
    "slogan": "Love starts with a paw",
    "subtitle": "Find everything your furry friend needs — from food to fun toys.",
    "image": "https://i.ibb.co.com/n8zQf0x9/priscilla-du-preez-qtkp-Ox-Cpl0-Y-unsplash.jpg"
  },
  {
    "slogan": "Happy pets, happy homes",
    "subtitle": "Discover premium pet care essentials that keep tails wagging.",
    "image": "https://i.ibb.co.com/fzpm7Y0L/bri-tucker-LGG5-P7-KCzi-U-unsplash.jpg"
  },
  {
    "slogan": "Comfort meets care",
    "subtitle": "Soft beds, healthy treats, and stylish accessories for every pet.",
    "image": "https://i.ibb.co.com/HDf9VxXx/jonatan-pie-xg-TMSz6keg-E-unsplash.jpg"
  }
]


const HeroBanner = () => {
    return (
        <div>
            <div className='min-h-screen'>
           <div className="w-full h-[90vh] relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full"
      >
        {heroImage.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center flex flex-col justify-center items-center text-white"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="bg-black/40 p-6 rounded-2xl text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.slogan}
                </h2>
                <p className="text-lg md:text-2xl">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

        </div>
        </div>
    );
};

export default HeroBanner;