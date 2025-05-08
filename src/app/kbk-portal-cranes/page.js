"use client";

import Image from "next/image";
import { Breadcrumb } from "@/componts/breadcrumb";
import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";
import ProductInformation from "./tabs";
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
        title="KBK portal cranes"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "KBK portal cranes",
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
                Mobile workplace units – load-bearing flexibility
              </h1>
              <p className="text-base md:text-lg text-gray-700 mb-8 text-center">
                Our KBK portal cranes are the ideal solution wherever a
                permanent crane would be too complicated or cannot be installed.
                They run on solid, even floors and can be easily maneuvered in
                any direction. This makes them ideal for a wide variety of
                loading and unloading operations in your factory as well as for
                maintenance and repair work. What other benefits do they offer?
              </p>

              <div className="bg-gray-50 rounded-lg border p-6">
                <ul className="space-y-3 list-disc pl-5">
                  <li className="text-sm md:text-base">
                    Load capacity up to 3,200 kg
                  </li>
                  <li className="text-sm md:text-base">
                    Crane girder span can be adjusted over a wide range
                  </li>
                  <li className="text-sm md:text-base">
                    Optimally suited for repair and assembly work
                  </li>
                  <li className="text-sm md:text-base">
                    Ideal for help in loading and unloading operations
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
                <Typography component="span">
                  {" "}
                  <span className="text-2xl font-bold  text-[#676f77]">
                    The benefits at a glance
                  </span>
                </Typography>
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
                <Typography component="span">
                  <span className="text-2xl font-bold  text-[#676f77]">
                    Technical data
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <section className=" ">
                  <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-5xl mx-auto">
                      <h3 className="text-xl font-bold my-4  text-[#676f77]">
                        EVP-KBK single-girder full-portal crane
                      </h3>

                      <div className="mb-8">
                        <Image
                          src="/img/kbk-portal-cranes.webp"
                          height={400}
                          width={400}
                          alt="KBK suspension monorails diagram"
                          className=" object-contain"
                        />
                      </div>

                      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm bg-white">
                        <table className="min-w-full border border-gray-300 text-sm mt-6">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-4 py-2 border text-left">
                                Load capacity [kg]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                Track gauge
                                <br />
                                lKr [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                Girder length
                                <br />
                                lHT [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                Max. lifting height
                                <br />H [mm]
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              [
                                "250",
                                "2,300 – 5,300",
                                "3,000 – 6,000",
                                "2,671",
                              ],
                              [
                                "315",
                                "2,300 – 5,300",
                                "3,000 – 6,000",
                                "2,619",
                              ],
                              [
                                "400",
                                "2,300 – 5,300",
                                "3,000 – 6,000",
                                "2,619",
                              ],
                              [
                                "500",
                                "2,300 – 4,300",
                                "3,000 – 5,000",
                                "2,619",
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
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <h3 className="text-xl font-bold  text-[#676f77] my-4">
                        ZVP-KBK double-girder full-portal crane
                      </h3>

                      <div className="mb-8">
                        <Image
                          src="/img/kbk-portal-cranes2.webp"
                          height={400}
                          width={400}
                          alt="KBK suspension monorails diagram"
                          className=" object-contain"
                        />
                      </div>

                      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm bg-white">
                        <table className="min-w-full border border-gray-300 text-sm mt-6">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-4 py-2 border text-left">
                                Load capacity [kg]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                Track gauge
                                <br />
                                lKr [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                Girder length
                                <br />
                                lHT [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                Max. lifting height
                                <br />H [mm]
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              [
                                "400",
                                "2,300 – 5,300",
                                "3,000 – 6,000",
                                "2,844",
                              ],
                              [
                                "500",
                                "2,300 – 5,300",
                                "3,000 – 6,000",
                                "2,844",
                              ],
                              [
                                "630",
                                "2,300 – 5,300",
                                "3,000 – 6,000",
                                "2,755",
                              ],
                              [
                                "800",
                                "2,300 – 4,300",
                                "3,000 – 5,000",
                                "2,755",
                              ],
                              [
                                "1,000",
                                "2,300 – 4,300",
                                "3,000 – 5,000",
                                "2,755",
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
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <h3 className="text-xl  my-4 font-bold  text-[#676f77]">
                        Single-girder full-portal crane with I-beam girder
                      </h3>
                      <div className="mb-8">
                        <Image
                          src="/img/kbk-portal-cranes3.webp"
                          height={400}
                          width={400}
                          alt="KBK suspension monorails diagram"
                          className=" object-contain"
                        />
                        <h3 className="mt-4 text-xl font-bold  text-[#676f77]">
                          D-IVP single-girder full-portal crane with I-beam
                          girder
                        </h3>
                      </div>
                      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm bg-white">
                        <table className="min-w-full border border-gray-300 text-sm mt-6">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-4 py-2 border text-left">
                                Load capacity [kg]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                Track gauge
                                <br />
                                lKr [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                Girder length
                                <br />
                                lHT [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                Max. lifting height
                                <br />H [mm]
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              [
                                "250",
                                "3,105 - 6,105",
                                "3,445 - 6,445",
                                "2,584",
                              ],
                              [
                                "500",
                                "3,105 - 6,105",
                                "3,445 - 6,445",
                                "2,532",
                              ],
                              [
                                "1,000",
                                "3,140 - 6,140",
                                "3,510 - 6,510",
                                "2,443",
                              ],
                              [
                                "1,600",
                                "3,160 - 6,160",
                                "3,690 - 6,690",
                                "2,339",
                              ],
                              [
                                "2,000",
                                "3,160 - 6,160",
                                "3,690 - 6,690",
                                "2,339",
                              ],
                              [
                                "2,500",
                                "3,200 - 6,200",
                                "3,770 - 6,770",
                                "2,339",
                              ],
                              [
                                "3,200",
                                "3,200 - 6,200",
                                "3,770 - 6,770",
                                "2,248",
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
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>
              </AccordionDetails>
            </Accordion>
          </Container>
        </div>
        {/* Technical Data */}
      </div>
      <Footer />
    </>
  );
}
