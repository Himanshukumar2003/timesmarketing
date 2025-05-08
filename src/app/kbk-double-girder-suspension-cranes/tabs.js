"use client";

import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const allSections = [
  {
    label: "Optimum space utilization",
    points: [
      "Overhead, area-serving load transport",
      "Optimum utilization of space thanks to minimum approach dimensions",
      "Suspension from existing workshop ceilings or roof structures",
      "Require no additional supports for the crane runway",
    ],
  },
  {
    label: "Convenient handling",
    points: [
      " Simple, safe and reliable handling",
      " Favorable installation dimensions",
      " Customer-specific and cost-effective solutions for workshops – also in limited sections",
      "Versatile applications thanks to modular system design (e.g. latching arrangements with KBK double suspension monorails for crane trolley transfer)",
      " Can also be employed as manipulator cranes – optimum design for use in state-of-the-art handling systems.",
    ],
  },
  {
    label: "Strong performance",
    points: [
      "Rated for loads weighing up to 3,200 kg",
      " Maximum possible hook paths by arranging the hoist between the crane girders",
      " Maximum span dimensions by means of multiple suspensions (cranes operating on more than two runways) – to cover extensive storage and production areas",
      " Modular system design",
    ],
  },
];

function ProductInformation() {
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {allSections.map((section, index) => (
            <div key={index} className=" p-4 bg-gray-100 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-[#676f77]">
                {section.label}
              </h3>
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
    </section>
  );
}

export default ProductInformation;
