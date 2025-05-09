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
        title="DWS wheel sets"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "DWS wheel sets",
            href: "/",
            isCurrent: true,
          },
        ]}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-12 p-4 md:py-16">
          <div className="container ">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-6">
                DWS wheel sets
              </h1>
              <div className="flex justify-center">
                <div className=" mb-6 text-center h-1 w-20 bg-yellow-400 mt-5"></div>
              </div>
              <p className="text-base md:text-lg text-gray-700 mb-8 ">
                Our DWS wheel set performs transport duties on rails, including
                for heavier loads. We use it to build complete travel units of
                driven and non-driven design. These are equipped with our offset
                and angular geared motors from our modular range of industrial
                drives.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-8 ">
                The use of these proven DWS series-manufactured components
                offers a high level of functional reliability and guarantees
                ease of installation when the wheel is replaced. Thanks to its
                versatility, the DWS wheel set is not only used in the crane and
                materials handling sector, but also for related mechanical
                engineering solutions.
              </p>

              <div className="">
                <ul className="list-disc list-inside  ">
                  <li>
                    DWS wheel sets can be installed in hollow profile sections,
                    box-section girders and used as corner-bearing travel units
                  </li>
                  <li>
                    The entire wheel set can be installed without the need for
                    complicated alignment in corner bearing arrangements
                  </li>
                  <li>Complete configuration with torque bracket</li>
                  <li>
                    CAD drawings are available in various formats
                    at www.drives.demag-designer.com to support your design
                    process.
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
                    3 sizes with load capacities from 28 tonnes to 60 tonnes
                  </li>
                  <li>
                    The wheel sets can be installed in hollow profile sections,
                    box-section girders and used as corner-bearing travel units
                  </li>
                </ul>
                <Image
                  width={300}
                  height={400}
                  layout="responsive"
                  alt="lhs"
                  src="/img/dws-mit_Drehmomentstütze.webp"
                  className="w-full max-w-[400px]"
                />

                <p className="text-bold mb-4">
                  DWS wheel set in hollow profile <br />
                  section/as a corner-bearing travel unit
                </p>

                <ul className="list-disc list-inside text-[#676f77] space-y-1">
                  <li>
                    Simple track gauge adjustment thanks to interchangeable
                    distance washers between the anti-friction bearings and
                    retaining rings
                  </li>
                  <li>
                    Rapid installation and removal of the travel wheel from the
                    travel unit using conventional tools
                  </li>
                  <li>
                    Long service life thanks to standard re-lubrication facility
                  </li>

                  <li>
                    Perfect match with Demag offset or angular geared motors
                    with the corresponding torque bracket
                  </li>
                </ul>
                <Image
                  width={300}
                  height={400}
                  layout="responsive"
                  alt="lhs"
                  src="/img/dws-mit_Drehmomentstütze.webp"
                  className="w-full max-w-[400px]"
                />

                <ul className="list-disc list-inside text-[#676f77] space-y-1">
                  <li>
                    Flange-wear indicator on travel wheels that have a flange
                  </li>
                  <li>
                    Flange bearings provided with recesses to attach extractors
                  </li>
                  <li>
                    Also available without a flange bearing for direct
                    connection to a corresponding prepared superstructure
                  </li>
                  <li>
                    Optimum support for project engineering and design work –
                    e.g. with CAD files in various formats – thanks to web-based
                    planning tool www.drives.demag-designer.com
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
                      </h4>
                      <Image
                        width={300}
                        height={400}
                        layout="responsive"
                        alt="lhs"
                        src="/img/dws-wheel-sets-last.webp"
                        className="w-full max-w-[400px]"
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
                                Travel wheel dia. d1
                                <br />
                                [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                Weight
                                <br />
                                [kg]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                l5
                                <br />
                                [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                l6
                                <br />
                                [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                d2
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
                                "DWS 400",
                                "28",
                                "400",
                                "105",
                                "280",
                                "362",
                                "437",
                                "80",
                                "125 / 140",
                              ],
                              [
                                "DWS 500",
                                "40",
                                "500",
                                "142",
                                "320",
                                "402",
                                "537",
                                "90",
                                "140 / 170",
                              ],
                              [
                                "DWS 630",
                                "60",
                                "630",
                                "310",
                                "350",
                                "456",
                                "680",
                                "75",
                                "140 / 170",
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
