import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import ImageModal from "../../ImageModal/ImageModal";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

export default function ProjectGallery({ images, title }) {
  const [modalIndex, setModalIndex] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // Ref برای دکمه‌های سفارشی
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div>
      {/* Main Gallery */}
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={16}
        className="rounded-xl border relative"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="aspect-[16/10] cursor-grab"
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

        {/* دکمه‌های سفارشی */}
        <div
          ref={prevRef}
          className="absolute top-1/2 left-2 z-10 -translate-y-1/2 cursor-pointer  "
        >
          <GrFormPrevious size={30} />
        </div>
        <div
          ref={nextRef}
          className="absolute top-1/2 right-2 z-10 -translate-y-1/2 cursor-pointer  "
        >
          <GrFormNext size={30} />
        </div>
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
