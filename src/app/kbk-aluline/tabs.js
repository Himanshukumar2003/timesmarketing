"use client";

import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const allSections = [
  {
    label: "Optimum Ergonomics",
    points: [
      "Convenient and ergonomic push-travel operation made easier by low crane deadweights",
      "Designed to support fatigue-free operation throughout the working day",
      "Significantly reduces physical strain on workers",
      "Helps lower absenteeism and illness-related downtime",
      "Boosts employee satisfaction and overall morale",
      "Creates an optimum workplace setup with a comprehensive range of chain hoists and load handling attachments",
    ],
  },
  {
    label: "Highly Cost-Effective",
    points: [
      "Delivers maximum value and efficiency across the entire product service life",
      "Fully compatible with existing KBK Aluline systems — no need to start from scratch",
      "Smart combinations with steel profile sections allow larger distances between suspensions",
      "Overhead materials handling frees up valuable floor space along production lines or assembly stations",
    ],
  },
  {
    label: "Maximum Flexibility",
    points: [
      "Modular system design based on a simple construction-kit principle",
      "Suitable for a wide range of applications from push-travel and electric systems to pneumatic and fully automated installations",
      "New components can be added or existing units replaced quickly and easily",
      "Aluminium and steel profile sections can be combined within a single installation",
      "Short delivery times thanks to parts being readily available from stock",
    ],
  },
  {
    label: "Valuable Cost Savings",
    points: [
      "Fast and straightforward installation and conversion",
      "Reduced forces transmitted to superstructures enable lighter and more cost-effective building design",
      "Greater distances between suspensions and joints mean fewer suspension fittings and minimal additional steelwork",
      "Simple and cost-effective modification or extension as requirements change",
    ],
  },
  {
    label: "Proven System",
    points: [
      "Continuously tested in our own test centre and through independent external testing",
      "High-quality engineering – made in Germany",
      "Light crane system developed by the market leader with more than 50 years of experience",
    ],
  },
  {
    label: "Professional Planning Support",
    points: [
      "Free KBK Designer online tool simplifies project engineering for KBK installations",
      "Fast and easy configuration including static calculations, parts lists, technical drawings and quotation pricing",
      "Direct connection to the Demag Shop order system for quick and reliable ordering",
    ],
  },
];

function ProductInformation() {
  return (
    <section className="">
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
