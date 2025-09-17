

import { Users, Box, Globe, BarChart3, Settings2, LineChart } from "lucide-react"

export default function ServiceCards() {
  const services = [
    {
      title: "CUSTOMER CONNECT",
      icon: Users,
      color: "blue",
    },
    {
      title: "PRODUCT EXPANSION",
      icon: Box,
      color: "yellow",
    },
    {
      title: "MARKET EXPANSION",
      icon: Globe,
      color: "blue",
    },
    {
      title: "TRAINING",
      icon: BarChart3,
      color: "yellow",
    },
    {
      title: "MANPOWER RESOURCE",
      icon: Settings2,
      color: "blue",
    },
    {
      title: "PROCESS IMPROVEMENT",
      icon: LineChart,
      color: "yellow",
    },
  ]

  return (
    <div className=" overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative  p-4 border-dashed border-gray-400  ${
              service.color === "blue" ? "bg-[#091B3C] text-white" : "bg-yellow-400 text-gray-800"
            }`}
          >
            <div className="flex gap-4  items-center justify-center p-8 h-full">
              <service.icon className="w-16 h-16 " />
              <div className="writing-vertical-lr transform  text-xl font-bold tracking-wider">
                {service.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
ServiceCards