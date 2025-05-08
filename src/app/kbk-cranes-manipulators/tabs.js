"use client";

import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const allSections = [
  {
    label: "Efficient workplace design",
    points: [
       " Optimum ergonomic load handling",
       " High operating speeds",
       " Optimum positioning of workpieces and sub-assemblies",
       " Range can be increased by performing operations also outside the suspension area",
       " Also available with KBK Aluline for even lower deadweight",
    ]
  },
  {
    label: "Simple upgrade",
    points: [
      "Existing KBK double-girder suspension cranes can be converted into manipulator cranes using KBK ergo components",
       ]
  },
 
];

function ProductInformation() {
  return (
    <section className="py-12 ">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Product information</h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {allSections.map((section, index) => (
            <div key={index} className=" p-4 bg-gray-100 rounded-lg shadow-sm">
            <h4 className="text-xl font-bold my-4 text-[#676f77]">{section.label}</h4>
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
