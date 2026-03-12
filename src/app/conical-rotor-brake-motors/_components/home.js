"use client";

import Container from "@mui/material/Container";
import Image from "next/image";
import { useState, useEffect, use } from "react";

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
  product: "Built on a Simple Idea: Power Meets Reliabilitys",
  slug: "starting-and-stopping-with-maximum-performance",
  summary: {
    title: "Built on a Simple Idea: Power Meets Reliability",
    description: [
      "Some of the best engineering is beautifully simple. Our KB conical-rotor brake motors are a perfect example. We've designed them to be straightforward, tough, and utterly dependable. so you can focus on the job, not the motor.",
      "The magic is in the mechanics. The brake and rotor are connected as one. So, when the motor starts and stops, the brake follows along naturally. This clever design means you don't need extra controls or add-ons. It's all built-in.",
    ],
    benefits: [
      " Incredible stopping power: You get high braking performance you can count on.",
      " Built for the hustle: Perfect for operations with constant starting and stopping, standing up to extreme switching frequencies without breaking a sweat.",
      " Flexible speed options: Available as two-speed, pole-changing motors for more control",
      " Ready for motion: Ideal for starting-and-stopping applications and direct line-fed travel motions.",
      " Tough when it counts: Handles temporary overloads with ease, keeping your line moving.",
    ],
    description:
      "Need to connect it to a gearbox? No problem, the KB motor adapts easily via a coupling.",
  },
  productInformation: {
    description:
      "Our KB conical-rotor brake motors are known for their simple design, strong construction, and reliable performance. One of their key advantages is a unique braking principle where the brake is mechanically connected to the rotor. Because of this design, there is no need for separate control systems or additional switching components.",
    heading: "Starting and Stopping with Maximum Performance",
    tabHeading: "The benefits at a glance",

    maximumFlexibility: {
      heading: "This smart design offers several important benefits:",
      list: [
        "Very high braking performance",
        "Suitable for extremely high switching frequencies",
        "Available as two-speed pole-changing motors",
        "Ideal for starting-and-stopping applications and direct line-fed travel motions",
        "Resistant to temporary overload, ensuring reliable operation even under demanding conditions",
      ],
      description:
        "For flexible drive solutions, KB motors can also be connected to gearboxes using a coupling, making them suitable for a wide range of industrial applications.",
    },

    accessories: {
      heading: "Advanced Design Benefits:",
      description: "",
      features: [
        " Long brake lining service life due to effective heat dissipation through the large brake cover surface",
        "Short overall motor length with excellent heat dissipation, as the brake disc also functions as the motor fan",
        " Two brake disc options:Light design for KBA motors Heavy design with higher moment of inertia for KBF motors",
        " Allows extremely high switching frequency",
        " Resistant to temporary overload, ensuring reliable performance in demanding conditions",
      ],
    },

    onlineConfiguration: {
      heading: "High-Performance Motor",
      description:
        "Our KB conical-rotor brake motors are designed to deliver powerful performance, durability, and reliable braking for demanding industrial applications. With their compact design and strong braking system, these motors are ideal for applications that require frequent starting and stopping.",
      features: [
        "Motor output up to 55 kW (at 40% CDF)",
        "Available with 2, 4, 6, or 8 poles",
        "Two-speed pole-changing motors for flexible operation",
        "KBA models designed for starting-and-stopping drives",
        "KBF models suitable for direct line-fed travel motions",
        "Extremely robust brake system",
        "No switching elements or separate control systems required",
      ],
      link: "https://www.drives.demag-designer.com",
    },
  },
  combine: {
    tabHeading: "Motor and gearbox combinations",
    combineData: [
      {
        heading: "Coupling Connection",
        description: [
          "Gearbox and motor combinations can be connected using a Demag coupling shaft end, which works with both Z cylindrical-rotor motors and KB conical-rotor brake motors.",
          "In this setup, the motor and gearbox are joined using an intermediate flange along with a roller spider coupling. This connection helps ensure smooth and efficient power transmission between the motor and gearbox.",
          "The coupling design also helps absorb minor misalignments and reduces vibration, which improves the overall reliability and service life of the drive system. It provides a flexible and practical solution for many industrial drive applications while making installation and maintenance easier.",
        ],
        img: "/img/chain-hoist/Kupplungsanbau_EN.jpg.webp",
      },
    ],
  },
};

const ConicalRotor = () => {
  return (
    <>
      <Navbar></Navbar>
      <Breadcrumb
        title={data.product}
        backgroundImage="/img/header1.webp"
        items={[{ label: `${data.product}`, href: "/", isCurrent: true }]}
      />
      <div className="py-12 md:py-16">
        <Container maxWidth="md">
          <h2 className=" text-5xl font-bold text-gray-700">
            {data.summary.title}
          </h2>
          <div className=" mb-6 text-center h-1 w-20 bg-yellow-400 mt-5"></div>
          <p className=" text-gray-600 mb-10">{data.summary.description}</p>
          <ul className="list-disc pl-10 mt-2">
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
                <p className="mb-4"> {data.productInformation.description}</p>
                <h6 className="text-lg font-bold text-[#676f77]   mb-4">
                  {data.productInformation.maximumFlexibility.heading}
                </h6>
                <ul className="list-disc pl-10">
                  {data.productInformation.maximumFlexibility.list.map(
                    (item, i) => (
                      <li key={i}>{item}</li>
                    )
                  )}
                </ul>
                <p className="my-4">
                  {" "}
                  {data.productInformation.maximumFlexibility.description}
                </p>

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

                  {data.productInformation.onlineConfiguration && (
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
                  <ul className="list-disc pl-10">
                    <h4 className="text-xl font-bold my-4 text-[#676f77] mb-4">
                      {data.productInformation.accessories.heading}
                    </h4>
                    {data.productInformation.accessories.features &&
                      data.productInformation.accessories.features.map(
                        (item, i) => <li key={i}>{item}</li>
                      )}
                  </ul>
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
                    {item.description.map((des, index) => (
                      <p className="  mb-2" key={index}>
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
                <h4 className="text-xl font-bold mt-4 text-[#676f77] mb-4">
                  For outputs up to 55 kW: 4-pole KBA motors
                </h4>
                <table className="table-auto w-full border border-gray-300 mt-4 text-sm text-left shadow-sm rounded-lg overflow-hidden">
                  <thead className="bg-gray-100 text-gray-700 uppercase tracking-wide">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">
                        Designation
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Output [kW] <span className="font-normal">40% CDF</span>
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Braking Torque [Nm]
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    {[
                      ["KBA 71 A4", 0.48, 6.7],
                      ["KBA 71 B4", 0.72, 8.7],
                      ["KBA 80 A4", 1.05, 14.5],
                      ["KBA 80 B4", 1.3, 17.5],
                      ["KBA 90 A4", 1.65, 23],
                      ["KBA 90 B4", 2.0, 29],
                      ["KBA 100 A4", 2.4, 38],
                      ["KBA 100 B4", 3, 48],
                      ["KBA 112 B4 A", 3.6, 56],
                      ["KBA 112 B4", 4.5, 68],
                      ["KBA 125 B4 A", 6, 82],
                      ["KBA 125 B4", 7.4, 94],
                      ["KBA 140 B4 A", 9.6, 130],
                      ["KBA 140 B4", 11.5, 166],
                      ["KBA 160 B4", 20, 215],
                      ["KBA 180 A4", 30, 335],
                      ["KBA 200 B4", 40, 430],
                      ["KBA 225 B4", 55, 610],
                    ].map(([designation, output, torque]) => (
                      <tr key={designation} className="hover:bg-blue-50">
                        <td className="border border-gray-300 px-4 py-2">
                          {designation}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {output}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {torque}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <Image
                  src="/img/chain-hoist/moter.webp"
                  width={100}
                  height={100}
                  layout="responsive"
                  alt="moter"
                  className="my-4 max-w-lg mx-auto"
                ></Image>
              </section>

              <section className="my-4">
                <table className="table-auto w-full border border-gray-300 mt-4 text-sm text-left shadow-sm rounded-lg overflow-hidden">
                  <thead className="bg-gray-100 text-gray-700 uppercase tracking-wide">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">
                        Designation
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Output [kW]{" "}
                        <span className="font-normal">40/40% CDF</span>
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Braking Torque [Nm]
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    {[
                      ["KBF 71 A 8/2", "0.04/0.2", 1.4],
                      ["KBF 71 B 8/2", "0.06/0.3", 1.6],
                      ["KBF 80 A 8/2", "0.13/0.5", 3.2],
                      ["KBF 90 A 8/2", "0.2/0.8", 5.2],
                      ["KBF 100 A 8/2", "0.26/1.2", 7.0],
                      ["KBF 112 A 8/2", "0.42/1.9", 11.8],
                      ["KBF 125 A 8/2", "0.65/2.9", 17],
                      ["KBF 140 A 8/2", "1.1/4.5", 24.3],
                    ].map(([designation, output, torque]) => (
                      <tr key={designation} className="hover:bg-blue-50">
                        <td className="border border-gray-300 px-4 py-2">
                          {designation}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {output}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {torque}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                Equipment options
              </h2>{" "}
            </AccordionSummary>
            <AccordionDetails>
              <section className="my-4">
                <h4 className="text-xl font-bold  mb-4 text-[#676f77]">
                  Motors
                </h4>

                <table className="table-auto w-full border border-gray-300 mt-4 text-sm text-left shadow-sm rounded-lg overflow-hidden">
                  <thead className="bg-gray-100 text-gray-700 uppercase tracking-wide">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">
                        Options
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Cylindrical-rotor motor
                        <br />
                        <span className="font-normal">(Z)</span>
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Conical-rotor brake motor
                        <br />
                        <span className="font-normal">(KB)</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    {[
                      ["Winding protection", "", ""],
                      ["PTC thermistor", "•", "•"],
                      ["Temperature detectors", "•", "•"],
                      ["Rotary encoder", "", ""],
                      ["Integral pulse generator", "•", "•"],
                      ["External pulse generator", "•", "•"],
                      ["Integrated external pulse generator", "•", ""],
                      ["Electrical plug connector", "•", "•"],
                      ["Increased enclosure", "•", "•"],
                      ["Anti-condensation heater", "", ""],
                      ["Heating tape", "•", "•"],
                      ["Via motor winding", "•", ""],
                      ["External fan", "", ""],
                      ["Additional integrated fan", "•", ""],
                      ["Additional external fan", "•", "•"],
                      ["Heavy fan", "•", ""],
                      ["Heavy brake disc", "", "•"],
                      ["Canopy/round protection panel", "•", "•"],
                    ].map(([option, z, kb]) => (
                      <tr key={option} className="hover:bg-blue-50">
                        <td className="border border-gray-300 px-4 py-2">
                          {option}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {z}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {kb}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
              <section className="my-4">
                <h4 className="text-xl font-bold  mb-4 text-[#676f77]">
                  Brakes
                </h4>
                <table className="table-auto w-full border border-gray-300 mt-4 text-sm text-left shadow-sm rounded-lg overflow-hidden">
                  <thead className="bg-gray-100 text-gray-700 uppercase tracking-wide">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">
                        Options
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Cylindrical-rotor motor
                        <br />
                        <span className="font-normal">(Z)</span>
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Conical-rotor brake motor
                        <br />
                        <span className="font-normal">(KB)</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    {[
                      ["Manual brake release unit", "•", "•"],
                      ["Brake function monitoring", "•", ""],
                      ["Brake adjustment monitoring", "•", ""],
                      ["Sealed/increased enclosure", "•", ""],
                      ["Various control modules", "•", ""],
                      ["Enclosed brake compartment", "", "•"],
                      ["Emergency-stop brake lining", "•", ""],
                    ].map(([option, z, kb]) => (
                      <tr key={option} className="hover:bg-blue-50">
                        <td className="border border-gray-300 px-4 py-2">
                          {option}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {z}
                        </td>
                        <td className="border border-gray-300 px-4 py-2 text-center">
                          {kb}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </AccordionDetails>
          </Accordion>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ConicalRotor;
