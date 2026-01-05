// components/ProjectCard.tsx

export default function ProjectCard({ data }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left – Gallery */}
        <div className="bg-slate-50 p-4">
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border">
            <img
              src={data.images[0]}
              alt={data.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="mt-3 flex gap-2 overflow-x-auto">
            {data.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="h-16 w-28 shrink-0 rounded-lg border object-cover opacity-70 hover:opacity-100 cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Right – Content */}
        <div className="p-6">
          <h3 className="text-lg font-semibold">{data.title}</h3>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
            {data.highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {data.tech.map((item, index) => (
              <span
                key={index}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
