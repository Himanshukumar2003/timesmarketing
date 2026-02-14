import Navbar from "@/componts/nav";
import SlickSlider from "@/componts/slider";
import CardsSection from "@/componts/products";
import UniqueFeatures from "@/componts/why-chose-us";
import Footer from "@/componts/footer";
import ServiceCards from "@/componts/services";
import GridGallery from "@/componts/gallery";
import About from "@/componts/about";
import { Container } from "@mui/material";
import Blogs from "./blog/_components/blog";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <SlickSlider></SlickSlider>
      <About></About>
      <UniqueFeatures />
      <CardsSection />
      <ServiceCards></ServiceCards>
      <div className=" bg-gray-50 section">
        <Container maxWidth="xl">
          <h2 className="text-3xl md:text-4xl text-center font-bold text-slate-800 leading-tight mb-10">
            Our Blogs
          </h2>
          <Blogs></Blogs>
        </Container>
      </div>
      <GridGallery></GridGallery>
      <Footer />
    </>
  );
}
