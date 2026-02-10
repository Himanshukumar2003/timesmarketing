"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@/hooks/use-debounce";
import { blogs } from "./data";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Breadcrumb } from "@/componts/breadcrumb";

export default function BlogDetailPageClient({ slug }) {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const currentBlog = blogs.find((blog) => blog.slug === slug);

  const recentPosts = useMemo(() => {
    return blogs
      .filter((blog) => blog.slug !== slug)
      .sort(
        (a, b) =>
          new Date(b.date || "").getTime() - new Date(a.date || "").getTime()
      )
      .slice(0, 3);
  }, [slug]);

  const searchResults = useMemo(() => {
    if (!debouncedSearchTerm.trim()) {
      return [];
    }
    const lowerCaseSearchTerm = debouncedSearchTerm.toLowerCase();
    return blogs.filter(
      (blog) =>
        blog.title?.toLowerCase().includes(lowerCaseSearchTerm) ||
        blog.blogTitle?.toLowerCase().includes(lowerCaseSearchTerm) ||
        blog.tags?.some((tag) =>
          tag.toLowerCase().includes(lowerCaseSearchTerm)
        ) ||
        blog.content?.some(
          (section) =>
            section.heading?.toLowerCase().includes(lowerCaseSearchTerm) ||
            section.text?.toLowerCase().includes(lowerCaseSearchTerm) ||
            section.points?.some((point) =>
              point.toLowerCase().includes(lowerCaseSearchTerm)
            )
        ) ||
        blog.sections?.some(
          (section) =>
            section.title?.toLowerCase().includes(lowerCaseSearchTerm) ||
            (typeof section.summary === "string" &&
              section.summary.toLowerCase().includes(lowerCaseSearchTerm)) ||
            (Array.isArray(section.summary) &&
              section.summary.some(
                (subSection) =>
                  subSection.heading
                    ?.toLowerCase()
                    .includes(lowerCaseSearchTerm) ||
                  subSection.points?.some((point) =>
                    point.toLowerCase().includes(lowerCaseSearchTerm)
                  )
              ))
        )
    );
  }, [debouncedSearchTerm]);

  // Helper function to render section content recursively
  const renderSectionContent = (section, index) => {
    return (
      <div key={index} className="mb-10">
        {/* Section Title */}
        {section.title && (
          <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">
            {section.title}
          </h2>
        )}

        {/* Section Paragraphs */}
        {section.content &&
          Array.isArray(section.content) &&
          section.content.map((para, i) => (
            <p key={i} className="mb-4 leading-relaxed text-gray-700">
              {para}
            </p>
          ))}

        {/* Section Points */}
        {section.points && Array.isArray(section.points) && (
          <ul className="mb-6 list-disc pl-6 space-y-2 text-gray-700">
            {section.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}

        {/* Sub Sections */}
        {section.subSections &&
          Array.isArray(section.subSections) &&
          section.subSections.map((sub, subIndex) => (
            <div key={subIndex} className="mb-6">
              {sub.subTitle && (
                <h3 className="mb-2 mt-6 text-xl font-semibold text-gray-800">
                  {sub.subTitle}
                </h3>
              )}

              {sub.points && (
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  {sub.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
      </div>
    );
  };

  if (!currentBlog) return <p>Blog not found</p>;

  const blog = currentBlog;

  return (
    <>
      <Breadcrumb
        title={blog.title || blog.blogTitle || "Blog Post"}
        backgroundImage="/img/header1.webp"
        items={[{ label: "blog.title", href: "/blog.slug", isCurrent: true }]}
      />
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Left Sidebar */}
            <div className="space-y-6 lg:col-span-1">
              {/* Search */}
              <Card className="rounded-lg border-0 bg-white shadow-sm">
                <CardContent className="p-4">
                  <h3 className="mb-3 font-semibold text-gray-800">Search</h3>
                  <div className="relative">
                    <Input
                      placeholder="Search..."
                      className="pr-10 border-gray-300 bg-white text-gray-700 focus:border-blue-600 focus:ring-blue-600"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                  </div>
                </CardContent>
              </Card>

              {/* Search Results */}
              {debouncedSearchTerm.trim() !== "" && (
                <Card className="rounded-lg border-0 bg-white shadow-sm">
                  <CardContent className="p-4">
                    <h3 className="mb-3 font-semibold text-gray-800">
                      Search Results
                    </h3>
                    <div className="space-y-4">
                      {searchResults.length > 0 ? (
                        searchResults.map((post) => (
                          <div key={post.slug} className="flex gap-3">
                            <Image
                              src={
                                post.mainImage ||
                                "/placeholder.svg?height=60&width=60&query=blog thumbnail" ||
                                "/placeholder.svg"
                              }
                              alt="Post thumbnail"
                              width={60}
                              height={60}
                              className="flex-shrink-0 rounded object-cover"
                            />
                            <div className="flex-1">
                              <a
                                href={`/blog/${post.slug}`}
                                className="font-bold leading-tight text-gray-700 line-clamp-3 transition-colors hover:text-blue-600"
                              >
                                {post.title || post.blogTitle}
                              </a>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-gray-600">
                          {'No posts found matching "'}
                          {debouncedSearchTerm}
                          {'".'}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Recent Posts */}
              <Card className="rounded-lg border-0 bg-white shadow-sm">
                <CardContent className="p-4">
                  <h3 className="mb-3 font-semibold text-gray-800">
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.length > 0 ? (
                      recentPosts.map((post) => (
                        <div key={post.slug} className="flex gap-3">
                          <Image
                            src={
                              post.mainImage ||
                              "/placeholder.svg?height=60&width=60&query=blog thumbnail" ||
                              "/placeholder.svg"
                            }
                            alt="Post thumbnail"
                            width={60}
                            height={60}
                            className="flex-shrink-0 rounded object-cover"
                          />
                          <div className="flex-1">
                            <a
                              href={`/blog/${post.slug}`}
                              className="font-bold leading-tight text-gray-700 line-clamp-3 transition-colors hover:text-blue-600"
                            >
                              {post.title || post.blogTitle}
                            </a>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-600">
                        No recent posts available.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card className="rounded-lg border-0 bg-white shadow-sm">
                <CardContent className="p-4">
                  <h3 className="mb-3 font-semibold text-gray-800">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags?.map((tag, index) => (
                      <button
                        key={index}
                        className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs text-gray-600 transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Blog Content */}
            <div className="lg:col-span-3">
              <Card className="rounded-lg border-0 bg-white py-0 shadow-sm">
                <CardContent className="p-0 py-0">
                  <div className="relative">
                    <Image
                      src={blog.mainImage}
                      alt={blog.title || blog.blogTitle || "Blog main image"}
                      width={800}
                      height={400}
                      className="w-full rounded-t-lg max-h-[400px] "
                    />
                  </div>
                  <div className="p-6">
                    <h1 className="mb-6 text-3xl font-bold text-gray-900">
                      {blog.title || blog.blogTitle}
                    </h1>

                    <div className="prose prose-gray max-w-none">
                      {/* Render all sections */}
                      {(blog.content || blog.sections)?.map((section, index) =>
                        renderSectionContent(section, index)
                      )}
                      {blog.faqs && blog.faqs.length > 0 && (
                        <div className="mt-14">
                          <h2 className="mb-6 text-2xl font-bold text-gray-900">
                            Frequently Asked Questions
                          </h2>

                          {blog.faqs.map((faq, index) => (
                            <Accordion
                              key={index}
                              sx={{
                                mb: 2,
                                borderRadius: 2,
                                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
                                "&:before": { display: "none" },
                              }}
                            >
                              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography fontWeight={600}>
                                  {faq.question}
                                </Typography>
                              </AccordionSummary>

                              <AccordionDetails>
                                <Typography
                                  sx={{ lineHeight: 1.7 }}
                                  color="text.secondary"
                                >
                                  {faq.answer}
                                </Typography>
                              </AccordionDetails>
                            </Accordion>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Gallery Section */}
                    {/* {blog.gallery && blog.gallery.length > 0 && (
                      <div className="mt-8">
                        <h3 className="mb-6 text-xl font-bold text-gray-800">
                          Gallery
                        </h3>
                        <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                          {blog.gallery.map((image, index) => (
                            <div key={index} className="aspect-square">
                              <Image
                                src={
                                  image ||
                                  "/placeholder.svg?height=200&width=200&query=blog gallery image" ||
                                  "/placeholder.svg"
                                }
                                alt={`Gallery image ${index + 1}`}
                                width={200}
                                height={200}
                                className="h-full w-full rounded-lg object-cover shadow-sm transition-shadow duration-200 hover:shadow-md"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )} */}

                    {/* Footer */}
                    <div className="mt-8 border-t border-gray-200 pt-6">
                      <div className="mb-4 flex flex-wrap gap-2">
                        <span className="text-sm text-gray-600">Tags:</span>
                        {blog.tags?.map((tag, index) => (
                          <button
                            key={index}
                            className="rounded-md border border-gray-300 bg-gray-50 px-2 py-1 text-xs text-gray-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                      <div className="text-sm text-gray-500">{blog.date}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
