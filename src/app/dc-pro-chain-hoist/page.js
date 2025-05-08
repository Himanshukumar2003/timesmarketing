"use client";

import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
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
// import ProductInformation from "./tabs";
import { Breadcrumb } from "@/componts/breadcrumb";
import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";
import Container from "@mui/material/Container";
import { px } from "framer-motion";
import RopeGuideSection from "./information";
import ProductInformation from "./information";
import FeaturesSection from "./cads";
export default function Home() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="DC-Pro chain hoist"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "DC-Pro chain hoist",
            href: "/",
            isCurrent: true,
          },
        ]}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gray-50 p-4 py-16">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-3xl text-center font-bold text-[#676f77]  mb-6">
                The industry benchmark
              </h1>
              <p className="text-lg text-gray-700 mb-8 ">
                With our DC-Pro chain hoist, we meet our own high standards in
                terms of quality and innovation.The DC-Pro chain hoist is a
                fully featured, highly versatile chain hoist, which can be
                installed and put into service in minimum time. Many features
                that have to be ordered and bought as extras elsewhere are
                already integrated as standard. The result:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>all inclusive features at no extra cost</li>
                <li>two lifting speeds as standard</li>
                <li>
                  improved safety thanks to 24 V contactor control, operating
                  limit switches and elapsed operating time counter as standard
                </li>
                <li>
                  slipping clutch with automatic cut-out by means of speed
                  monitoring
                </li>
                <li>optimum ergonomics and ease of service</li>
                <li>main components are maintenance-free for up to 10 years</li>
              </ul>

              <Image
                src="/img/chain-hoist/02_DC-Pro_EN.gif"
                height={300}
                width={300}
                alt=" "
                layout="responsive"
                className="w-100 max-w-lg"
              ></Image>
              
              <div>
                <h2 className="text-2xl md:text-3xl text-[#676f77] font-bold text-center mb-10 mt-10">
                  Product information
                </h2>

                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography
                      component="span"
                      className="text-xl font-bold my-4 text-[#676f77]"
                    >
                      <span className="text-xl font-bold my-4 text-[#676f77]">
                      The benefits at a glance
                      </span>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                 <ProductInformation></ProductInformation>
                  
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                  >
                    <Typography component="span">
                      {" "}
                      <span className="text-xl font-bold my-4 text-[#676f77]">
                      Customer benefits at a glance
                      </span>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FeaturesSection></FeaturesSection>
                  </AccordionDetails>
                </Accordion>

             
              </div>
            </div>
          </div>
        </section>

        <div></div>
      </div>

      <Footer></Footer>
    </>
  );
}
