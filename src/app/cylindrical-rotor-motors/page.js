import Container from "@mui/material/Container";
import Image from "next/image";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Breadcrumb } from "@/componts/breadcrumb";
import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";
const data = {
  product: "Strong motor output up to 45 kW",
  slug: "offset-geared-motors",
  summary: {
    title: "Perfectly engineered braking performance",
    description: [
      "Our Z cylindrical-rotor motors are built to handle a wide range of industrial drive applications with reliability and efficiency. They are designed to deliver strong performance and work smoothly across many different operating conditions.",
      "These motors are a dependable choice for industries that require consistent power and long-term performance.",
    ],
    benefits: [
      "Motor output up to 45 kW",
      "Suitable for inverter-fed drives, travel applications, line-fed travel, and continuous operation",
      "Specially designed to work perfectly with our gearbox range",
      "Simple and quick project engineering",
      "High drive efficiency for better performance",
      "Advanced software tools to calculate drive requirements based on specific physical characteristics",
    ],
    subDescription: [
      "With these features, our cylindrical-rotor motors help ensure efficient operation and easier system planning for industrial applications.",
    ],
  },
  productInformation: {
    description:
      "Our Z cylindrical-rotor motors offer powerful performance and reliable braking capacity, making them suitable for a wide range of industrial applications. With strong motor output and efficient design, these motors deliver dependable performance even in demanding environments.",

    heading: "Strong Motor Output",

    tabHeading: "The benefits at a glance",

    maximumFlexibility: [
      "Motor output up to 45 kW",
      "Available with 2, 4, 6, or 8 poles",
      "Two-speed pole-changing motors for flexible operation",
      "ZBA models designed for travel applications with inverters",
      "ZBF models for line-fed travel applications",
      "ZBE models for continuous duty with IE2 energy efficiency",
      "ZBP models for continuous duty with IE3 energy efficiency",
    ],

    onlineConfiguration: {
      heading: "Easy Configuration & Design Support",
      description:
        "For easier planning and engineering, the Demag Drive Designer online tool allows convenient motor configuration and provides helpful resources such as:",
      features: [
        "Access to complete technical data",
        "2D and 3D CAD geometries in standard formats",
        "Electrical circuit diagrams",
        "Delivery time indicators",
        "Direct configuration transfer to Demag Shop",
        "A wide range of options and accessories",
      ],
      subDescription:
        "This web-based planning tool also supports project engineering and design work by providing CAD files in multiple formats, making system planning faster and more efficient.",
      link: "https://www.drives.demag-designer.com",
    },
  },
  combine: {
    tabHeading: "Motor and gearbox combinations",
    combineData: [
      {
        heading: "Direct drive input",
        subHeading:
          "Gearbox and Z Cylindrical-Rotor Motor Combinations Using End Caps",
        description: [
          "Our gearbox and Z cylindrical-rotor motors can be easily combined using specially designed end caps. This setup creates a compact and efficient drive solution that ensures smooth power transmission between the motor and gearbox.",
          "By using end-cap connections, the motor and gearbox fit perfectly together, reducing installation complexity and saving valuable engineering time. It also helps improve reliability and overall system performance.",
          "These combinations are ideal for industrial drive systems where space-saving design, easy integration, and dependable operation are important. The modular design also allows flexible configurations to match different application requirements.",
        ],
        img: "/img/chain-hoist/Direktantrieb_EN.jpg.webp",
      },
      {
        heading: "Coupling connection",

        description: [
          "Gearbox and motor combinations can also be connected using a Demag coupling shaft end. This setup works with Z cylindrical-rotor motors as well as KB conical-rotor brake motors, providing a flexible and reliable drive solution.",
          "In this configuration, the motor and gearbox are connected using an intermediate flange along with a roller spider coupling. This design ensures smooth power transmission while reducing vibration and mechanical stress.",
          "The coupling connection also makes installation and maintenance easier, while allowing better alignment between the motor and gearbox. As a result, it helps improve overall performance, reliability, and service life of the drive system.",
        ],
        img: "/img/chain-hoist/Kupplungsanbau_EN_0.jpg.webp",
      },
    ],
  },

  motorData: {
    ZBA_Motors: [
      { designation: "ZBA 63 B4", output_kW: 0.18 },
      { designation: "ZBA 71 A4", output_kW: 0.25 },
      { designation: "ZBA 71 B4", output_kW: 0.37 },
      { designation: "ZBA 80 A4", output_kW: 0.55 },
      { designation: "ZBA 80 B4", output_kW: 0.75 },
      { designation: "ZBA 90 A4", output_kW: 1.1 },
      { designation: "ZBA 90 B4", output_kW: 1.5 },
      { designation: "ZBA 100 AL4", output_kW: 2.2 },
      { designation: "ZBA 100 B4", output_kW: 3 },
      { designation: "ZBA 112 A4", output_kW: 4 },
      { designation: "ZBA 132 AL4", output_kW: 5.5 },
      { designation: "ZBA 132 B4", output_kW: 7.5 },
      { designation: "ZBA 132 B4", output_kW: 9.5 },
      { designation: "ZBA 160 AL4", output_kW: 11 },
      { designation: "ZBA 160 B4", output_kW: 15 },
      { designation: "ZBA 180 A4", output_kW: 18.5 },
      { designation: "ZBA 180 B4", output_kW: 22 },
      { designation: "ZBA 200 A4", output_kW: 30 },
      { designation: "ZBA 225 AL4", output_kW: 37 },
      { designation: "ZBA 225 B4", output_kW: 45 },
    ],
    ZBE_Motors: [
      {
        designation: "ZBE 63 B4",
        output_kW: 0.18,
        efficiency: { η50: 66.5, η75: 71.2, η100: 72.1 },
      },
      {
        designation: "ZBE 71 A4",
        output_kW: 0.25,
        efficiency: { η50: 69.5, η75: 74.0, η100: 74.9 },
      },
      {
        designation: "ZBE 80 A4",
        output_kW: 0.55,
        efficiency: { η50: 78.0, η75: 78.3, η100: 78.1 },
      },
      {
        designation: "ZBE 80 B4*",
        output_kW: 0.75,
        efficiency: { η50: 79.3, η75: 82.2, η100: 79.6 },
      },
      {
        designation: "ZBE 90 A4*",
        output_kW: 1.1,
        efficiency: { η50: 79.8, η75: 82.3, η100: 81.4 },
      },
      {
        designation: "ZBE 90 B4*",
        output_kW: 1.5,
        efficiency: { η50: 82.1, η75: 83.4, η100: 82.8 },
      },
      {
        designation: "ZBE 100 A4*",
        output_kW: 2.2,
        efficiency: { η50: 83.8, η75: 84.9, η100: 84.3 },
      },
      {
        designation: "ZBE 100 B4*",
        output_kW: 3,
        efficiency: { η50: 83.6, η75: 86.4, η100: 85.5 },
      },
      {
        designation: "ZBE 112 A4*",
        output_kW: 4,
        efficiency: { η50: 86.0, η75: 87.4, η100: 86.6 },
      },
      {
        designation: "ZBE 132 A4*",
        output_kW: 5.5,
        efficiency: { η50: 87.2, η75: 88.3, η100: 87.7 },
      },
      {
        designation: "ZBE 132 B4*",
        output_kW: 7.5,
        efficiency: { η50: 87.5, η75: 90.3, η100: 88.7 },
      },
      {
        designation: "ZBE 160 A4*",
        output_kW: 11,
        efficiency: { η50: 89.0, η75: 90.8, η100: 89.8 },
      },
      {
        designation: "ZBE 160 B4*",
        output_kW: 15,
        efficiency: { η50: 89.2, η75: 91.8, η100: 90.6 },
      },
      {
        designation: "ZBE 180 A4*",
        output_kW: 18.5,
        efficiency: { η50: 89.3, η75: 92.4, η100: 91.2 },
      },
      {
        designation: "ZBE 180 B4*",
        output_kW: 22,
        efficiency: { η50: 89.2, η75: 92.3, η100: 91.6 },
      },
      {
        designation: "ZBE 200 A4*",
        output_kW: 30,
        efficiency: { η50: 88.4, η75: 92.8, η100: 92.3 },
      },
      {
        designation: "ZBE 225 A4*",
        output_kW: 37,
        efficiency: { η50: 90.8, η75: 93.2, η100: 92.7 },
      },
      {
        designation: "ZBE 225 B4*",
        output_kW: 45,
        efficiency: { η50: 92.2, η75: 93.5, η100: 93.1 },
      },
    ],
  },
};

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

          {data?.summary?.description?.map((des, index) => (
            <p className="  text-gray-600 mb-4" key={index}>
              {des}
            </p>
          ))}
          <ul className="list-disc pl-10 mt-2">
            {data.summary.benefits.map((item, i) => (
              <li key={i} className="text-lg">
                {item}
              </li>
            ))}
          </ul>
          {data?.summary?.subDescription?.map((des, index) => (
            <p className="  text-gray-600 mt-5" key={index}>
              {des}
            </p>
          ))}

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
                <p className="mb-4"> {data.productInformation.description}</p>
                <ul className="list-disc pl-10">
                  {data.productInformation.maximumFlexibility.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {data.productInformation.list &&
                  data.productInformation.list.map((item, index) => (
                    <div className="" key={index}>
                      <h4 className="text-xl font-bold mt-4 text-[#676f77] mb-4">
                        {item.heading}
                      </h4>
                      <ul className="   list-disc pl-10">
                        <li>{item.features}</li>
                      </ul>
                    </div>
                  ))}
                {/* <ul className="list-disc pl-10">
            {data.productInformation.list.features.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul> */}
                <div className="mt-4">
                  <h3 className="text-2xl font-bold my-4 text-[#676f77] mb-4">
                    {data.productInformation.onlineConfiguration &&
                      data.productInformation.onlineConfiguration.heading}
                  </h3>
                  {data.productInformation.onlineConfiguration.description && (
                    <p className=" mb-4">
                      {data.productInformation.onlineConfiguration.description}
                    </p>
                  )}
                  <ul className="list-disc pl-10">
                    {data.productInformation.onlineConfiguration &&
                      data.productInformation.onlineConfiguration.features.map(
                        (item, i) => <li key={i}>{item}</li>
                      )}
                  </ul>
                  {data.productInformation.onlineConfiguration.description && (
                    <p className=" my-4">
                      {
                        data.productInformation.onlineConfiguration
                          .subDescription
                      }
                    </p>
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
                {data.combine.tabHeading}
              </h2>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <section className="my-4">
                {data.combine.combineData.map((item, index) => (
                  <div className="" key={index}>
                    <h4 className="text-xl font-bold my-4 text-[#676f77]">
                      {item.heading}
                    </h4>
                    <h6 className="text-lg  my-4 text-[#676f77]">
                      {item.subHeading}
                    </h6>

                    {item.description.map((des, index) => (
                      <p className=" text-gray-600 mb-" key={index}>
                        {des}
                      </p>
                    ))}
                    <Image
                      src={item.img}
                      height={300}
                      width={300}
                      layout="responsive"
                      className="w-100"
                      alt=""
                    ></Image>
                  </div>
                ))}

                <div></div>
              </section>
            </AccordionDetails>
          </Accordion>
          {/* Product Information */}

          {/* Technical Data */}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <h4 className="text-2xl font-bold my-4 text-[#676f77]">
                Technical data
              </h4>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <section className="my-4">
                <h4 className="text-xl font-bold mb-4 text-[#676f77]">
                  For outputs up to 45 kW: 4-pole Z motors
                </h4>
                <table className="table-auto w-full border border-gray-300 mt-4 text-sm text-left shadow-sm rounded-lg overflow-hidden">
                  <thead className="bg-gray-100 text-gray-700 uppercase tracking-wide">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">
                        Designation
                        <span className="font-normal">ZBA = braked</span>
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Output [kW]
                        <span className="font-normal">
                          60% CDF / 60 °C temp.
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2">
                        ZBA 63 B4
                      </td>
                      <td className="border border-gray-300 px-4 py-2">0.18</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2">
                        ZBA 71 A4
                      </td>
                      <td className="border border-gray-300 px-4 py-2">0.25</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2">
                        ZBA 71 B4
                      </td>
                      <td className="border border-gray-300 px-4 py-2">0.37</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2">
                        ZBA 80 A4
                      </td>
                      <td className="border border-gray-300 px-4 py-2">0.55</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2">
                        ZBA 80 B4
                      </td>
                      <td className="border border-gray-300 px-4 py-2">0.75</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2">
                        ZBA 90 A4
                      </td>
                      <td className="border border-gray-300 px-4 py-2">1.1</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2">
                        ZBA 90 B4
                      </td>
                      <td className="border border-gray-300 px-4 py-2">1.5</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2">
                        ZBA100 AL4
                      </td>
                      <td className="border border-gray-300 px-4 py-2">2.2</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2">
                        ZBA 100 B4
                      </td>
                      <td className="border border-gray-300 px-4 py-2">3</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2">
                        ZBA 112 A4
                      </td>
                      <td className="border border-gray-300 px-4 py-2">4</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2">
                        ZBA 132 AL4
                      </td>
                      <td className="border border-gray-300 px-4 py-2">5.5</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2">
                        ZBA 132 B4
                      </td>
                      <td className="border border-gray-300 px-4 py-2">7.5</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2">
                        ZBA 132 B4
                      </td>
                      <td className="border border-gray-300 px-4 py-2">9.5</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2">
                        ZBA 160 AL4
                      </td>
                      <td className="border border-gray-300 px-4 py-2">11</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2">
                        ZBA 160 B4
                      </td>
                      <td className="border border-gray-300 px-4 py-2">15</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2">
                        ZBA 180 A4
                      </td>
                      <td className="border border-gray-300 px-4 py-2">18.5</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2">
                        ZBA 180 B4
                      </td>
                      <td className="border border-gray-300 px-4 py-2">22</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2">
                        ZBA 200 A4
                      </td>
                      <td className="border border-gray-300 px-4 py-2">30</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2">
                        ZBA 225 AL4
                      </td>
                      <td className="border border-gray-300 px-4 py-2">37</td>
                    </tr>
                    <tr className="hover:bg-blue-50">
                      <td className="border border-gray-300 px-4 py-2">
                        ZBA 225 B4
                      </td>
                      <td className="border border-gray-300 px-4 py-2">45</td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <section className="my-4">
                <h4 className="text-xl font-bold mb-4 text-[#676f77]">
                  Efficiency to IE2: 4-pole ZBE motors
                </h4>
                <table className="table-auto w-full border border-gray-300 mt-4 text-sm text-left shadow-sm rounded-lg overflow-hidden">
                  <thead className="bg-gray-100 text-gray-700 uppercase tracking-wide">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">
                        Designation{" "}
                        <span className="font-normal">ZBE = braked</span>
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Output [kW]{" "}
                        <span className="font-normal">
                          100% CDF / 40 °C temp.
                        </span>
                      </th>
                      <th className="border border-gray-300 px-4 py-2">η50</th>
                      <th className="border border-gray-300 px-4 py-2">η75</th>
                      <th className="border border-gray-300 px-4 py-2">η100</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    {[
                      ["ZBE 63 B4", 0.18, 66.5, 71.2, 72.1],
                      ["ZBE 71 A4", 0.25, 69.5, 74.0, 74.9],
                      ["ZBE 80 A4", 0.55, 78.0, 78.3, 78.1],
                      ["ZBE 80 B4", 0.75, 79.3, 82.0, 82.6],
                      ["ZBE 90 A4*", 1.1, 79.8, 82.3, 81.4],
                      ["ZBE 90 B4", 1.5, 82.1, 83.4, 82.8],
                      ["ZBE 100 A4*", 2.2, 83.8, 84.9, 84.3],
                      ["ZBE 100 B4", 3, 83.6, 86.4, 85.7],
                      ["ZBE 112 A4*", 4, 86, 87.4, 86.6],
                      ["ZBE 132 A4*", 5.5, 87.8, 89.1, 88.5],
                      ["ZBE 132 B4*", 7.5, 87.5, 90.3, 89.7],
                      ["ZBE 160 A4", 11, 89, 90.8, 90.8],
                      ["ZBE 160 B4*", 15, 89.7, 90.9, 91.2],
                      ["ZBE 180 A4", 18.5, 89.3, 92.4, 91.2],
                      ["ZBE 180 B4", 22, 89.2, 92.3, 91.6],
                      ["ZBE 200 A4", 30, 90.6, 92.6, 92.5],
                      ["ZBE 225 A4*", 37, 91.5, 93.2, 93.0],
                      ["ZBE 225 B4*", 45, 92.2, 93.5, 93.1],
                    ].map(([designation, output, e50, e75, e100]) => (
                      <tr key={designation} className="hover:bg-blue-50">
                        <td className="border border-gray-300 px-4 py-2">
                          {designation}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {output}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {e50}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {e75}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {e100}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
              <section className="my-4">
                <h4 className="text-xl font-bold mb-4 text-[#676f77]">
                  Efficiency to IE3: 4-pole ZBP motors
                </h4>
                <table className="table-auto w-full border border-gray-300 mt-4 text-sm text-left shadow-sm rounded-lg overflow-hidden">
                  <thead className="bg-gray-100 text-gray-700 uppercase tracking-wide">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">
                        Designation{" "}
                        <span className="font-normal">ZBP = braked</span>
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Output [kW]{" "}
                        <span className="font-normal">
                          100% CDF / 40 °C temp.
                        </span>
                      </th>
                      <th className="border border-gray-300 px-4 py-2">η50</th>
                      <th className="border border-gray-300 px-4 py-2">η75</th>
                      <th className="border border-gray-300 px-4 py-2">η100</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    {[
                      ["ZBP 80 B4", 0.55, 76.6, 81.1, 80.8],
                      ["ZBP 90 A4", 0.75, 80.5, 82.9, 82.5],
                      ["ZBP 90 B4", 1.1, 82.5, 85.6, 84.1],
                      ["ZBP 100 A4", 1.5, 84.8, 86.2, 85.3],
                      ["ZBP 100 B4", 2.2, 83.5, 85.6, 86.7],
                      ["ZBP 112 A4", 3.0, 85.1, 87.7, 87.7],
                      ["ZBP 132 A4", 4.0, 87.9, 89.6, 88.6],
                      ["ZBP 132 B4", 5.5, 87.3, 89.4, 89.6],
                      ["ZBP 160 A4", 7.5, 89.3, 91.2, 91.0],
                      ["ZBP 160 B4", 11.0, 89.9, 91.1, 91.4],
                      ["ZBP 180 A4", 15.0, 90.2, 91.5, 92.1],
                    ].map(([designation, output, e50, e75, e100]) => (
                      <tr key={designation} className="hover:bg-blue-50">
                        <td className="border border-gray-300 px-4 py-2">
                          {designation}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {output}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {e50}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {e75}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {e100}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
              <section className="my-4">
                <h4 className="text-xl font-bold mb-4 text-[#676f77]">
                  Line-fed travel applications: 8/2-pole ZBF motors
                </h4>
                <table className="table-auto w-full border border-gray-300 mt-4 text-sm text-left shadow-sm rounded-lg overflow-hidden">
                  <thead className="bg-gray-100 text-gray-700 uppercase tracking-wide">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">
                        Designation
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Output [kW]{" "}
                        <span className="font-normal">
                          40/40% CDF, 40 °C temp.
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    {[
                      ["ZBF 63 A 8/2", "0.06/0.25"],
                      ["ZBF 71 A 8/2", "0.09/0.34"],
                      ["ZBF 80 A 8/2", "0.13/0.5"],
                      ["ZBF 90 B 8/2", "0.2/0.8"],
                      ["ZBF 100 A 8/2", "0.29/1.2"],
                      ["ZBF 112 A 8/2", "0.46/1.9"],
                      ["ZBF 132 A 8/2", "0.72/2.9"],
                      ["ZBF 132 B 8/2", "0.88/3.5"],
                    ].map(([designation, output]) => (
                      <tr key={designation} className="hover:bg-blue-50">
                        <td className="border border-gray-300 px-4 py-2">
                          {designation}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {output}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </AccordionDetails>
          </Accordion>

          {/* Features and Accessories */}
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
};

export default OffsetGearedMotors;
