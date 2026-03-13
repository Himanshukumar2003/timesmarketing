"use client";

import { CheckCircle } from "lucide-react";

const allSections = [
  {
    label: "High flexibility",
    points: [
      "The route can be tailored precisely to your workshop layout — a wide range of components makes it easy to work around any structural requirement",
      "Latching devices allow smooth transfer to adjacent suspension cranes when needed",
    ],
  },
  {
    label: "Great versatility",
    points: [
      "Works great as an equipment carrier too — perfect for test equipment, electric tools, and compressed-air tools",
      "Keeps media flowing reliably thanks to a comprehensive range of KBK components — including cable trolleys, hose clips, and more — for dedicated transport of fluids, compressed air, and power supply systems for cranes and mobile equipment",
      "Double-rail tracks serve as carrier systems for rigid handling equipment such as manipulators and lifting devices",
    ],
  },
];

export default function ProductInformation() {
  return (
    <section className="  w-full">
      <div className=" mx-auto">
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
