import React from "react"
import { ChevronRight, Home } from "lucide-react"



export function Breadcrumb({
  items,
  title,
  backgroundImage = "/placeholder.svg?height=400&width=1200",
  className = "",
}) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Background Image */}
      <div className="relative w-full h-[400px] md:h-[350px] overflow-hidden">
        <img
          src={backgroundImage}
          alt={title}
          className="w-full h-full object-cover absolute inset-0"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(0,61,116,0.7)]" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex  flex-col items-center justify-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>

        <nav className="flex items-center space-x-2">
          <a href="/" className="flex items-center hover:text-orange-500 text-lg transition-colors">
            <Home className="h-4 w-4 mr-1" />
            Home
          </a>

          {items.map((item, index) => (
            <React.Fragment key={index}>
              <ChevronRight className="h-4 w-4 text-gray-300 text-lg" />
              {item.isCurrent ? (
                <span className="text-[#F4CC07] font-medium">{item.label}</span>
              ) : (
                <a href={item.href} className="hover:text-[#f4cd07d7] text-lg transition-colors">
                  {item.label}
                </a>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  )
}
