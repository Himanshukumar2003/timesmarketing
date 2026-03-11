import { Clock, Calendar } from "lucide-react";
import { IoPricetags } from "react-icons/io5";

export default function BlogMeta({ blog, readingTime, formatDate }) {
  return (
    <div className="mb-12 rounded-lg bg-white px-6 py-4 shadow-md">
      <div className="flex flex-wrap items-center gap-6 text-sm">

        <div className="flex items-center gap-2 text-gray-600">
          <Clock size={18} className="text-blue-600" />
          {formatDate(blog.date || blog.created_at)}
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <IoPricetags size={18} className="text-blue-600" />
          <span className="font-medium">{blog.category_title}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="h-4 w-4 text-blue-600" />
          <span>{readingTime} min read</span>
        </div>

      </div>
    </div>
  );
}