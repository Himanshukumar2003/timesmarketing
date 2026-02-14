import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import { FiChevronRight } from "react-icons/fi";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function getBlogs() {
  try {
    const res = await fetch(`${BASE_URL}/blogs`);

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
  console.log(blogs);
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
    <>
      {blogs?.length > 0 ? (
        <div className="grid gap-8  justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              className="group pt-0 relative overflow-hidden border-0 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="   relative">
                <Image
                  src={`${process.env.NEXT_PUBLIC_API}/${blog.pictures[0]}`}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="w-full h-[250px] object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div
                  style={{ right: "20px", top: "20px" }}
                  className="flex   bg-blue-700 shadow-2xl   absolute   items-center gap-1  font-medium px-3 py-1.5 rounded-full border border-gray-200"
                >
                  <Calendar className="h-4 w-4 text-white" />
                  <span className="text-white">
                    {formatDate(blog.date || blog.created_at)}
                  </span>
                </div>
              </div>

              <CardContent>
                {/* Title */}
                <h2 className="mb-3 text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h2>

                {/* Description */}
                <p className="mb-4 text-gray-600 line-clamp-3 leading-relaxed">
                  {blog.description || "Read more about this blog..."}
                </p>

                {/* Meta */}

                {/* Button */}
                <Link
                  href={`/blog/${blog.slug}`}
                  className="flex rounded-sm mt-4 items-center"
                >
                  <span className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-4 py-2">
                    Read More
                  </span>
                  <span className="bg-blue-500 py-2 px-2">
                    <FiChevronRight className="text-white text-2xl font-bold" />
                  </span>
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
    </>
  );
}
