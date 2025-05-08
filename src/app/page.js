import Navbar from "@/componts/nav";
import SlickSlider from "@/componts/slider";
import Image from "next/image";
import CardsSection from "@/componts/products";
import About from "./about";
import WhychooseUs from "@/componts/why-chose-us";
import UniqueFeatures from "@/componts/why-chose-us";
import Footer from "@/componts/footer";
import ServiceCards from "@/componts/services";
import Testimonials from "@/componts/testimonials ";
import { FiChevronsRight } from "react-icons/fi";
import Link from "next/link";
import eotCranesData from "./apis/eot-cranes";
export default function Home() {
  return (
<>
  <Navbar></Navbar>
  <SlickSlider></SlickSlider>
  <About></About>
  <UniqueFeatures/>
  <CardsSection/>
  <ServiceCards ></ServiceCards>
  <Testimonials></Testimonials>
  <Footer/>
</>
  );
}
