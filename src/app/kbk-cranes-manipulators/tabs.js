"use client";

import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const allSections = [
  {
    label: "Efficient workplace design",
    points: [
      "Ergonomic load handling that makes every lift more comfortable",
      "High operating speeds to keep your workflow moving",
      "Precise positioning of workpieces and sub-assemblies every time",
      "Extended reach — operations can also be carried out outside the suspension area",
      "Also available with KBK Aluline for an even lighter, low-deadweight solution",
    ],
  },
  {
    label: "Simple upgrade",
    points: [
      "Already have a KBK double-girder suspension crane? It can be easily converted into a manipulator crane using KBK ergo components — no need to start from scratch",
    ],
  },
];

function ProductInformation() {
  return (
    <section className=" ">
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
