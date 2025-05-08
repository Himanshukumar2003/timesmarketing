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
        title="DCS-Pro chain hoist"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "DCS-Pro chain hoist",
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
              Convenient operation and load handling with one hand

              </h1>
              <p className="text-lg text-gray-700 mb-8 ">
              The DCM-Pro Manulift was developed for handling loads quickly and safely with only one hand. The DCM-Pro is based on the lifting unit of the DC-Pro chain hoist and the DSM-C control unit. Thanks to the control unit which is rigidly connected to the load handling attachment, the operator only needs one hand to operate the hoist and guide the load. Further strengths:


              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
              <li>convenient operation and load guidance with one hand</li>
              <li>for all Manulift load handling attachments or specially developed load handling attachments</li>
              <li>simple replacement thanks to quick-change coupling</li>
              <li>suitable for right-hand and left-hand operation</li>
              </ul>
<h4 className="text-xl text-center font-bold text-[#676f77] ">DemagcranesTV</h4>
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
