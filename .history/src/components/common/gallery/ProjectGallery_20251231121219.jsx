"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

/* ---------------- Modal Gallery ---------------- */

function GalleryModal({ images, initialIndex, title, onClose }) {
  const [thumbsSwiper, setThumbsSwiper] = useState < null > null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="flex h-full w-full flex-col items-center justify-center px-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-3xl text-white hover:opacity-80"
        >
          ✕
        </button>

        {/* Main Slider */}
        <Swiper
          modules={[Navigation, Thumbs]}
          navigation
          initialSlide={initialIndex}
          thumbs={{ swiper: thumbsSwiper }}
          className="w-full max-w-6xl"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`${title} ${index + 1}`}
                className="mx-auto max-h-[75vh] rounded-xl object-contain"
              />
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
          className="mt-4 max-w-6xl"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="!w-28 cursor-pointer">
              <img
                src={img}
                alt=""
                className="h-16 w-full rounded-lg object-cover opacity-60 hover:opacity-100 transition"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>,
    document.body,
  );
}

/* ---------------- Page Gallery ---------------- */

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [modalIndex, setModalIndex] = (useState < number) | (null > null);
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
        <GalleryModal
          images={images}
          initialIndex={modalIndex}
          title={title}
          onClose={() => setModalIndex(null)}
        />
      )}
    </div>
  );
}
