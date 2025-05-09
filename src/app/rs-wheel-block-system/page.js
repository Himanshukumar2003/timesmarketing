"use client";

import Image from "next/image";
import { Breadcrumb } from "@/componts/breadcrumb";
import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";
// import ProductInformation from "./tabs";
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
        title="RS wheel block system"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "RS wheel block system",
            href: "/",
            isCurrent: true,
          },
        ]}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container ">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-6">
                Performance and versatility – also under extreme conditions
              </h1>
              <div className="flex justify-center">
                <div className=" mb-6 text-center h-1 w-20 bg-yellow-400 mt-5"></div>
              </div>
              <p className="text-base md:text-lg text-gray-700 mb-8 ">
                Our RS wheel block system is suitable for applications in which
                a housing made of sheet steel is required, such as for impact
                loads. The RS system is also employed in high-temperature
                applications up to 250 °C or wherever a stainless steel housing
                is needed. Various travel wheel designs and possible connections
                to superstructures make the system suitable for universal
                applications.
              </p>
              <h4 className="text-3xl font-bold my-4 text-[#676f77]">
                Further strengths include:
              </h4>
              <div className="">
                <ul className="list-disc list-inside  ">
                  <li>
                    5 sizes with load capacities from 3.5 tonnes to 18 tonnes
                  </li>
                  <li>Housing made of steel or stainless steel</li>
                  <li>Many travel wheel contours as standard</li>
                  <li>
                    4 variants for connection to the customer`&lsquo;s
                    superstructure
                  </li>
                  <li>Driven by Demag offset geared motors</li>
                  <li>
                    Integrated connections, e.g. for torque brackets, guide
                    roller arrangements and buffers
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
                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  High performance for extreme applications
                </h4>
                <ul className="list-disc list-inside text-[#676f77] space-y-1">
                  <li>
                    Long service life of the steel and mechanical elements
                  </li>
                  <li>
                    Special design for high-temperature applications up to 150
                    °C
                  </li>
                  <li>Or with furnace carriage bearings up to 250 °C</li>
                  <li>
                    Stainless design for applications in the chemical industry,
                    the foodstuffs sector and in aggressive environments (size
                    RS 125)
                  </li>
                </ul>

                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  Versatile
                </h4>
                <ul className="list-disc list-inside text-[#676f77] space-y-1">
                  <li>Wide variety of standard travel wheel designs</li>
                  <li>Housing made of steel or stainless steel</li>
                  <li>
                    5 sizes with load capacities from 3.5 tonnes to 18 tonnes
                    (RS 125 to RS 400)
                  </li>
                </ul>

                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  Very easy assembly
                </h4>
                <ul className="list-disc list-inside text-[#676f77] space-y-1">
                  <li>
                    Load-bearing block enclosed on 5 sides with connecting
                    surfaces featuring multiple bore holes
                  </li>
                  <li>
                    Rapid installation and removal for all connection variants
                  </li>
                  <li>Reamed lateral bore holes for the pin connection</li>
                  <li>
                    Integrated connections for torque brackets, guide roller
                    arrangements and buffers
                  </li>
                </ul>

                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  Optimum drive
                </h4>
                <ul className="list-disc list-inside text-[#676f77] space-y-1">
                  <li>
                    Positive connection to the gearbox hollow shaft (involute
                    splined profile) guarantees reliable torque transmission
                  </li>
                  <li>
                    Particularly suited for reversing operation typically found
                    in travel applications
                  </li>
                  <li>
                    The Demag modular system includes the D1 torque bracket
                    (fitted direct to the wheel block) or D2 torque bracket
                    (fitted to the customer’s superstructure) to accommodate the
                    torque transmitted by the drive
                  </li>
                </ul>
                <Image
                  width={300}
                  height={400}
                  layout="responsive"
                  alt="lhs"
                  src="/img/RS160_A30_D2_3D_SW.png.webp"
                  className="w-full"
                />
                <p>
                  Torque brackets: D1 (fitted direct to the wheel block), D2
                  (fitted to the customer&apos; s superstructure)
                </p>

                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  Optimum design support
                </h4>
                <ul className="list-disc list-inside  text-[#676f77] space-y-1">
                  <li>
                    Optimum support for project engineering and design work –
                    e.g. with CAD files in various formats – thanks to web-based
                    planning tool
                    <a
                      href="https://www.drives.demag-designer.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline ml-1"
                    >
                      www.drives.demag-designer.com
                    </a>
                  </li>
                </ul>

                {/* <ProductInformation /> */}
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
                  <div className="container mx-auto">
                    <div className="max-w-5xl mx-auto">
                      <h4 className="text-xl font-bold my-4 text-[#676f77]">
                        Dimensions
                        <br />
                        (RS with spheroidal-graphite cast iron travel wheel with
                        two flanges)
                      </h4>
                      <Image
                        width={300}
                        height={400}
                        layout="responsive"
                        alt="lhs"
                        src="/img/rs160_masse_copy.png.webp"
                        className="w-full"
                      />

                      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm bg-white">
                        <table className="min-w-full border border-gray-300 text-sm ">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-4 py-2 border text-left">
                                Size
                              </th>
                              <th className="px-4 py-2 border text-center">
                                Max. load capacity
                                <br />
                                [t]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                Travel wheel dia.
                                <br />
                                [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                Weight
                                <br />
                                [kg]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                a4
                                <br />
                                [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                l5
                                <br />
                                [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                h7
                                <br />
                                [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                b1
                                <br />
                                [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                b2
                                <br />
                                [mm]
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              [
                                "RS 125",
                                "3.5",
                                "125",
                                "8.0",
                                "220",
                                "98",
                                "140",
                                "60",
                                "68",
                              ],
                              [
                                "RS 160",
                                "5",
                                "160",
                                "15",
                                "275",
                                "110",
                                "187",
                                "60",
                                "75",
                              ],
                              [
                                "RS 250",
                                "9",
                                "250",
                                "40",
                                "385",
                                "150",
                                "281",
                                "65",
                                "100",
                              ],
                              [
                                "RS 315",
                                "12",
                                "315",
                                "65",
                                "470",
                                "180",
                                "350",
                                "65",
                                "110",
                              ],
                              [
                                "RS 400",
                                "18",
                                "400",
                                "153",
                                "580",
                                "210",
                                "440",
                                "80",
                                "140",
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

                      <h4 className="text-xl font-bold my-4 text-[#676f77]">
                        Connection variants
                      </h4>
                      <Image
                        width={300}
                        height={300}
                        layout="responsive"
                        alt="lhs"
                        src="/img/Kopfanschluss_280.png.webp"
                        className="w-full"
                      />

                      <p className=" font-bold my-4 text-[#676f77]">
                        Top connection
                      </p>
                      <Image
                        width={300}
                        height={400}
                        layout="responsive"
                        alt="lhs"
                        src="/img/Bolzenanschluss_280.png.webp"
                        className="w-full"
                      />

                      <p className=" font-bold my-4 text-[#676f77]">
                        Pin connection
                      </p>
                      <Image
                        width={300}
                        height={400}
                        layout="responsive"
                        alt="lhs"
                        src="/img/Stirnanschluss_280.png.webp"
                        className="w-full"
                      />
                      <p className=" font-bold my-4 text-[#676f77]">
                        End connection
                      </p>

                      <Image
                        width={300}
                        height={400}
                        layout="responsive"
                        alt="lhs"
                        src="/img/Wangenanschluss_280.png.webp"
                        className="w-full"
                      />
                      <p className=" font-bold my-4 text-[#676f77]">
                        Side connection
                      </p>
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
