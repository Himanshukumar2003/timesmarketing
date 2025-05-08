"use client";

import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const allSections = [
  {
    label: "Optimum ergonomics",
    points: [
      "Convenient and ergonomic push-travel operation, also thanks to low crane deadweights",
      "Optimum support for fatigue-free operation",
      "Reduced physical burden for workers",
      "Lower absenteeism due to illness",
      "Higher employee satisfaction",
      "Optimum workplace design thanks to comprehensive range of chain hoists and load handling attachments",
    ],
  },
  {
    label: "Highly cost-effective",
    points: [
      "Maximum value and efficiency throughout the entire product service life",
      "Compatible with existing KBK Aluline systems",
      "Smart combinations with steel profile sections for even larger distances between suspensions",
      "Gain valuable floor space thanks to overhead materials handling – linear, e.g. along a production line, and area-serving, e.g. at individual assembly stations",
    ],
  },
  {
    label: "Maximum flexibility",
    points: [
      "Modular system design based on the construction-kit principle",
      "Wide range of applications from push-travel and electric systems or pneumatic operation to fully automated installations",
      "New components can be integrated or existing units can be replaced with ease at any time",
      "Combination of aluminum and steel profile sections possible in one installation",
      "Short delivery times thanks to availability of almost all parts from stock",
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
