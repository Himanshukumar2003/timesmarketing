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
        <section className="py-12 p-4 md:py-16">
          <div className="container ">
            <div className="max-w-4xl mx-auto">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-6">
                Performance and Versatility – Even in Extreme Conditions
              </div>
              <div className="flex justify-center">
                <div className=" mb-6 text-center h-1 w-20 bg-yellow-400 mt-5"></div>
              </div>
              <p className="text-base md:text-lg text-gray-700 mb-8 ">
                The RS wheel block system is designed for applications where a
                sheet steel housing is required, especially in environments with
                impact loads. It is also suitable for high-temperature
                applications up to 250 °C or situations where a stainless steel
                housing is needed.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-8 ">
                With different travel wheel designs and multiple connection
                options to superstructures, the RS system can be used in a wide
                range of industrial applications.
              </p>
              <h4 className="text-3xl font-bold my-4 text-[#676f77]">
                Key Advantages:
              </h4>
              <div className="">
                <ul className="list-disc pl-10  ">
                  <li>
                    Available in 5 sizes with load capacities from 3.5 to 18
                    tonnes
                  </li>
                  <li>
                    Housing made of steel or stainless steel for durability and
                    strength
                  </li>
                  <li>Various travel wheel contours available as standard</li>
                  <li>
                    4 connection options for easy integration with customer
                    superstructures
                  </li>
                  <li>
                    Compatible with Demag offset geared motors for reliable
                    drive performance
                  </li>
                  <li>
                    Integrated connection points for accessories such as torque
                    brackets, guide rollers, and buffers
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
                  High Performance for Tough Applications
                </h4>
                <ul className="list-disc pl-10">
                  <li>Durable steel construction ensures long service life</li>
                  <li>
                    Designed for high-temperature environments up to 150 °C
                  </li>
                  <li>
                    With furnace carriage bearings, it can operate at
                    temperatures up to 250 °C
                  </li>
                  <li>
                    Stainless steel version (RS 125) available for chemical,
                    food, and other aggressive environments
                  </li>
                </ul>

                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  Versatile Design
                </h4>
                <ul className="list-disc pl-10">
                  <li>Wide selection of standard travel wheel designs</li>
                  <li>Housing available in steel or stainless steel</li>
                  <li>
                    Five sizes available with load capacities from 3.5 to 18
                    tonnes (RS 125–RS 400)
                  </li>
                </ul>

                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  Simple Installation
                </h4>
                <ul className="list-disc pl-10">
                  <li>
                    Five-sided enclosed load-bearing block with multiple
                    mounting holes
                  </li>
                  <li>
                    Quick installation and removal for all connection types
                  </li>
                  <li>Precision side holes for pin connections</li>
                  <li>
                    Built-in mounting points for torque brackets, guide rollers,
                    and buffers
                  </li>
                </ul>

                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  Reliable Drive Performance
                </h4>
                <ul className="list-disc pl-10">
                  <li>
                    Direct connection to the gearbox hollow shaft with an
                    involute spline profile for secure torque transfer
                  </li>
                  <li>Ideal for reversing travel applications</li>
                  <li>
                    Supports D1 torque bracket (mounted on the wheel block) or
                    D2 torque bracket (mounted on the customer’s structure) to
                    handle drive torque efficiently
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
                  <b>Torque Brackets</b>
                </p>

                <p className="py-2 text-lg">
                  <strong>D1:</strong> Mounted directly on the wheel block
                  Mounted on the customer’s superstructure
                </p>
                <p className="py-2 text-lg">
                  <strong>D2:</strong> Mounted on the customer’s superstructure
                </p>
                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  Optimum Design Support
                </h4>
                <p className="my-2">
                  Our web-based planning tool provides excellent support for
                  project engineering and design work. It offers useful
                  resources such as CAD files in various formats, making it
                  easier for engineers and designers to plan and integrate
                  systems efficiently.
                </p>

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
