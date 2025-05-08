"use client"

import Image from "next/image"
import { Breadcrumb } from "@/componts/breadcrumb"
import Navbar from "@/componts/nav"
import Footer from "@/componts/footer"
import ProductInformation from "./tabs"

export default function KbkSuspension() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="KBK single-girder suspension cranes"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "KBK single-girder suspension cranes",
            href: "/",
            isCurrent: true,
          },
        ]}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-6">
                Perfect for linear overhead material handling
              </h1>
              <p className="text-base md:text-lg text-gray-700 mb-8 text-center">
                KBK suspension monorails from our KBK light crane system give you the certainty of solutions tailored to
                meet your specific requirements for linear, overhead handling. Their special strengths are to be found
                in their many options:
              </p>

              <div className="bg-gray-50 rounded-lg border p-6">
                <ul className="space-y-3 list-disc pl-5">
                  <li className="text-sm md:text-base">
                    Simple, manually operated straight sections – also possible with aluminum profile sections
                  </li>
                  <li className="text-sm md:text-base">Complex installations</li>
                  <li className="text-sm md:text-base">Load capacities up to 3,200 kg</li>
                  <li className="text-sm md:text-base">
                    Flexible routing by means of straight and curved sections, track switches and turntables
                  </li>
                  <li className="text-sm md:text-base">
                    Direct link between pick-up and deposit points in reversing operation or a closed circuit
                  </li>
                  <li className="text-sm md:text-base">
                    Besides manual operation, semi- or fully automated designs also possible
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ProductInformation />

        {/* Technical Data */}
        <section className="py-12 ">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Technical data</h2>

              <p className="font-semibold text-gray-500 text-lg md:text-xl mb-6">
                Profile section selection: maximum distances between supports and headroom dimensions
              </p>

              <div className="mb-8">
                <Image
                  src="/img/kbk-suspension-monorails-table.webp"
                  height={400}
                  width={400}
                  alt="KBK suspension monorails diagram"
                  className=" object-contain"
                />
              </div>

              <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm bg-white">
                <p className="text-sm text-gray-500 p-4 bg-gray-100 border-b">Load capacity [kg]</p>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                        KBK type
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                        h [mm]
                      </th>
                      <th
                        className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider"
                        colSpan={8}
                      >
                        Load capacity [kg]
                      </th>
                    </tr>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                        {" "}
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                        Iw [m]
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                        125
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                        250
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                        500
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                        1,000
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                        1,600
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                        2,000
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                        2,500
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                        3,200
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      ["I", "250", "3.8", "2.6", "", "", "", "", "", ""],
                      ["II-L", "370", "7.9", "5.9", "3.7", "2.7", "", "", "", ""],
                      ["II", "400", "", "8.0", "5.7", "3.2", "", "", "", ""],
                      ["II-H", "413", "", "10.5", "9.2", "6.7", "", "", "", ""],
                      ["III", "446", "", "", "", "", "3.7", "3.0", "2.3", "1.9"],
                    ].map((row, rowIndex) => (
                      <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className={`px-4 py-3 text-sm border-r ${
                              cellIndex === 0 ? "font-medium text-left" : "text-center"
                            } ${cellIndex === row.length - 1 ? "border-r-0" : ""}`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="p-4 bg-gray-50 text-sm text-gray-500 border-t">
                  <p>h: Adjustable headroom dimension</p>
                  <p>lW: Suspension distance for suspension monorail</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
