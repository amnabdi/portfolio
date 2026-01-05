"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function ProjectGallery({ images, title }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      {/* Main Slider */}
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={16}
        className="rounded-xl border"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-[16/10] bg-slate-50">
              <img
                src={img}
                alt={`${title} screenshot ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        watchSlidesProgress
        spaceBetween={10}
        slidesPerView="auto"
        className="mt-3"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="!w-28 cursor-pointer">
            <img
              src={img}
              alt=""
              className="h-16 w-full rounded-lg border object-cover opacity-60 hover:opacity-100 transition"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
