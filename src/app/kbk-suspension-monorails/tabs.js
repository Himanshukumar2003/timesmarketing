"use client"

import { CheckCircle } from "lucide-react"

const allSections = [
  {
    label: "High flexibility",
    points: [
      "The route can be precisely adapted to meet the structural requirements of any workshop thanks to a wide range of components",
      "Transfer to adjacent suspension cranes also possible using latching devices",
    ],
  },
  {
    label: "Great versatility",
    points: [
      "Also suitable for use as equipment carriers (e.g. for test equipment, electric and compressed-air tools)",
      "Reliable supply of media thanks to comprehensive KBK components (cable trolleys, hose clips, etc.) – for dedicated transport with fluids, compressed air and power supply systems for cranes and other mobile equipment",
      "Double-rail tracks as carrier systems for rigid handling equipment, such as manipulators or lifting devices",
    ],
  },
]

export default function ProductInformation() {
  return (
    <section className="py-12 w-full">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">The benefits at a glance</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {allSections.map((section, index) => (
            <div key={index} className="border rounded-lg shadow-sm bg-white overflow-hidden">
              <div className="p-6">
              <h4 className="text-xl font-bold my-4 text-[#676f77]">{section.label}</h4>
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
  )
}
