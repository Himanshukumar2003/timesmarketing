import BlogHero from "./blog-hero";

export default function BlogContent({ title, content, img, className }) {
  return (
    <div className={` ${className}`}>
      {" "}
      <BlogHero img={img} />
      <div className="rounded-xl bg-white p-8 shadow-lg lg:col-span-2">
        <h2 className="mb-6 text-2xl font-bold text-slate-900 md:text-4xl">
          {title}
        </h2>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
          className="
  prose prose-lg max-w-none

  [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:my-6
  [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:my-5
  [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:my-4
  [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:my-4
  [&_h5]:text-lg [&_h5]:font-semibold [&_h5]:my-3
  [&_h6]:text-base [&_h6]:font-semibold [&_h6]:my-3

  [&_p]:text-slate-600 [&_p]:leading-relaxed [&_p]:my-4

  [&_ul]:pl-5 [&_ul]:my-5
  [&_ul]:list-disc
  [&_ol]:auto
  [&_ol]:pl-5 [&_ol]:my-5
  [&_li]:mb-1
  "
        />
      </div>
    </div>
  );
}
