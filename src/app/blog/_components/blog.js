import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { baseUrl } from "@/lib/utils";
import { FiChevronRight } from "react-icons/fi";

async function getBlogs() {
  try {
    const res = await fetch(`${baseUrl}/blogs`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const data = await res.json();
    return data.data.products;
  } catch (error) {
    console.error("Blog fetch error:", error);
    return [];
  }
}

export default async function Blogs() {
  const blogs = await getBlogs();

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getReadingTime = (content) => {
    if (!content) return 1;
    const text = content.replace(/<[^>]*>/g, "");
    const wordCount = text.split(" ").length;
    return Math.ceil(wordCount / 200);
  };

  return (
    <div className="section">
      {blogs?.length > 0 ? (
        <div className="grid gap-8  justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              className="group pt-0 relative overflow-hidden border border-gray-100 bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API}/${blog.pictures[0]}`}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="w-full h-[240px] object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                {/* Date Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(blog.date || blog.created_at)}
                </div>
              </div>

              <CardContent>
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 transition-colors duration-300 group-hover:text-blue-600">
                  {blog.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-5">
                  {blog.description || "Read more about this blog..."}
                </p>

                {/* Read More */}
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold group/link"
                >
                  Read Article
                  <FiChevronRight className="text-lg transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold text-gray-900">
            No blogs found
          </h3>
          <p className="text-gray-600">
            No blog posts are available at the moment.
          </p>
        </div>
      )}
    </div>
  );
}
