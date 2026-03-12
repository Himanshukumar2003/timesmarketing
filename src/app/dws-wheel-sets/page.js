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
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-6">
                DWS Wheel Sets
              </div>
              <div className="flex justify-center">
                <div className=" mb-6 text-center h-1 w-20 bg-yellow-400 mt-5"></div>
              </div>
              <p className="text-base md:text-lg text-gray-700 mb-8 ">
                The DWS wheel set is designed for transport operations on rails,
                including applications that involve heavier loads. It can be
                used to create complete travel units, available in both driven
                and non-driven versions. These units are equipped with offset
                and angular geared motors from our modular industrial drive
                system.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-8 ">
                Using the reliable DWS series components ensures strong
                performance, high functional reliability, and easy installation,
                especially when replacing a wheel. Because of its flexible
                design, the DWS wheel set is widely used not only in crane and
                material handling systems, but also in various mechanical
                engineering applications.
              </p>

              <div className="">
                <h3 className="text-xl font-bold my-4 text-[#676f77]">
                  Key Features:
                </h3>

                <ul className="list-disc pl-10">
                  <li>
                    Can be installed in hollow profile sections and box-section
                    girders, and used as corner-bearing travel units
                  </li>
                  <li>
                    The entire wheel set can be installed without complicated
                    alignment in corner-bearing arrangements
                  </li>
                  <li>
                    Available as a complete configuration with a torque bracket
                  </li>
                  <li>
                    CAD drawings available in various formats to support your
                    design process
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
                  High Performance for Demanding Applications
                </h4>

                <p>
                  The DWS wheel sets are designed to handle heavy-duty
                  applications with reliable performance.
                </p>

                <ul className="list-disc pl-10 text-[#676f77] space-y-1">
                  <li>
                    Available in 3 sizes with load capacities ranging from 28 to
                    60 tonnes
                  </li>
                  <li>
                    Can be installed in hollow profile sections and box-section
                    girders
                  </li>
                  <li>
                    {" "}
                    Suitable for use as corner-bearing travel units for various
                    industrial systems
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

                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  DWS Wheel Set in Hollow Profile Section / Corner-Bearing
                  Travel Unit
                </h4>

                <p className="text-bold mb-4">
                  The DWS wheel set can be installed in hollow profile sections
                  and used as a corner-bearing travel unit, making it a flexible
                  solution for many rail-based transport systems.
                </p>

                <ul className="list-disc pl-10 text-[#676f77] space-y-1">
                  <li>
                    Easy track gauge adjustment using interchangeable distance
                    washers placed between the anti-friction bearings and
                    retaining rings
                  </li>
                  <li>
                    Quick installation and removal of the travel wheel from the
                    travel unit with standard tools
                  </li>
                  <li>
                    Long service life thanks to the built-in standard
                    re-lubrication facility
                  </li>

                  <li>
                    Perfectly matched with Demag offset or angular geared motors
                    using the appropriate torque bracket for reliable
                    performance
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

                <ul className="list-disc pl-10 text-[#676f77] space-y-1">
                  <li>
                    Flange wear indicator provided on travel wheels with flanges
                    for easy inspection
                  </li>
                  <li>
                    Flange bearings designed with recesses to allow simple
                    attachment of extractors
                  </li>
                  <li>
                    Option available without flange bearings for direct mounting
                    to a prepared superstructure
                  </li>
                  <li>
                    Engineering support tools available, including CAD files in
                    multiple formats through the web-based planning platform
                  </li>
                </ul>

                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  Optimum Drive
                </h4>
                <ul className="list-disc pl-10 text-[#676f77] space-y-1">
                  <li>
                    Secure connection to the gearbox hollow shaft with an
                    involute splined profile for dependable torque transfer
                  </li>
                  <li>Ideal for reversing travel applications</li>
                  <li>
                    Supports D1 torque bracket (mounted on the wheel block) or
                    D2 torque bracket (mounted on the customer’s superstructure)
                    to manage drive torque efficiently
                  </li>
                </ul>

                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  Optimum Design Support
                </h4>
                <ul className="list-disc pl-10  text-[#676f77] space-y-1">
                  <li>
                    Provides strong support for project planning and design,
                    with CAD files in various formats available through the
                    online planning tool.
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
