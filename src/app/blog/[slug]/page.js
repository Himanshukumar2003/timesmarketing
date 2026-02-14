import FAQAccordion from "@/components/ui/FAQAccordion";
import { Breadcrumb } from "@/componts/breadcrumb";
import Footer from "@/componts/footer";
import Navbar from "@/componts/nav";
import { Category } from "@mui/icons-material";
import { Container } from "@mui/material";
import axios from "axios";
import { Calendar, Clock } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import { IoPricetags } from "react-icons/io5";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getBlog(slug);
  return {
    title: data?.meta_title ? data?.meta_title : data?.title,
    description: data?.meta_description,
    keywords: data?.meta_keywords,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/blogs/${data?.slug}`,
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
  const { data } = await axios.get(`${baseUrl}/blogs/get-by-slug/${slug}`);
  return data.data;
};

export default async function Page({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

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

      <div className="mx-auto  max-w-6xl  space-y-4">
        <div className="col-span-4 space-y-4 rounded-lg bg-white lg:col-span-3">
          <div className="  shadow-2xl p-5">
            <Image
              src={`${process.env.NEXT_PUBLIC_API}/${blog.pictures[0]}`}
              width={1200}
              height={600}
              alt={blog.title}
              className="h-90 w-full rounded-lg object-cover mb-5"
            />
            <div className=" flex gap-4">
              <div className="flex items-center justify-start gap-1 text-xs font-medium text-gray-400">
                <Clock size={18} />{" "}
                {blog.date
                  ? moment(blog.date).format("DD MMM, Y")
                  : moment(blog.created_at).format("DD MMM, Y")}
              </div>

              <div className="flex items-center justify-start gap-1 text-xs font-medium text-gray-400">
                <IoPricetags size={18} /> {blog.category_title}
              </div>

              <div className=" flex items-center text-sm text-gray-500">
                <Calendar className="mr-1 h-4 w-4" />
                <span>{formatDate(blog.date || blog.created_at)}</span>
                <span className="mx-2">•</span>
                <span>{getReadingTime(blog.content)} min read</span>
              </div>
            </div>

            {/* title */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mt-4">
              {blog?.title}
            </h2>
            {/* blog content */}
            <div className="w-full">
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: blog?.content }}
              />
            </div>
            {/* faq */}
            {Array.isArray(blog?.faq) && blog?.faq?.length > 0 && (
              <div className="!mt-16">
                <h4 className={"text-primary"}>FAQs</h4>

                <div>
                  <FAQAccordion faq={blog?.faq} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
