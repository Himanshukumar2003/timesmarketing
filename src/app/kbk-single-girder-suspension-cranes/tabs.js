"use client";

import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const allSections = [
  {
    label: "Optimum space utilization",
    points: [
      "Overhead load transport that covers your entire work area",
      "Makes the most of every bit of available space thanks to minimal approach dimensions",
      "Suspends easily from existing workshop ceilings or roof structures",
      "No extra supports needed for the crane runway — saving you time and cost",
    ],
  },
  {
    label: "Convenient handling",
    points: [
      "Light and easy to move by hand",
      "Smooth, snag-free operation thanks to articulated connections between crane girders and trolleys",
      "Low deadweight keeps things effortless to manage",
      "Cost-effective, customer-specific solutions that work even in tight or limited spaces",
      "Flexible applications thanks to a modular design — including latching arrangements with KBK suspension monorails for crane trolley transfer",
      "Works on runways that aren't perfectly parallel — no problem at all",
    ],
  },
];

function ProductInformation() {
  return (
    <section className="py-12 ">
      <div className="container">
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
    </section>
  );
}

export default ProductInformation;
