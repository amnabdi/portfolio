function GalleryModal({
  images,
  initialIndex,
  title,
  onClose,
}: {
  images: string[],
  initialIndex: number,
  title: string,
  onClose: () => void,
}) {
  const [thumbsSwiper, setThumbsSwiper] =
    (useState < SwiperType) | (null > null);
  const [startY, setStartY] = (useState < number) | (null > null);

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black"
      onTouchStart={(e) => setStartY(e.touches[0].clientY)}
      onTouchEnd={(e) => {
        if (startY === null) return;
        const endY = e.changedTouches[0].clientY;
        if (endY - startY > 120) onClose(); // swipe down close
        setStartY(null);
      }}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-50 text-3xl text-white"
      >
        ✕
      </button>

      {/* Main Slider */}
      <Swiper
        modules={[Navigation, Thumbs, Zoom]}
        zoom={{ maxRatio: 3 }}
        navigation
        initialSlide={initialIndex}
        thumbs={{ swiper: thumbsSwiper }}
        className="h-[75vh]"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-zoom-container flex items-center justify-center">
              <img
                src={img}
                alt={`${title} ${index + 1}`}
                className="max-h-[75vh] object-contain"
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
        className="mt-4 px-4"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="!w-24">
            <img
              src={img}
              alt=""
              className="h-14 w-full rounded-lg object-cover opacity-60"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>,
    document.body,
  );
}
