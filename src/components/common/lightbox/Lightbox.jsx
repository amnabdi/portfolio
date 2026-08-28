import { useCallback, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

/**
 * Built on the native <dialog> element. showModal() gives focus trapping,
 * Escape-to-close, background inertness, and focus restored to the element
 * that opened it — all behaviour the previous portal-based modal lacked.
 */
const Lightbox = ({ images, title, initialIndex = 0, onClose }) => {
  const dialogRef = useRef(null);
  const [index, setIndex] = useState(initialIndex);

  const hasMultiple = images.length > 1;

  // Kept in a ref so the mount effect below can stay dependency-free and run
  // exactly once, even though the parent passes a new callback each render.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  /**
   * Every close path goes through here. The dialog's `close` event does not
   * bubble — React's onClose prop never fires for it — and engine support for
   * dispatching it at all is uneven, so closing is driven explicitly rather
   * than inferred from the event. Calling it twice is harmless: the parent
   * just clears the same state again.
   */
  const requestClose = useCallback(() => {
    const dialog = dialogRef.current;
    if (dialog?.open) dialog.close();
    onCloseRef.current?.();
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (!dialog.open) dialog.showModal();

    // showModal() makes the background inert but does not stop it scrolling.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Belt and braces for a close triggered outside our own controls.
    const handleNativeClose = () => onCloseRef.current?.();
    dialog.addEventListener("close", handleNativeClose);

    return () => {
      dialog.removeEventListener("close", handleNativeClose);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const showPrevious = useCallback(
    () => setIndex((current) => (current - 1 + images.length) % images.length),
    [images.length]
  );

  const showNext = useCallback(
    () => setIndex((current) => (current + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleKeyDown = (event) => {
      // Handled here rather than left to the user agent, so the React state
      // unwinds on the same tick the dialog closes.
      if (event.key === "Escape") {
        event.preventDefault();
        requestClose();
        return;
      }

      if (!hasMultiple) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }
    };

    dialog.addEventListener("keydown", handleKeyDown);
    return () => dialog.removeEventListener("keydown", handleKeyDown);
  }, [hasMultiple, showPrevious, showNext, requestClose]);

  return (
    <dialog
      ref={dialogRef}
      onClick={(event) => {
        // Clicking the backdrop lands on the dialog element itself.
        if (event.target === dialogRef.current) requestClose();
      }}
      aria-label={`${title} screenshots`}
      className="m-auto max-h-full w-full max-w-6xl bg-transparent p-4 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-sm text-white/80">
            {title}
            {hasMultiple && (
              <span aria-live="polite">
                {" "}
                — {index + 1} of {images.length}
              </span>
            )}
          </p>

          <button
            type="button"
            onClick={requestClose}
            aria-label="Close screenshots"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/20"
          >
            <FiX size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="relative">
          <img
            src={images[index]}
            alt={`${title} — screenshot ${index + 1} of ${images.length}`}
            className="mx-auto max-h-[75vh] w-auto rounded-lg object-contain"
          />

          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous screenshot"
                className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors duration-200 hover:bg-black/80"
              >
                <FiChevronLeft size={22} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next screenshot"
                className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors duration-200 hover:bg-black/80"
              >
                <FiChevronRight size={22} aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        {hasMultiple && (
          <ul className="flex flex-wrap justify-center gap-2">
            {images.map((image, thumbIndex) => (
              <li key={image}>
                <button
                  type="button"
                  onClick={() => setIndex(thumbIndex)}
                  aria-label={`Show screenshot ${thumbIndex + 1}`}
                  aria-current={thumbIndex === index ? "true" : undefined}
                  className={`block h-14 w-20 overflow-hidden rounded transition-opacity duration-200 ${
                    thumbIndex === index
                      ? "opacity-100 ring-2 ring-white"
                      : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </dialog>
  );
};

export default Lightbox;
