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
        title="KBK single-girder suspension cranes
"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "KBK single-girder suspension cranes",
            href: "/",
            isCurrent: true,
          },
        ]}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className=" py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-3xl font-bold text-gray-900 text-center mb-6">
                Safe and reliable transport at high level
              </h1>
              <div className="flex justify-center">
                <div className=" mt-2 mb-6 text-center h-1 w-12 bg-yellow-400"></div>
              </div>
              <p className="text-lg text-gray-700 mb-8 text-center">
                Single-girder suspension cranes from our KBK light crane system
                enable you to achieve fast and reliable area-serving overhead
                handling and exact positioning of a wide variety of goods. With
                our optimised and modular KBK components, spatial challenges and
                requirements are already taken into account during the planning
                stage.
              </p>
              <div className="flex justify-center mb-6 items-center">
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
                Reduced approach dimensions and thus improved utilisation of the
                available space are ensured by our optimised trolleys. During
                the project engineering phase, planners already gain more
                flexibility thanks to, for example, larger distances between
                suspensions and the option of an integrated conductor line, thus
                reducing installation work and assembly costs.
              </p>

              <p className="text-lg text-gray-700 mt-6">
                Useful KBK additional components enable owners of installations
                to respond to changing requirements at any time. Variable travel
                path limitation, for example, makes it possible to limit travel
                motions in just a few steps. Quick and easy to install. What
                qualities do our KBK single-girder suspension cranes offer?
              </p>
              <ul className="mt-4  list-disc">
                <li>Modular system design</li>
                <li>Smooth and reliable handling</li>
                <li>Smooth manual travel</li>
                <li>Cost-effective implementation</li>
                <li>
                  Customer-specific configuration to meet individual
                  requirements
                </li>
                <li>Reduced approach dimensions</li>
                <li>Larger distances between suspensions</li>
                <li>Lower assembly costs</li>
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
                  {" "}
                  <span className="text-2xl font-bold  text-[#676f77]">
                    Technical data
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <section className="">
                  <div className="container max-w-8xl mx-auto">
                    <div className="max-w-5xl mx-auto">
                      <Image
                        src="/img/teble-2.webp"
                        height={100}
                        width={100}
                        layout="responsive"
                        className="   max-w-lg"
                        alt=""
                      ></Image>
                      <div className="overflow-x-auto">
                        <p className="text-sm text-gray-500 mt-4">
                          Load capacity [kg]
                        </p>
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
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              ["I lKr", "2.85", "2.6", "", "", "", "", ""],
                              ["I IHT", "3.0", "3.0", "", "", "", "", ""],
                              [
                                "II lKr",
                                "4.65",
                                "4.6",
                                "2.85",
                                "1.62",
                                "",
                                "",
                                "",
                              ],
                              [
                                "II IHT",
                                "6.0",
                                "5.0",
                                "3.0",
                                "2.0",
                                "",
                                "",
                                "",
                              ],
                              [
                                "II-L lKr",
                                "7.41",
                                "7.01",
                                "6.1",
                                "3.7",
                                "1.75",
                                "",
                                "",
                              ],
                              [
                                "II-L IHT",
                                "8.0",
                                "8.0",
                                "7.0",
                                "4.0",
                                "2.0",
                                "",
                                "",
                              ],
                              [
                                "II lKr",
                                "7.75",
                                "7.75",
                                "7.45",
                                "6.0",
                                "3.5",
                                "",
                                "",
                              ],
                              [
                                "II IHT",
                                "8.0",
                                "8.0",
                                "8.0",
                                "7.0",
                                "4.0",
                                "",
                                "",
                              ],
                              [
                                "II-H lKr",
                                "",
                                "10.5",
                                "10.5",
                                "9.3",
                                "6.5",
                                "",
                                "",
                              ],
                              [
                                "II-H IHT",
                                "",
                                "14.0",
                                "13.0",
                                "11.0",
                                "7.0",
                                "",
                                "",
                              ],
                              [
                                "III lKr",
                                "",
                                "",
                                "",
                                "8.4",
                                "6.3",
                                "4.3",
                                "3.6",
                              ],
                              [
                                "III IHT",
                                "",
                                "",
                                "",
                                "9.0",
                                "7.0",
                                "5.0",
                                "4.0",
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

                        <p>lKr: Span dimension</p>
                        <p>IHT: Girder length</p>

                        <p>1. Double trolley unit</p>
                        <p>2. Quadruple trolley unit</p>
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
                  {" "}
                  <span className="text-2xl font-bold  text-[#676f77]">
                    Accessories
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="px-4 md:px-10 py-10 text-gray-800 max-w-8xl mx-auto space-y-10">
                  {/* Top Section with Image and Text */}

                  <div className="flex justify-center mb-6 items-center">
                    <div className="max-w-8xl mx-auto">
                      <Image
                        src="/img/singelgriderAc1.webp"
                        alt="Trolley Limit Stop"
                        width={300}
                        height={300}
                        layout="responsive"
                        className="w-full max-w-md mx-auto"
                      />
                      <p className="text-justify leading-relaxed">
                        The Demag KBK trolley limit stop improves the modularity
                        of the light crane system. Buffers can be very easily
                        installed at any time, which enables KBK Steel (I, II,
                        II-H) and Aluline (I, 22) crane equipment to be buffered
                        along the crane girder or crane runway. A temporary or
                        long-term limit of the long and cross-travel motions can
                        be installed in no time at all. The trolley limit stop
                        is fitted with Demag cellular plastic buffers and can be
                        installed under the rail. The benefit: The noise level
                        in the event of unavoidable collisions can be reduced.
                      </p>
                    </div>
                  </div>

                  {/* Embedded Video */}
                  <div className="aspect-">
                    <div className="flex justify-center mb-6 items-center">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/KF3l3702AQE?si=_61JTAI10zXz0WyH"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>

                  {/* Bottom Section with Image and Description */}
                  <div className="flex justify-center">
                    <div className="space-y-6 max-w-4xl">
                      <p className="text-justify leading-relaxed">
                        Two variants of the trolley limit stop can be supplied.
                        The difference lies in the time frame for use. Travel
                        along the crane runway or girder can be limited in the
                        long term using the bolted variant. They can be
                        installed at variable positions along the rails.
                      </p>

                      {/* Image Row */}
                      <div className="grid md:grid-cols-2 gap-6 items-start">
                        <div className="space-y-2 text-center">
                          <Image
                            src="/img/singelAc2.webp"
                            height={300}
                            width={300}
                            layout="responsive"
                            alt="Bolt & Lever Type"
                            className="w-full max-w-md mx-auto max-h-[280px]"
                          />
                          <div className="text-sm italic">
                            Demag trolley limit stop with bolt for long-term
                            applications.
                          </div>
                        </div>

                        <div className="text-justify leading-relaxed">
                          <Image
                            src="/img/singelgriderAc1.webp"
                            height={300}
                            width={300}
                            layout="responsive"
                            alt="Bolt & Lever Type"
                            className="w-full max-w-md mx-auto "
                          />

                          <div className="text-sm italic">
                            Demag trolley limit stop with lever for temporary
                            installation.
                          </div>
                        </div>
                      </div>

                      <p>
                        The variant with a lever is also suitable for variable
                        installation, but it can be released and repositioned
                        more quickly and easily thanks to the lever. Temporary
                        limit stops for the long and cross-travel motions can be
                        easily installed in this way. For example, this may be
                        needed to close the end of a track, to fix a crane or
                        trolley in position or to secure the crane for
                        installation or service work.
                      </p>

                      {/* Technical Drawings and Part Numbers */}
                      <div className="flex justify-center  items-center ">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 justify-center  gap-6 text-center text-sm ">
                          <div>
                            <img
                              src="/img/singele-grider-chart.webp"
                              alt="Trolley Stop Bolt"
                              className="mx-auto"
                            />
                            <p className="mt-2">
                              Demag KBK trolley limit stop with bolt
                              <br />
                              Part no.: 858 055 44
                            </p>
                          </div>
                          <div>
                            <img
                              src="/img/singel-griderchart2.webp"
                              alt="Trolley Stop Lever"
                              className="mx-auto"
                            />
                            <p className="mt-2">
                              Demag KBK trolley limit stop with lever
                              <br />
                              Part no.: 858 050 44
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </Container>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
