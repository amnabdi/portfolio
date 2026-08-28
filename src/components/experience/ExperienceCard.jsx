import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

const ExperienceCard = ({ data }) => {
  const hasLink = Boolean(data.link);

  return (
    <article className="grid gap-6 py-10 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-12">
      {/* Metadata rail — mono-set so it reads as data beside the prose. */}
      <div className="flex gap-4 md:flex-col md:gap-3">
        <img
          src={data.logo}
          alt=""
          width={48}
          height={48}
          loading="lazy"
          decoding="async"
          className="h-12 w-12 shrink-0 rounded-lg border border-rule bg-surface object-contain p-1.5"
        />
        <dl className="font-mono text-xs text-ink-muted">
          <dt className="sr-only">Dates</dt>
          <dd>{data.duration}</dd>
          <dt className="sr-only">Duration</dt>
          <dd className="mt-1">{data.period}</dd>
          <dt className="sr-only">Location</dt>
          <dd className="mt-1 flex items-center gap-1.5">
            <FiMapPin aria-hidden="true" />
            {data.location}
          </dd>
        </dl>
      </div>

      <div>
        <h3 className="text-2xl">{data.role}</h3>

        <p className="mt-1 text-sm text-ink-muted">
          {hasLink ? (
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-accent transition-colors duration-200 hover:text-accent-hover"
            >
              {data.company}
              <FiArrowUpRight aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : (
            data.company
          )}
        </p>

        <p className="prose-measure mt-4 text-ink-muted">{data.summary}</p>

        <ul className="prose-measure mt-6 space-y-3 text-sm text-ink-muted">
          {data.achievements.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
