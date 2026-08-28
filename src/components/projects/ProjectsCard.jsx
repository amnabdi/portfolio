import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Lightbox from "../common/lightbox/Lightbox";

const ProjectCard = ({ data }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const { title, outcome, role, images, highlights, tech, url, linkName } = data;
  const [leadImage, ...remainingImages] = images;

  return (
    <article className="py-section-sm">
      <header>
        <h3 className="text-2xl">{title}</h3>
        {outcome && (
          <p className="prose-measure mt-2 text-lg text-ink-muted">{outcome}</p>
        )}
      </header>

      <button
        type="button"
        onClick={() => setLightboxIndex(0)}
        aria-label={`View ${title} screenshots`}
        className="mt-8 block w-full overflow-hidden rounded-2xl border border-rule"
      >
        <img
          src={leadImage}
          alt={`${title} — main screen`}
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
        />
      </button>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_minmax(0,16rem)] lg:gap-16">
        <ul className="space-y-3 text-ink-muted">
          {highlights.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
              {item}
            </li>
          ))}
        </ul>

        {/* Metadata rail — mono-set, so the specifics read as data. */}
        <dl className="space-y-5 font-mono text-xs">
          {role && (
            <div>
              <dt className="text-ink-muted uppercase tracking-wide">Role</dt>
              <dd className="mt-1.5 text-sm text-ink">{role}</dd>
            </div>
          )}

          <div>
            <dt className="text-ink-muted uppercase tracking-wide">Stack</dt>
            <dd className="mt-1.5 flex flex-wrap gap-1.5">
              {tech.map((item) => (
                <span
                  key={item}
                  className="rounded border border-rule px-2 py-1 text-ink-muted"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>

          <div>
            <dt className="text-ink-muted uppercase tracking-wide">Screens</dt>
            <dd className="mt-1.5 text-sm text-ink">
              {images.length} {images.length === 1 ? "screen" : "screens"}
            </dd>
          </div>

          {url && (
            <div>
              <dt className="text-ink-muted uppercase tracking-wide">Live</dt>
              <dd className="mt-1.5">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-accent transition-colors duration-200 hover:text-accent-hover"
                >
                  {linkName || url}
                  <FiArrowUpRight aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </dd>
            </div>
          )}
        </dl>
      </div>

      {remainingImages.length > 0 && (
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {remainingImages.map((image, offset) => (
            <li key={image}>
              <button
                type="button"
                onClick={() => setLightboxIndex(offset + 1)}
                aria-label={`View ${title} screenshot ${offset + 2}`}
                className="block w-full overflow-hidden rounded-lg border border-rule"
              >
                <img
                  src={image}
                  alt={`${title} — screenshot ${offset + 2}`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover object-top opacity-85 transition-opacity duration-200 hover:opacity-100"
                />
              </button>
            </li>
          ))}
        </ul>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          title={title}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </article>
  );
};

export default ProjectCard;
