import Footer from "@/componts/footer";
import BlogDetailPageClient from "./BlogDetailPageClient";
import Navbar from "@/componts/nav";
export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  return (
    <>
      <Navbar></Navbar>
      <BlogDetailPageClient slug={slug} />
      <Footer></Footer>
    </>
  );
}
