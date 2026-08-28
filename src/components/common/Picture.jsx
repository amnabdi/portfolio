/**
 * Renders an imagetools `?preset=screenshot` import, which yields
 * { sources: { webp: "<srcset>" }, img: { src, w, h } }.
 *
 * The preset emits WebP only, so the <img> fallback is also WebP rather than
 * the original PNG. That is deliberate: every browser has supported WebP since
 * 2020, and shipping a second full set of PNGs would roughly triple the image
 * payload for user agents that no longer exist.
 *
 * The intrinsic w/h are always emitted — they are what stops each screenshot
 * shifting the layout as it loads.
 */
const Picture = ({ image, alt, sizes, className = "", ...imgProps }) => {
  // Tolerate a plain string import so call sites work with or without the preset.
  if (typeof image === "string") {
    return <img src={image} alt={alt} className={className} {...imgProps} />;
  }

  const { sources = {}, img } = image;

  return (
    <picture>
      {Object.entries(sources).map(([format, srcSet]) => (
        <source key={format} type={`image/${format}`} srcSet={srcSet} sizes={sizes} />
      ))}
      <img
        src={img.src}
        width={img.w}
        height={img.h}
        alt={alt}
        sizes={sizes}
        className={className}
        {...imgProps}
      />
    </picture>
  );
};

export default Picture;
