"use client";

import Image from "next/image";
import { Breadcrumb } from "@/componts/breadcrumb";
import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";
import ProductInformation from "./tabs";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";
export default function KbkSuspension() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="KBK stacker cranes"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "KBK stacker cranes",
            href: "/",
            isCurrent: true,
          },
        ]}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-6">
                Flexible handling equipment for stores and factories
              </h1>
              <div className="flex justify-center">
                <div className=" mt-2 mb-6 text-center h-1 w-12 bg-yellow-400"></div>
              </div>
              <p className="text-base md:text-lg text-gray-700 mb-8 text-center">
                Our KBK stacker cranes make it possible to complete all storage
                and handling tasks in one operating cycle without the need for
                ladders, order-picking trolleys or similar equipment. Unit
                loads, containers or pallets weighing up to 500 kg can be safely
                and reliably transported, sorted and stored.
              </p>

              <div className="bg-gray-50 rounded-lg border p-6">
                <ul className="space-y-3 list-disc pl-5">
                  <li className="text-sm md:text-base">
                    Combination of KBK double-girder suspension crane and
                    special stacker trolley
                  </li>
                  <li className="text-sm md:text-base">
                    Load handling attachments to match the load – forks, prongs,
                    grippers and other attachments can be supplied
                  </li>
                </ul>
              </div>
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
                <span className="text-2xl font-bold  text-[#676f77]">
                  The benefits at a glance
                </span>
              </AccordionSummary>
              <AccordionDetails>
                <ProductInformation />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <span className="text-2xl font-bold  text-[#676f77]">
                  Technical data
                </span>
              </AccordionSummary>
              <AccordionDetails>
                <section className=" ">
                  <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-5xl mx-auto">
                      <div className="mb-8">
                        <Image
                          src="/img/kbk-stacker-cranes.webp"
                          height={400}
                          width={400}
                          alt="KBK suspension monorails diagram"
                          className=" object-contain"
                        />
                      </div>
                      <p className="font-semibold text-gray-500 text-lg md:text-xl mb-6">
                        A KBK stacker crane mainly consists of a KBK
                        double-girder suspension crane combined with a special
                        stacker trolley and a load handling attachment.
                      </p>
                      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm bg-white">
                        <div className="flex justify-evenly text-sm text-gray-500 p-4 bg-gray-100 border-b">
                          <p>Stacker trolley selection</p>{" "}
                          <p>table Stacker trolley crane data</p>
                        </div>

                        <table className="min-w-full border border-gray-300 text-sm mt-6">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-4 py-2 border text-left">
                                Stacker trolley selection table
                              </th>
                              <th className="px-4 py-2 border text-center">
                                b [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                Size
                              </th>
                              <th className="px-4 py-2 border text-center">
                                H [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                T [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                KBK
                              </th>
                              <th className="px-4 py-2 border text-center">
                                lHT [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                lKr [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                lW KBK II-L [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                lW KBK II [mm]
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              [
                                "80",
                                "900",
                                "2",
                                "4110",
                                "3420",
                                "II-L",
                                "5000",
                                "4500",
                                "4000",
                                "6000",
                              ],
                              [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "II",
                                "6000",
                                "5500",
                                "3500",
                                "6000",
                              ],
                              [
                                "",
                                "1200",
                                "3",
                                "5110",
                                "4420",
                                "II-L",
                                "5000",
                                "4500",
                                "3000",
                                "5000",
                              ],
                              [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "II",
                                "6000",
                                "5500",
                                "3000",
                                "5000",
                              ],
                              [
                                "100",
                                "800",
                                "2",
                                "4110",
                                "3420",
                                "II-L",
                                "5000",
                                "4500",
                                "3500",
                                "6000",
                              ],
                              [
                                "",
                                "1000",
                                "3",
                                "5110",
                                "4420",
                                "II-lL",
                                "5000",
                                "4000",
                                "3000",
                                "5000",
                              ],
                              [
                                "1000",
                                "800",
                                "3",
                                "5110",
                                "4420",
                                "II-L",
                                "5000",
                                "4500",
                                "3000",
                                "5000",
                              ],
                              [
                                "125",
                                "700",
                                "2",
                                "4110",
                                "3420",
                                "II-L",
                                "5000",
                                "4500",
                                "3000",
                                "5000",
                              ],
                              [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "II",
                                "6000",
                                "5500",
                                "3500",
                                "5500",
                              ],
                              [
                                "900",
                                "700",
                                "2",
                                "5110",
                                "4420",
                                "II-L",
                                "5000",
                                "4500",
                                "3000",
                                "4500",
                              ],
                              [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "II",
                                "6000",
                                "5500",
                                "3000",
                                "4500",
                              ],
                              [
                                "160",
                                "550",
                                "2",
                                "4110",
                                "3420",
                                "II-L",
                                "5000",
                                "4500",
                                "3000",
                                "5000",
                              ],
                              [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "II",
                                "6000",
                                "5500",
                                "3000",
                                "5000",
                              ],
                              [
                                "800",
                                "550",
                                "3",
                                "5110",
                                "4420",
                                "II-L",
                                "5000",
                                "4500",
                                "2500",
                                "4000",
                              ],
                              [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "II",
                                "6000",
                                "5500",
                                "2500",
                                "4000",
                              ],
                              [
                                "200",
                                "480",
                                "2",
                                "4110",
                                "3420",
                                "II-L",
                                "5000",
                                "4500",
                                "2500",
                                "4500",
                              ],
                              [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "II",
                                "6000",
                                "5500",
                                "2500",
                                "4500",
                              ],
                              [
                                "650",
                                "480",
                                "3",
                                "5110",
                                "4420",
                                "II-L",
                                "5000",
                                "4500",
                                "2000",
                                "4000",
                              ],
                              [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "II",
                                "6000",
                                "5500",
                                "2000",
                                "4000",
                              ],
                              [
                                "250",
                                "400",
                                "2",
                                "4110",
                                "3420",
                                "II-L",
                                "5000",
                                "4500",
                                "2500",
                                "4500",
                              ],
                              [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "II",
                                "6000",
                                "5500",
                                "2500",
                                "4000",
                              ],
                              [
                                "600",
                                "400",
                                "3",
                                "5110",
                                "4420",
                                "II-L",
                                "5000",
                                "4500",
                                "2000",
                                "4000",
                              ],
                              [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "II",
                                "6000",
                                "5500",
                                "2000",
                                "3500",
                              ],
                              [
                                "315",
                                "370",
                                "2",
                                "4110",
                                "3420",
                                "II-L",
                                "4500",
                                "4000",
                                "2000",
                                "4000",
                              ],
                              [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "II",
                                "5000",
                                "4500",
                                "2000",
                                "3500",
                              ],
                              [
                                "600",
                                "370",
                                "3",
                                "5110",
                                "4150",
                                "II-L",
                                "4500",
                                "4000",
                                "1500",
                                "4000",
                              ],
                              [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "II",
                                "5500",
                                "5000",
                                "1500",
                                "3500",
                              ],
                              [
                                "400",
                                "350",
                                "2",
                                "4110",
                                "3420",
                                "II-L",
                                "4500",
                                "4000",
                                "1500¹",
                                "4000¹",
                              ],
                              [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "II",
                                "5000",
                                "4500",
                                "1500¹",
                                "3500¹",
                              ],
                              [
                                "600",
                                "350",
                                "3",
                                "5110",
                                "4150",
                                "II-L",
                                "4000",
                                "3500",
                                "1500¹",
                                "3500¹",
                              ],
                              [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "II",
                                "5000",
                                "4500",
                                "1500¹",
                                "3000¹",
                              ],
                              [
                                "500",
                                "300",
                                "2",
                                "4110",
                                "3420",
                                "II-L",
                                "3500",
                                "3000",
                                "-",
                                "3500¹",
                              ],
                              [
                                "",
                                "",
                                "",
                                "",
                                "",
                                "II",
                                "4500",
                                "4000",
                                "-",
                                "3500¹",
                              ],
                              [
                                "600",
                                "300",
                                "3",
                                "5110",
                                "4150",
                                "II",
                                "4500",
                                "4000",
                                "-",
                                "3000¹",
                              ],
                            ].map((row, index) => (
                              <tr
                                key={index}
                                className={
                                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                }
                              >
                                {row.map((cell, i) => (
                                  <td
                                    key={i}
                                    className={`px-4 py-2 border text-center ${
                                      i === 0 ? "font-medium text-left" : ""
                                    }`}
                                  >
                                    {cell || "-"}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>

                        <div className="p-4 bg-gray-50 text-sm text-gray-500 border-t">
                          <p>
                            2 x double trolley at each end of the crane for IHT
                            &gt; IKR + 240 mm. Dimension h3 increases by + 15mm.
                          </p>
                          <p> b = Load center distance</p>
                          <p>H = Unit height</p>
                          <p>T = Fork lifting height</p>
                          <p>IHT = Crane girder length</p>
                          <p>LKr = Crane span dimension</p>
                          <p>lw = Distance between supports</p>
                        </div>

                        <table className="min-w-full border border-gray-300 text-sm mt-6">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-4 py-2 border text-left">
                                Size
                              </th>
                              <th className="px-4 py-2 border text-center">
                                Crab span
                                <br />
                                dimension
                                <br />
                                lKa and eKa1 [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                Xmax [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                c [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                d [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                f<sup>2)</sup> [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                Max. lifting
                                <br />
                                speed [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                Weight for
                                <br />
                                max. H [kg]
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              [
                                "2",
                                "800",
                                "1000",
                                "650",
                                "160",
                                "135",
                                "8.0",
                                "300",
                              ],
                              [
                                "3",
                                "1000",
                                "1000",
                                "650",
                                "80",
                                "80",
                                "85",
                                "400",
                              ],
                              ["", "", "", "920", "", "", "", ""],
                            ].map((row, index) => (
                              <tr
                                key={index}
                                className={
                                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                }
                              >
                                {row.map((cell, i) => (
                                  <td
                                    key={i}
                                    className={`px-4 py-2 border text-center ${
                                      i === 0 ? "font-medium text-left" : ""
                                    }`}
                                  >
                                    {cell || "-"}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div className="p-4 bg-gray-50 text-sm text-gray-500 border-t">
                          <p>2) Dimension f  for pivot center</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </AccordionDetails>
            </Accordion>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}
