import Container from "@mui/material/Container";
import Image from "next/image";
// components/OffsetGearedMotors.js

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
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
      description:
        "Our offset geared motors are specially designed for space-saving drive solutions. The housing design offers good ground clearance for travel applications at ground level. The large center distance between the parallel gearbox shafts enable these units to be used in a central drive arrangement, e.g. when fitted with shaft ends on both sides. What else do they offer?",
      benefits: [
        "Wide range of transmission ratios",
        "Cost-effective solutions with high efficiency",
        "Practical designs for a variety of travel applications",
        "9 gearbox sizes",
      ],
    },
    productInformation: {
      heading: "Maximum flexibility",
      tabHeading: "The benefits at a glance",
      maximumFlexibility: [
        "9 gearboxes for torques from 160 to 13,800 Nm",
        "Direct input or coupling connection",
        "Drive shafts in 5 variants",
        "5 housing designs",
      ],

      img: [
        {
          src: "/img/sraes/flachgetriebe.webp",
          description: "Torque bracket type AM 10-40 / Universal type AU 20-90",
        },
        {
          src: "/img/sraes/Flachgetriebe2.webp",
          description: "Torque bracket type AM 10-40 / Universal type AU 20-90",
        },
      ],

      onlineConfiguration: {
        heading: "Convenient online configuration with Demag Drive Designer",
        features: [
          "View technical data",
          "Design support with 2D/3D geometries in all standard formats",
          "Electrical circuit diagrams",
          "Delivery time indicator",
          "Configuration transfer to Demag Shop",
        ],
        link: "https://www.drives.demag-designer.com",
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
      description:
        "Our angular geared motors feature an extremely compact design – which makes them suitable for a wide variety of applications. They enable efficient travel drive solutions to be implemented with ease, even with narrow track gauge dimensions. The basis is provided by outstanding parameters:",
      benefits: [
        "   large torque range from 120 to 12,000 Nm",
        " wide range of transmission ratios",
        " particularly smooth operation",
        " bevel-wheel gearbox with high efficiency",
        " 10 gearbox sizes.",
      ],
    },

    productInformation: {
      heading: "Maximum flexibility",
      tabHeading: "The benefits at a glance",
      maximumFlexibility: [
        "10 gearbox sizes with torques from 120 to 12,000 Nm",
        "Hypoid or bevel-wheel gearbox",
        "Direct input or coupling connection",
        "Drive shafts in 5 variants",
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
          heading:
            "W10 to W50 hypoid gearboxes for particularly smooth operation",
          features: ["High transmission ratio in the hypoid stage"],
        },
        {
          heading:
            "W10 to W50 hypoid gearboxes for particularly smooth operation",
          features: ["High transmission ratio in the hypoid stage"],
        },
      ],
      onlineConfiguration: {
        heading: "Convenient online configuration with Demag Drive Designer",
        features: [
          " View technical data",
          " Design support by means of 2D and 3D geometries in all standard file formats",
          " Provision of electrical circuit diagrams",
          " Delivery time indicator",
          " Transfer selected configuration to Demag Shop",
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
      title: "Rugged drive solutions to meet your needs",
      description:
        "Above all, our helical geared motors offer one outstanding benefit: their rugged design. They enable high radial forces to be accommodated on the output shaft in a wide torque range. Other features:",
      benefits: [
        "Torque range from 90 to 550 Nm",
        "Excellent efficiency",
        "Coaxial design",
        "5 gearbox sizes",
        "3 housing designs",
      ],
    },

    productInformation: {
      heading: "Maximum flexibility",
      tabHeading: "The benefits at a glance",
      maximumFlexibility: [
        "Gearboxes for torques from 90 to 550 Nm",
        "Direct input or coupling connection",
        "3 housing designs",
        "Flange-mounted type DF / Foot-mounted type DG",
        "Foot / flange-mounted type DU 11-41",
      ],

      img: [
        {
          src: "/img/sraes/Strinradgetriebe_BF_1_2.png.webp",
          description: "Flange-mounted type DF / Foot-mounted type DG",
        },
        {
          src: "/img/sraes/Strinradgetriebe_BF_3_links.png.webp",
          description: "Foot / flange-mounted type DU 11-41",
        },
      ],

      list: [
        {
          heading: "Drive output to meet your needs",
          features: ["Coaxial design", "Solid shaft with key"],
        },
      ],
      driveOutput: ["Coaxial design", "Solid shaft with key"],
      onlineConfiguration: {
        heading: "Convenient online configuration with Demag Drive Designer",
        features: [
          "View technical data",
          "Design support by means of 2D and 3D geometries in all standard file formats",
          "Provision of electrical circuit diagrams",
          "Delivery time indicator",
          "Transfer selected configuration to Demag Shop",
        ],
        link: "http://www.drives.demag-designer.com/camosUtil/welcome.aspx?BASE=/camosUtil/DSI",
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
    sulg: "fg-microspeed-units",
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

const OffsetGearedMotors = () => {
  return (
    <>
      <Navbar></Navbar>
      <Breadcrumb
        title={data.product}
        backgroundImage="/img/header1.webp"
        items={[{ label: `${data.product}`, href: "/", isCurrent: true }]}
      />
      <div className="p-6">
        <Container maxWidth="md">
          <h2 className=" text-5xl font-bold text-gray-700">
            {data.summary.title}
          </h2>
          <div className=" mb-6 text-center h-1 w-20 bg-yellow-400 mt-5"></div>
          <p className=" text-gray-600 mb-10">{data.summary.description}</p>
          <ul className="list-disc list-inside mt-2">
            {data.summary.benefits.map((item, i) => (
              <li key={i} className="text-lg">
                {item}
              </li>
            ))}
          </ul>

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
                {data.productInformation.tabHeading}
              </h2>
            </AccordionSummary>
            <AccordionDetails>
              <section className="">
                <h2 className="text-xl font-bold  text-[#676f77] mb-4">
                  {data.productInformation.heading}
                </h2>
                <ul className="list-disc list-inside">
                  {data.productInformation.maximumFlexibility.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {data.productInformation.img &&
                  data.productInformation.img.map((item, index) => (
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
                {data.productInformation.list &&
                  data.productInformation.list.map((item, index) => (
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
            {data.productInformation.list.features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul> */}
                <div className="mt-4">
                  <h3 className="text-2xl font-bold my-4 text-[#676f77] mb-4">
                    {data.productInformation.onlineConfiguration &&
                      data.productInformation.onlineConfiguration.heading}
                  </h3>
                  <ul className="list-disc list-inside">
                    {data.productInformation.onlineConfiguration &&
                      data.productInformation.onlineConfiguration.features.map(
                        (item, i) => <li key={i}>{item}</li>
                      )}
                  </ul>
                  <a
                    href={
                      data.productInformation.onlineConfiguration &&
                      data.productInformation.onlineConfiguration.link
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    www.drives.demag-designer.com
                  </a>
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
                {data.technicalData.tabHeading}
              </h2>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <section className="my-4">
                <h2 className="text-xl font-bold my-4 text-[#676f77]">
                  {data.technicalData.heading}
                </h2>
                {/* <p>Unit: {data.technicalData.units}</p> */}
                <table className="table-auto w-full border border-gray-300 mt-4 text-sm text-left shadow-sm rounded-lg overflow-hidden">
                  <thead className="bg-gray-100 text-gray-700 uppercase tracking-wide">
                    <tr>
                      {data.technicalData.tableHeadings.map(
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
                    {data.technicalData.gearboxes.map((g, i) => (
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
                    {data.technicalData.housing &&
                      Object.entries(data.technicalData.housing).map(
                        ([key, value]) => (
                          <li key={key} className="font-semibold">
                            {key}: {value}
                          </li>
                        )
                      )}
                  </ul>
                </div>

                <div>
                  {data.technicalData.img && (
                    <Image
                      src={data.technicalData.img}
                      alt=""
                      width={100}
                      height={100}
                      layout="responsive"
                      className="w-100 object-contain mb-4"
                    ></Image>
                  )}
                  <ul className="list-disc list-inside">
                    {data.technicalData.description &&
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
          {data.featuresAndAccessories && (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <h4 className="text-2xl font-bold my-4 text-[#676f77]">
                  {data.featuresAndAccessories.tabHeading}
                </h4>{" "}
              </AccordionSummary>
              <AccordionDetails>
                <section className="my-4">
                  <h4 className="text-xl font-bold my-4 text-[#676f77]">
                    {data.featuresAndAccessories.heading}
                  </h4>
                  <table className="table-auto w-full border border-gray-300 mt-6 text-sm text-left shadow-sm rounded-lg overflow-hidden">
                    <thead className="bg-gray-100 text-gray-700 uppercase tracking-wide">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2">
                          Feature
                        </th>
                        {Object.keys(
                          data.featuresAndAccessories.gearedMotors.compatibility
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
                      {data.featuresAndAccessories.gearedMotors.options.map(
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
                              data.featuresAndAccessories.gearedMotors
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
                        data.featuresAndAccessories.gearedMotors.notes
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
