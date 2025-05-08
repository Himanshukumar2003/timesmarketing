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
        title="KBK Aluline"
        backgroundImage="/img/header1.webp"
        items={[{ label: "KBK Aluline", href: "/", isCurrent: true }]}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-3xl font-bold text-gray-900 text-center mb-6">
                Demag KBK Aluline Light Crane System
              </h1>
              <div className="flex justify-center">
                <div className=" mt-2 mb-6 text-center h-1 w-12 bg-yellow-400"></div>
              </div>
              <p className="text-lg text-gray-700 mb-8 text-center">
                International studies prove that ergonomic workplace design has
                an immediate impact on productivity. Benefit from the
                productivity opportunities that KBK Aluline has to offer. We
                have redefined smooth running characteristics for our KBK
                Aluline light crane system. The result: one of the
                smoothest-running systems on the market. For operating sequences
                that are more ergonomic and convenient than ever before. And now
                for loads weighing up to 2,000 kg.
              </p>
              <div className="flex justify-center mb-6 items-center">
                {" "}
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/W5gmjITGpCk?si=c9EGsdtGR7l7bLjN"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-lg text-gray-700">
                With our optimised and modular KBK Aluline components, spatial
                challenges and requirements are already taken into account
                during the planning stage. Reduced approach dimensions and thus
                improved utilisation of the available space are ensured by our
                optimised trolleys. During the project engineering phase,
                planners already gain more flexibility thanks to, for example,
                larger distances between suspensions and the option of an
                integrated conductor line, thus reducing installation work and
                assembly costs.
              </p>

              <Image
                src="/img/tablel.webp"
                height={100}
                width={100}
                layout="responsive"
                className="my-6"
                alt=""
              ></Image>
              <p className="text-lg text-gray-700 mt-6">
                Useful KBK additional components enable owners of installations
                to respond to changing requirements at any time. Variable travel
                path limitation, for example, makes it possible to limit travel
                motions in just a few steps. Quick and easy to install.
              </p>
            </div>
          </div>
        </section>
        <div className="section">
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
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">
                  <span className="text-2xl font-bold  text-[#676f77]">
                    Other features
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <section className=" bg-white">
                  <div className="">
                    <div className="">
                      <div className="mb-10">
                        <h3 className="text-xl font-semibold mb-4">
                          Profile sections
                        </h3>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              8 inside-running extruded profile sections in 5
                              sizes, two of which feature integrated conductor
                              lines
                            </span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              NEW: Demag KBK Aluline profile A28 for 50% larger
                              hanging distances
                            </span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              Easy to install thanks to simple bolted connecting
                              plates
                            </span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              Extremely low deadweight for high rigidity
                            </span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              Can be combined with older installations via
                              adapters
                            </span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>ITEM-compatible slots</span>
                          </li>
                        </ul>
                      </div>

                      <div className="mb-10">
                        <h3 className="text-xl font-bold  text-[#676f77] mb-4">
                          Profile sections at a glance
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              KBK Aluline A12 (120 mm headroom dimension)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              KBK Aluline A16 (160 mm headroom dimension)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              KBK Aluline A18 (180 mm headroom dimension)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              KBK Aluline A18-R with integrated conductor line
                            </span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              KBK Aluline A22 (220 mm headroom dimension)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              KBK Aluline A22-R with integrated conductor line
                            </span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              KBK Aluline A28 (280 mm headroom dimension)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              KBK Aluline A28-R with integrated conductor line
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl  mb-4  font-bold  text-[#676f77]">
                          Suspension variants
                        </h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Articulated Classic suspensions</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>Rigid KBK Ergo suspensions</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              Suspension from workshop ceilings or roof
                              structures (without the need for additional
                              columns to support the crane runway)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              Height-adjustable with millimeter precision
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
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
                <section className="">
                  <div className="">
                    <div className="">
                      <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="min-w-[180px] px-4 py-2 border">
                                Profile section/load capacity [kg]
                              </th>
                              <th className="text-center px-4 py-2 border">
                                100
                              </th>
                              <th className="text-center px-4 py-2 border">
                                150
                              </th>
                              <th className="text-center px-4 py-2 border">
                                250
                              </th>
                              <th className="text-center px-4 py-2 border">
                                500
                              </th>
                              <th className="text-center px-4 py-2 border">
                                750
                              </th>
                              <th className="text-center px-4 py-2 border">
                                1,000
                              </th>
                              <th className="text-center px-4 py-2 border">
                                1,250
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
                                2,600
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              [
                                "A12",
                                "4.6",
                                "3.7",
                                "2.9",
                                "2.0",
                                "1.4",
                                "1.0",
                                "",
                                "",
                                "",
                                "",
                                "",
                              ],
                              [
                                "A16",
                                "7.0",
                                "5.7",
                                "4.4",
                                "3.1",
                                "2.3",
                                "1.8",
                                "",
                                "",
                                "",
                                "",
                                "",
                              ],
                              [
                                "A18",
                                "8.0",
                                "8.0",
                                "6.4",
                                "4.5",
                                "3.7",
                                "3.2",
                                "",
                                "",
                                "",
                                "",
                                "",
                              ],
                              [
                                "A22",
                                "8.0",
                                "8.0",
                                "8.0",
                                "5.9",
                                "4.8",
                                "4.2",
                                "3.6",
                                "2.9",
                                "2.3",
                                "1.8",
                                "1.7",
                              ],
                              [
                                "A28",
                                "10.5",
                                "10.5",
                                "10.5",
                                "9.2",
                                "7.5",
                                "6.5",
                                "5.8",
                                "5.1",
                                "4.2",
                                "3.4",
                                "3.2",
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
                        Suspension distances [m]
                      </p>
                    </div>
                  </div>
                </section>
              </AccordionDetails>
            </Accordion>
          </Container>
          {/* Technical Data */}
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
