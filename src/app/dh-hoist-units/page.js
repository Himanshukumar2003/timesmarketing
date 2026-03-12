import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// import ProductInformation from "./tabs";
import { Breadcrumb } from "@/componts/breadcrumb";
import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";
import Container from "@mui/material/Container";
import RopeGuideSection from "./tabs";

export const metadata = {
  title: "Reliable Demag DH Hoist Units in India | Timeskrane",
  description:
    "Get reliable Demag DH hoist units in India from Timeskrane, built for smooth, safe, and heavy-duty lifting in demanding industrial environments.",
  keywords: [
    "Demag DH Hoist Units in India",
    "Demag DH hoist configurator",
    "DH hoist unit",
    "DH hoist units supplier in India",
    "Demag DH hoist price in India",
    "Buy Demag DH hoist units in India",
    "Industrial DH hoist units",
    "Demag hoist dealer in India",
  ],
  alternates: {
    canonical: "https://www.timeskrane.com/dh-hoist-units",
  },
  openGraph: {
    title: "Reliable Demag DH Hoist Units in India | Timeskrane",
    description:
      "Get reliable Demag DH hoist units in India from Timeskrane, built for smooth, safe, and heavy-duty lifting in demanding industrial environments.",
    url: "https://www.timeskrane.com/dh-hoist-units",
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
        <section className="bg-gray-50 px-4 py-16">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-3xl md:text-3xl font-bold text-gray-900 text-center mb-6">
                Demag DH. More than just a hoist.
              </div>
              <div className="flex justify-center">
                <div className=" mb-6 text-center h-1 w-20 bg-yellow-400 mt-5"></div>
              </div>

              <p className="text-lg text-gray-700 mb-8 text-center">
                The Demag DH hoist unit fits where you need it—on cranes,
                monorails, or as a stationary setup. It&apos;s built for
                demanding work, handling loads up to 100 tonnes with care and
                precision.
              </p>
              <p>
                But it&apos;s more than just lifting power. Installed as a
                travelling or stationary unit, it integrates smoothly into
                almost any design. Sometimes you barely notice it&apos;s
                there—until it gets to work.
              </p>
              <h4 className="text-xl  font-bold my-4 text-[#676f77]">
                Built tough
              </h4>
              <p className="text-lg text-gray-700">
                Some environments are just harsh. Foundries. Electroplating
                plants. High heat. Dust. Aggressive air. The DH is built for
                these places—rugged, reliable, and ready to withstand what comes
                at it.
              </p>
              <h4 className="text-xl font-bold my-4 text-[#676f77]">
                Versatile
              </h4>
              <p className="text-lg text-gray-700">
                The modular design and flexible mounting options make the DH
                easy to fit into almost any structure. With plenty of variants
                and options, the applications are nearly endless. Lifting
                stations. Winch arrangements. Architectural installations.
                Sometimes you have to look twice to spot them.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <h4 className="text-xl font-bold my-4 text-[#676f77]">
                    Your Benefits
                  </h4>

                  <ul className="list-disc pl-10 mt-2 space-y-1">
                    <li>Rugged design—proven around the world</li>
                    <li>Easy integration into any setup</li>
                    <li>
                      Handles high switching frequencies and heavy duty cycles
                    </li>
                    <li>
                      Precise positioning with mechanical microspeed or
                      frequency-controlled lifting
                    </li>
                    <li>Load capacity up to 100 tonnes</li>
                    <li>Hook path up to 104 metres</li>
                  </ul>
                  <h4 className="text-xl font-bold my-4 text-[#676f77]">
                    Universal. Safe. Rugged.
                  </h4>
                  <p>
                    Every DH hoist is built from perfectly matched, robust
                    components. That means you get a solution that fits—even for
                    the unusual applications. In operation all over the world,
                    the Demag DH delivers safety and reliability, day in and day
                    out.
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
                        <h3>Built for tough jobs and precise moves</h3>
                        <p>
                          The DH hoist handles high start/stop frequencies and
                          heavy duty cycles without breaking a sweat. Thanks to
                          mechanical microspeed and conical-rotor brake motors,
                          it keeps performing—even in high ambient temperatures.
                        </p>
                        <p>
                          <b>Positioning you can count on:</b>
                        </p>
                        <ul className="list-disc px-4 space-y-1">
                          <li>
                            1:10 mechanical microspeed for highly precise moves
                          </li>
                          <li>
                            NEW: Frequency-controlled lifting now available as a
                            standardised option
                          </li>
                        </ul>

                        <p>
                          <b>Flexible and reliable:</b>
                        </p>
                        <ul className="list-disc px-4 space-y-1">
                          <li>Rope drums with multi-groove designs</li>
                          <li>
                            Geared limit switch monitors limit positions safely
                            and reliably
                          </li>
                          <li>
                            Torsionally rigid frame&mdash;bolt it on from any
                            side
                          </li>
                          <li>Rope lead-off in any direction</li>
                          <li>Rope reeving built to your specs</li>
                          <li>Wide range of lifting speeds</li>
                          <li>Choose with or without electric equipment</li>
                          <li>Broad range of industry solutions available</li>
                        </ul>

                        <h3>
                          <strong>Stationary or mobile? Your call.</strong>
                        </h3>
                        <p>
                          <span>
                            The DH adapts to you&mdash;whether fixed in place or
                            travelling on a crane.
                          </span>
                        </p>

                        <h3>
                          <strong>Trolleys built to last</strong>
                        </h3>
                        <ul className="list-disc px-4 space-y-1">
                          <li>
                            Travel wheels made from high-strength
                            spheroidal-graphite cast iron
                          </li>
                          <li>
                            Gentle on the track and quiet
                            running&mdash;effective vibration damping
                          </li>
                          <li>
                            Self-lubricating effect from embedded nodular
                            graphite means lower friction, higher wear
                            resistance
                          </li>
                          <li>
                            Special wheel shape distributes load evenly, keeping
                            forces centred on the girder
                          </li>
                          <li>
                            Generously sized anti-friction bearings for long
                            service life
                          </li>
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
                      Demag F-DH hoist units – direct connection
                    </h4>
                    <ul className="list-disc pl-10 mt-2 space-y-1">
                      <li>Square frame design—mount it on any side</li>
                      <li>Load capacity: up to 100 tonnes</li>
                    </ul>
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
                    <ul className="list-disc pl-10 mt-2 space-y-1">
                      <li>
                        <strong>
                          Trolley designed with a favourable
                          C-dimension&mdash;fits in tight spaces
                        </strong>
                      </li>
                      <li>
                        <strong>
                          Also available as an articulated trolley
                        </strong>
                      </li>
                      <li>
                        <strong>Load capacity: up to 16 tonnes</strong>
                      </li>
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
                    <ul className="list-disc pl-10 mt-2 space-y-1">
                      <li>Cost-effective solution for monorails</li>
                      <li>
                        Infinitely variable flange width adjustment&mdash;fits
                        different beam sizes easily
                      </li>
                      <li>Also available as EUD-DH articulated trolley</li>
                      <li>
                        Load capacity: up to 16 tonnes (optionally up to 50
                        tonnes)
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
                    <ul className="list-disc pl-10 mt-2 space-y-1">
                      <li>
                        Designed for higher load capacities on double-girder
                        cranes
                      </li>
                      <li>
                        Low-headroom design &ndash; makes efficient use of space
                      </li>
                      <li>Favourable approach dimensions</li>
                      <li>Load capacity: up to 100 tonnes</li>
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
                        Customised motions – precise, rugged, high performance
                      </h4>
                      <p>
                        Three drive concepts. One reliable foundation. All
                        &ldquo;Made in Germany.&ldquo;
                      </p>
                      <h4 className="text-xl font-bold my-4 text-[#676f77]">
                        Drive with main and creep lifting speeds
                      </h4>
                      <ul className="list-disc px-4 space-y-1">
                        <li>
                          Conical-rotor brake motors with outputs up to 40 kW
                        </li>
                        <li>
                          Pole-changing motors handle extremely high switching
                          frequencies
                        </li>
                        <li>
                          Mechanical connection between brake and rotor = high
                          braking capacity, no extra controls needed
                        </li>
                        <li>Motor temperature monitoring comes standard</li>
                      </ul>
                      <h6 className="text-lg font-bold my-4 text-[#676f77]">
                        Drive for infinitely variable lifting speeds
                      </h6>
                      <ul className="list-disc px-4 space-y-1">
                        <li>
                          ZBA cylindrical-rotor brake motors + Dedrive Compact
                          frequency inverters
                        </li>
                        <li>Infinitely variable speeds, smooth and powerful</li>
                      </ul>
                      <h6 className="text-lg font-bold my-4 text-[#676f77]">
                        Features:
                      </h6>
                      <ul className="list-disc px-4 space-y-1">
                        <li>Motor outputs up to 40 kW</li>
                        <li>Inverter-controlled brake motor</li>
                        <li>External pulse generators for speed feedback</li>
                        <li>Brake with adjustment and release monitoring</li>
                        <li>Standard motor temperature monitoring</li>
                        <li>Ready for customer drives and control solutions</li>
                      </ul>
                      <h6 className="text-lg font-bold my-4 text-[#676f77]">
                        Main and creep lifting speeds with F6 pole-changing
                      </h6>

                      <ul className="list-disc px-4 space-y-1">
                        <li>Proven Demag KBH squirrel-cage motors</li>
                        <li>
                          Reliable and efficient&mdash;even with high duty
                          factor
                        </li>
                      </ul>
                      <h6 className="text-lg font-bold my-4 text-[#676f77]">
                        Main and creep lifting speeds with F10 mechanical
                        microspeed
                      </h6>
                      <ul className="list-disc px-4 space-y-1">
                        <li>Separate motors for main and creep motions</li>
                        <li>Particularly precise positioning</li>
                        <li>
                          High braking capacity&mdash;even during power failure
                        </li>
                        <li>No control devices needed for reliable braking</li>
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
