"use client"

import { CheckCircle } from "lucide-react"

const allSections = [
 
  {
    label: "Three variants",
    points: [
      "  EVP-KBK single-girder full-portal crane – KBK II or KBK II-H crane girder",
       " ZVP-KBK double-girder full-portal crane – KBK II or KBK II-H crane girders",
       " D-IVP single-girder full-portal crane – I-beam section crane girder (with optional telescopic height adjustment)",
    ],
  },
  {
    label: "Practical applications",
    points: [
        "Easy to maneuver",
        "Can be simply dismantled for transport",
        "Quickly re-erected at a new operating site"
    ],
  },

]

export default function ProductInformation() {
  return (
    <section className="py-12 w-full">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Product information</h2>
<h4 className="text-xl  font-bold text-center"></h4>
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
