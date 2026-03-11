import { Tag, ChevronRight } from "lucide-react";

export default function BlogTOC({ headings, className }) {
  if (!headings?.length) return null;

  return (
    <div
      className={`lg:sticky top-6 rounded-xl bg-white  p-6 shadow-lg ${className}`}
    >
      <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-blue-900">
        <Tag size={20} className="text-blue-600" />
        Table of Content
      </h3>

      <nav className="space-y-3 border-l-4 border-blue-200">
        {headings.map(({ text, id }) => (
          <a
            key={id}
            href={`#${id}`}
            className="block pl-4 text-sm font-medium text-gray-700 hover:text-blue-600"
          >
            <div className="flex items-center gap-2">
              <ChevronRight size={16} className="text-blue-500" />
              {text}
            </div>
          </a>
        ))}
      </nav>
    </div>
  );
}
