"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Globe, Menu, Search, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { BiArrowBack } from "react-icons/bi";
import { BsChevronRight } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa6";
import { TbUserSearch } from "react-icons/tb";


import { MdEmail } from "react-icons/md";


export default function DemaggNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState("What's new")
  const [contentType, setContentType] = useState("whats-new")

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(menu)

    if (menu === "What's new") {
      setContentType("whats-new")
    } else if (menu === "Company") {
      setContentType("company")
    } else if (menu === "Industry expertise") {
      setContentType("industry")
    }
  }

  const sidebarItems = [
    { title: "What's new", hasSubmenu: true },
    { title: "Company", hasSubmenu: true },
    { title: "Careers", hasSubmenu: false },
    { title: "Industry expertise", hasSubmenu: true },
  ]

  const mainNavItems = [
    { title: "Cranes", hasSubmenu: true },
    { title: "Hoist Units", hasSubmenu: true },
    { title: "Drives", hasSubmenu: true },
    { title: "Components & Parts", hasSubmenu: true },
    { title: "Services", hasSubmenu: true },
    { title: "Configurators", hasSubmenu: false },
  ]

  const importantLinks = [
    { title: "Products A - Z", url: "#" },
    { title: "Demag Configurators", url: "#" },
    { title: "Your worldwide Demag contacts", url: "#", hasIcon: true },
    { title: "Get in Touch", url: "#" },
  ]

  const demagTools = [
    { title: "Partner Portal", url: "#", hasIcon: true },
    { title: "Docu System", url: "#", hasIcon: true },
  ]

  const companyLinks = [
    { title: "About Us", url: "#" },
    { title: "History", url: "#" },
    { title: "Leadership", url: "#", hasIcon: true },
    { title: "Locations", url: "#" },
  ]

  const industryLinks = [
    { title: "Manufacturing", url: "#" },
    { title: "Construction", url: "#" },
    { title: "Logistics", url: "#", hasIcon: true },
    { title: "Energy", url: "#" },
  ]

  return (
    <div className="relative">
      {/* Top Bar */}
      <div className="bg-[#003366] text-white">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4 py-2">
          <div className="flex items-center">
            <Globe className="h-5 w-5 mr-2" />
            <span>English</span>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-4">
            <Link href="#" className="flex items-center  px-3 py-1 text-[14px] font-bold text-shadow-2xs">
              <span className="mr-2 font-bold "><MdEmail className="text-blue-500 font-bold" style={{fontSize:"20px"}}/></span> Get in touch
            </Link> 
            <Link href="#" className="flex items-center border border-white px-3 py-1 text-[14px] font-bold text-shadow-2xs">
              <span className="mr-2"><FaHandshake /></span> Demag Shop
            </Link>
            <Link href="#" className="flex items-center bg-[#ffcc00] text-[#003366] px-3 py-1 text-[14px] font-bold text-shadow-2xs">
              <span className="mr-2"><TbUserSearch/></span> Your worldwide Demag contacts
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-header ">
        <div className="container mx-auto flex justify-between  ">
          <div className="flex items-center bg-[#0053a3] pr-[150px]" style={{clipPath:"polygon(0 0, 100% 0, 85% 100%, 0% 100%)"}}>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-yellow-400 border-1 border-blue-200/20 hover:bg-blue-900">
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link href="/" className="py-4 pl-2 " >
              <div className="text-2xl font-bold text-white">DEMAG</div>
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            {mainNavItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className="px-4 py-6 border-b-4 border-white flex     items-center hover:border-b-4 hover:border-[#003366]">
                  {item.title}
                  {item.hasSubmenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </button>
              </div>
            ))}
          </div>

          <button className="p-4">
            <Search size={24} />
          </button>
        </div>
      </div>

      {/* Sidebar and Content */}

      {isSidebarOpen ? (
      <div className="flex">
        <div  style={{clipPath:"polygon(0 0, 100% 0, 85% 100%, 0% 100%)"}}
          className={cn(
            "fixed md:static gap-0  w-[33vw] top-0 left-0  bg-[#003366] text-white  transform transition-transform duration-300 ease-in-out z-50",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          )}
        >
          {sidebarItems.map((item, index) => (
            <div key={index} className="">
              <a
                onClick={() => toggleSubmenu(item.title)}
                className={cn(
                  "w-full text-left pl-[100px] pr-[80px] transition duration-300  font-bold text-lg py-6 flex hover:bg-[#0d477b] hover:pl-[130px] justify-between items-center hover:t",
                   {"bg-[#0d477b] ":activeSubmenu === item.title , "border-t-1 border-blue-900":index !== 0} ,
                )}
               
              >
                {item.title}
                {item.hasSubmenu && (
                  <BsChevronRight
                    className={cn("h-4 w-4")}
                  />
                )}
              </a>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 border-t-1 border-gray-200">
          {contentType === "whats-new" && (
            <div className="grid md:grid-cols-2 gap-8 ">
              <div >
                <h2 className="text-xl font-semibold mb-4 border-b-1 pb-4 border-gray-200">Important links</h2>
                <ul className="space-y-4">
                  {importantLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.url} className="hover:underline hover:decoration-blue-800 flex items-center">
                        {link.title}
                        {link.hasIcon && <span className="ml-2">→</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4 border-b-1 pb-4 border-gray-200">Demag Tools</h2>
                <ul className="space-y-4">
                  {demagTools.map((tool, index) => (
                    <li key={index}>
                      <Link href={tool.url} className="hover:underline hover:decoration-blue-800 flex items-center">
                        {tool.title}
                        {tool.hasIcon && <span className="ml-2">→</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {contentType === "company" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 border-b-1 pb-4 border-gray-200">Company Information</h2>
                <ul className="space-y-4">
                  {companyLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.url} className="hover:underline flex items-center">
                        {link.title}
                        {link.hasIcon && <span className="ml-2">→</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4 border-b-1 pb-4 border-gray-200">Company News</h2>
                <div className="space-y-4">
                  <p>Latest updates and news from Demag</p>
                  <Link href="#" className="text-[#004488] hover:underline">
                    Read more →
                  </Link>
                </div>
              </div>
            </div>
          )}

          {contentType === "industry" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 border-b-1 pb-4 border-gray-200">Industry Solutions</h2>
                <ul className="space-y-4">
                  {industryLinks.map((link, index) => (
                    <li key={index}>
                      <Link href={link.url} className="hover:underline flex items-center">
                        {link.title}
                        {link.hasIcon && <span className="ml-2">→</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4 border-b-1 pb-4 border-gray-200">Case Studies</h2>
                <div className="space-y-4">
                  <p>Explore how Demag solutions are used in various industries</p>
                  <Link href="#" className="text-[#004488] hover:underline">
                    View all case studies →
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>):("")}
    </div>
  )
}
