import ProjectGallery from "./ProjectGallery";

type Project = {
  title: string,
  images: string[],
  highlights: string[],
  tech: string[],
};

export default function ProjectCard({ data }: { data: Project }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left */}
        <div className="bg-slate-50 p-4">
          <ProjectGallery images={data.images} title={data.title} />
        </div>

        {/* Right */}
        <div className="p-6">
          <h3 className="text-lg font-semibold">{data.title}</h3>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
            {data.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {data.tech.map((t, i) => (
              <span
                key={i}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
