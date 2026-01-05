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
  const [modalIndex, setModalIndex] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] =
    (useState < SwiperType) | (null > null);

  return (
    <div>
      {/* Main Gallery */}
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={16}
        className="rounded-xl border"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="aspect-[16/10] cursor-zoom-in"
              onClick={() => setModalIndex(index)}
            >
              <img
                src={img}
                alt=""
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Thumbs]}
        freeMode
        watchSlidesProgress
        slidesPerView="auto"
        spaceBetween={10}
        className="mt-3"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="!w-28">
            <img
              src={img}
              alt=""
              className="h-16 w-full rounded-lg object-cover opacity-60 hover:opacity-100 transition"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      {modalIndex !== null && (
        <ImageModal
          images={images}
          initialIndex={modalIndex}
          title={title}
          onClose={() => setModalIndex(null)}
        />
      )}
    </div>
  );
}
