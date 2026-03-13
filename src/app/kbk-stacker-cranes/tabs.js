"use client";

import { CheckCircle } from "lucide-react";

const allSections = [
  {
    label: "High flexibility",
    points: [
      "Loads are picked up and guided with precision every time",
      "Simple and effortless manual crane and trolley travel",
      "Full 360° rotation gives you complete freedom of movement",
      "Unit loads, containers, and pallets up to 500 kg can be transported, sorted, and stored with ease",
    ],
  },
];

export default function ProductInformation() {
  return (
    <section className="py-12 w-full">
      <div className="container px-4 mx-auto">
        <h4 className="text-xl  font-bold text-center"></h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {allSections.map((section, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm bg-white overflow-hidden"
            >
              <div className="p-6">
                <h4 className="text-xl font-bold my-4 text-[#676f77]">
                  {section.label}
                </h4>
                <ul className="space-y-4">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm md:text-base">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
