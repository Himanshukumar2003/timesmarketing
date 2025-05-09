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
              <div className="flex justify-center">
                <div className=" mb-6 text-center h-1 w-20 bg-yellow-400 mt-5"></div>
              </div>
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
                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  Exact configuration
                </h4>
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
                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  {" "}
                  Many connection options
                </h4>
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
                <h4> Custom solutions</h4>
                <Image
                  src="/img/weel-block-chart.webp"
                  width={300}
                  height={300}
                  layout="responsive "
                  className="w-100"
                  alt="chart"
                ></Image>
                <ul className="">
                  <li>
                    Complete travel units with precisely matching geared motors
                    from the Demag modular drive system
                  </li>
                  <li>High rigidity thanks to special stiffeners</li>
                  <li>
                    High ground clearance for wheel blocks thanks to compact
                    system design – also for complete drive units with gearboxes
                    designed to match the wheel load Horizontal guide roller
                    arrangements and buffers in various sizes and designs
                    (optional)
                  </li>
                </ul>
                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  Easy to install
                </h4>
                <ul>
                  <li>
                    Housings ready for direct connection to superstructures
                  </li>
                  <li>
                    Easy connection to superstructures thanks to tight housing
                    design and position tolerances and high dimensional accuracy
                    in all planes
                  </li>
                  <li>
                    Laser alignment system for simple and precise alignment of
                    wheel blocks (DRS) Fixed alignment (DRS-M)
                  </li>
                  <li>
                    Simple wheel replacement without the need for re-alignment
                    of top connection thanks to asymmetrical housing
                  </li>
                  <li>
                    Wheel blocks can also be moved and aligned laterally after
                    they have been installed in hollow sections and beams (for
                    top, end and pin connection arrangements)
                  </li>
                </ul>
                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  {" "}
                  Minimum maintenance
                </h4>
                <ul>
                  <li>
                    Cast housing enclosed on five sides reliably protects the
                    travel wheels against any mechanical influence
                  </li>
                  <li>
                    Generously dimensioned grooved ball bearings which are
                    lubricated for life, tapered roller bearings from size DRS
                    250
                  </li>
                  <li>
                    Travel wheels made of self-lubricating spheroidal-graphite
                    cast iron (GGG 70) for low friction and high resistance to
                    wear Integrated wear indicator on wheels with flanges for
                    remote visual diagnosis
                  </li>
                  <li>
                    Optional travel wheel wear indicator based on colour scale
                    (DRS-M)
                  </li>
                </ul>
                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  Optimal design support
                </h4>
                Optimum support for project
                <ul>
                  <li>
                    engineering and design work – e.g. with CAD files in various
                    formats – thanks to our web-based planning tool
                    www.drives.demag-designer.com
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
                      <p>
                        Dimensions (DRS with spheroidal-graphite cast iron
                        travel wheel with two flanges)
                      </p>

                      <div className="mb-8">
                        <Image
                          src="/img/w-block-chart-2.webp"
                          height={400}
                          width={400}
                          alt="KBK suspension monorails diagram"
                          className=" object-contain"
                        />
                      </div>

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
                                a1
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
                              <th className="px-4 py-2 border text-center">
                                c1
                                <br />
                                [mm]
                              </th>
                              <th className="px-4 py-2 border text-center">
                                h1
                                <br />
                                [mm]
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              [
                                "DRS-M 112",
                                "2.75",
                                "112",
                                "7.3",
                                "190",
                                "47",
                                "80",
                                "96",
                                "131",
                              ],
                              [
                                "DRS-M 125",
                                "5",
                                "125",
                                "9.9",
                                "220",
                                "60",
                                "80",
                                "98",
                                "147.5",
                              ],
                              [
                                "DRS-M 160",
                                "7",
                                "160",
                                "18.3",
                                "275",
                                "65",
                                "89",
                                "110",
                                "187",
                              ],
                              [
                                "DRS-M 200",
                                "10",
                                "200",
                                "35.7",
                                "340",
                                "65",
                                "101",
                                "130",
                                "238",
                              ],
                              [
                                "DRS 250",
                                "16",
                                "250",
                                "62",
                                "385",
                                "75",
                                "110",
                                "150",
                                "281",
                              ],
                              [
                                "DRS 315",
                                "22",
                                "315",
                                "117",
                                "470",
                                "90",
                                "130",
                                "180",
                                "349.5",
                              ],
                              [
                                "DRS 400",
                                "30",
                                "400",
                                "201",
                                "580",
                                "110",
                                "155",
                                "210",
                                "440",
                              ],
                              [
                                "DRS 500",
                                "40",
                                "500",
                                "352",
                                "700",
                                "110",
                                "170",
                                "240",
                                "566",
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

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <span className="text-2xl font-bold  text-[#676f77]">
                  Options and accessories{" "}
                </span>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="  list-disc list-inside">
                  <li>
                    Torque brackets for connection to offset and angular geared
                    motors
                  </li>
                  <li>Horizontal guide rollers</li>
                  <li>Buffers in various sizes and designs</li>
                  <li>Rail sweeping system</li>
                  <li>Solutions for high-temperature applications</li>
                  <li>Hardened travel wheels</li>
                </ul>
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
