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
        title="LRS travel wheel system"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "LRS travel wheel system",
            href: "/",
            isCurrent: true,
          },
        ]}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-12 p-4 md:py-16">
          <div className="container ">
            <div className="max-w-4xl mx-auto  text-start">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900  mb-6">
                Ready-to-Install System for a Perfect Fit
              </div>
              <div className="flex">
                <div className=" mb-6 text-center h-1 w-20 bg-yellow-400 mt-5"></div>
              </div>
              <p className="text-base md:text-lg text-gray-700 mb-8 ">
                The LRS travel wheel system is designed to help you meet your
                drive requirements quickly and reliably. It is ideal for
                applications such as transport, feeding, transfer, distribution,
                and merging operations.
              </p>
              <p>
                We provide travel wheels and drive units that suit a wide range
                of applications. These systems come ready to install, feature
                proven designs, and are available at highly competitive prices.
              </p>
              <div className="">
                <h4>Key Benefits of the LRS Travel Wheel System:</h4>

                <ul className=" list-disc   ml-10  mt-4">
                  <li>
                    Suitable for wheel loads up to 6.5 tonnes and travel speeds
                    up to 240 m/min
                  </li>
                  <li>
                    High-quality spheroidal-graphite cast iron housing for
                    strength and durability
                  </li>
                  <li>
                    Five connection surfaces that allow multiple mounting and
                    connection options
                  </li>
                  <li>
                    Modular design for greater flexibility and adaptability
                  </li>
                  <li>Ideal for OEM applications</li>
                  <li>Maintenance-free operation for long-term reliability</li>
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
                  Flexibility and Practical Design
                </h4>
                <p>
                  The LRS travel wheel system is built on a modular concept,
                  making it easy to adapt to different design and application
                  requirements.
                </p>

                <h4 className="text-2xl font-bold my-4 text-[#676f77]">
                  Key Features:
                </h4>

                <ul className="list-disc ml-10">
                  <li>
                    Modular system designed to meet practical engineering needs
                  </li>
                  <li>
                    Available in three sizes for loads up to 6.5 tonnes and
                    travel speeds up to 240 m/min
                  </li>
                  <li>
                    Ideal for engineers who want to build their own customized
                    solutions using simple component selection
                  </li>
                  <li>
                    Can be extended later quickly and cost-effectively if system
                    requirements change
                  </li>
                  <li>
                    Suitable for push-travel operation or can be fitted with
                    Demag offset and angular geared motors as individual or
                    central drive units
                  </li>
                </ul>

                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  Cost-Effective Solution
                </h4>
                <ul className="   list-disc ml-10">
                  <li>
                    Attractively priced standard modules with short delivery
                    times and high availability
                  </li>
                  <li>
                    Consistently high quality thanks to reliable series
                    productionConsistent high quality ensured through reliable
                    series production
                  </li>
                </ul>

                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  Wide Range of Mounting Options
                </h4>
                <ul className="   list-disc ml-10">
                  <li>Horizontal guide rollers</li>
                  <li>Buffers</li>
                  <li>Pin connection set</li>
                  <li>Rail sweeping system</li>
                  <li>Laser alignment jig</li>
                </ul>
                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  Additional Advantages
                </h4>
                <ul className="list-disc ml-10">
                  <li>
                    Maintenance-free, patented travel wheel bearing arrangement
                  </li>
                  <li>
                    Gearbox and travel wheel connected via a hollow shaft with
                    involute splines and a perfectly matched torque bracket
                  </li>
                  <li>
                    All travel wheels include hub splines according to DIN 5480
                  </li>
                  <li>
                    Travel units provide good ground clearance for rail travel
                    at floor level
                  </li>
                  <li>
                    High-tensile bolted connections with special surface
                    protection included in the delivery
                  </li>
                </ul>

                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  Engineering and Design Support
                </h4>

                <p className="my-2">
                  For easier planning and project engineering, our web-based
                  planning tool provides valuable design support, including CAD
                  files in various formats. This helps engineers and designers
                  plan and integrate systems more efficiently.
                </p>
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
                        Travel speeds and load capacities:
                      </h4>
                      <Image
                        width={300}
                        height={400}
                        layout="responsive"
                        alt="lhs"
                        src="/img/LRS-Screenshot_aus-prospekt.webp"
                        className="w-full"
                      />

                      <h4 className="text-xl font-bold my-4 text-[#676f77]">
                        LRS travel wheel system dimensions
                      </h4>
                      <Image
                        width={300}
                        height={400}
                        layout="responsive"
                        alt="lhs"
                        src="/img/LRS_18_B.png.webp"
                        className="w-full"
                      />

                      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm bg-white">
                        <table className="min-w-full border border-gray-300 text-sm ">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-4 py-2 border text-left">
                                Size / travel wheel
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
                                l1
                                <br />
                                [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                d1
                                <br />
                                [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                hA / hF
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
                                "LRS 200 A",
                                "2.5",
                                "175",
                                "15.3",
                                "250",
                                "175",
                                "204.5",
                                "52",
                                "70",
                              ],
                              [
                                "LRS 200 F",
                                "1.2",
                                "200",
                                "15.1",
                                "200",
                                "200",
                                "217",
                                "-",
                                "70",
                              ],
                              [
                                "LRS 250 A",
                                "3.5",
                                "220",
                                "27.6",
                                "306",
                                "220",
                                "255",
                                "55",
                                "80",
                              ],
                              [
                                "LRS 250 F",
                                "1.7",
                                "250",
                                "26.7",
                                "250",
                                "250",
                                "270",
                                "-",
                                "80",
                              ],
                              [
                                "LRS 350 A",
                                "6.5",
                                "315",
                                "63",
                                "450",
                                "315",
                                "349.5",
                                "65",
                                "95",
                              ],
                              [
                                "LRS 350 F",
                                "3.0",
                                "350",
                                "65",
                                "350",
                                "350",
                                "367",
                                "-",
                                "110",
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
                        <div className="text-xs text-gray-600 p-4">
                          <p>
                            * A = flanged travel wheel made of
                            spheroidal-graphite cast iron
                          </p>
                          <p>* F = travel wheel fitted with Hydrospur tyre</p>
                          <p>
                            * Please refer to the DRS travel wheel system
                            brochure for further technical data and dimensions
                          </p>
                        </div>
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
