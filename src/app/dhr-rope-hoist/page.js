"use client";

import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
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
// import ProductInformation from "./tabs";
import { Breadcrumb } from "@/componts/breadcrumb";
import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";
import ProductInformation from "./tabs";
import CraneSystemDetails from "./CraneSystemDetails";
import Container from "@mui/material/Container";
import { px } from "framer-motion";
export default function Home() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="Innovative. Smart. Lifting to the next level."
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "Innovative. Smart. Lifting to the next level.",
            href: "/",
            isCurrent: true,
          },
        ]}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-3xl font-bold text-gray-900 text-center mb-6">
                Innovative. Smart. Lifting to the next level.
              </h1>
              <div className="flex justify-center">
                <div className=" mb-6 text-center h-1 w-20 bg-yellow-400 mt-5"></div>
              </div>
              <p className="text-lg text-gray-700 mb-8 text-center">
                Innovative lifting solutions for safe and forward-looking
                operation: The new DHR rope hoist offers a high level of
                versatility and productivity. The DHR combines the powerful
                features of its two predecessor generations: Reliability,
                productivity and – thanks to numerous options – tailored
                implementation to meet the requirements of many industries. From
                simple lifting applications to high-performance rope hoists with
                smart assistance and convenience features, the DHR meets all
                demands for highly efficient load handling.
              </p>
              <div className="flex justify-center mb-6 items-center">
                {" "}
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/7Sxdm2dL--Q?si=eGaP3Kb2-LQmQkM0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              <h4 className="text-xl  font-bold my-4 text-[#676f77]">
                Compact
              </h4>
              <p className="text-lg text-gray-700">
                DHR rope hoists with compact design and low deadweight stand out
                due to their small external dimensions and a further reduced C
                dimension. This makes the best possible use of the working space
                for crane applications or stationary equipment.
              </p>
              <h4 className="text-xl font-bold my-4 text-[#676f77]">
                Innovative
              </h4>
              <p className="text-lg text-gray-700">
                DHR rope hoists offer tailored solutions based on a single
                platform. Additional hardware options and smart features make a
                DHR rope hoist a smart hoist that is well equipped to meet
                future requirements: Lifting to the next level.
              </p>
              <h4 className="text-xl font-bold my-4 text-[#676f77]">Smart</h4>
              <p className="text-lg text-gray-700">
                Demag DHR rope hoists offer smart features that make load
                handling even safer and more efficient. And transparent at all
                times thanks to the monitoring and remote monitoring tools.
              </p>

              <Image
                src="/img/dhr-rope-hoist.webp"
                height={100}
                width={100}
                layout="responsive"
                className="my-6"
                alt=""
              ></Image>

              <h4 className="text-xl font-bold my-4 text-[#676f77]">
                DHR highlights
              </h4>

              <p className="text-lg text-gray-700 mt-6">
                DHR rope hoists fulfil almost any requirement:
              </p>
              <ul>
                <li>
                  <strog>EK-DHR:</strog> monorail hoist, optimised for use on
                  single-girder cranes or monorails
                </li>
                <li>
                  <strog>G-DHR: </strog>basic hoist for plant engineering
                </li>
              </ul>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <p>
                    With the DHR rope hoist, you have the choice for the first
                    time: Proven lifting technology with steel ropes or with
                    innovative synthetic ropes.
                  </p>
                  <h4 className="text-xl font-bold my-4 text-[#676f77]">
                    Features of the synthetic rope:
                  </h4>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Made of high-modulus polyethylene fibres</li>
                    <li>12-strand non-rotating structure</li>
                    <li>Around 85% lighter than steel rope</li>
                    <li>Suitable for indoor and outdoor use</li>
                    <li>Temperature range: -10°C - +45°C</li>
                    <li>No lubrication required</li>
                    <li>No wear on rope drum and return sheaves</li>
                    <li>One type of rope for all applications</li>
                  </ul>
                </div>
                <Image
                  height={100}
                  width={100}
                  layout="responsive"
                  src="/img/dhr-rope-hoist2.webp"
                  className="w-full h-auto"
                  alt="DHR Rope Hoist"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <h4 className="text-xl font-bold my-4 text-[#676f77]">
                    Dual Drive
                  </h4>

                  <p className="mb-4">
                    For high traction, the DHR monorail hoist is equipped with a
                    DualDrive two-wheel drive as standard. Two of the four
                    wheels have a synchronised belt drive.
                  </p>
                  <h4 className="text-xl font-bold my-4 text-[#676f77]">
                    The benefits are:
                  </h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Reliable cross-travel motion and positioning</li>
                    <li>
                      Optionally available: Installation of a second
                      cross-travel motor (DualDrive Plus), for particularly
                      challenging ambient conditions (e.g. outdoor use, dirt
                      accumulation on crane rail)
                    </li>
                  </ul>
                </div>
                <Image
                  src="/img/dhr-rope-hoist3.webp"
                  height={300}
                  width={300}
                  layout="reponsive"
                  className="w-full h-auto"
                  alt="Dual Drive Hoist"
                />
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  Thrust rocker
                </h4>
                <p className="mb-4">
                  The DHR rope hoist has compact dimensions. It also impresses
                  with a weight-optimised design of the hoist trolley: No
                  counterweights are required because of the thrust rocker.
                  These are available as an option.
                </p>
                <p className="font-semibold mb-2">Key benefits:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Reduced deadweight</li>
                  <li>Compact dimensions</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="text-xl font-bold my-4 text-[#676f77]">
                    Blue safety light
                  </h4>
                  <p>
                    Added safety: a blue dot of light is projected on the floor
                    to indicate the hook position.
                  </p>
                </div>
                <div>
                  {" "}
                  <Image
                    src="/img/dhr-rope-hoist4.webp"
                    height={100}
                    width={100}
                    alt=""
                    className="w-100"
                  ></Image>
                </div>{" "}
                {/* Empty column for layout symmetry or future image if needed */}
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                  Product information
                </h2>

                <Accordion defaultExpanded>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography
                      component="span"
                      className="text-xl font-bold my-4 text-[#676f77]"
                    >
                      <span className="text-xl font-bold my-4 text-[#676f77]">
                        Lifting capacity according to customer requirements
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
                      <span className="text-xl font-bold my-4 text-[#676f77]">
                        Configured for custom applications
                      </span>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <CraneSystemDetails></CraneSystemDetails>
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
                      <span className="text-xl font-bold my-4 text-[#676f77]">
                        Smart features
                      </span>{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Container maxWidth="lg">
                      <div className=" ">
                        <ul class="list-disc ">
                          <li>Shorter cycle times</li>
                          <li>More cost-effective</li>
                          <li>Improved workplace safety</li>
                        </ul>

                        <div class="space-y-6 py-6 ">
                          {/* <!-- Tandem Control Card --> */}
                          <div class="flex items-start space-x-4">
                            <Image
                              src="/img/dhr-rope-hoist-icon1.webp"
                              alt="Tandem Icon"
                              height={50}
                              width={50}
                              class="w-13 h-13"
                            />
                            <div>
                              <h3 class="text-lg font-semibold">
                                Load-sway reduction
                              </h3>
                              <p class="text-sm text-gray-600">
                                Prevents increased load sway by active
                                counter-movements of the crane. Active system
                                based on rope angle measurement.
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div class="flex items-start space-x-4">
                            <Image
                              height={50}
                              width={50}
                              src="/img/dhr-rope-hoist-icon1.webp"
                              alt="Tandem Icon"
                              class="w-10 h-10"
                            />
                            <div>
                              <h3 class="text-lg font-semibold">
                                Slack rope protection
                              </h3>
                              <p class="text-sm text-gray-600">
                                Continuous monitoring of rope tension: Automatic
                                cut-off of the hoist motor when slack rope is
                                detected.
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div class="flex items-start space-x-4">
                            <Image
                              src="/img/dhr-rope-hoist-icon3.webp"
                              alt="Tandem Icon"
                              height={50}
                              width={50}
                              class="w-10 h-10"
                            />
                            <div>
                              <h3 class="text-lg font-semibold">
                                Area-dependent load reduction
                              </h3>
                              <p class="text-sm text-gray-600">
                                Defined areas that the trolley may only enter
                                when the load does not exceed a reference value.
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div class="flex items-start space-x-4">
                            <Image
                              height={50}
                              width={50}
                              src="/img/dhr-rope-hoist-icon5.webp"
                              alt="Tandem Icon"
                              class="w-13 h-13"
                            />
                            <div>
                              <h3 class="text-lg font-semibold">
                                By-pass control
                              </h3>
                              <p class="text-sm text-gray-600">
                                Defined restricted areas (e.g. structures,
                                machines) that must not be approached by the
                                trolley.
                              </p>
                            </div>
                          </div>
                          <hr />
                          <div class="flex items-start space-x-4">
                            <Image
                              height={50}
                              width={50}
                              src="/img/dhr-rope-hoist-icon3.webp"
                              alt="Tandem Icon"
                              class="w-10 h-10"
                            />
                            <div>
                              <h3 class="text-lg font-semibold">
                                Tandem control
                              </h3>
                              <p class="text-sm text-gray-600">
                                Loads can be transported safely with two DHR
                                rope hoists – all from a single control unit.
                              </p>
                            </div>
                          </div>
                          <hr />

                          {/* <!-- Section Title --> */}
                          <h4 class="text-md font-semibold text-gray-800 mt-4">
                            With Demag Modular Control:
                          </h4>

                          {/* <!-- Follow-me Card --> */}
                          <div class="flex items-start space-x-4">
                            <Image
                              width={50}
                              height={50}
                              src="/img/dhr-rope-hoist-icon5.webp"
                              alt="Follow-me Icon"
                              class="w-10 h-10"
                            />
                            <div>
                              <h3 class="text-lg font-semibold">Follow-me</h3>
                              <p class="text-sm text-gray-600">
                                Crane can be moved over the load by simply
                                guiding the hook by hand. (Recommended for
                                cranes up to 10 t).
                              </p>
                            </div>
                          </div>
                          <hr />

                          {/* <!-- Hook Centering Card --> */}
                          <div class="flex items-start space-x-4">
                            <Image
                              height={30}
                              width={30}
                              src="/img/dhr-rope-hoist-icon6.webp"
                              alt="Hook Centering Icon"
                              class="w-10 h-10"
                            />
                            <div>
                              <h3 class="text-lg font-semibold">
                                Hook centring
                              </h3>
                              <p class="text-sm text-gray-600">
                                Automatically positions the crane hook directly
                                above the load. The advantages: faster load
                                cycles and improved ease of operation.
                              </p>
                            </div>
                          </div>
                          <hr />
                          {/* <!-- Diagonal Pull Prevention Card --> */}
                          <div class="flex items-start space-x-4">
                            <Image
                              height={50}
                              width={50}
                              src="/img/dhr-rope-hoist-icon7.webp"
                              alt="Diagonal Pull Icon"
                              class="w-10 h-10"
                            />
                            <div>
                              <h3 class="text-lg font-semibold">
                                Diagonal pull prevention
                              </h3>
                              <p class="text-sm text-gray-600">
                                Rope angle monitoring, automatic cut-off in the
                                event of diagonal pull (&gt; 4°) to avoid
                                dangerous situations.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="">
                          <div>
                            <h3 class="text-lg font-semibold text-gray-800">
                              Diagonal pull prevention
                            </h3>
                            <p class="text-sm text-gray-600 pb-4">
                              Rope angle monitoring, automatic cut-off in the
                              event of diagonal pull (&gt; 4°) to avoid
                              dangerous situations.
                            </p>
                          </div>
                          <hr />

                          <div class="grid md:grid-cols-2 gap-6 items-start">
                            {/* <!-- Left Text Content --> */}
                            <div class="space-y-4">
                              <div>
                                <h3 class="text-lg font-semibold text-gray-800">
                                  Full control – from anywhere:
                                  <a
                                    href="#"
                                    class="text-blue-600 hover:underline"
                                  >
                                    Demag StatusControl 2.0
                                  </a>
                                </h3>
                                <p class="text-sm text-gray-600">
                                  With Demag StatusControl 2.0, smart system
                                  management, you have full control of your rope
                                  hoist at all times and from anywhere. Our
                                  remote monitoring system provides you with
                                  up-to-date operating data and evaluations for
                                  the DHR – as a solo component as well as in
                                  crane applications. Full transparency on
                                  utilisation, usage, risk of downtimes and
                                  service life. Simply, reliably and at a
                                  glance.
                                </p>
                              </div>

                              {/* <!-- Real-time Operating Data --> */}
                              <div>
                                <h3 class="text-lg font-semibold text-gray-800">
                                  Real-time operating data:
                                  <a
                                    href="#"
                                    class="text-blue-600 hover:underline"
                                  >
                                    Demag Equipment App (DEA)
                                  </a>
                                </h3>
                                <p class="text-sm text-gray-600">
                                  Do you only find out the usage and user data
                                  for your DHR rope hoist once a year during
                                  inspection and maintenance? This is a thing of
                                  the past with the Demag Equipment App. Within
                                  the radio range of the hoist, you receive the
                                  current data in real time and visually
                                  displayed on your end device. Trained users
                                  can also adjust DHR parameters.
                                </p>
                              </div>
                            </div>

                            {/* <!-- Right Image --> */}
                            <div class="flex justify-center md:justify-end">
                              <Image
                                width={300}
                                height={200}
                                layout="responsive"
                                src="/img/dhr-rope-hoist6.webp"
                                alt="Status Control and DEA"
                                class="max-w-full h-auto"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Container>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        <div></div>
      </div>

      <Footer></Footer>
    </>
  );
}
