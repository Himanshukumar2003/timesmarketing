import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";

import BlogContent from "@/app/blog/[slug]/components/BlogContent.js";
import BlogTOC from "@/app/blog/[slug]/components/BlogTOC.js";
import BlogFAQ from "@/app/blog/[slug]/components/BlogFAQ.js"; // FAQ accordion component

import axios from "axios";
import { notFound } from "next/navigation";

import { Breadcrumb } from "@/componts/breadcrumb";
import { baseUrl } from "@/lib/utils.js";
import RecentPosts from "@/app/blog/[slug]/components/relative-blog.js";
import { extractHeadings } from "@/app/blog/[slug]/components/blog-helpers";
import { addIdsToHeadings } from "@/app/blog/[slug]/utils/blogHelpers";

// Fetch recent product pages excluding the current one
export async function getRecentBlogs(currentSlug) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/product-pages`,
      { cache: "no-store" }
    );

    if (!res.ok) throw new Error("Failed to fetch blogs");

    const data = await res.json();

    const blogs = data.data.products
      .filter((blog) => blog.slug !== currentSlug)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, 7);

    return blogs;
  } catch (error) {
    console.error("Error fetching recent blogs:", error);
    return [];
  }
}

// Fetch a single product page by slug — returns null on failure instead of throwing
const getBlog = async (slug) => {
  try {
    const { data } = await axios.get(
      `${baseUrl}/product-pages/get-by-slug/${slug}`
    );
    return data.data;
  } catch (error) {
    console.error("Error fetching blog:", error?.response?.status, slug);
    return null;
  }
};

// Generate page metadata from blog data
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getBlog(slug);

  // Fallback metadata when blog is not found
  if (!data) {
    return {
      title: "Page Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  return {
    title: data?.meta_title ? data?.meta_title : data?.title,
    description: data?.meta_description,
    keywords: data?.meta_keywords,
    alternates: {
      canonical: `/crane/${data?.slug}`,
    },
    openGraph: {
      title: data?.meta_title ?? data?.title,
      description: data?.meta_description,
      images: data?.image,
      type: "website",
    },
  };
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  // Trigger Next.js not-found page if blog doesn't exist
  if (!blog) notFound();

  const recentBlogs = await getRecentBlogs(slug);

  const headings = extractHeadings(blog.content);
  const content = addIdsToHeadings(blog.content, headings);

  return (
    <>
      {/* LocalBusiness / Product JSON-LD schema from API */}
      {blog?.jsonld_schema && (
        <div dangerouslySetInnerHTML={{ __html: blog.jsonld_schema }} />
      )}

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
        <div className="mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-4">
            {/* Table of Contents */}
            <BlogTOC
              headings={headings}
              className="order-2 lg:order-1 lg:col-span-3 w-full"
            />

            {/* Main content + FAQ */}
            <div className="order-1 lg:order-2 lg:col-span-6">
              <BlogContent
                title={blog.title}
                content={content}
                img={blog.pictures[0]}
              />

              {/* FAQ accordion rendered below the main content */}
              {blog?.faq?.length > 0 && <BlogFAQ faqs={blog.faq} />}
            </div>

            {/* Recent / Related Posts */}
            <RecentPosts
              blogs={recentBlogs}
              href="/crane/"
              className="order-3 lg:order-3 lg:col-span-3"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
