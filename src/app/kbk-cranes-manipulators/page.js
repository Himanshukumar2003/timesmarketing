"use client";

import Image from "next/image";
import {
  CheckCircle,
  Package,
  Anchor,
  Truck,
  Cable,
  Cog,
  PenToolIcon as Tool,
  Ruler,
  Wrench,
  ArrowRight,
} from "lucide-react";
import ProductInformation from "./tabs";
import { Breadcrumb } from "@/componts/breadcrumb";
import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";
import Container from '@mui/material/Container';
export default function Home() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="KBK cranes for manipulators"
        backgroundImage="/img/header1.webp"
        items={[
          { label: "KBK cranes for manipulators", href: "/", isCurrent: true },
        ]}
      />
      <div className="section bg-white">
  
        <Container maxWidth="lg" className="">
          <div className=" mx-auto px-4">
            <div className=" mx-auto">
              <h1 className="text-3xl md:text-3xl font-bold text-gray-900 text-center mb-6">
                Ergonomic and efficient
              </h1>
              <p className="text-lg text-gray-700 mb-8 text-center">
                Our KBK cranes for manipulators are an outstanding example for
                the versatility of our KBK light crane system. They can be
                designed to meet the exact needs of a wide variety of loads,
                processes and production conditions. They reliably accommodate
                kick-up forces with great positioning accuracy – and at high
                operating speeds. Further strengths include:
              </p>
            </div>
         
              <ul className="   list-disc text-lg ">
                <li className="text-gray-700 ">
                optimum positioning of workpieces and sub-assemblies into the most favorable positions for the relevant process
                </li>
                <li className="text-gray-700 ">
                workplaces, machinery and installations can be served from almost any direction

                </li>
                <li className="text-gray-700 ">
                installations can be built with steel or aluminum profile sections.

                </li>
               
              </ul>
              <ProductInformation></ProductInformation> 

          </div>
        </Container>

              </div>


      <Footer></Footer>
    </>
  );
}
