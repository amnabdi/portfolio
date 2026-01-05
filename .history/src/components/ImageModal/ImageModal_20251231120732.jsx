import { createPortal } from "react-dom";

export default function ImageModal({ image, alt, onClose }) {
  return createPortal(
    <div
      className="
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/70 backdrop-blur-sm
      "
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="
            absolute -top-10 right-0
            text-white text-2xl
            hover:opacity-80
          "
        >
          ✕
        </button>

        <img
          src={image}
          alt={alt}
          className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
        />
      </div>
    </div>,
    document.body,
  );
}
