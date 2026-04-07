import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";

import BlogContent from "@/app/blog/[slug]/components/BlogContent.js";
import BlogTOC from "@/app/blog/[slug]/components/BlogTOC.js";

import axios from "axios";

import { Breadcrumb } from "@/componts/breadcrumb";
import { baseUrl } from "@/lib/utils.js";
import RecentPosts from "@/app/blog/[slug]/components/relative-blog.js";
import { extractHeadings } from "@/app/blog/[slug]/components/blog-helpers";
import { addIdsToHeadings } from "@/app/blog/[slug]/utils/blogHelpers";

export async function getRecentBlogs(currentSlug) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/product-pages`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const data = await res.json();

    const blogs = data.data.products
      .filter((blog) => blog.slug !== currentSlug)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, 7);

    return blogs;
  } catch (error) {
    console.error("Blog fetch error:", error);
    return [];
  }
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getBlog(slug);
  return {
    title: data?.meta_title ? data?.meta_title : data?.title,
    description: data?.meta_description,
    keywords: data?.meta_keywords,
    alternates: {
      canonical: `/${data?.slug}`,
    },
    openGraph: {
      title: data?.meta_title ?? data?.title,
      description: data?.meta_description,
      images: data?.image,
      type: "website",
    },
  };
}

const getBlog = async (slug) => {
  const { data } = await axios.get(
    `${baseUrl}/product-pages/get-by-slug/${slug}`
  );
  return data.data;
};

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  const recentBlogs = await getRecentBlogs(slug);

  const headings = extractHeadings(blog.content);
  const content = addIdsToHeadings(blog.content, headings);

  return (
    <>
      <Navbar />

      <Breadcrumb
        title={blog.title}
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: blog.title,
            href: `/${blog.slug}`,
            isCurrent: true,
          },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 mb-12">
        <div className="mx-auto  px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-4">
            <BlogTOC
              headings={headings}
              className="order-2 lg:order-1 lg:col-span-3 w-full"
            />

            <BlogContent
              title={blog.title}
              content={content}
              img={blog.pictures[0]}
              className="order-1 lg:order-2 lg:col-span-6"
            />

            <RecentPosts
              blogs={recentBlogs}
              href="/"
              className="order-3 lg:order-3 lg:col-span-3"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
