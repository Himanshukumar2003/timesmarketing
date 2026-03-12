import Image from "next/image";
import { Breadcrumb } from "@/componts/breadcrumb";
import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";
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
        <section className="py-12 p-4  md:py-16">
          <div className="container ">
            <div className="max-w-4xl mx-auto">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-6">
                DRS and DRS-M Wheel Block Systems: Modular Solutions for Custom
                Applications
              </div>
              <div className="flex justify-center">
                <div className=" mb-6 text-center h-1 w-20 bg-yellow-400 mt-5"></div>
              </div>
              <p className="text-base md:text-lg text-gray-700 mb-8 ">
                Our DRS wheel block system is a versatile travel wheel solution
                designed for heavy-load handling applications. To expand its
                capabilities, we introduced the DRS-M series, which adds new
                features and improved performance.
              </p>
              <p>
                Both systems are designed to integrate smoothly with Demag
                modular drive systems, making them ideal for a wide range of
                industrial applications.
              </p>
              <p>
                The product range includes eight precisely graded sizes,
                ensuring that the right wheel block is available for almost any
                requirement:
              </p>
              <div className="">
                <ul className=" list-disc   list-inside">
                  <li className="text-sm md:text-base">
                    DRS-M 112 to 200 – Load capacity from 2.75 to 10 tonnes
                  </li>
                  <li className="text-sm md:text-base">
                    DRS 250 to 500 – Load capacity from 16 to 40 tonnes
                  </li>
                </ul>
                <p>
                  These wheel block systems are also perfectly suited for repair
                  and assembly work, offering flexibility, durability, and easy
                  integration into existing systems.
                </p>
              </div>
              <div className="w-full flex justify-center mx-auto mt-5">
                <video controls autoPlay muted className="rounded-4">
                  <source src="/video/fist.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="my-4 ">
                The wide range of travel wheels and special wheel designs allows
                our systems to be adapted to almost any travel rail or operating
                condition. These solutions are cost-effective and ready for
                installation, making them suitable for many industrial
                applications.
              </p>
              <div className="">
                <ul className="list-disc list-inside">
                  <li>Wide performance range with high load capacity</li>
                  <li>
                    Many standard travel wheel shapes available along with
                    custom-designed options
                  </li>
                  <li>
                    Four connection variants to easily integrate with the
                    customer’s superstructure
                  </li>
                  <li>
                    High-quality housing that provides excellent protection for
                    the wheels and bearings
                  </li>
                  <li>Strong and rigid design for reliable operation</li>
                  <li>Direct connection options for additional accessories</li>
                  <li>
                    Laser alignment system available for precise alignment of
                    wheel blocks in multi-travel units
                  </li>
                </ul>
                <p className="mt-4">
                  The DRS-M wheel blocks also come with additional advanced
                  features that further improve flexibility, efficiency, and
                  performance in demanding applications.
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
              <h4 className="text-xl my-4 font-bold text-[#676f77]">
                Flexible Planning
              </h4>
              <p className="mt-3">
                Our wheel block systems are designed for flexible and convenient
                planning. Thanks to integrated threaded boreholes, optional
                accessories such as guide rollers or rail sweepers can be easily
                installed.
              </p>
              <p className="mt-3">
                These accessories can either be mounted directly on the wheel
                block during installation or added later whenever needed. This
                flexibility makes it easier to adapt the system to changing
                requirements without complicated modifications.
              </p>
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
                The innovative installation connection allows wheel blocks to be
                replaced quickly and easily without the need for time-consuming
                readjustments.
              </p>
              <p className="mb-2">
                A fixed alignment element can be mounted directly to the steel
                structure, ensuring that the wheel block stays perfectly aligned
                and precisely positioned even after it has been replaced. This
                makes maintenance faster, simpler, and more efficient while
                maintaining reliable system performance.
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
                Regular inspection of wheels is important to ensure safe and
                reliable operation. In addition to the flange wear indicator,
                the DRS-M system also makes it easy to check the condition of
                the travel wheel tread.
              </p>
              <p className="my-2">
                {" "}
                It features a mechanical wear indicator that allows you to
                monitor the current level of wheel wear. The inspection can be
                done while the system is at standstill and regardless of the
                wheel’s position.
              </p>
              <p className="my-2">
                The wear level is clearly displayed on a color scale, making it
                quick and easy to understand the condition of the wheel and
                decide if maintenance is required.
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
                <p className="mb-2">
                  Our wheel block systems are available in eight different
                  sizes, with load capacities ranging from 2.75 to 40 tonnes per
                  wheel. This wide range allows you to choose the exact
                  configuration that best fits your application.
                </p>
                <p>
                  The wheels are available in various shapes and designs, made
                  from high-quality materials such as:
                </p>
                <ul className="   list-disc list-inside">
                  <li>
                    Spheroidal-graphite cast iron (GGG 70) for strong and
                    durable performance
                  </li>
                  <li>
                    Polyamide wheels for quieter operation and reduced wear
                  </li>
                  <li>
                    Wheels with Hydropur tyres for improved flexibility and
                    smooth movement
                  </li>
                </ul>
                <p className="mb-2">
                  This variety ensures the wheel system can be adapted to
                  different operating conditions and application requirements.
                </p>
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
                    <strong>A:</strong> Wheels with flanges on both sides,
                    designed for rail-guided systems.
                  </p>

                  <p className="py-2 text-lg">
                    <strong>B:</strong> Flangeless wheels that can be fitted
                    with lateral guide rollers if required. Also available in
                    concave shapes or custom contours based on customer
                    specifications.
                  </p>

                  <p className="py-2 text-lg">
                    <strong>D:</strong> Wheels with a single flange on one side,
                    suitable for units that run at floor level.
                  </p>

                  <p className="py-2 text-lg">
                    <strong>E:</strong> Large-diameter flangeless wheels that
                    provide greater ground clearance.
                  </p>

                  <p className="py-2 text-lg">
                    <strong>S:</strong> Wheels available in V-shaped,
                    trapezoidal, or concave designs for guided applications.
                  </p>

                  <p className="py-2 text-lg">
                    <strong>F:</strong> Flangeless travel wheels with Hydropur
                    tyres, designed for high acceleration and quieter operation.
                  </p>

                  <p className="py-2 text-lg">
                    <strong>C:</strong> Flangeless concave polyamide wheels,
                    ideal for quiet operation and gentle movement that protects
                    the runway surface.
                  </p>
                </div>
                <p>
                  This wide variety of wheel options allows the system to be
                  perfectly matched to different applications and operating
                  environments.
                </p>
                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  {" "}
                  Many connection options
                </h4>
                <p className="mb-2">
                  {" "}
                  Our wheel block systems offer multiple connection options to
                  make installation easier and more flexible. The prepared
                  mounting surfaces allow them to be connected in many different
                  ways depending on the application.
                </p>{" "}
                <p className="mb-2">
                  {" "}
                  They support top and end connections using bolted or welded
                  elements, as well as side and pin connection arrangements.
                  This flexibility makes it simple to integrate the wheel blocks
                  into almost any structure or system design.
                </p>
                <Image
                  src="/img/wheel/five.png"
                  alt=""
                  width={100}
                  height={100}
                  layout="responsive"
                  className="w-100 object-contain"
                ></Image>
                <p>
                  {" "}
                  <b>Connection Types </b>
                </p>
                <p>
                  Our wheel systems offer different connection types to suit
                  various installation needs:
                </p>
                <p className="py-2 text-lg">
                  <strong>K:</strong> Top connection – Mounted from the top for
                  easy integration into structures.
                </p>
                <p className="py-2 text-lg">
                  <strong>B:</strong> Pin connection – Connected using pins for
                  flexible and secure mounting.
                </p>
                <p className="py-2 text-lg">
                  <strong>S:</strong> End connection – Installed from the end
                  side of the structure.
                </p>
                <p className="py-2 text-lg">
                  <strong>W:</strong> Side connection – Attached from the side
                  for specific design requirements.
                </p>
                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  {" "}
                  <b> Custom solutions </b> are also available to meet special
                  application or structural needs.
                </h4>
                <Image
                  src="/img/weel-block-chart.webp"
                  width={300}
                  height={300}
                  layout="responsive "
                  className="w-100"
                  alt="chart"
                ></Image>
                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  Complete Travel Units with Matched Geared Motors
                </h4>
                <p>
                  Our wheel block systems can be supplied as complete travel
                  units with perfectly matched geared motors from the Demag
                  modular drive system. These units are designed to deliver
                  strong performance, easy installation, and reliable long-term
                  operation.
                </p>
                <h5>Key Features and Benefits:</h5>
                <ul className="">
                  <li>High rigidity thanks to special structural stiffeners</li>
                  <li>
                    High ground clearance due to the compact system design, even
                    for complete drive units with gearboxes matched to the wheel
                    load
                  </li>
                  <li>
                    Optional horizontal guide rollers and buffers available in
                    various sizes and designs
                  </li>
                  <li>
                    Easy installation with housings prepared for direct
                    connection to superstructures
                  </li>
                  <li>
                    Simple integration with superstructures thanks to compact
                    housing design, precise position tolerances, and high
                    dimensional accuracy
                  </li>
                </ul>
                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  Easy Alignment and Maintenance
                </h4>
                <ul className="list-disc pl-10">
                  <li>
                    Laser alignment system for quick and precise wheel block
                    alignment (DRS)
                  </li>
                  <li>Fixed alignment system for DRS-M models</li>
                  <li>
                    Simple wheel replacement without re-aligning the top
                    connection, thanks to the asymmetrical housing design
                  </li>
                  <li>
                    Wheel blocks can also be adjusted and aligned laterally
                    after installation in hollow sections or beams (for top,
                    end, and pin connection types)
                  </li>
                </ul>
                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  {" "}
                  Low Maintenance and High Durability
                </h4>
                <ul>
                  <li>
                    Five-sided enclosed cast housing protects the travel wheels
                    from mechanical damage
                  </li>
                  <li>
                    Large grooved ball bearings lubricated for life, with
                    tapered roller bearings from size DRS 250
                  </li>
                  <li>
                    Travel wheels made from self-lubricating spheroidal-graphite
                    cast iron (GGG 70) for low friction and high wear resistance
                  </li>
                  <li>
                    Integrated flange wear indicator for easy visual inspection
                  </li>

                  <li>
                    Optional colour-scale travel wheel wear indicator for DRS-M
                    models
                  </li>
                </ul>
                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  Design and Planning Support
                </h4>
                <p>
                  Our web-based planning tool helps engineers and designers with
                  project planning. It provides CAD files in multiple formats
                  and other useful resources, making system design and project
                  engineering faster and more efficient.
                </p>
                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  Options and accessories
                </h4>
                <p>
                  To make our wheel systems more flexible and suitable for
                  different applications, we also offer a range of optional
                  accessories and special solutions, including:
                </p>
                <ul>
                  <li>
                    Torque brackets for connecting offset and angular geared
                    motors
                  </li>
                  <li>
                    Horizontal guide rollers for improved guidance and stability
                  </li>
                  <li>Buffers available in different sizes and designs</li>
                  <li>
                    Rail sweeping systems to keep rails clean and ensure smooth
                    movement
                  </li>
                  <li>Special solutions for high-temperature applications</li>
                  <li>
                    Hardened travel wheels for increased durability and longer
                    service life
                  </li>
                </ul>
                <p>
                  These options help adapt the system to specific operating
                  conditions and improve overall performance.
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
                                div
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
