function GalleryModal({ images, initialIndex, title, onClose }) {
  const [thumbsSwiper, setThumbsSwiper] =
    (useState < SwiperType) | (null > null);

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
