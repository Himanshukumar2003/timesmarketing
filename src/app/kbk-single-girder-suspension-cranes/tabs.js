"use client";

import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const allSections = [
  {
    label: "Optimum space utilization",
    points: [
     " Overhead, area-serving load transport",
     " Optimum utilization of space thanks to minimum approach dimensions",
     " Suspension from existing workshop ceilings or roof structures",
     " Require no additional supports for the crane runway",
    ]
  },
  {
    label: "Convenient handling",
    points: [
     " Easily moved by hand",
     " Smooth-running, snag-free operation thanks to articulated connections between the crane girders and trolleys",
     " Low deadweight",
     " Customer-specific and cost-effective solutions for workshops – also in limited sections",
     " Versatile applications thanks to modular system design (e.g. latching arrangements with KBK suspension monorails for crane trolley transfer)",
     " Cranes can also operate on runways that are not parallel"
    ]
  },
 
];

function ProductInformation() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
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



