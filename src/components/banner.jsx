'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const slides = [
  {
    image: '/professional-washer-blue-uniform-washing-luxury-car-with-water-gun-open-air-car-wash.jpg',
    badge: 'Premium Service',
    title: 'Contactless Car Wash',
    description: 'A clean car is essential for maintaining its resale value and ensuring a presentable appearance.',
  },
  {
    image: '/man-washing-his-car-garage.jpg',
    badge: 'Quick & Easy',
    title: 'Professional Detailing',
    description: 'Expert care for your vehicle with eco-friendly products and cutting-edge technology.',
  },
  {
    image: '/beautiful-car-washing-service.jpg',
    badge: 'Modern Equipment',
    title: 'Express Wash Service',
    description: 'Fast, efficient cleaning that fits your busy schedule without compromising quality.',
  },
];

export default function Banner() {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet-minimal',
          bulletActiveClass: 'swiper-pagination-bullet-active-minimal',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={1000}
        className="banner-swiper-minimal"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-150 sm:h-175 lg:h-200">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={i === 0}
                className="object-cover"
                quality={90}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content Container - Centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
                  {/* Badge */}
                  <div className="inline-block mb-3">
                    <div className="text-red-600 text-sm font-medium tracking-[0.2em] uppercase flex items-center gap-1">
                      <div className="w-12 h-0.5 bg-red-600"></div>
                      {slide.badge}
                    </div>
                  </div>

                  {/* Main Title */}
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p className=" text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                      href="/booking"
                      className="group inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg min-w-40"
                    >
                      <span className="flex items-center">
                        Read More
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </Link>

                    <Link
                      href="/products"
                      className="group inline-flex items-center justify-center px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg min-w-[160px]"
                    >
                      <span className="flex items-center">
                        Order Now
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons - Minimal Style */}
      <button className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group">
        <svg
          className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group">
        <svg
          className="w-5 h-5 group-hover:translate-x-0.5 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}