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
        <section className="relative w-full h-[70vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="h-full"
      >
        {heroImage.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="relative z-10 text-center text-white px-6 animate-fadeIn">
                <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
                  {slide.slogan}
                </h1>
                <p className="text-base md:text-xl mb-6 max-w-xl mx-auto">
                  {slide.subtitle}
                </p>

                {/* CTA */}
                <div className='flex gap-4 justify-center'>
                  <button className="btn btn-outline px-8">
                  Explore More
                </button>
                <button className="btn btn-primary px-8">
                  Shop Now
                </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Indicator */}
       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 text-white animate-bounce pointer-events-none">
    <span className="text-xl">Scroll ↓</span>
  </div>
    </section>
    );
};

export default HeroBanner;