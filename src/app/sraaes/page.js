import Container from "@mui/material/Container";
import Image from "next/image";
// components/OffsetGearedMotors.js

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Breadcrumb } from "@/componts/breadcrumb";
import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";
const data = [
{
  product: "Offset Geared Motors",
slug:"offset-geared-motors",
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
tabHeading:"The benefits at a glance",
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
    tabHeading:"Technical data",
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
    tabHeading:"Offset geared motors",

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
        "A offset gearboxes": [true, true, true, true, true, true, true, true],
        "W angular gearboxes": [true, true, true, true, true, true, true, true],
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
 ]
  
  
  
const OffsetGearedMotors = () => {
  return (
    <>
    <Navbar></Navbar>
              <Breadcrumb
                title= {data.product}
                backgroundImage="/img/header1.webp"
                items={[
                  { label: `${data.product}`, href: "/", isCurrent: true },
                ]}
              />
    <div className="p-6">
      <Container maxWidth="md">
        <h2 className=" text-5xl font-bold text-gray-700">{data.summary.title}</h2>
        <div className=" mb-6 text-center h-1 w-20 bg-yellow-400 mt-5"></div>
        <p className=" text-gray-600 mb-10">
          {data.summary.description}
        </p>
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
          {data.productInformation.img && data.productInformation.img.map((item, index) => (
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
          {data.productInformation.list && data.productInformation.list.map((item, index) => (
            <div className="" key={index}>
             <h4 className="text-xl font-bold mt-4 text-[#676f77] mb-4">{item.heading}</h4>
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
              {data.productInformation.onlineConfiguration && data.productInformation.onlineConfiguration.heading}
            </h3>
            <ul className="list-disc list-inside">
              {data.productInformation.onlineConfiguration && data.productInformation.onlineConfiguration.features.map(
                (item, i) => (
                  <li key={i}>{item}</li>
                )
              )}
            </ul>
            <a
              href={data.productInformation.onlineConfiguration && data.productInformation.onlineConfiguration.link}
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

      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
<h2 className="text-2xl font-bold my-4 text-[#676f77]">
            {data.technicalData.tabHeading}
          </h2>        </AccordionSummary>
        <AccordionDetails>
          <section className="my-4">
          <h2 className="text-xl font-bold my-4 text-[#676f77]">
            {data.technicalData.heading}
          </h2>
          {/* <p>Unit: {data.technicalData.units}</p> */}
          <table className="table-auto w-full border border-gray-300 mt-4 text-sm text-left shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-gray-700 uppercase tracking-wide">
              <tr>
                {data.technicalData.tableHeadings.map((heading, index) => (
                  <th key={index} className="border border-gray-300 px-4 py-2">
                    {heading.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="text-gray-800">
  {data.technicalData.gearboxes.map((g, i) => (
    <tr
      key={i}
      className={i % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-orange-50"}
    >
      <td className="border border-gray-300 px-4 py-2">{g.size}</td>
      <td className="border border-gray-300 px-4 py-2">{g.torque}</td>
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
              {data.technicalData.housing && Object.entries(data.technicalData.housing).map(
                ([key, value]) => (
                  <li key={key} className="font-semibold">
                    {key}: {value}
                  </li>
                )
              )}
            </ul>
          </div>

          <div >

         {data.technicalData.img && <Image src={data.technicalData.img} alt="" width={100} height={100} layout="responsive" className="w-100 object-contain mb-4" ></Image>}
          <ul className="list-disc list-inside">
            {data.technicalData.description && data.technicalData.description.map((item, index)=>(
              <li key={index}>{item}</li>
            ))}
            </ul>
          </div>
        </section>
        </AccordionDetails>
      </Accordion>
        {/* Product Information */}
      

        {/* Technical Data */}
    {data.featuresAndAccessories &&
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
<h4 className="text-2xl font-bold my-4 text-[#676f77]">
            {data.featuresAndAccessories.tabHeading}
          </h4>        </AccordionSummary>
        <AccordionDetails>
        <section className="my-4">
          <h4 className="text-xl font-bold my-4 text-[#676f77]">
            {data.featuresAndAccessories.heading}
          </h4>
          <table className="table-auto w-full border border-gray-300 mt-6 text-sm text-left shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-gray-700 uppercase tracking-wide">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Feature</th>
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
                      data.featuresAndAccessories.gearedMotors.compatibility
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
    }
        {/* Features and Accessories */}
      
      </Container>
    </div>
    <Footer></Footer>
    </>
  );
};

export default OffsetGearedMotors;
