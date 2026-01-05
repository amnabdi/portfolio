"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import ImageModal from "../../ImageModal/ImageModal";

export default function ProjectGallery({ images, title }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full">
      {/* Main Slider */}
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={16}
        className="rounded-xl border bg-white"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="aspect-[16/10] cursor-zoom-in overflow-hidden rounded-xl"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`${title} screenshot ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs, FreeMode]}
        freeMode
        watchSlidesProgress
        slidesPerView="auto"
        spaceBetween={10}
        className="mt-3"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="!w-28 cursor-pointer">
            <img
              src={img}
              alt=""
              className="
                h-16 w-full rounded-lg border
                object-cover
                opacity-60
                hover:opacity-100
                transition
              "
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          alt={title}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}
