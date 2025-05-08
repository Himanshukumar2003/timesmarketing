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
import Container from "@mui/material/Container";
import { px } from "framer-motion";
import RopeGuideSection from "./tabs";
export default function Home() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="Demag DH. The hoist unit."
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "Demag DH. The hoist unit.",
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
                Demag DH. The hoist unit: Beyond classic crane applications
              </h1>
              <div className="flex justify-center">
                <div className=" mb-6 text-center h-1 w-20 bg-yellow-400 mt-5"></div>
              </div>

              <p className="text-lg text-gray-700 mb-8 text-center">
                Demag DH hoist units can be used in a wide variety of
                applications, both as travelling hoists on cranes or monorails
                and as stationary solutions. These powerful hoist units offer a
                number of special technical features that enable loads to be
                handled reliably even under demanding requirements. More than
                lifting: Installed as stationary or travelling units, they are
                more than just hoists – thanks to gentle handling with high load
                capacities up to 100 tons and flexible integration into almost
                any design.
              </p>

              <h4 className="text-xl  font-bold my-4 text-[#676f77]">
                Built tough
              </h4>
              <p className="text-lg text-gray-700">
                DH hoists are robust to ensure reliable operation even in the
                toughest environments. Demag hoist units are designed for
                demanding applications such as foundries or electroplating
                plants with high ambient temperatures, high dust levels and
                aggressive environments. They can also withstand the adverse
                conditions typically encountered by rope hoists.
              </p>
              <h4 className="text-xl font-bold my-4 text-[#676f77]">
                Versatile
              </h4>
              <p className="text-lg text-gray-700">
                Their modular concept and flexible mounting arrangements enable
                DH hoist units to be integrated into almost any structure with
                ease. Their many variants and options facilitate an almost
                unlimited range of applications. For example, you can find these
                hoists in lifting stations, winch arrangements and architectural
                applications – sometimes it takes a closer look to even discover
                them.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <h4 className="text-xl font-bold my-4 text-[#676f77]">
                    DH: Your benefits
                  </h4>

                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Rugged design – proven worldwide</li>
                    <li>Easy integration into any design</li>
                    <li>High switching frequencies and high duty cycles</li>
                    <li>
                      Precise positioning with mechanical microspeed or
                      frequency-controlled lifting
                    </li>
                    <li>Load capacity up to 100 t</li>
                    <li>Hook path up to 104 m</li>
                  </ul>
                  <h4 className="text-xl font-bold my-4 text-[#676f77]">
                    Universal. Safe. Rugged.
                  </h4>
                  <p>
                    Demag DH hoist units are based on perfectly matched and
                    robustly designed components. This means that they offer
                    optimum conditions for individual solutions, even for
                    unusual applications. Demag DH hoist units are in operation
                    all over the world and offer outstanding safety and
                    reliability.
                  </p>
                </div>
                <Image
                  height={100}
                  width={100}
                  layout="responsive"
                  src="/img/dh-host-1.webp"
                  className="w-full h-auto"
                  alt="DHR Rope Hoist"
                />
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 mt-10">
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
                        Technical features
                      </span>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* <ProductInformation></ProductInformation> */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start p-4">
                      {/* Content Section */}
                      <div className="md:col-span-8 space-y-6">
                        <ul className="list-disc px-4 space-y-1">
                          <li>
                            High number of starts/stops and high duty factor
                            thanks to mechanical microspeed and conical-rotor
                            brake motors, also for high ambient temperatures
                          </li>
                          <li>
                            Highly precise positioning with 1:10 mechanical
                            microspeed
                          </li>
                          <li>
                            NEW: Frequency-controlled lifting as standardised
                            option
                          </li>
                          <li>
                            Rope drums available with multi-groove designs
                          </li>
                          <li>
                            Safe and reliable monitoring of the limit positions
                            by geared limit switch
                          </li>
                          <li>Simple integration into almost any design</li>
                          <li>
                            Torsionally rigid frame, for bolted connection on
                            all sides
                          </li>
                          <li>Rope lead-off possible in any direction</li>
                          <li>
                            Rope reeving according to customer requirements
                          </li>
                          <li>Wide range of lifting speeds</li>
                          <li>Optionally with or without electric equipment</li>
                          <li>Wide range of industry solutions available</li>
                        </ul>
                      </div>

                      {/* Image Section */}
                      <div className="md:col-span-4">
                        <Image
                          src="/img/dh-hoist2.webp"
                          alt="Demag DVR Hoist"
                          height={100}
                          width={100}
                          layout="responsive"
                          className="w-full h-auto rounded-lg shadow"
                        />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold my-4 text-[#676f77]">
                      Models
                      <br />
                      Stationary or mobile? Everything is possible.
                    </h4>

                    <h6 className="text-2sm font-bold my-4 text-[#676f77]">
                      Trolleys
                    </h6>

                    <ul className="list-disc px-4 space-y-1">
                      <li>
                        Travel wheels made of high-strength spheroidal-graphite
                        cast-iron
                      </li>
                      <li>
                        Particularly gentle on the track, quiet running thanks
                        to effective vibration damping
                      </li>
                      <li>
                        Lower friction and high wear resistance due to
                        self-lubrication effect of embedded nodular graphite
                      </li>
                      <li>
                        Optimum load distribution thanks to special travel wheel
                        shape, which transmits wheel contact forces close to the
                        centre of the girder
                      </li>
                      <li>
                        Generously dimensioned anti-friction bearings with long
                        service life
                      </li>
                    </ul>
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
                        4 Models
                      </span>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <h4 className="text-xl font-bold my-4 text-[#676f77]">
                      Direct connection of Demag F-DH hoist units
                    </h4>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Square frame design can be mounted on any side.</li>
                      <li>Load capacity: up to 100 t.</li>
                    </ul>{" "}
                    <Image
                      height={100}
                      width={100}
                      layout="responsive"
                      src="/img/dh-host-3.webp"
                      className="w-full h-auto max-w-lg"
                      alt="DHR Rope Hoist"
                    />
                    <h4 className="text-xl font-bold my-4 text-[#676f77]">
                      EK-DH low-headroom monorail hoist
                    </h4>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Trolley with favourable C-dimension.</li>
                      <li>Also available as an articulated trolley.</li>
                      <li>Load capacity: up to 16 t</li>
                    </ul>{" "}
                    <Image
                      height={100}
                      width={100}
                      layout="responsive"
                      src="/img/dh-host5.webp"
                      className="w-full h-auto max-w-lg"
                      alt="DHR Rope Hoist"
                    />
                    <h4 className="text-xl font-bold my-4 text-[#676f77]">
                      EU-DH standard-headroom monorail hoist
                    </h4>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>
                        Cost-effective solution for monorails with infinitely
                        variable flange width adjustment.
                      </li>
                      <li>Also as EUD-DH articulated trolley. </li>
                      <li>
                        Load capacity: up to 16 t (optionally also up to 50 t).
                      </li>
                    </ul>{" "}
                    <Image
                      height={100}
                      width={100}
                      layout="responsive"
                      src="/img/dh-host-6.webp"
                      className="w-full h-auto max-w-lg"
                      alt="DHR Rope Hoist"
                    />
                    <h4 className="text-xl font-bold my-4 text-[#676f77]">
                      EZ-DH double-rail crab
                    </h4>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>
                        For higher load capacities on double-girder cranes;
                        optimum use of space thanks to low-headroom design and
                        favourable approach dimensions.{" "}
                      </li>
                      <li>Load capacity: up to 100 t.</li>
                    </ul>{" "}
                    <Image
                      height={100}
                      width={100}
                      layout="responsive"
                      src="/img/dh-host7.webp"
                      className="w-full h-auto max-w-lg"
                      alt="DHR Rope Hoist"
                    />
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
                        Drive concept
                      </span>{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Container maxWidth="lg">
                      <h4 className="text-xl font-bold  text-[#676f77]">
                        Customised motions
                      </h4>
                      <p>
                        Precise. Rugged. High performance. For our DH hoist
                        range, we offer three different drive concepts that have
                        proven themselves in a wide range of applications. Based
                        on reliable series components, lifting solutions can be
                        specifically configured for any requirement. With the
                        “Made in Germany” seal of quality.
                      </p>
                      <h4 className="text-xl font-bold my-4 text-[#676f77]">
                        Drive with main lifting and creep lifting speeds{" "}
                      </h4>
                      <p>
                        Our conical-rotor brake motors with outputs of up to 40
                        kW are used as starting/stopping drives. The
                        pole-changing motors have two speeds and work reliably
                        even with extremely high switching frequencies. The
                        mechanical connection between the conical brake and
                        rotor creates a unique braking principle with high
                        braking capacity. This makes these motors superior
                        wherever the highest demands are placed on the brake.
                        Separate control and additional switching elements are
                        not required. The sliding-rotor motors are equipped with
                        motor temperature monitoring as standard.
                      </p>
                      <h4 className="text-xl font-bold my-4 text-[#676f77]">
                        Drive for infinitely variable lifting speeds
                      </h4>
                      <p className="mb-2">
                        The combination of our ZBA cylindrical-rotor brake
                        motors with Dedrive Compact frequency inverters creates
                        powerful lifting units with infinitely variable speeds.
                        And they offer impressive performance:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        {/* Left Column: Text */}
                        <div className="md:col-span-6 space-y-4">
                          <h4 className="text-xl font-bold my-4 text-[#676f77]">
                            Drive Features
                          </h4>

                          {/* First UL */}
                          <ul className="list-disc px-4 space-y-1">
                            <li>
                              High drive efficiency with motor outputs of up to
                              40 kW
                            </li>
                            <li>
                              Infinitely variable lifting speeds with
                              inverter-controlled brake motor
                            </li>
                            <li>
                              With external pulse generators for speed feedback
                              to the frequency inverter
                            </li>
                            <li>
                              Motor brake with adjustment monitoring and brake
                              release monitoring
                            </li>
                            <li>Motor temperature monitoring as standard</li>
                            <li>
                              Also ready for customer drives and control
                              solutions
                            </li>
                          </ul>

                          {/* Second UL */}
                          <h4 className="text-xl font-bold my-4 text-[#676f77]">
                            {" "}
                            Main and creep lifting speeds with F6 pole-changing
                          </h4>
                          <ul className="list-disc px-4 space-y-1">
                            <li>
                              Proven Demag drive technology with Demag KBH
                              squirrel-cage motors
                            </li>
                            <li>
                              Reliable and efficient in starting/stopping
                              applications – also with high duty factor
                            </li>
                          </ul>
                        </div>

                        {/* Right Column: Image */}
                        <div className="md:col-span-6">
                          <Image
                            height={300}
                            width={300}
                            src="/img/dh-host-grapgh.webp"
                            alt="Demag Drive Motor"
                            className="w-full h-full  rounded-lg shadow"
                          />
                        </div>
                      </div>
                      <h4 className="text-xl font-bold my-4 text-[#676f77]">
                        Main and creep lifting speeds with F10 mechanical
                        microspeed unit
                      </h4>
                      <ul className="list-disc px-4 space-y-1">
                        <li>Demag KBH and KBA squirrel-cage motors</li>
                        <li>
                          Separate motors for main and creep lifting motions
                        </li>
                        <li>Particularly precise positioning</li>
                        <li>
                          High braking capacity and reliable braking without any
                          control devices when switching off or in the event of
                          a power failure
                        </li>
                      </ul>

                      <RopeGuideSection />
                    </Container>
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
                        Rope reeving arrangements
                      </span>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <h6 className="text-lg font-bold  text-[#676f77] mb-4">
                      The right variant for every application
                    </h6>
                    <Image
                      src="/img/dh-host-13.webp"
                      height={300}
                      width={300}
                      alt=""
                      className="w-100"
                    ></Image>
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
