"use client";

import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";

const allSections = [
  {
    label: "Rope guide",
    img: "/img/dhr-rope-hoist4.webp",
    points: [
      "All-metal construction. Built to guide the rope precisely—with minimal wear.",
      "Smart design touches:",
      "For sizes 10 (optional) and 20-40, a full-circumference rope guide comes as standard",
      "Handles diagonal pulls up to four degrees without the rope touching the guide",
      "Ropes are galvanised as standard for added durability",
    ],
  },
  {
    label: "High variability thanks to modular design",
    img: "/img/dhr-rope-hoist4.webp",
    points: [
      "Modular design lets you configure the rope hoist to fit your needs",
      "One basic technology works across a broad range of applications",
      "More sizes available",
      "Higher load capacities included",
    ],
  },
  {
    label: "Planning and application flexibility",
    img: "/img/dhr-rope-hoist4.webp",
    points: [
      "Four application types: foot-mounted hoist, low-headroom monorail hoist, double-rail crab, standard-headroom monorail hoist",
      "Smart interfaces – easy to add fittings and accessories",
      "Control options: contactor control or customer-provided system",
      "Digital components available for extra safety functions",
    ],
  },
  {
    label: "Other benefits",
    img: "/img/dhr-rope-hoist4.webp",
    points: [
      "Reliable mechanical components you can count on",
      "Smart features available—more convenience, better safety",
      "Real-time remote diagnostics with the Demag StatusControl app",
    ],
  },
  {
    label: "Valuable cost savings",
    img: "/img/dhr-rope-hoist4.webp",
    points: [
      "Fast and simple installation and conversion – saves time and money",
      "Reduced forces on superstructures allow for lighter, more cost-effective building design",
      "Greater distances between suspensions and joints mean fewer fittings needed – extra steelwork largely unnecessary",
      "Easy and affordable to modify or extend as your needs change",
    ],
  },
  {
    label: "Proven system",
    img: "/img/dhr-rope-hoist4.webp",
    points: [
      "Continuously tested – in our own test center and by external labs",
      "Quality made in Germany",
      "Light crane system from the market leader, backed by over 50 years of experience",
    ],
  },
  {
    label: "Professional planning support",
    img: "/img/dhr-rope-hoist4.webp",
    points: [
      "Free KBK Designer online tool – helps you plan your KBK installation step by step",
      "Planning made easy: fast, intuitive configuration with static calculation, parts list, technical drawing, and quotation price all included",
      "Direct link to Demag Shop – order simply and reliably with just a few clicks",
    ],
  },
];
function ProductInformation() {
  return (
    <section className="py-2">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {allSections.map((section, index) => (
            <div key={index} className=" p-4 bg-gray-100 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold my-4 text-[#676f77]">
                {section.label}
              </h4>
              <ul className="space-y-3">
                {section.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircleIcon className="text-green-500 mr-2 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <HoistModels></HoistModels>
    </section>
  );
}

export default ProductInformation;

export function HoistModels() {
  const hoistModels = [
    {
      model: "F-DVR Foot-Mounted Hoist",
      application: "Stationary applications or special trolleys",
      features: [
        " Four mounting positions – each with its own lead-off direction",
        "Flexible installation options",
        "Load capacity: up to 80 tonnes",
      ],
      loadCapacityTonnes: 80,
      image: "/img/dvr-rope-hoist6.webp",
    },
    {
      model: "EU-DVR Standard-Headroom Monorail Hoist",
      features: [
        "Designed for use on monorails",
        "EUD-DVR variant available for curved rails",
        "Load capacity: up to 40 tonnes",
      ],
      application: "Monorails (standard and radius rails)",
      variants: ["EUD-DVR for curved rails"],
      loadCapacityTonnes: 40,
      image: "/img/dvr-rope-hoist7.webp",
    },
    {
      model: "EK-DVR Low-Headroom Monorail Hoist",
      application: "Compact crane applications",
      features: [
        "Ideal for crane applications where space is tight – compact dimensions, reduced approach",
        "Built-in lift-off and derailment protection",
        "Two driven wheels for reliable travel",
        "Load capacity: up to 12.5 tonnes",
      ],
      loadCapacityTonnes: 12.5,
      image: "/img/dvr-rope-hoist8.webp",
    },
    {
      model: "EZ-DVR Double-Rail Crab",
      application: "Double-rail cranes (narrow gauge from 900 mm)",
      features: [
        " Works with narrow gauge tracks (from 900 mm)",
        "Even distribution of wheel loads",
        " Versatile designs – low, medium, or high connection",
        " Two drive units – no open gears",
        " Optional service platform available",
        " Load capacity: up to 80 tonnes",
        " Optional: two hoists on one trolley",
      ],
      loadCapacityTonnes: 80,
      image: "/img/dvr-rope-hoist9.webp",
    },
  ];
  return (
    <div className="p-6 space-y-6">
      {hoistModels.map((model, index) => (
        <div key={index} className="">
          <h2 className="text-xl font-bold my-4 text-[#676f77]">
            {model.model}
          </h2>

          {model.variants && (
            <p className="text-gray-600">
              <strong>Variant:</strong> {model.variants.join(", ")}
            </p>
          )}
          {model.features && (
            <ul className="list-disc pl-10 text-gray-700">
              {model.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          )}

          <Image
            src={model.image}
            height={300}
            width={400}
            className="max-w-sm mx-auto"
            alt=""
            layout="responsive"
          ></Image>
        </div>
      ))}

      <h4 className="text-xl font-bold my-4 text-[#676f77]">
        Technical perfection, right down to the details
      </h4>
      <p>
        Like every Demag product, the DVR rope hoist starts with one question:
        What do our customers actually need?<br></br>
        The answer is built into every part of it. Flexibility. Productivity.
        Reliability. Cost-effectiveness.<br></br>
        From the big-picture concept down to the smallest technical detail, the
        DVR is designed to deliver—without complication.
      </p>
      <h6 className="text-sm font-bold my-4 text-[#676f77]">Five sizes</h6>

      <Image
        src="/img/dvr-rope-table.webp"
        height={300}
        width={400}
        className="w-full"
        alt=""
        layout="responsive"
      ></Image>
    </div>
  );
}
