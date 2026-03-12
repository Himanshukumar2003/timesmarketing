"use client";

import Container from "@mui/material/Container";
import Image from "next/image";
// components/OffsetGearedMotors.js
import { useState, useEffect, use } from "react";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Breadcrumb } from "@/componts/breadcrumb";
import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";
const data = [
  {
    product: "Offset Geared Motors",
    slug: "offset-geared-motors",
    summary: {
      title: "Full drive performance, also in a small space",
      description: [
        "Our offset geared motors are specially developed for space-saving drive solutions. Their compact housing design provides good ground clearance, making them ideal for travel applications at floor level.",
        "The large center distance between the parallel gearbox shafts allows these motors to be used in central drive arrangements, for example when shaft ends are fitted on both sides.",
      ],
      benefits: {
        list: [
          "Wide range of transmission ratios for flexible applications",
          "Cost-effective solutions with high efficiency",
          "Practical designs suitable for various travel applications",
          "Available in 9 gearbox sizes to meet different performance needs",
        ],
      },
    },
    productInformation: {
      heading: "Maximum flexibility",
      tabHeading: "The benefits at a glance",
      maximumFlexibility: [
        " 9 gearbox sizes available for torques ranging from 160 to 13,800 Nm",
        "Options for direct input or coupling connection",
        "Five different drive shaft variants to suit various applications",
        "Five housing designs for flexible installation and use",
      ],

      img: [
        {
          src: "/img/sraes/flachgetriebe.webp",
          description:
            "These brackets are designed to handle a lot of force. You can choose between our AM 10-40, which is a specific torque bracket, or the more flexible Universal AU 20-90, which adjusts to fit a wider range of setups.",
        },
        {
          src: "/img/sraes/Flachgetriebe2.webp",
          description: "Torque bracket type AM 10-40 / Universal type AU 20-90",
        },
      ],

      onlineConfiguration: {
        subdatea: [
          {
            title: "Discover the Perfect Fit for Your Drive",
            description: [
              "Finding the right support has never been easier. Whether you need the precise, robust performance of our AM 10-40 Torque Bracket or the adaptable, flexible fit of the Universal AU 20-90, we have the solution ready for you.",
              "See for yourself with the Demag Drive Designer—your online tool for a smooth, no-hassle planning experience.",
            ],
          },
        ],
        heading: "Everything you need, right at your fingertips:",
        features: [
          " Dive into the details: Explore complete technical data.",
          "Build with confidence: Download 2D/3D models in all standard formats.",
          "See the big picture: Access clear electrical circuit diagrams.",
          "Plan with certainty: Check real-time delivery indicators.",
          "Ready to go? Send your configuration directly to the Demag Shop.",
        ],
        link: "/",
      },
    },
    technicalData: {
      tabHeading: "Technical data",
      heading: "Offset geared motors",
      units: "Nm",
      tableHeadings: [
        { label: "Size", key: "size" },
        { label: "Torque (Nm)", key: "torque" },
        { label: "2-stage Ratio", key: "2-stage" },
        { label: "3-stage Ratio", key: "3-stage" },
      ],
      gearboxes: [
        {
          size: "A10",
          torque: 160,
          ratios: { "2-stage": "8.32 - 52.5", "3-stage": null },
        },
        {
          size: "A20",
          torque: 250,
          ratios: { "2-stage": "6.21 - 28.0", "3-stage": "31.7 - 123" },
        },
        {
          size: "A30",
          torque: 460,
          ratios: { "2-stage": "7.78 - 71.9", "3-stage": "82.4 - 156" },
        },
        {
          size: "A40",
          torque: 820,
          ratios: { "2-stage": "8.78 - 61.6", "3-stage": "73.8 - 256" },
        },
        {
          size: "A50",
          torque: 1450,
          ratios: { "2-stage": "8.69 - 71.6", "3-stage": "78.0 - 218" },
        },
        {
          size: "A60",
          torque: 2600,
          ratios: { "2-stage": "8.91 - 67.9", "3-stage": "77.2 - 297" },
        },
        {
          size: "A70",
          torque: 4600,
          ratios: { "2-stage": "9.23 - 68.1", "3-stage": "78.9 - 267" },
        },
        {
          size: "A80",
          torque: 8200,
          ratios: { "2-stage": "9.89 - 68.9", "3-stage": "80.3 - 281" },
        },
        {
          size: "A90",
          torque: 13800,
          ratios: { "2-stage": "10.2 - 69.7", "3-stage": "76.3 - 274" },
        },
      ],
      housing: {
        "A10-A40": "Aluminium",
        "A50-A90": "Grey cast iron",
      },
    },

    featuresAndAccessories: {
      tabHeading: "Offset geared motors",

      heading: "Geared motors",
      gearedMotors: {
        options: [
          "Torque brackets",
          "Foot rails/plates",
          "Mounting flange",
          "Extended temperature range",
          "Special paint finish",
          "Special lubricants",
          "Gearbox venting",
          "Double gearboxes",
        ],
        compatibility: {
          "A offset gearboxes": [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
          ],
          "W angular gearboxes": [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
          ],
          "D helical gearboxes": [
            true,
            true,
            false,
            true,
            true,
            true,
            true,
            true,
          ],
        },
        notes: {
          "Mounting flange": "Only for sizes D11 - D41",
          "Gearbox venting": "Standard for size 50",
          "Double gearboxes": "Used for particularly low speeds",
        },
      },
    },
  },
  {
    product: "Angular geared motors",
    slug: "angular-geared-motors",
    summary: {
      title:
        "A compact solution tailored to meet your needs for every drive application",
      description: [
        "Great things really do come in small packages. Our angular geared motors are engineered for applications where space is tight, but performance expectations are high.",
        "Whether you're designing for narrow track gauges or complex drive systems, these compact powerhouses slide right in and get to work—quietly, efficiently, and reliably.",
      ],
      benefits: {
        heading: "What makes them stand out:",
        list: [
          " Serious torque, small space: A broad torque range from 120 to 12,000 Nm to handle the tough jobs.",
          "Flexible speed control: A wide selection of transmission ratios to match your exact motion needs.",
          "Exceptionally smooth: Engineered for quiet, vibration-free operation.",
          "Efficiency built in: The bevel-wheel gearbox design maximizes every bit of energy.",
          "Pick your size: Ten different gearbox sizes mean there's one for your project.",
        ],
        description: "Big capability. Tiny footprint. Ready to work.",
      },
    },

    productInformation: {
      heading: "Flexibility Where It Counts",
      tabHeading: "The benefits at a glance",
      maximumFlexibility: [
        "10 gearbox sizes with torque from 120 to 12,000 Nm",
        "Choose hypoid or bevel-wheel",
        "Direct input or coupling connection",
        "5 drive shaft variants",
        "4 housing designs",
      ],

      img: [
        {
          src: "/img/sraes/Winkelgetriebe_BF1_2.png.webp",
          description: "Universal type WU / Flange-mounted type WF",
        },
        {
          src: "/img/sraes/Winkelgetriebe_BF3_4.png.webp",
          description:
            "Foot-mounted type 1 WG - bottom connection / Foot-mounted type 2 WG - end connection",
        },
      ],
      list: [
        {
          heading: "W10 to W50 hypoid gearboxes",
          features: [
            "Smooth and quiet by design. The hypoid stage delivers high transmission ratios—so you get more power in a compact package.",
          ],
        },
      ],
      onlineConfiguration: {
        heading: "Design your drive online it's that easy",
        description: "The Demag Drive Designer puts you in control:",
        features: [
          " Browse technical data",
          "Download 2D and 3D models in any standard format",
          "Access electrical circuit diagrams",
          "Check delivery times at a glance",
          "Send your configuration directly to the Demag Shop",
        ],
        link: "https://www.drives.demag-designer.com",
      },
    },

    technicalData: {
      tabHeading: "Technical data",
      heading: "Type W angular geared motors",
      units: "Nm",
      tableHeadings: [
        { label: "Size", key: "size" },
        { label: "Torque (Nm)", key: "torque" },
        { label: "2-stage Ratio", key: "2-stage" },
        { label: "3-stage Ratio", key: "3-stage" },
        { label: "4-stage Ratio", key: "4-stage" },
      ],
      gearboxes: [
        {
          size: "W10",
          torque: 120,
          ratios: { "2-stage": "5.34 - 100", "3-stage": null, "4-stage": null },
        },
        {
          size: "W20",
          torque: 200,
          ratios: {
            "2-stage": "5.45 - 90.1",
            "3-stage": "97.1 - 369",
            "4-stage": null,
          },
        },
        {
          size: "W30",
          torque: 330,
          ratios: {
            "2-stage": "3.73 - 90.1",
            "3-stage": "107 - 369",
            "4-stage": null,
          },
        },
        {
          size: "W40",
          torque: 500,
          ratios: {
            "2-stage": "3.87 - 90.8",
            "3-stage": "99.6 - 371",
            "4-stage": null,
          },
        },
        {
          size: "W50",
          torque: 800,
          ratios: {
            "2-stage": "4.94 - 94.3",
            "3-stage": "99.9 - 386",
            "4-stage": null,
          },
        },
        {
          size: "W60",
          torque: 1350,
          ratios: {
            "2-stage": null,
            "3-stage": "12.6 - 95.1",
            "4-stage": "113 - 388",
          },
        },
        {
          size: "W70",
          torque: 2500,
          ratios: {
            "2-stage": null,
            "3-stage": "13.7 - 102",
            "4-stage": "113 - 399",
          },
        },
        {
          size: "W80",
          torque: 4000,
          ratios: {
            "2-stage": null,
            "3-stage": "15.3 - 113",
            "4-stage": "126 - 441",
          },
        },
        {
          size: "W90",
          torque: 7000,
          ratios: {
            "2-stage": null,
            "3-stage": "15.9 - 111",
            "4-stage": "126 - 434",
          },
        },
        {
          size: "W100",
          torque: 12000,
          ratios: {
            "2-stage": null,
            "3-stage": "16.5 - 113",
            "4-stage": "121 - 485",
          },
        },
      ],
      housing: {
        "W10-W40": "Aluminium",
        "W50-W100": "Grey cast iron",
      },
    },

    featuresAndAccessories: {
      tabHeading: "Angular geared motors",
      heading: "Geared motors",
      gearedMotors: {
        options: [
          "Torque brackets",
          "Foot rails/plates",
          "Mounting flange",
          "Extended temperature range",
          "Special paint finish",
          "Special lubricants",
          "Gearbox venting",
          "Double gearboxes",
        ],
        compatibility: {
          "A offset gearboxes": [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
          ],
          "W angular gearboxes": [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
          ],
          "D helical gearboxes": [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
          ],
        },
        notes: {
          "Mounting flange": "Only for sizes D11 - D41",
          "Gearbox venting": "Standard for size 50",
          "Double gearboxes": "Used for particularly low speeds",
        },
      },
    },
  },
  {
    product: "Helical geared motors",
    slug: "helical-geared-motors",
    summary: {
      title: "Rugged drives that don't quit",
      description: [
        "Sometimes you just need a motor that can take a punch. Our helical geared motors are built for exactly that—tough, reliable, and ready to handle high radial forces on the output shaft without breaking a sweat.",
      ],
      benefits: {
        heading: "What you get:",
        list: [
          "Torque from 90 to 550 Nm – solid range for real-world jobs",
          "Excellent efficiency – more power where it counts",
          "Coaxial design – clean, compact, and straightforward",
          "5 gearbox sizes to choose from",
          "3 housing designs to match your environment",
        ],
        description: "Built rugged. Built to last.",
      },
    },

    productInformation: {
      heading: "Maximum flexibility",
      tabHeading: "The benefits at a glance",
      maximumFlexibility: [
        "Gearboxes covering 90 to 550 Nm",
        "Direct input or coupling connection—whatever fits your layout",
        "3 housing designs to match your space and environment",
      ],

      img: [
        {
          src: "/img/sraes/Strinradgetriebe_BF_1_2.png.webp",
          description: "Flange-mounted type DF / Foot-mounted type DG",
        },
        {
          src: "/img/sraes/Strinradgetriebe_BF_3_links.png.webp",
          description: "Foot / flange-mounted type DU 11-4",
        },
      ],

      StrongMotor: {
        heading: "Strong motor output",
        features: [
          "Motor output up to 45 kW",
          " 2, 4, 6 or 8 poles",
          " Two-speed pole-changing motors",
          " ZBA for travel applications with inverters",
          " ZBF for line-fed travel applications",
          " ZBE for continuous duty in energy efficiency class IE2",
        ],
      },
      driveOutput: ["Coaxial design", "Solid shaft with key"],
      onlineConfiguration: {
        heading: "Braking that's tuned to you",

        features: [
          " Sometimes you need a little stopping power. Sometimes you need a lot. With our motors with a brake, you get exactly the performance your application calls for.",
          "Brake torques from 0.9 to 680 Nm – that's a wide range, so you're covered whether it's light duty or heavy lifting.",
          "Two brake sizes per motor frame – because one size doesn't fit all.",
          "Our ZB cylindrical-rotor motors come with disc brakes that engage automatically when power is off—springs hold them tight, so they're fail-safe by design.",
          "Fine-tuning is easy. Different spring strengths and quantities let you dial in the exact brake torque you need.",
          "Need specific switching times? We offer various control modules to match your application's rhythm.",
        ],
        link: "https://www.drives.demag-designer.com",
      },
    },

    technicalData: {
      tabHeading: "Technical data",
      heading: "Type D helical geared motors",
      units: "Nm",
      tableHeadings: [
        { label: "Size", key: "size" },
        { label: "Torque (Nm)", key: "torque" },
        { label: "2-stage Ratio", key: "2-stage" },
        { label: "3-stage Ratio", key: "3-stage" },
      ],
      gearboxes: [
        {
          size: "D11",
          torque: 90,
          ratios: { "2-stage": "2.88 - 66.5", "3-stage": null },
        },
        {
          size: "D21",
          torque: 130,
          ratios: { "2-stage": "2.88 - 66.5", "3-stage": null },
        },
        {
          size: "D31",
          torque: 200,
          ratios: { "2-stage": "3.23 - 61.6", "3-stage": "66.4 - 253" },
        },
        {
          size: "D41",
          torque: 330,
          ratios: { "2-stage": "3.23 - 58.6", "3-stage": "49.5 - 240" },
        },
        {
          size: "D50",
          torque: 550,
          ratios: { "2-stage": "2.78 - 61.4", "3-stage": "71.9 - 251" },
        },
      ],
      housing: {
        "D11-D41": "Aluminium",
        D50: "Grey cast iron",
      },
    },

    featuresAndAccessories: {
      tabHeading: "Helical geared motors",
      heading: "Geared motors",
      gearedMotors: {
        options: [
          "Torque brackets",
          "Foot rails/plates",
          "Mounting flange",
          "Extended temperature range",
          "Special paint finish",
          "Special lubricants",
          "Gearbox venting",
          "Double gearboxes",
        ],
        compatibility: {
          "A offset gearboxes": [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
          ],
          "W angular gearboxes": [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
          ],
          "D helical gearboxes": [
            false,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
          ],
        },
        notes: {
          "Mounting flange": "Only for sizes D11 - D41",
          "Gearbox venting": "Standard for size 50",
          "Double gearboxes": "Used for particularly low speeds",
        },
      },
    },
  },
  {
    product: "FG microspeed units",
    slug: "fg-microspeed-units",
    summary: {
      title: "Gearing up for wide speed ratios",
      description:
        "Our FG microspeed units can handle tough applications. They are extremely resilient to vibrations and increased ambient temperatures. Microspeed drives consist of main and microspeed motors that are connected by means of microspeed gearboxes, which enables them to be used for wide speed ratios in rugged, simple and cost-effective solutions. They provide for:",
      benefits: [
        "Maximum positioning accuracy",
        "High switching frequency",
        "Movement of large masses in short cycles",
        "Implementation of extremely high speed ratios of up to 500:1",
      ],
    },

    productInformation: {
      heading: "Highly robust drive",
      tabHeading: "The benefits at a glance",
      maximumFlexibility: [
        " Highly robust drive",
        "  Extremely resilient to vibrations and increased ambient temperatures",
        " Rugged alternative to inverter-controlled AC motors",
        " Wide speed ranges",
        " speed ratios up to 500:1",
        " wider mechanical speed range between the main and the positioning speeds than pole-changing motors",
        " Up to 4 fixed speed steps when pole-changing motors are employed",
        " Short cycle times",
        "  Maximum positioning accuracy",
      ],
      img: [],
      list: [],
    },

    technicalData: {
      tabHeading: "Technical data",
      heading: "Design principle ",
      units: null,
      tableHeadings: [],
      gearboxes: [],
      img: "/img/sraes/feingangantrieb.webp",
      description: [
        "FG microspeed drive with main and microspeed motors (connected to each other via a mechanical microspeed gearbox)",
        "Output shaft runs either at the speed of the main motor or at the speed of the microspeed motor (reduced by the transmission ratio of the gearbox)",
        "Conical-rotor brake motor as the main motor (due to the axial movement of its rotor)",
        "Motor brake functions as a coupling in microspeed motor mode",
        "Microspeed motor can be a KB or a Z motor – also for inverter operation",
        "Microspeed gearbox offers finely graded transmission ratios – from 4 to 125",
        "The overall transmission ratio is specified together with the selected motor speeds",
        "U and Z configurations",
        "The microspeed drive can be combined with the offset, angular and helical gearboxes from the Demag modular drive system with coupling connection",
      ],
    },
  },
];

const OffsetGearedMotors = ({ params }) => {
  const { slug } = use(params);
  const [selectedItem, setSelectedItem] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchInner = data.find((val) => val.slug === slug);
    if (fetchInner) {
      setSelectedItem(fetchInner);
    } else {
      setError("Item not found");
    }
  }, [slug]);

  if (error) return <p>{error}</p>;
  if (!selectedItem) return <p>Loading...</p>;
  return (
    <>
      <Navbar></Navbar>
      <Breadcrumb
        title={selectedItem.product}
        backgroundImage="/img/header1.webp"
        items={[
          { label: `${selectedItem.product}`, href: "/", isCurrent: true },
        ]}
      />
      <div className="p-6">
        <Container maxWidth="md">
          <h2 className="  text-2xl lg:text-5xl font-bold text-gray-700">
            {selectedItem.summary.title}
          </h2>
          <div className=" mb-6 text-center h-1 w-20 bg-yellow-400 mt-5"></div>

          {selectedItem.summary.description.map((sub, si) => (
            <p key={si} className="text-gray-600 text-lg mt-2">
              {sub}
            </p>
          ))}
          <div className="mt-4">
            {selectedItem?.summary?.benefits?.heading && (
              <h3 className="text-2xl font-bold text-[#676f77] mb-2">
                {selectedItem.summary.benefits.heading}
              </h3>
            )}

            {selectedItem?.summary?.benefits?.list && (
              <ul className="list-disc list-inside mt-2">
                {selectedItem.summary.benefits.list.map((item, i) => (
                  <li key={i} className="text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {selectedItem?.summary?.benefits?.description && (
              <p className="mt-3 text-gray-600">
                {selectedItem.summary.benefits.description}
              </p>
            )}
          </div>

          <div className="flex justify-center mt-4  flex-col items-center">
            <h4 className="text-3xl font-bold my-4 text-[#676f77]">
              Product information
            </h4>
            <div className=" mt-2 mb-6 text-center h-1 w-12 bg-yellow-400"></div>
          </div>

          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <h2 className="text-2xl font-bold  text-[#676f77] mb-4">
                {selectedItem.productInformation.tabHeading}
              </h2>
            </AccordionSummary>
            <AccordionDetails>
              <section className="">
                <h2 className="text-xl font-bold  text-[#676f77] mb-4">
                  {selectedItem.productInformation.heading}
                </h2>
                <ul className="list-disc list-inside">
                  {selectedItem.productInformation.maximumFlexibility.map(
                    (item, i) => (
                      <li key={i}>{item}</li>
                    )
                  )}
                </ul>
                {selectedItem.productInformation.img &&
                  selectedItem.productInformation.img.map((item, index) => (
                    <div className="" key={index}>
                      <Image
                        src={item.src}
                        alt=""
                        height={500}
                        width={500}
                        layout="responsive"
                        className="w-100 my-4"
                      ></Image>
                      <p className="font-semibold">{item.description}</p>
                    </div>
                  ))}
                {selectedItem.productInformation.list &&
                  selectedItem.productInformation.list.map((item, index) => (
                    <div className="" key={index}>
                      <h4 className="text-xl font-bold mt-4 text-[#676f77] mb-4">
                        {item.heading}
                      </h4>
                      <ul className="   list-disc list-inside">
                        <li>{item.features}</li>
                      </ul>
                    </div>
                  ))}
                {/* <ul className="list-disc list-inside">
            {selectedItem.productInformation.list.features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul> */}
                <div className="mt-4">
                  {selectedItem?.productInformation?.onlineConfiguration?.subdatea?.map(
                    (data, index) => (
                      <div key={index} className="mb-4">
                        <h3 className="text-xl font-bold text-[#676f77]">
                          {data.title}
                        </h3>

                        {data.description?.map((desc, i) => (
                          <p key={i} className="text-gray-600 mt-2">
                            {desc}
                          </p>
                        ))}
                      </div>
                    )
                  )}

                  {selectedItem?.productInformation?.onlineConfiguration
                    ?.heading && (
                    <h3 className="text-2xl font-bold my-4 text-[#676f77]">
                      {
                        selectedItem.productInformation.onlineConfiguration
                          .heading
                      }
                    </h3>
                  )}

                  {selectedItem?.productInformation?.onlineConfiguration
                    ?.description && (
                    <p className="mb-2">
                      <b>
                        {
                          selectedItem.productInformation.onlineConfiguration
                            .description
                        }
                      </b>
                    </p>
                  )}

                  {selectedItem?.productInformation?.onlineConfiguration
                    ?.features && (
                    <ul className="list-disc list-inside">
                      {selectedItem.productInformation.onlineConfiguration.features.map(
                        (item, i) => (
                          <li key={i}>{item}</li>
                        )
                      )}
                    </ul>
                  )}

                  {selectedItem?.productInformation?.onlineConfiguration
                    ?.link && (
                    <a
                      href={
                        selectedItem.productInformation.onlineConfiguration.link
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      www.drives.demag-designer.com
                    </a>
                  )}
                </div>
              </section>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h2 className="text-2xl font-bold my-4 text-[#676f77]">
                {selectedItem.technicalData.tabHeading}
              </h2>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <section className="my-4">
                <h2 className="text-xl font-bold my-4 text-[#676f77]">
                  {selectedItem.technicalData.heading}
                </h2>
                {/* <p>Unit: {selectedItem.technicalData.units}</p> */}
                <table className="table-auto w-full border border-gray-300 mt-4 text-sm text-left shadow-sm rounded-lg overflow-hidden">
                  <thead className="bg-gray-100 text-gray-700 uppercase tracking-wide">
                    <tr>
                      {selectedItem.technicalData.tableHeadings.map(
                        (heading, index) => (
                          <th
                            key={index}
                            className="border border-gray-300 px-4 py-2"
                          >
                            {heading.label}
                          </th>
                        )
                      )}
                    </tr>
                  </thead>

                  <tbody className="text-gray-800">
                    {selectedItem.technicalData.gearboxes.map((g, i) => (
                      <tr
                        key={i}
                        className={
                          i % 2 === 0
                            ? "bg-white"
                            : "bg-gray-50 hover:bg-orange-50"
                        }
                      >
                        <td className="border border-gray-300 px-4 py-2">
                          {g.size}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {g.torque}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {g.ratios["2-stage"] || "-"}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {g.ratios["3-stage"] || "-"}
                        </td>
                        {g.ratios["4-stage"] && (
                          <td className="border border-gray-300 px-4 py-2">
                            {g.ratios["4-stage"]}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="mt-2">
                  <ul>
                    {selectedItem.technicalData.housing &&
                      Object.entries(selectedItem.technicalData.housing).map(
                        ([key, value]) => (
                          <li key={key} className="font-semibold">
                            {key}: {value}
                          </li>
                        )
                      )}
                  </ul>
                </div>

                <div>
                  {selectedItem.technicalData.img && (
                    <Image
                      src={selectedItem.technicalData.img}
                      alt=""
                      width={100}
                      height={100}
                      layout="responsive"
                      className="w-100 object-contain mb-4"
                    ></Image>
                  )}
                  <ul className="list-disc list-inside">
                    {selectedItem.technicalData.description &&
                      data.technicalData.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                  </ul>
                </div>
              </section>
            </AccordionDetails>
          </Accordion>
          {/* Product Information */}

          {/* Technical Data */}
          {selectedItem.featuresAndAccessories && (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <h4 className="text-2xl font-bold my-4 text-[#676f77]">
                  {selectedItem.featuresAndAccessories.tabHeading}
                </h4>{" "}
              </AccordionSummary>
              <AccordionDetails>
                <section className="my-4">
                  <h4 className="text-xl font-bold my-4 text-[#676f77]">
                    {selectedItem.featuresAndAccessories.heading}
                  </h4>
                  <table className="table-auto w-full border border-gray-300 mt-6 text-sm text-left shadow-sm rounded-lg overflow-hidden">
                    <thead className="bg-gray-100 text-gray-700 uppercase tracking-wide">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2">
                          Feature
                        </th>
                        {Object.keys(
                          selectedItem.featuresAndAccessories.gearedMotors
                            .compatibility
                        ).map((k) => (
                          <th
                            className="border border-gray-300 px-4 py-2 text-center"
                            key={k}
                          >
                            {k}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-gray-800">
                      {selectedItem.featuresAndAccessories.gearedMotors.options.map(
                        (option, index) => (
                          <tr
                            key={index}
                            className={
                              index % 2 === 0
                                ? "bg-white"
                                : "bg-gray-50 hover:bg-orange-50"
                            }
                          >
                            <td className="border border-gray-300 px-4 py-2">
                              {option}
                            </td>
                            {Object.values(
                              selectedItem.featuresAndAccessories.gearedMotors
                                .compatibility
                            ).map((gear, i) => (
                              <td
                                key={i}
                                className="border border-gray-300 px-4 py-2 text-center"
                              >
                                {gear[index] ? "✔️" : "❌"}
                              </td>
                            ))}
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>

                  <div className="mt-2">
                    <ul className="list-disc list-inside">
                      {Object.entries(
                        selectedItem.featuresAndAccessories.gearedMotors.notes
                      ).map(([k, v]) => (
                        <li key={k}>
                          <strong>{k}:</strong> {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </AccordionDetails>
            </Accordion>
          )}
          {/* Features and Accessories */}
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
};

export default OffsetGearedMotors;
