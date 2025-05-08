"use client";

import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";

const allSections = [
  {
    label: "High variability thanks to modular design",
    points: [
      "Modular design for rope hoist configuration to meet your individual needs",
      "Broad range of applications with one basic technology",
      "More sizes with higher load capacities",
    ],
  },
  {
    label: "Planning and application flexibility",
    points: [
      "Application types: foot-mounted hoist, low-headroom monorail hoist, double-rail crab, standard-headroom monorail hoist",
      "Smart interfaces for many freely selectable fittings and accessories",
      "Contactor control or control system provided by the customer",
      "Digital components for additional safety functions",
    ],
  },
  {
    label: "Other benefits",
    points: [
      " Reliable mechanical components",
      " Choice of smart features for more convenience and improved safety",
      " Remote diagnostics in real time with the Demag StatusControl app",
    ],
  },
  {
    label: "Valuable cost savings",
    points: [
      "Fast and simple installation and conversion",
      "Reduced forces transmitted to superstructures for lighter, more cost-effective building design",
      "Greater distances between suspensions and joints for fewer suspension fittings: additional steelwork largely unnecessary",
      "Simple and cost-effective modification and extension to meet changing requirements",
    ],
  },
  {
    label: "Proven system",
    points: [
      "Continuously tested in our own test center and in external tests",
      "Quality made in Germany",
      "Light crane system from the market leader with more than 50 years of experience",
    ],
  },
  {
    label: "Professional planning support",
    points: [
      "Free KBK Designer online tool for project engineering your KBK installations",
      "Planning made easy: fast, self-explanatory configuration including static calculation, parts list, technical drawing and quotation price",
      "Link to the Demag Shop order system for simple and reliable orders at the click of your mouse",
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
        "Four mounting positions with one lead-off direction each",
        "Flexible installation options",
        "Load capacity: up to 80 tonnes",
      ],
      loadCapacityTonnes: 80,
      image: "/img/dvr-rope-hoist6.webp",
    },
    {
      model: "EU-DVR Standard-Headroom Monorail Hoist",
      features: [
        "For use on monorails",
        "EUD-DVR for rails with radius",
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
        "For crane applications with compact dimensions and reduced approach dimensions",
        "Lift-off and derailment protection",
        "Two driven wheels",
        "Load capacity: up to 12.5 tonnes",
      ],
      loadCapacityTonnes: 12.5,
      image: "/img/dvr-rope-hoist8.webp",
    },
    {
      model: "EZ-DVR Double-Rail Crab",
      application: "Double-rail cranes (narrow gauge from 900 mm)",
      features: [
        " Narrow gauge track (from 900 mm)",
        " Uniform distribution of wheel loads",
        " Versatile designs (low, medium, high connection)",
        " Two drive units (no open gears)",
        " Service platform available as an option",
        " Load capacity: up to 80 tonnes",
        " Two hoists on one trolley available as an option",
      ],
      loadCapacityTonnes: 80,
      image: "/img/dvr-rope-hoist9.webp",
    },
  ];
  return (
    <div className="p-6 space-y-6">
      {hoistModels.map((model, index) => (
        <div
          key={index}
          className=""
        >
          <h2 className="text-xl font-bold my-4 text-[#676f77]">{model.model}</h2>
        
          {model.variants && (
            <p className="text-gray-600">
              <strong>Variant:</strong> {model.variants.join(", ")}
            </p>
          )}
          {model.features && (
            <ul className="list-disc list-inside text-gray-700">
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

      <h4 className="text-xl font-bold my-4 text-[#676f77]">Technical perfection down to the last detail</h4>
      <p>As with all Demag products, the DVR rope hoist focuses on the needs of our customers. The desire for flexibility and productivity is anchored in the DVR, as is the desire for reliability and cost-effectiveness. As a result, the versatile rope hoist concept impresses down to the last technical detail.</p>
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
