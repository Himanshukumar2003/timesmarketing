import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Breadcrumb } from "@/componts/breadcrumb";
import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";
import ProductInformation from "./tabs";
import CraneSystemDetails from "./CraneSystemDetails";
import Container from "@mui/material/Container";

export const metadata = {
  title: "Demag DHR Wire Rope Hoist in India",
  description:
    "Timeskrane brings Demag DHR Wire Rope Hoist India with advanced safety, smooth lifting and strong performance for heavy-duty applications.",
  keywords: [
    "Demag DHR rope hoist",
    "Demag wire rope hoist Manual",
    "Best demag dhr wire rope hoist in india",
    "Demag Crane price in india",
    "demag crane Construction Equipments in India",
  ],
  alternates: {
    canonical: "https://www.timeskrane.com/dhr-rope-hoist",
  },
  openGraph: {
    title: "Demag DHR Wire Rope Hoist in India",
    description:
      "Timeskrane brings Demag DHR Wire Rope Hoist India with advanced safety, smooth lifting and strong performance for heavy-duty applications.",
    url: "https://www.timeskrane.com/dhr-rope-hoist",
    siteName: "Timeskrane",
    locale: "en_IN",
    type: "website",
  },
};
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
        <section className="bg-gray-50 px-4 py-16">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-3xl md:text-3xl font-bold text-gray-900 text-center mb-6">
                Lifting just got smarter
              </div>
              <div className="flex justify-center">
                <div className=" mb-6 text-center h-1 w-20 bg-yellow-400 mt-5"></div>
              </div>
              <p className="text-lg text-gray-700 mb-8 text-center">
                Meet the DHR rope hoist—the next step in how we lift. It takes
                everything we learned from two generations before it and brings
                it together in one powerful, flexible package. Reliable? Always.
                Productive? You bet. But what really sets it apart is how
                adaptable it is.<br></br>
                Need a simple hoist for everyday lifting? The DHR handles that
                with ease. Looking for something more advanced—with smart
                features, assistance systems, and a little extra convenience? It
                does that too.
                <br></br>From basic tasks to high-performance lifting, the DHR
                is built to move loads efficiently, safely, and without<br></br>
                complication. Innovative. Smart. And ready to work.
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
                Big performance, small footprint. The DHR rope hoist is designed
                to fit where space is tight—without sacrificing power. Its slim
                profile and reduced C dimension mean you get more usable working
                space, whether it&apos;s on a crane or stationary equipment.
              </p>
              <h4 className="text-xl font-bold my-4 text-[#676f77]">
                Innovative
              </h4>
              <p className="text-lg text-gray-700">
                One platform, endless possibilities. The DHR starts as a solid
                base, then adapts to you. Add hardware options. Turn on smart
                features. Upgrade as your needs grow. It&apos;s not just a hoist
                for today—it&apos;s built for whatever comes next.
              </p>
              <h4 className="text-xl font-bold my-4 text-[#676f77]">Smart</h4>
              <p className="text-lg text-gray-700">
                Load handling that&apos;s safer, smoother, and easier to track.
                Smart features keep an eye on performance, while remote
                monitoring gives you transparency—so you always know what&apos;s
                happening, even from afar.
                <br />
                Lifting just got a whole lot smarter.
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
                DHR highlights – built for the way you work
              </h4>

              <p className="text-lg text-gray-700 mt-6">
                The DHR rope hoist comes in two versions, so you can pick what
                fits:
              </p>
              <ul className="list-disc pl-10">
                <li>
                  <strong>EK-DHR:</strong> A monorail hoist, designed for
                  single-girder cranes or monorail systems
                </li>
                <li>
                  <strong>G-DHR:</strong> A basic hoist for plant engineering
                  and machinery integration
                </li>
              </ul>
              <div className="">
                <h3 className="text-xl font-bold my-4 text-[#676f77]">
                  Steel or synthetic? Now you can choose
                </h3>
                <div>
                  <p>
                    For the first time, you&apos;re not locked in. Stick with
                    proven steel rope or go with our innovative synthetic
                    rope—both get the job done.
                  </p>
                  <h4 className="text-xl font-bold my-4 text-[#676f77]">
                    Why the synthetic rope stands out:
                  </h4>
                  <ul className="list-disc pl-10 mt-2 space-y-1 mb-4">
                    <li>Made from high-modulus polyethylene fibres</li>
                    <li>12-strand non-rotating construction</li>
                    <li>Around 85% lighter than steel rope</li>
                    <li>Works indoors and outdoors</li>
                    <li>Handles temperatures from -10°C to +45°C</li>
                    <li>No lubrication needed – ever</li>
                    <li>No wear on the rope drum or return sheaves</li>
                    <li>One rope type covers all applications</li>
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
                    DualDrive – built for grip and precision
                  </h4>

                  <p className="mb-4">
                    The DHR monorail hoist comes standard with DualDrive, a
                    two-wheel drive system where two of the four wheels are
                    powered by a synchronised belt drive.
                  </p>
                  <h4 className="text-xl font-bold my-4 text-[#676f77]">
                    What that means:
                  </h4>
                  <ul className="list-disc pl-10 space-y-1">
                    <li>Smooth, reliable cross-travel and positioning</li>
                    <li>
                      Need extra muscle? You can add a second cross-travel motor
                      (DualDrive Plus) for tough conditions like outdoor use or
                      heavy dirt on the rails
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
                  Thrust rocker – smart design, less weight
                </h4>
                <p className="mb-4">
                  The DHR rope hoist has compact dimensions. It also impresses
                  with a weight-optimised design of the hoist trolley: No
                  counterweights are required because of the thrust rocker.
                  These are available as an option.No counterweights needed. The
                  DHR hoist trolley uses a thrust rocker to stay balanced,
                  keeping things compact and lightweight. (Counterweights are
                  still available as an option if you prefer.)
                </p>
                <p className="font-semibold mb-2">Key benefits:</p>
                <ul className="list-disc pl-10 space-y-1">
                  <li>Less deadweight</li>
                  <li>Smaller, tighter dimensions</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="text-xl font-bold my-4 text-[#676f77]">
                    Blue safety light – know where the hook is
                  </h4>
                  <p>
                    Added safety: a blue dot of light is projected on the floor
                    to indicate the hook position.A small blue dot of light
                    projects onto the floor, showing exactly where the hook is.
                    Simple. Clear. Adds a layer of safety to every lift.
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
                        Lifting Capacity according to customer requirements
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
                      <span className="text-xl font-bold my-4 text-[#676f77]">
                        Smart Features
                      </span>
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails>
                    <Container maxWidth="lg">
                      <div>
                        <ul className="list-disc">
                          <li>
                            Shorter cycle times. More cost-effective. Improved
                            workplace safety.
                          </li>
                        </ul>

                        <div className="space-y-6 py-6">
                          {/* Load sway reduction */}
                          <div className="flex items-start space-x-4">
                            <Image
                              src="/img/dhr-rope-hoist-icon1.webp"
                              alt="Load sway reduction"
                              height={50}
                              width={50}
                              className="w-13 h-13"
                            />
                            <div>
                              <h3 className="text-lg font-semibold">
                                Load-sway reduction
                              </h3>
                              <p className="text-sm text-gray-600">
                                No more swinging loads. The system actively
                                counter-moves the crane based on rope angle
                                measurement to keep loads steady and under
                                control.
                              </p>
                            </div>
                          </div>
                          <hr />

                          {/* Slack rope protection */}
                          <div className="flex items-start space-x-4">
                            <Image
                              height={50}
                              width={50}
                              src="/img/dhr-rope-hoist-icon1.webp"
                              alt="Slack rope protection"
                              className="w-10 h-10"
                            />
                            <div>
                              <h3 className="text-lg font-semibold">
                                Slack rope protection
                              </h3>
                              <p className="text-sm text-gray-600">
                                The hoist motor automatically switches off when
                                slack rope is detected, preventing potential
                                damage and unsafe operation.
                              </p>
                            </div>
                          </div>
                          <hr />

                          {/* Area dependent load reduction */}
                          <div className="flex items-start space-x-4">
                            <Image
                              src="/img/dhr-rope-hoist-icon3.webp"
                              alt="Area dependent load reduction"
                              height={50}
                              width={50}
                              className="w-10 h-10"
                            />
                            <div>
                              <h3 className="text-lg font-semibold">
                                Area-dependent load reduction
                              </h3>
                              <p className="text-sm text-gray-600">
                                Specific zones can be defined where the trolley
                                may only enter if the load stays below a preset
                                limit, protecting sensitive areas and
                                structures.
                              </p>
                            </div>
                          </div>
                          <hr />

                          {/* By-pass control */}
                          <div className="flex items-start space-x-4">
                            <Image
                              height={50}
                              width={50}
                              src="/img/dhr-rope-hoist-icon5.webp"
                              alt="By-pass control"
                              className="w-13 h-13"
                            />
                            <div>
                              <h3 className="text-lg font-semibold">
                                By-pass control
                              </h3>
                              <p className="text-sm text-gray-600">
                                Restricted zones such as machines or structures
                                can be defined so the trolley automatically
                                avoids them.
                              </p>
                            </div>
                          </div>
                          <hr />

                          {/* Tandem control */}
                          <div className="flex items-start space-x-4">
                            <Image
                              height={50}
                              width={50}
                              src="/img/dhr-rope-hoist-icon3.webp"
                              alt="Tandem control"
                              className="w-10 h-10"
                            />
                            <div>
                              <h3 className="text-lg font-semibold">
                                Tandem control
                              </h3>
                              <p className="text-sm text-gray-600">
                                Two DHR rope hoists can operate together from a
                                single control unit, enabling safe and
                                coordinated handling of large loads.
                              </p>
                            </div>
                          </div>

                          <hr />

                          <h4 className="text-md font-semibold text-gray-800 mt-4">
                            With Demag Modular Control:
                          </h4>

                          {/* Follow me */}
                          <div className="flex items-start space-x-4">
                            <Image
                              width={50}
                              height={50}
                              src="/img/dhr-rope-hoist-icon5.webp"
                              alt="Follow me"
                              className="w-10 h-10"
                            />
                            <div>
                              <h3 className="text-lg font-semibold">
                                Follow-me
                              </h3>
                              <p className="text-sm text-gray-600">
                                Simply guide the hook by hand and the crane
                                follows the movement. Ideal for cranes with
                                loads up to 10 t for precise positioning.
                              </p>
                            </div>
                          </div>

                          <hr />

                          {/* Hook centring */}
                          <div className="flex items-start space-x-4">
                            <Image
                              height={30}
                              width={30}
                              src="/img/dhr-rope-hoist-icon6.webp"
                              alt="Hook centring"
                              className="w-10 h-10"
                            />
                            <div>
                              <h3 className="text-lg font-semibold">
                                Hook centring
                              </h3>
                              <p className="text-sm text-gray-600">
                                Automatically positions the hook directly above
                                the load, reducing positioning time and
                                improving lifting efficiency.
                              </p>
                            </div>
                          </div>

                          <hr />

                          {/* Diagonal pull prevention */}
                          <div className="flex items-start space-x-4">
                            <Image
                              height={50}
                              width={50}
                              src="/img/dhr-rope-hoist-icon7.webp"
                              alt="Diagonal pull prevention"
                              className="w-10 h-10"
                            />
                            <div>
                              <h3 className="text-lg font-semibold">
                                Diagonal pull prevention
                              </h3>
                              <p className="text-sm text-gray-600">
                                The rope angle is continuously monitored. If
                                diagonal pull exceeds 4°, the system
                                automatically switches off to prevent unsafe
                                lifting conditions.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 items-start">
                          {/* Left content */}
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800">
                                Full control – from anywhere:{" "}
                                <a
                                  href="#"
                                  className="text-blue-600 hover:underline"
                                >
                                  Demag StatusControl 2.0
                                </a>
                              </h3>
                              <p className="text-sm text-gray-600">
                                Demag StatusControl 2.0 gives you real-time
                                insight into your rope hoist. Monitor
                                utilisation, usage patterns, potential downtime
                                risks and service life for both standalone
                                hoists and crane systems.
                              </p>
                            </div>

                            <div>
                              <h3 className="text-lg font-semibold text-gray-800">
                                Real-time data in your hand:{" "}
                                <a
                                  href="#"
                                  className="text-blue-600 hover:underline"
                                >
                                  Demag Equipment App (DEA)
                                </a>
                              </h3>
                              <p className="text-sm text-gray-600">
                                The Demag Equipment App allows you to access
                                current operating data directly within radio
                                range of the hoist. Data is clearly visualised
                                on your device and trained users can adjust
                                parameters instantly.
                              </p>
                            </div>
                          </div>

                          {/* Right image */}
                          <div className="flex justify-center md:justify-end">
                            <Image
                              width={300}
                              height={200}
                              layout="responsive"
                              src="/img/dhr-rope-hoist6.webp"
                              alt="Status Control and DEA"
                              className="max-w-full h-auto"
                            />
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
