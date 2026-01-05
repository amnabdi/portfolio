// components/ExperienceCard.tsx
import { MapPin } from "lucide-react";

export default function ExperienceCard({ data }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <a href={data.link} target="_blank" rel="noopener noreferrer">
          <div className="flex gap-4">
            {/* Logo */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border">
              <img
                src={data.logo}
                alt={data.company}
                className="h-8 w-8 object-contain"
              />
            </div>
            </a>

            {/* Info */}
            <div>
              <h3 className="font-semibold text-green-700">{data.company}</h3>
              <p className="font-medium text-slate-900">{data.role}</p>
              <div className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                <MapPin className="h-4 w-4" />
                {data.location}
              </div>
            </div>
          </div>
        

        {/* Date */}
        <div className="text-sm text-slate-500 sm:text-right">
          <p>{data.duration}</p>
          <p className="mt-1 font-medium text-green-700">{data.period}</p>
        </div>
      </div>

      {/* Responsibilities */}
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600">
        {data.responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
