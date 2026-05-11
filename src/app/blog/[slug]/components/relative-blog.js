import Link from "next/link";
import Image from "next/image";

export default function RecentPosts({ blogs, className, href }) {
  return (
    <div
      className={`rounded-xl bg-white shadow-lg lg:sticky top-6 ${className}`}
    >
      <div className="border-b px-5 py-4">
        <h3 className="text-lg font-semibold text-slate-900">Recent Posts</h3>
      </div>

      <div className="divide-y">
        {blogs.map((blog, index) => (
          <Link
            key={index}
            href={href ? `${href}${blog.slug}` : `/blog/${blog.slug}`}
            className="flex gap-4 p-4 hover:bg-slate-50 transition"
          >
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={`${process.env.NEXT_PUBLIC_API}/${blog.pictures?.[0]}`}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-800 line-clamp-2">
                {blog.title}
              </h4>
              <p className="line-clamp-2">{blog.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
