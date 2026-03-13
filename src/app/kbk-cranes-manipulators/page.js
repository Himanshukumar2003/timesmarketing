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

export const metadata = {
  title: "KBK Cranes for Manipulators in India",
  description:
    "Timeskrane offers KBK cranes for manipulators in India, designed for smooth movement, precise handling, and safe operations to improve productivity and workflow.",
  keywords: [
    "Crane manipulators in India",
    "Manipulator crane",
    "Material manipulators",
    "KBK Manipulator Cranes in India",
    "KBK light crane system",
    "KBK Aluline light crane system",
    "KBK cranes for manipulators India",
  ],
  alternates: {
    canonical: "https://www.timeskrane.com/kbk-cranes-manipulators",
  },
  openGraph: {
    title: "KBK Cranes for Manipulators in India | Timeskrane",
    description:
      "High-performance KBK cranes for manipulators in India ensuring precise handling, smooth movement, and improved industrial productivity.",
    url: "https://www.timeskrane.com/kbk-cranes-manipulators",
    siteName: "Timeskrane",
    locale: "en_IN",
    type: "website",
  },
};

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
                <div className="text-3xl md:text-3xl font-bold text-gray-900 text-center mb-6">
                  Ergonomic, efficient, and built around your needs
                </div>
                <div className="flex justify-center">
                  <div className=" mt-2 mb-6 text-center h-1 w-12 bg-yellow-400"></div>
                </div>
                <p className="text-lg text-gray-700 mb-8 text-center">
                  When it comes to flexibility, our KBK cranes for manipulators
                  are a perfect example of what the KBK light crane system can
                  really do. They can be tailored to suit a wide range of loads,
                  processes, and production environments — handling kick-up
                  forces reliably while maintaining high positioning accuracy,
                  even at fast operating speeds.
                </p>
              </div>

              <h4 className="text-xl font-bold my-4 text-[#676f77]">
                Here&apos;s what else they bring to the table:
              </h4>

              <ul className="   list-disc text-lg pl-10">
                <li>
                  Workpieces and sub-assemblies can be positioned precisely into
                  the best possible position for each process
                </li>
                <li>
                  Workplaces, machinery, and installations can be reached from
                  almost any direction
                </li>
                <li>
                  Can be built using either steel or aluminium profile sections
                  — whichever suits your setup best
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
