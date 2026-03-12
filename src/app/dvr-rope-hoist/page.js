import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Breadcrumb } from "@/componts/breadcrumb";
import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";

import Container from "@mui/material/Container";
import ProductInformation from "./tabs";

export const metadata = {
  title: "High Performance DVR Rope Hoist in India",
  description:
    "DVR Rope Hoist in India by Timeskrane delivers smooth lifting, high efficiency and reliable performance, ensuring safe and easy material handling for industries.",
  keywords: [
    "Dvr rope hoist price",
    "Demag DVR Rope Hoist spares",
    "wire rope for hoist",
    "electric wire rope hoist",
    "wire rope electric hoist",
    "Demag DVR rope hoists",
    "dvr rope hoist manufacturer in india",
  ],
  alternates: {
    canonical: "https://www.timeskrane.com/dvr-rope-hoist",
  },
  openGraph: {
    title: "High Performance DVR Rope Hoist in India",
    description:
      "DVR Rope Hoist in India by Timeskrane delivers smooth lifting, high efficiency and reliable performance, ensuring safe and easy material handling for industries.",
    url: "https://www.timeskrane.com/dvr-rope-hoist",
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
        title="DVR rope hoist"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "DVR rope hoist",
            href: "/",
            isCurrent: true,
          },
        ]}
      />
      <div className="contanier">
        <div className=" bg-white">
          {/* Hero Section */}
          <section className="bg-gray-50 py-16">
            <div className=" p-4 lg:p-0">
              <div className="max-w-4xl mx-auto">
                <div className="text-3xl md:text-3xl font-bold text-gray-900 text-center mb-6">
                  Versatile – that&apos;s the Demag DVR rope hoist
                </div>
                <div className="flex justify-center">
                  <div className=" mb-6 text-center h-1 w-20 bg-yellow-400 mt-5"></div>
                </div>
                <p className="text-lg text-gray-700 mb-8 text-center">
                  Efficient. Productive. And flexible enough to fit just about
                  anywhere you need it.<br></br>
                  With a wide product portfolio, the DVR adapts to you—not the
                  other way around. Whether you need a straightforward standard
                  version or a smart high-end solution with intelligent safety
                  features, you get a lifting system that&apos;s economical,
                  ergonomic, and ready to work.
                </p>

                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  The choice is yours
                </h4>

                <p className="text-lg text-gray-700 mt-2">
                  Five sizes. Load capacities up to 80 tonnes. And plenty of
                  ways to build it your way:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div>
                    {" "}
                    <div>
                      <p className="my-2">
                        <b>Pick your setup:</b>
                      </p>
                      <ul className="list-disc pl-10">
                        <li>Foot-mounted hoist</li>
                        <li>Low-headroom monorail hoist</li>
                        <li>Double-rail crab</li>
                        <li>
                          Standard-headroom monorail hoist (with or without
                          articulated trolley)
                        </li>
                      </ul>
                      <h4 className="text-xl font-bold my-4 text-[#676f77]">
                        Pick your control:
                      </h4>
                      <ul className="list-disc pl-10 mt-2 space-y-1">
                        <li>Conventional contactor control</li>
                        <li>Customer-provided control</li>
                        <li>Variable-speed or two-stage drive solutions</li>
                        <li>Cable-connected or radio control</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold my-4 text-[#676f77]">
                        Add what you need:
                      </h4>
                      <ul className="list-disc pl-10 space-y-1">
                        <li>Wide range of options available</li>
                        <li>
                          Smart features for safe, convenient load handling
                        </li>
                      </ul>
                    </div>
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
                    Steel or synthetic? Now you can choose
                  </h4>
                  <p className="mb-4">
                    For the first time, you&apos;re not locked in. Stick with
                    proven steel rope or go with our innovative synthetic
                    rope—both get the job done.
                  </p>
                  <p className="font-semibold mb-2">
                    Why the synthetic rope stands out:
                  </p>
                  <ul className="list-disc pl-10">
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

                <div>
                  <h4 className="text-xl font-bold my-4 text-[#676f77]">
                    DualDrive – built for grip and precision
                  </h4>

                  <p className="mb-3">
                    The DHR monorail hoist comes standard with DualDrive, a
                    two-wheel drive system where two of the four wheels are
                    powered by a synchronised belt drive.
                  </p>

                  <p className="mb-3 font-semibold">What that means:</p>

                  <ul className="list-disc pl-6 mb-4">
                    <li>Smooth, reliable cross-travel and positioning</li>
                    <li>
                      Need extra muscle? Add a second cross-travel motor
                      (DualDrive Plus) for tough conditions like outdoor use or
                      heavy dirt on the rails
                    </li>
                  </ul>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      {" "}
                      <h4 className="text-lg font-semibold mt-4">
                        Thrust rocker – smart design, less weight
                      </h4>
                      <p className="mb-3">
                        No counterweights needed. The DHR hoist trolley uses a
                        thrust rocker to stay balanced, keeping things compact
                        and lightweight. (Counterweights are still available as
                        an option if you prefer.)
                      </p>
                      <p className="font-semibold">Key benefits:</p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Less deadweight</li>
                        <li>Smaller, tighter dimensions</li>
                      </ul>
                      <h4 className="text-lg font-semibold mt-4">
                        Blue safety light – know where the hook is
                      </h4>
                      <p>
                        A small blue dot of light projects onto the floor,
                        showing exactly where the hook is. Simple. Clear. Adds a
                        layer of safety to every lift.
                      </p>
                    </div>

                    <div>
                      <Image
                        src="/img/dhr-rope-hoist4.webp"
                        height={100}
                        width={100}
                        alt="DHR rope hoist safety light"
                        className="w-100"
                      />
                    </div>
                  </div>
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
                          Rope drum and guide
                        </span>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div>
                        <h4 className="text-xl font-bold my-4 text-[#676f77]">
                          Rope guide
                        </h4>

                        <p className="mb-3">
                          All-metal construction. Built to guide the rope
                          precisely—with minimal wear.
                        </p>

                        <p className="font-semibold mb-2">
                          Smart design touches:
                        </p>

                        <ul className="list-disc pl-6">
                          <li>
                            For sizes 10 (optional) and 20–40, a
                            full-circumference rope guide comes as standard
                          </li>
                          <li>
                            Handles diagonal pulls up to four degrees without
                            the rope touching the guide
                          </li>
                          <li>
                            Ropes are galvanised as standard for added
                            durability
                          </li>
                        </ul>
                      </div>
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
                        <span className="text-xl font-bold my-4 text-[#676f77]">
                          Hoist motor and brake
                        </span>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <h5 className="font-bold text-lg my-2 text-[#676f77]">
                        Powerful and precise
                      </h5>
                      <p>
                        At the heart of the DVR is a two-stage cylindrical motor
                        built for smooth, accurate lifting and lowering. With
                        output up to 35 kilowatts, it&apos;s got plenty of power
                        when you need it.
                      </p>
                      <h5 className="font-bold text-lg my-2 text-[#676f77]">
                        Built to last, simple to connect
                      </h5>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>
                          Standard IP55 protection, with IP66 available as an
                          option
                        </li>
                        <li>
                          All motor cables use plug-in connections – true Plug &
                          Play
                        </li>
                        <li>Disc brake delivers high braking torque</li>
                        <li>Designed for one million switching cycles</li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3-content"
                      id="panel3-header"
                    >
                      <Typography component="span">
                        <span className="text-xl font-bold my-4 text-[#676f77]">
                          ProHub
                        </span>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <h5 className="text-lg font-bold my-2 text-[#676f77]">
                        Up to 100% more speed
                      </h5>
                      <p>
                        Need to move faster? The ProHub ASR and ProHub ESR motor
                        variants are made for exactly that—higher lifting speeds
                        that cut down process times and keep things moving.
                      </p>
                      <p>
                        <strong>ProHub ASR (A-motor):</strong>
                      </p>
                      <ul className="list-disc px-5">
                        <li>Load-dependent speeds</li>
                        <li>Inverter-controlled speed monitoring</li>
                        <li>Up to 50% higher speed</li>
                      </ul>
                      <p>
                        <strong>ProHub ESR (S-motor):</strong>
                      </p>
                      <ul className="list-disc px-5">
                        <li>Encoder-monitored for precision</li>
                        <li>Delivers maximum power</li>
                        <li>Up to 100% higher speed</li>
                      </ul>
                      <p>Faster handling. Shorter cycles. Same reliability.</p>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4-content"
                      id="panel4-header"
                    >
                      <Typography component="span">
                        <span className="text-xl font-bold my-4 text-[#676f77]">
                          Travel Motor
                        </span>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul className="list-disc px-5">
                        <li>
                          Two-stage speeds in a compact package – low deadweight
                          included
                        </li>
                        <li>
                          Standard temperature monitoring, lubricated for life
                          (no maintenance hassle)
                        </li>
                        <li>Two-wheel drive gives you solid traction</li>
                        <li>
                          Works indoors and outdoors – no need to special-order
                        </li>
                        <li>Quadro drive available as an option for EZ-DVR</li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel5-content"
                      id="panel5-header"
                    >
                      <Typography component="span">
                        <span className="text-xl font-bold my-4 text-[#676f77]">
                          Housing
                        </span>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul className="list-disc px-5">
                        <li>Compact design keeps deadweight low</li>
                        <li>
                          DVR hoist housing weighs significantly less than
                          comparable models size for size
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel6-content"
                      id="panel6-header"
                    >
                      <Typography component="span">
                        <span className="text-xl font-bold my-4 text-[#676f77]">
                          Bottom block
                        </span>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul className="list-disc px-5">
                        <li>
                          HBC hook with recessed grip and finger guard –
                          standard for all sizes up to DVR 10 4/1
                        </li>
                        <li>
                          DIN hooks – optional, and standard for larger sizes
                          (DVR 20 and 40)
                        </li>
                        <li>Full 360° hook rotation</li>
                        <li>Optional: lockable hook</li>
                        <li>Optional: insulated version</li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel7-content"
                      id="panel7-header"
                    >
                      <Typography component="span">
                        <span className="text-xl font-bold my-4 text-[#676f77]">
                          Control
                        </span>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p>
                        <strong>
                          Controllers – you choose how to run things
                        </strong>
                      </p>
                      <p>
                        We give you full freedom to pick the control that fits
                        your work.
                      </p>
                      <ul className="list-disc px-5">
                        <li>
                          Wire-connected and ergonomic: DSB pendant controller –
                          reliable, easy to use
                        </li>
                        <li>
                          DST option – extremely robust, with up to nine control
                          elements
                        </li>
                      </ul>
                      <p>
                        <strong>Radio control – high performance:</strong>
                      </p>
                      <ul className="list-disc px-5">
                        <li>
                          DRC D3 radio control system – maximum freedom of
                          movement
                        </li>
                        <li>Runs up to five days of uninterrupted operation</li>
                        <li>
                          Three transmitters can pair with one receiver – easy
                          to pass control at the press of a button
                        </li>
                        <li>
                          Up to 40 D3 systems can operate nearby without
                          interference
                        </li>
                        <li>
                          Safety features: frequency hopping and
                          listen-before-talk technology
                        </li>
                      </ul>
                      <Image
                        src="/img/dhr-rope-hoist78.webp"
                        height={300}
                        width={400}
                        className="max-w-sm mx-auto"
                        alt=""
                        layout="responsive"
                      />
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel8-content"
                      id="panel8-header"
                    >
                      <Typography component="span">
                        <span className="text-xl font-bold my-4 text-[#676f77]">
                          Precisely Tailored to the Application
                        </span>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p>
                        The DVR rope hoist can be equipped to match exactly what
                        you need. Variable-speed drive solutions are available
                        for both lifting and travel motions, using different
                        technology levels.
                      </p>
                      <p className="my-2">
                        <strong>Why variable speed makes sense:</strong>
                      </p>
                      <ul className="list-disc px-5">
                        <li>
                          Variable speeds: Choose from 1:10, 1:25, or ESR 1:37
                        </li>
                        <li>
                          Less wear: Smooth starts and stops mean less stress on
                          your crane system
                        </li>
                        <li>Longer life: Motors and brakes last longer</li>
                        <li>Energy savings: Up to 50% less power used</li>
                      </ul>
                      <h4 className="text-lg font-bold my-2 text-[#676f77]">
                        Load-dependent lifting speed – automatic adjustment:
                      </h4>
                      <ul className="list-disc px-5">
                        <li>High speed without load – up to 100% faster</li>
                        <li>Medium speed with partial load</li>
                        <li>Precise speed at full load</li>
                      </ul>

                      <h5 className="text-lg font-bold my-2 text-[#676f77]">
                        OWL
                      </h5>
                      <Image
                        src="/img/dhr-rope-hoistAc1.webp"
                        height={300}
                        width={300}
                        className="max-w-lg mx-auto"
                        alt=""
                      />
                      <ul className="list-disc px-5">
                        <li>Compact overload protection and status display</li>
                        <li>
                          Keeps things safe and helps you stay ahead of
                          maintenance
                        </li>
                        <li>Overload protection for individual hoists</li>
                        <li>Simple condition monitoring</li>
                        <li>
                          Tracks number of switching operations, operating time,
                          braking operations, control actuations
                        </li>
                        <li>
                          Tracks on-time, temperature index, number of overload
                          events
                        </li>
                        <li>Data can be used for SWP calculation</li>
                      </ul>

                      <h5 className="text-lg font-bold my-2 text-[#676f77]">
                        DMU
                      </h5>
                      <Image
                        src="/img/dhr-rope-hoistAc2.webp"
                        height={300}
                        width={400}
                        className="max-w-sm mx-auto"
                        alt=""
                        layout="responsive"
                      />
                      <ul className="list-disc px-5">
                        <li>Convenient monitoring unit with CAN bus</li>
                        <li>
                          Designed for better safety, longer brake life, and
                          smarter maintenance
                        </li>
                        <li>Helps identify operator training needs</li>
                        <li>Overload protection</li>
                        <li>Monitors sudden load increase</li>
                        <li>Temperature monitoring of motors</li>
                        <li>SWP elapsed operating time counter</li>
                        <li>Motor function monitoring</li>
                        <li>Motor start/stop by slow speed</li>
                        <li>Multi-hoisting tandem (up to five units)</li>
                        <li>Design limit warnings</li>
                        <li>Optional remote monitoring modem</li>
                        <li>Smart CAN bus features</li>
                      </ul>

                      <h5 className="text-lg font-bold my-2 text-[#676f77]">
                        More options – configure as needed
                      </h5>
                      <ul className="list-disc px-5">
                        <li>Second hoist brake for DVR 3, 5, 10</li>
                        <li>Drum brake for DVR 20 and 40</li>
                        <li>Halogen-free or silicone-free cables/wires</li>
                        <li>Heating or cooling device for bridge housing</li>
                        <li>Crane lighting</li>
                        <li>Horn</li>
                        <li>Load display</li>
                        <li>Service platform</li>
                        <li>Stainless steel switchgear cabinets</li>
                        <li>Rain cover</li>
                        <li>Explosion-proof design (DXR) available</li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel9-content"
                      id="panel9-header"
                    >
                      <Typography component="span">
                        <span className="text-xl font-bold my-4 text-[#676f77]">
                          Protected
                        </span>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p>
                        Optional rain cover, let the crane operate outdoors
                        without worry
                      </p>
                      <Image
                        src="/img/dhr-rope-hoist5.webp"
                        height={300}
                        width={300}
                        alt=""
                        layout="responsive"
                        className="w-100 max-w-sm"
                      />
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel10-content"
                      id="panel10-header"
                    >
                      <Typography component="span">
                        <span className="text-xl font-bold my-4 text-[#676f77]">
                          Smart features
                        </span>
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                      <Container maxWidth="lg">
                        <div className="space-y-4">
                          {/* Anti-sway control */}
                          <div>
                            <h3 className="text-lg font-semibold">
                              Anti-sway control
                            </h3>
                            <ul className="list-disc pl-5 text-sm text-gray-600">
                              <li>
                                Prevents load sway through active
                                counter-motions
                              </li>
                              <li>
                                Uses rope angle measurement to detect and dampen
                                movement
                              </li>
                            </ul>
                          </div>

                          {/* Slack-rope prevention */}
                          <div>
                            <h3 className="text-lg font-semibold">
                              Slack-rope prevention
                            </h3>
                            <ul className="list-disc pl-5 text-sm text-gray-600">
                              <li>Continuously monitors rope tension</li>
                              <li>
                                Automatically switches off hoist drive when load
                                is lowered or hook is snagged
                              </li>
                              <li>
                                Reduces risk of damage to load, crane, and
                                surroundings
                              </li>
                            </ul>
                          </div>

                          {/* Area-specific load reduction */}
                          <div>
                            <h3 className="text-lg font-semibold">
                              Area-specific load reduction
                            </h3>
                            <ul className="list-disc pl-5 text-sm text-gray-600">
                              <li>
                                Define areas where hoist can only enter if load
                                stays below a set limit
                              </li>
                              <li>
                                Reduces stress on runway and building
                                structure—especially with multiple cranes
                              </li>
                            </ul>
                          </div>

                          {/* Bypass control */}
                          <div>
                            <h3 className="text-lg font-semibold">
                              Bypass control
                            </h3>
                            <ul className="list-disc pl-5 text-sm text-gray-600">
                              <li>
                                Block specific areas for the travelling hoist
                              </li>
                              <li>
                                Safely avoid machinery or out-of-bounds zones
                              </li>
                            </ul>
                          </div>

                          {/* Tandem control */}
                          <div>
                            <h3 className="text-lg font-semibold">
                              Tandem control
                            </h3>
                            <ul className="list-disc pl-5 text-sm text-gray-600">
                              <li>
                                Transport loads safely with two DVR rope hoists
                              </li>
                              <li>Operated from a single control unit</li>
                            </ul>
                          </div>

                          <h2 className="text-xl font-semibold text-gray-700 mt-4">
                            Demag Modular Control (DMC) features
                          </h2>

                          {/* Follow me */}
                          <div>
                            <h3 className="text-lg font-semibold">Follow me</h3>
                            <ul className="list-disc pl-5 text-sm text-gray-600">
                              <li>Guide the hook by hand—crane follows</li>
                              <li>
                                Faster lifting, recommended for cranes up to 10
                                t
                              </li>
                            </ul>
                          </div>

                          {/* Hook centering */}
                          <div>
                            <h3 className="text-lg font-semibold">
                              Hook centering
                            </h3>
                            <ul className="list-disc pl-5 text-sm text-gray-600">
                              <li>
                                Automatically positions hook directly over the
                                load
                              </li>
                              <li>Faster cycles, easier operation</li>
                            </ul>
                          </div>

                          {/* Smart Tandem control */}
                          <div>
                            <h3 className="text-lg font-semibold">
                              Smart Tandem control
                            </h3>
                            <ul className="list-disc pl-5 text-sm text-gray-600">
                              <li>
                                Synchronize two cranes with up to four rope
                                hoists
                              </li>
                            </ul>
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
      </div>

      <Footer></Footer>
    </>
  );
}
