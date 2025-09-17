import Navbar from "@/componts/nav";
import SlickSlider from "@/componts/slider";
import CardsSection from "@/componts/products";
import About from "./about";
import UniqueFeatures from "@/componts/why-chose-us";
import Footer from "@/componts/footer";
import ServiceCards from "@/componts/services";
import GridGallery from "@/componts/gallery";
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <SlickSlider></SlickSlider>
      <About></About>
      <UniqueFeatures />
      <CardsSection />
      <ServiceCards></ServiceCards>
      <GridGallery></GridGallery>
      <Footer />
    </>
  );
}
