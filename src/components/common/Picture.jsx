/**
 * Renders an imagetools `?preset=screenshot` import.
 *
 * That preset yields { sources: { webp: "<srcset>" }, img: { src, w, h } }, so
 * modern browsers get WebP at the width they actually need while the original
 * PNG stays as the fallback. The intrinsic w/h are always emitted: they are
 * what stops each screenshot shifting the layout as it loads.
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
