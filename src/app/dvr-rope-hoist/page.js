"use client";

import Image from "next/image";
import Accordion from "@mui/material/Accordion";
// import AccordionActions from "@mui/material/AccordionActions";
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
// import ProductInformation from "./tabs";
// import CraneSystemDetails from "./CraneSystemDetails";
import Container from "@mui/material/Container";
import { px } from "framer-motion";
import ProductInformation from "./tabs";
export default function Home() {
  return (
    <>
       <Navbar /> 
       <Breadcrumb
        title="DVR rope hoist
"
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
              <h1 className="text-3xl md:text-3xl font-bold text-gray-900 text-center mb-6">
                Versatile – this is the Demag DVR rope hoist
              </h1>
              <p className="text-lg text-gray-700 mb-8 text-center">
                It offers high levels of efficiency and productivity. You
                benefit from its flexibility in all areas of application. Thanks
                to its extensive product portfolio, the DVR offers customisable
                solutions for the various requirements of crane and lifting
                technology. From the standard version to the smart high-end
                solution with intelligent safety functions, the DVR rope hoist
                meets the demands for economical and ergonomic lifting
                solutions.
              </p>

              <h4 className="text-xl font-bold my-4 text-[#676f77]">
                The choice is yours
              </h4>

              <p className="text-lg text-gray-700 mt-6">
                DHR rope hoists fulfil almost any requirement:
              </p>
              <ul>
                <li>Five sizes with load capacities of up to 80 tonnes</li>
                <li>
                  Different application types: Foot-mounted hoist, low-headroom
                  monorail hoist, double-rail crab and standard-headroom
                  monorail hoist (with/without articulated trolley)
                </li>
                <li>
                  Control system: conventional contactor control or provided by
                  the customer
                </li>
                <li>Variable-speed or two-stage drive solutions</li>
                <li>
                  Control concept exactly as required: cable-connected or radio
                  control
                </li>
                <li>Wide range of options available</li>
                <li>
                  Additional smart features can be integrated for safe and
                  convenient load handling
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
                        Rope drum and guide
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
                        Rope drum and guide
                      </span>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="">
                      <h5 className="font-bold my-2 text-lg text-[#676f77]">
                        {" "}
                        Rope drum
                      </h5>
                      <p>
                        The basic DVR design includes a large diameter rope
                        drum. The benefits are: High positioning accuracy and
                        low rope wear thanks to appropriately dimensioned guide
                        rollers. In addition, the approach dimensions are very
                        small.
                      </p>
                      <p>
                        The rope drum is manufactured in-house with high
                        precision. Since only one jig arrangement is used for
                        all production steps, its connection points are
                        reproducibly positioned.
                      </p>

                      <h5 className="font-bold text-lg my-2 text-[#676f77]">
                        Rope guide
                      </h5>
                      <p>
                        The rope guide is made entirely of metal and guides the
                        rope reliably and precisely with very little wear.
                      </p>
                      <p>
                        For the larger sizes 10 (optional) and 20-40, rope
                        guides that use the full circumference are installed as
                        standard.
                      </p>
                      <p>
                        The rope can be pulled diagonally by up to four degrees
                        without touching the rope guide. The ropes are
                        galvanised as standard.
                      </p>
                    </div>
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
                        Hoist motor and brake
                      </span>{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <h5 className="font-bold text-lg my-2 text-[#676f77]">
                      Powerful and precise
                    </h5>
                    <p>
                      The DVR rope hoist is driven by a two-stage cylindrical
                      motor for precise lifting and lowering. It has a motor
                      output of up to 35 kilowatts.
                    </p>
                    <p>
                      Standard IP 55 classification, optionally also IP 66. All
                      motor cables have plug-in connections for simple Plug &
                      Play. The disc brake has a high braking torque and is
                      designed for a service life of one million switching
                      cycles.
                    </p>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                  >
                    <Typography component="span">
                      {" "}
                      <span className="text-xl font-bold my-4 text-[#676f77]">
                        ProHub
                      </span>{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <h5 className="font-bold text-lg my-2 text-[#676f77]">
                      Up to 100% more speed
                    </h5>
                    <ul className="list-disc px-5">
                      <li>
                        The ProHub ASR and ProHubESR motor variants ensure even
                        higher lifting speeds for handling processes. This
                        shortens process times thanks to faster load handling
                      </li>
                      <li>
                        Thanks to load-dependent speeds, ProHubASR with the
                        A-motor offers up to 50% higher speeds with
                        inverter-controlled speed monitoring. Maximum power with
                        up to 100% higher speed is achieved with ProHubESR with
                        an encoder-monitored S-motor.
                      </li>
                    </ul>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                  >
                    <Typography component="span">
                      {" "}
                      <span className="text-xl font-bold my-4 text-[#676f77]">
                        Travel motor
                      </span>{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className=" px-5  list-disc">
                      <li>
                        Compact drive unit with two-stage speeds and low
                        deadweight.
                      </li>
                      <li>
                        Standard temperature monitoring and lubricated for life.
                      </li>
                      <li>High traction thanks to two-wheel drive.</li>
                      <li>Suitable for indoor and outdoor use.</li>
                      <li>Quadro drive optionally available for EZ-DVR.</li>
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
                      {" "}
                      <span className="text-xl font-bold my-4 text-[#676f77]">
                        Housing
                      </span>{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul className=" px-5  list-disc">
                      <li>Weight-optimised and robust</li>
                      <li>
                        The compact design provides reduced deadweight. The DVR
                        hoist housing weighs significantly less for each size
                        than in comparable ranges.
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
                      {" "}
                      <span className="text-xl font-bold my-4 text-[#676f77]">
                        Bottom block
                      </span>{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <h5 className="text-xl font-bold my-4 text-[#676f77]">
                      Bottom block
                    </h5>
                    <ul className=" px-5  list-disc">
                      <li>
                        HBC hook with recessed grip and finger guard as standard
                        for all sizes up to DVR 10 4/1. DIN hooks are optional
                        and available as standard for the larger sizes (DVR 20
                        and 40). The bottom blocks allow full 360-degree hook
                        rotation.
                      </li>
                      <li>
                        A lockable hook and a version with insulation are
                        available as options.
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
                      {" "}
                      <span className="text-xl font-bold my-4 text-[#676f77]">
                        Control
                      </span>{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <h5 className="text-xl font-bold my-4 text-[#676f77]">
                      Controllers
                    </h5>
                    <ul className=" px-5  list-disc">
                      <li>
                        When it comes to operation, we also offer our customers
                        the greatest possible flexibility and individual freedom
                        of choice between two control concepts.
                      </li>
                      <li>Wire-connected and ergonomic</li>
                      <li>
                        For control from the ground, you can choose between the
                        DSB pendant controller or the optional extremely robust
                        DST with up to nine control elements
                      </li>
                    </ul>

                    <h4>Radio control: high performance</h4>
                    <p className="mt-4">
                      The powerful DRC D3 radio control system permits maximum
                      freedom of movement and ease of control. The new
                      generation of radio transmitters can be used for up to
                      five days of uninterrupted operation. Three transmitters
                      can be paired with each receiver for simple transfer of
                      control at the press of a button. Up to 40 systems from
                      our D3 generation of radio controls can be operated in
                      close proximity to each other without any mutual
                      interference. High safety standards are satisfied by
                      frequency hopping and listen-before-talk operation.
                    </p>
                    <Image
                      src="/img/dhr-rope-hoist78.webp"
                      height={300}
                      width={400}
                      className="max-w-sm mx-auto"
                      alt=""
                      layout="responsive"
                    ></Image>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6-content"
                    id="panel6-header"
                  >
                    <Typography component="span">
                      {" "}
                      <span className="text-xl font-bold my-4 text-[#676f77]">
                        Precisely tailored to the application
                      </span>{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="mb-2">
                      A variety of options are available to equip the DVR rope
                      hoist to meet your application needs. The DVR offers
                      variable-speed drive solutions for lifting and travel
                      motions by using different levels of technology. The
                      advantages of the inverters are obvious:
                    </p>
                    <h5 className="text-xl font-bold my-4 text-[#676f77]">
                      Controllers
                    </h5>
                    <ul className=" px-5  list-disc">
                      <li>Variable speeds: 1:10, 1:25, ESR 1:37</li>
                      <li>
                        Less wear: Smooth travel start-up and lifting reduces
                        the load on the crane system
                      </li>
                      <li>Longer motor/brake service life</li>
                      <li>Significant energy savings of up to 50%</li>
                    </ul>

                    <p className="font-semiblod mb-2">
                      Load-dependent lifting speed for higher productivity:
                    </p>

                    <ul className=" px-5  list-disc">
                      <li>High speed without load (up to 100%)</li>
                      <li>Medium speed with partial load</li>
                      <li>Precise speed at full load</li>
                    </ul>

                    <h4 className="text-xl font-bold my-4 text-[#676f77]">
                      OWL
                    </h4>

                    <Image
                      src="/img/dhr-rope-hoistAc1.webp"
                      height={300}
                      width={300}
                      alt=""
                      className="max-w-lg mx-auto"
                    ></Image>
                    <p className="mt-4 mb-2">
                      Compact unit for overload protection and status display
                      for increased safety and predictive maintenance.
                    </p>

                    <ul className=" px-5  list-disc">
                      <li>Overload protection for individual hoists</li>
                      <li>Simple condition monitoring</li>
                      <li>Number of switching operations</li>
                      <li>Operating time</li>
                      <li>Number of braking operations</li>
                      <li>Number of control actuations</li>

                      <li>On-time</li>
                      <li>Temperature index</li>
                      <li>Number of operations with overload</li>
                      <li>Can be used for SWP calculation</li>
                    </ul>

                    <h4 className="text-xl font-bold my-4 text-[#676f77]">
                      DMU
                    </h4>

                    <Image
                      src="/img/dhr-rope-hoistAc2.webp"
                      height={300}
                      width={400}
                      className="max-w-sm mx-auto"
                      alt=""
                      layout="responsive"
                    ></Image>

                    <p className="mb-2">
                      Convenient monitoring unit with CAN bus functions for
                      improved safety, extended brake service life and optimised
                      maintenance intervals. Identifies training needs for
                      operators.
                    </p>
                    <ul className=" px-5  list-disc">
                      <li>Overload protection</li>
                      <li>Monitoring for sudden load increase</li>
                      <li>Temperature monitoring of motors</li>
                      <li>SWP elapsed operating time counter</li>
                      <li>Monitoring of motor function</li>
                      <li>Motor start/stop by slow speed</li>
                      <li>Multi-hoisting tandem (up to five units)</li>
                      <li>Design limits (warnings)</li>
                      <li>Optional remote monitoring modem</li>
                      <li>Smart features</li>
                      <li>CAN bus functionalities</li>
                    </ul>

                    <h4 className="text-xl font-bold my-4 text-[#676f77]">
                      Further options for needs-based configuration
                    </h4>
                    <ul className=" px-5  list-disc">
                      <li>Second hoist brake for DVR 3, 5, 10</li>
                      <li>Drum brake for DVR 20 and 40</li>
                      <li>Halogen- or silicone-free cables and/or wires</li>
                      <li>Heating or cooling device for bridge housing</li>
                      <li>Crane lighting</li>
                      <li>Horn</li>
                      <li>Load display</li>
                      <li>Service platform</li>
                      <li>Stainless steel switchgear cabinets</li>
                      <li>Rain cover</li>
                      <li>Explosion-proof design (DXR)</li>
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
                      {" "}
                      <span className="text-xl font-bold my-4 text-[#676f77]">
                      Protected
                      </span>{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p className="mb-2">
                      An optional rain cover ensures the crane can operate
                      outdoors.
                    </p>
                    <Image
                      src="/img/dhr-rope-hoist5.webp"
                      height={300}
                      width={300}
                      alt=""
                      layout="responsive"
                      className="w-100 max-w-sm"
                    ></Image>
                  </AccordionDetails>
                </Accordion>
                
           
                <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span"> <span className="text-xl font-bold my-4 text-[#676f77]">
          Smart features</span> </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Container maxWidth="lg">
      <div>
       

        <div className="space-y-6 py-6">
          {/* Anti-sway control */}
          <div className="flex items-start space-x-4">
            <Image
              src="/img/dhr-rope-hoist-icon1.webp"
              alt="Tandem Icon"
              height={50}
              width={50}
              className="w-13 h-13"
            />
            <div>
              <h3 className="text-lg font-semibold">Anti-sway control</h3>
              <p className="text-sm text-gray-600">
                Prevents increased load sway by active counter-motions of the crane. Active system based on rope angle measurement to detect and dampen any existing load sway.
              </p>
            </div>
          </div>
          <hr />

          {/* Slack-rope prevention */}
          <div className="flex items-start space-x-4">
            <Image
              height={50}
              width={50}
              src="/img/dhr-rope-hoist-icon1.webp"
              alt="Tandem Icon"
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-lg font-semibold">Slack-rope prevention</h3>
              <p className="text-sm text-gray-600">
                Continuous monitoring of the rope tension: The hoist drive automatically switches off when the load has been lowered to its target position or if the hook is accidentally snagged. Reduces the risk of damage to the load, crane and surrounding area.
              </p>
            </div>
          </div>
          <hr />

          {/* Area-specific load reduction */}
          <div className="flex items-start space-x-4">
            <Image
              src="/img/dhr-rope-hoist-icon3.webp"
              alt="Tandem Icon"
              height={50}
              width={50}
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-lg font-semibold">Area-specific load reduction</h3>
              <p className="text-sm text-gray-600">
                Areas can be defined which the travelling hoist may only enter if the load does not exceed a reference value. This reduces the load on the runway and building structure – especially when several cranes operate on one runway.
              </p>
            </div>
          </div>
          <hr />

          {/* Bypass control */}
          <div className="flex items-start space-x-4">
            <Image
              height={50}
              width={50}
              src="/img/dhr-rope-hoist-icon5.webp"
              alt="Tandem Icon"
              className="w-13 h-13"
            />
            <div>
              <h3 className="text-lg font-semibold">Bypass control</h3>
              <p className="text-sm text-gray-600">
                Areas to be blocked for the travelling hoist can be specified. In this way, you can safely by-pass high parts of machinery or zones that are out of bounds.
              </p>
            </div>
          </div>
          <hr />

          {/* Tandem control */}
          <div className="flex items-start space-x-4">
            <Image
              src="/img/dhr-rope-hoist-icon3.webp"
              alt="Tandem Icon"
              width={50}
              height={50}
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-lg font-semibold">Tandem control</h3>
              <p className="text-sm text-gray-600">
                Loads can be safely transported by two DVR rope hoists – via a single control unit.
              </p>
            </div>
          </div>
          <hr />

          {/* Section Title */}
          <h4 className="text-md font-semibold text-gray-800 mt-4">
            With DMC Demag Modular Control:
          </h4>

          {/* Follow me */}
          <div className="flex items-start space-x-4">
            <Image
              src="/img/dhr-rope-hoist-icon5.webp"
              alt="Follow-me Icon"
              width={50}
              height={50}
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-lg font-semibold">Follow me</h3>
              <p className="text-sm text-gray-600">
                Makes lifting operations much faster because the crane can be moved above the load by simply guiding the hook by hand. (Recommended for cranes up to 10 t).
              </p>
            </div>
          </div>
          <hr />

          {/* Hook Centering */}
          <div className="flex items-start space-x-4">
            <Image
              src="/img/dhr-rope-hoist-icon6.webp"
              alt="Hook Centering Icon"
              width={50}
              height={50}
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-lg font-semibold">Hook Centering</h3>
              <p className="text-sm text-gray-600">
                Positions the crane hook automatically directly over the load. The benefits: faster load cycle times and ease of operation.
              </p>
            </div>
          </div>
          <hr />

          {/* Smart Tandem control */}
          <div className="flex items-start space-x-4">
            <Image
              src="/img/dhr-rope-hoist-icon7.webp"
              alt="Diagonal Pull Icon"
              width={50}
              height={50}
              className="w-10 h-10"
            />
            <div>
              <h3 className="text-lg font-semibold">Smart Tandem control</h3>
              <p className="text-sm text-gray-600">
                Two cranes with up to four rope hoists can also be synchronized.
              </p>
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
      </div>

      <Footer></Footer>
    </>
  );
}
