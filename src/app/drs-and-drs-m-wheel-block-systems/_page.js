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
        title="DRS and DRS-M wheel block systems"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "DRS and DRS-M wheel block systems",
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
                DRS and DRS-M wheel block systems: Modular system for
                tailor-made solutions
              </h1>
              <p className="text-base md:text-lg text-gray-700 mb-8 ">
                Our DRS wheel block system is a versatile travel wheel system
                for heavy-load handling applications. With the DRS-M, we have
                enhanced this system further and added new features to it. Both
                product ranges can be seamlessly integrated into Demag modular
                drive systems: Eight finely graded sizes provide the right wheel
                block for every application:
              </p>
              <div className="">
                <ul className=" list-disc   list-inside">
                  <li className="text-sm md:text-base">
                    DRS-M 112 to 200 (load capacity from 2.75 to 10 t)
                  </li>
                  <li className="text-sm md:text-base">
                    DRS 250 to 500 (load capacity from 16 to 40 t)
                  </li>
                  <li className="text-sm md:text-base">
                    Optimally suited for repair and assembly work
                  </li>
                </ul>
              </div>
              <div className="w-full flex justify-center mx-auto mt-5">
                <video controls autoPlay muted className="rounded-4">
                  <source src="/video/fist.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="my-4 ">
                And the large selection of travel wheels and special wheel
                designs make it possible to adapt them to almost any travel rail
                or operating conditions. Cost-effective and ready to install.
                Further strengths:
              </p>
              <div className="">
                <ul className=" list-disc   list-inside">
                  <li>
                    {" "}
                    High performance range and maximum load capacity Many travel
                  </li>
                  <li> wheel shapes available as standard as well as</li>
                  <li>
                    {" "}
                    customer-specific designs Four variants for connection to
                    the
                  </li>
                  <li>
                    {" "}
                    customer’s superstructure High-quality housing with optimum
                  </li>
                  <li>
                    {" "}
                    protection for the travel wheels and bearings High rigidity
                  </li>
                  <li>
                    {" "}
                    Direct connection of optional accessories Laser alignment
                  </li>
                  <li> system for wheel blocks on multiple travel unit</li>
                </ul>

                <p className="mt-4">
                  DRS-M wheel blocks also come with additional features:
                </p>
              </div>
              <h4 className="text-2xl my-4 font-bold text-[#676f77]">
                Prepared for accessories
              </h4>
              <Image
                src="/img/wheel/prepared.webp"
                alt=""
                width={100}
                height={100}
                layout="responsive"
                className="max-w-[500px]"
              ></Image>
              <ul className=" list-disc  my-4 list-inside">
                <li>
                  Flexible planning Thanks to integrated threaded boreholes,
                </li>
                <li>
                  {" "}
                  optional accessories such as guide rollers or rail sweepers
                  Can
                </li>
                <li>
                  {" "}
                  be installed direct on the wheel block – or simply added
                  later,
                </li>
                <li> as required</li>
              </ul>
              <h4 className="text-2xl my-4 font-bold text-[#676f77]">
                Fixed alignment
              </h4>
              <Image
                src="/img/wheel/snd.webp"
                alt=""
                width={100}
                height={100}
                layout="responsive"
                className="max-w-[500px]"
              ></Image>
              <p className="my-2">
                The innovative installation connection enables wheel blocks to
                be replaced quickly without the need for time-consuming
                readjustment. This fixed alignment element can be attached to
                the steelwork and ensures that the wheel block remains precisely
                positioned even after it is replaced.
              </p>
              <h4 className="text-2xl my-4 font-bold text-[#676f77]">
                Mechanical wear measurement
              </h4>
              <Image
                src="/img/wheel/fist.webp"
                alt=""
                width={100}
                height={100}
                layout="responsive"
                className="max-w-[500px]"
              ></Image>
              <p className="my-2">
                Wheels need to be checked regularly. Besides its flange wear
                indicator, DRS-M also makes it easy to inspect the travel wheel
                tread. This mechanical wear indicator can be used to check the
                current state of wear on the wheel – at standstill and
                regardless of the wheel position. The result can be easily read
                on a colour scale.
              </p>
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
                <h4>Exact configuration</h4>
                <ul className="   list-disc list-inside">
                  <li>
                    {" "}
                    Eight sizes with load capacities from 2.75 to 40 tonnes per
                  </li>
                  <li>
                    {" "}
                    wheel Wheels in various shapes and designs – made of
                    spheroidal-graphite cast iron (GGG 70), polyamide, or with
                    Hydropur tyres
                  </li>
                </ul>

                <Image
                  src="/img/wheel/four.jpg"
                  alt=""
                  width={100}
                  height={100}
                  layout="responsive"
                  className="w-100 object-contain"
                ></Image>

                <div className="">
                  <p className="py-2 text-lg">
                    <strong>A:</strong> Guided on both sides by flanges for rail
                    systems
                  </p>

                  <p className="py-2 text-lg">
                    <strong>B:</strong> Wheels without any flanges, optionally
                    fitted with lateral guide rollers, also with concave shape
                    or contour to customer specifications
                  </p>
                  <p className="py-2 text-lg">
                    <strong>D:</strong> Wheels guided by a flange on one side
                    for units running at floor level
                  </p>
                  <p className="py-2 text-lg">
                    <strong>E:</strong> Larger diameter wheels without a flange
                    for increased ground clearance
                  </p>
                  <p className="py-2 text-lg">
                    <strong>S:</strong> Wheels in V, trapezoidal, or concave
                    shape for guided applications
                  </p>
                  <p className="py-2 text-lg">
                    <strong>F:</strong> Flangeless travel wheels with Hydropur
                    tyres for high acceleration & quiet running characteristics
                  </p>
                  <p className="py-2 text-lg">
                    <strong>C:</strong> Flangeless, concave polyamide wheels for
                    quiet operation that is kind to the runway
                  </p>
                </div>
                <h4> Many connection options</h4>
                <p>
                  Prepared mounting surfaces for virtually any connection: from
                  top and end connection arrangements with bolted and welded
                  connection elements, to side and pin connection arrangements
                </p>
                <Image
                  src="/img/wheel/five.png"
                  alt=""
                  width={100}
                  height={100}
                  layout="responsive"
                  className="w-100 object-contain"
                ></Image>
                <p className="py-2 text-lg">
                  <strong>K:</strong> Top connection
                </p>

                <p className="py-2 text-lg">
                  <strong>B:</strong> Pin connection
                </p>

                <p className="py-2 text-lg">
                  <strong>S:</strong> End connection
                </p>

                <p className="py-2 text-lg">
                  <strong>W:</strong> Side connection
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
