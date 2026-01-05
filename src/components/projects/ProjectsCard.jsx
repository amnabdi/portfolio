import ProjectGallery from "../common/gallery/ProjectGallery";
import { PiLinkSimple } from "react-icons/pi";

export default function ProjectCard({ data }) {
  console.log(data);
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left */}
        <div className="bg-slate-50 p-4">
          <ProjectGallery images={data.images} title={data.title} />
        </div>

        {/* Right */}
        <div className="p-6">
          <h3 className="text-lg font-semibold  text-gray-700">{data.title}</h3>

          <ul className="mt-4 list-disc space-y-2 pl-5 font-medium  text-[14px] text-slate-700">
            {data.highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2 ">
            {data.tech.map((t, i) => (
              <span
                key={i}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs lg:text-[13px] text-slate-800"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-start gap-2">
            <PiLinkSimple
              className={`${data?.linkName ? "block" : "hidden"}`}
              color="#2563eb"
            />
            <a className="font-medium text-lg text-blue-500" href={data?.url}>
              {data.linkName}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
