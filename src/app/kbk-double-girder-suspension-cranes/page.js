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

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
export default function Home() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="KBK double-girder suspension cranes"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "KBK double-girder suspension cranes",
            href: "/",
            isCurrent: true,
          },
        ]}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-3xl font-bold text-[#676f77] text-center mb-6">
                Reliable transport also for large spans and high load capacities
              </h1>
              <div className="flex justify-center">
                <div className=" mt-2 mb-6 text-center h-1 w-12 bg-yellow-400"></div>
              </div>
              <p className="text-lg text-gray-700 mb-8 text-center">
                Double-girder suspension cranes from our KBK light crane system
                enable goods of all kinds to be transported with ease. They
                provide area-serving, overhead handling – and guarantee fast,
                reliable and precise positioning even for heavy loads and large
                span dimensions.
              </p>
              <div className="flex justify-center mb-6 items-center">
                {" "}
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/W5gmjITGpCk?si=ONPK0mQ3I6uOK4uB"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-[#676f77]">
                What other successful characteristics do they offer?
              </h3>
              <ul className="   list-disc text-lg ">
                <li className="text-gray-700 ">
                  Cost-effective implementation
                </li>
                <li className="text-gray-700 ">Modular system design</li>
                <li className="text-gray-700 ">Smooth and reliable handling</li>
                <li className="text-gray-700 ">
                  Favorable installation dimensions
                </li>
                <li className="text-gray-700 ">
                  Rated for loads weighing up to 3,200 kg
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="section pt-0">
          <Container maxWidth="md">
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
                  <span className="text-2xl font-bold  text-[#676f77]">
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
                  <span className="text-2xl font-bold  text-[#676f77]">
                    Technical data
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <section className=" ">
                  <div className="container mx-auto ">
                    <div className="max-w-6xl mx-auto">
                      <h3 className="text-xl  font-bold mb-4 text-[#676f77]">
                        Double-girder suspension cranes: maximum distances
                        between supports, crane spans and girder lengths
                      </h3>
                      <Image
                        src="/img/double-girde.webp"
                        height={700}
                        width={900}
                        alt=""
                        layout="reponsive"
                        className="w-100 mb-4"
                      ></Image>
                      <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="min-w-[200px] px-4 py-2 border text-left">
                                KBK profile
                              </th>
                              <th className="text-center px-4 py-2 border">
                                125
                              </th>
                              <th className="text-center px-4 py-2 border">
                                250
                              </th>
                              <th className="text-center px-4 py-2 border">
                                500
                              </th>
                              <th className="text-center px-4 py-2 border">
                                1,000
                              </th>
                              <th className="text-center px-4 py-2 border">
                                1,600
                              </th>
                              <th className="text-center px-4 py-2 border">
                                2,000
                              </th>
                              <th className="text-center px-4 py-2 border">
                                2,500
                              </th>
                              <th className="text-center px-4 py-2 border">
                                3,200
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              ["100 IKR", "3.6", "", "", "", "", "", "", ""],
                              ["100 IHT", "5.0", "", "", "", "", "", "", ""],
                              [
                                "I IKR",
                                "6.2",
                                "4.7",
                                "3.2",
                                "",
                                "",
                                "",
                                "",
                                "",
                              ],
                              [
                                "I IHT",
                                "9.0",
                                "6.0",
                                "4.0",
                                "",
                                "",
                                "",
                                "",
                                "",
                              ],
                              [
                                "II-L IKR",
                                "7.6",
                                "7.6",
                                "6.5",
                                "4.5",
                                "",
                                "",
                                "",
                                "",
                              ],
                              [
                                "II-L IHT",
                                "10.0",
                                "10.0",
                                "7.0",
                                "5.0",
                                "",
                                "",
                                "",
                                "",
                              ],
                              [
                                "II IKR",
                                "10.0",
                                "10.0",
                                "8.5",
                                "6.2",
                                "4.6",
                                "3.65",
                                "",
                                "",
                              ],
                              [
                                "II IHT",
                                "12.0",
                                "12.0",
                                "11.0",
                                "7.0",
                                "5.0",
                                "4.0",
                                "",
                                "",
                              ],
                              [
                                "II-H IKR",
                                "10.5",
                                "10.5",
                                "10.5",
                                "9.1",
                                "7.4",
                                "6.7",
                                "",
                                "",
                              ],
                              [
                                "II-H IHT",
                                "14.0",
                                "14.0",
                                "14.0",
                                "12.0",
                                "9.0",
                                "7.0",
                                "",
                                "",
                              ],
                              [
                                "III IKR",
                                "",
                                "",
                                "11.0",
                                "9.1",
                                "10.0",
                                "6.6",
                                "5.4",
                                "4.2",
                              ],
                              [
                                "III IHT",
                                "",
                                "",
                                "14.0",
                                "13.0",
                                "12.0",
                                "8.0",
                                "6.0",
                                "5.0",
                              ],
                            ].map((row, idx) => (
                              <tr key={idx}>
                                {row.map((cell, i) => (
                                  <td
                                    key={i}
                                    className={`px-4 py-2 border text-center ${
                                      i === 0 ? "font-medium text-left" : ""
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p className="text-sm text-gray-500 mt-4">
                        lKr: Span dimension <br />
                        IHT: Girder length
                      </p>
                    </div>
                  </div>
                </section>
              </AccordionDetails>
            </Accordion>
          </Container>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
