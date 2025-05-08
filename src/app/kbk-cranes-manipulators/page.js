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
import Container from "@mui/material/Container";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function Home() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="KBK Cranes For Manipulators"
        backgroundImage="/img/header1.webp"
        items={[
          { label: "KBK Cranes For Manipulators", href: "/", isCurrent: true },
        ]}
      />
      <div className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className=" mx-auto px-4">
              <div className=" mx-auto">
                <h1 className="text-3xl md:text-3xl font-bold text-gray-900 text-center mb-6">
                  Ergonomic and efficient
                </h1>
                <div className="flex justify-center">
                  <div className=" mt-2 mb-6 text-center h-1 w-12 bg-yellow-400"></div>
                </div>
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
                  optimum positioning of workpieces and sub-assemblies into the
                  most favorable positions for the relevant process
                </li>
                <li className="text-gray-700 ">
                  workplaces, machinery and installations can be served from
                  almost any direction
                </li>
                <li className="text-gray-700 ">
                  installations can be built with steel or aluminum profile
                  sections.
                </li>
              </ul>
              <div className="pt-10">
                <div className="flex justify-center   flex-col items-center">
                  <h4 className="text-3xl font-bold my-4 text-[#676f77]">
                    Product information
                  </h4>
                  <div className=" mt-2 mb-6 text-center h-1 w-12 bg-yellow-400"></div>
                </div>

                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">
                      {" "}
                      <span className="text-2xl font-bold  text-[#676f77]">
                        The benefits at a glance
                      </span>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ProductInformation></ProductInformation>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
