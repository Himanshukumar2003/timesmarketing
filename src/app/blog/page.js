import { Breadcrumb } from "@/componts/breadcrumb";
import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";

import Blogs from "./_components/blog";
import { Container } from "@mui/material";

export default async function BlogMainPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen ">
        <Breadcrumb
          title="Our Blogs"
          backgroundImage="/img/header1.webp"
          items={[{ label: "Blogs", href: "Blogs", isCurrent: true }]}
        />

        <Container maxWidth="xl">
          <Blogs></Blogs>
        </Container>
      </div>
      <Footer />
    </>
  );
}
