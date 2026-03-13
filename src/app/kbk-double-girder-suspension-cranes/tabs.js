"use client";

import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const allSections = [
  {
    label: "Optimum space utilization",
    points: [
      "Overhead load transport that covers your entire work area",
      "Makes the most of available space thanks to minimal approach dimensions",
      "Suspends easily from existing workshop ceilings or roof structures",
      "No extra supports needed for the crane runway — saving time and cost",
    ],
  },
  {
    label: "Convenient handling",
    points: [
      "Simple, safe, and reliable to operate every day",
      "Compact installation dimensions that fit neatly into your space",
      "Cost-effective, customer-specific solutions — even for tight or limited workshop sections",
      "Flexible applications thanks to a modular design — including latching arrangements with KBK double suspension monorails for crane trolley transfer",
      "Can also be used as manipulator cranes — perfectly suited for modern, high-performance handling systems",
    ],
  },
  {
    label: "Strong performance",
    points: [
      "Handles loads of up to 3,200 kg with confidence",
      "Maximum hook paths achieved by positioning the hoist between the crane girders",
      "Wide span coverage through multiple suspensions — ideal for large storage and production areas running on more than two runways",
      "Modular system design for easy adaptation and expansion",
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
