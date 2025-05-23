"use client";

import { use, useState } from "react";
import Link from "next/link";
import { ChevronDown, Globe, Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BiArrowBack } from "react-icons/bi";
import { BsChevronRight } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa6";
import { TbUserSearch } from "react-icons/tb";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import eotCranesData from "@/app/apis/eot-cranes";
import { craneCards } from "@/app/kbk-light-crane-system/crads";
import MobileMenu from "./mobilemenu";
import GetInTouch from "./getInqarry";
export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState("Eot Cranes");
  const [contentType, setContentType] = useState("Eot Cranes");
  const [moblieNav, setMobilenav] = useState(false);
  const toggleSubmenu = (menu) => {
    setIsSidebarOpen(true);
    setActiveSubmenu(menu);
    setContentType(menu);
  };

  const sidebarItems = [
    { title: "Eot Cranes", hasSubmenu: true },
    { title: "KBK", hasSubmenu: true },
    { title: "Drives", hasSubmenu: true },
    { title: "Hoist Units", hasSubmenu: true },
    { title: "Jib Cranes", hasSubmenu: false, href: "jib-crane" },
    { title: "Underslung Crane", hasSubmenu: false, href: "underslung-crane" },
  ];

  const mainNavItems = [
    { title: "Home", href: "/" },
    {
      title: "About",
      hasDropdown: true,
      submenu: [
        { title: "About us", href: "/about" },
        { title: "Certificates", href: "/about/#certificated" },
      ],
    },
    { title: "Contact", href: "/contact" },
    { title: "Cranes", hasSubmenu: true },
    { title: "Components & Parts", hasSubmenu: true },
    { title: "Services", hasSubmenu: true },
  ];

  const drive = [
    {
      id: 1,
      title: "Geared motors",
      description: "The perfect combination of tried and tested components",
      image: "/img/geared-motors.png",
      slug: "/sraaes/geared-motors",
    },
    {
      id: 2,
      title: "Motors",
      description: "Reliable drive units",
      image: "/img/motors.png",
      slug: "/sraaes/motors",
    },
    {
      id: 3,
      title: "Wheel range",
      description: "The right wheel for every application",
      image: "/img/Wheels.png",
      slug: "/sraaes/wheel-range",
    },
  ];

  const hoist = [
    {
      id: 1,
      title: "Rope hoists",
      description: "High handling rates up to 100 tonnes",
      image: "/img/rope.webp",
      slug: "/rope-hoists",
    },
    {
      id: 2,
      title: "Chian hoists",
      description:
        "Demag chain hoists – high productivity, efficiency, safety and reliability",
      image: "/img/chain-hoist.webp",
      slug: "/chian-hoists",
    },
  ];

  const renderContent = () => {
    switch (contentType) {
      case "Eot Cranes":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-center">
            {eotCranesData.map((item, index) => (
              <div key={index}>
                <Link href={`/eot-cranes/${item.slug}`}>
                  <div className="product-card">
                    <Image
                      src={item.mainImage}
                      width={500}
                      height={500}
                      className="h-[200px] object-cover"
                      alt=""
                    />
                    <h4 className="mt-2 font-medium">{item.title}</h4>
                    <p className="mt-2 line-clamp-2 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        );
      case "KBK":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-center">
            {craneCards.slice(0, 6).map((item, index) => (
              <div key={index}>
                <Link href={`${item.slug}`}>
                  <div className="product-card">
                    <Image
                      src={item.image}
                      width={500}
                      height={500}
                      className=" object-cover"
                      alt=""
                    />
                    <h4 className="mt-2 font-medium">{item.title}</h4>
                    <p className="mt-2 line-clamp-2 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        );

      case "Hoist Units":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-center">
            {hoist.map((item, index) => (
              <div key={index}>
                <Link href={`${item.slug}`}>
                  <div className="product-card">
                    <Image
                      src={item.image}
                      width={500}
                      height={500}
                      className="h-30 object-cover"
                      alt={item.title}
                    />
                    <h4 className="mt-2 font-medium">{item.title}</h4>
                    <p className="mt-2 line-clamp-2 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        );

      case "Cranes":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-center">
            {craneCards.slice(0, 6).map((item, index) => (
              <div key={index}>
                <Link href={`${item.slug}`}>
                  <div className="product-card">
                    <Image
                      src={item.image}
                      width={500}
                      height={500}
                      className="h-30 object-cover"
                      alt=""
                    />
                    <h4 className="mt-2 font-medium">{item.title}</h4>
                    <p className="mt-2 line-clamp-2 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        );

      case "Drives":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-center">
            {drive.map((item, index) => (
              <div key={index}>
                <Link href={`${item.slug}`}>
                  <div className="product-card">
                    <Image
                      src={item.image}
                      width={500}
                      height={500}
                      className="h-30 overflow-hidden object-cover "
                      alt=""
                    />
                    <h4 className="mt-2 font-medium">{item.title}</h4>
                    <p className="mt-2 line-clamp-2 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        );
      default:
        return <div>Select a tab to view content</div>;
    }
  };

  return (
    <div className="relative">
      {/* Top Bar */}
      <div className="bg-[#003366] text-white">
        <div className="container mx-auto flex flex-wrap justify-between items-center px-4 py-2">
          <div className="  hidden md:flex items-center">
            <Globe className="h-5 w-5 mr-2" />
            <span>English</span>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-4">
            <Link
              href="/contact"
              className="flex items-center px-3 py-1 text-[14px] font-bold"
            >
              <MdEmail className="text-blue-500 mr-2" /> Get in touch
            </Link>

            <GetInTouch></GetInTouch>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-header">
        <div className="container mx-auto flex justify-between">
          <div
            className="flex items-center bg-[#0053a3] pr-[150px]"
            style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}
          >
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="  hidden md:block  p-2 text-yellow-400 border-1 border-blue-200/20 hover:bg-blue-900"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <button
              onClick={() => setMobilenav(!moblieNav)}
              className="block md:hidden p-2 text-yellow-400 border-1 border-blue-200/20 hover:bg-blue-900"
            >
              {moblieNav ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link href="/" className="py-4 pl-2 ">
              <Image
                src="/img/logo.png"
                width={300}
                height={200}
                alt="Logo"
                className="ml-5 bg-white p-2   rounded-sm"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            {mainNavItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="px-4 py-6 border-b-4 text-gray-600 font-semibold border-white flex items-center hover:border-[#003366]"
                  >
                    {item.title}
                  </Link>
                ) : item.hasDropdown ? (
                  <>
                    <button className="px-4 py-6 border-b-4 border-white text-gray-600 font-semibold flex items-center">
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute top-full left-0 w-56 bg-white shadow-lg text-black opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-300 z-50">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => toggleSubmenu(item.title)}
                    className="px-4 py-6 border-b-4 border-white text-gray-600 font-semibold flex items-center hover:border-[#003366]"
                  >
                    {item.title}
                    {item.hasSubmenu && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* <button className="p-4">
            <Search size={24} />
          </button> */}
        </div>
      </div>

      {/* Sidebar and Content */}
      {isSidebarOpen && (
        <div className="flex">
          {/* Sidebar */}
          <div
            style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}
            className={cn(
              "fixed md:static gap-0 w-[33vw] top-0 left-0 bg-[#003366] text-white z-50",
              isSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full md:translate-x-0"
            )}
          >
            {sidebarItems.map((item, index) => (
              <div key={index}>
                {item.href ? (
                  <Link
                    href={`/${item.href}`}
                    className={cn(
                      "w-full cursor-pointer text-left pl-[100px] pr-[80px] transition duration-300 font-bold text-lg py-6 flex hover:bg-[#0d477b] hover:pl-[130px] justify-between items-center",
                      {
                        "border-t-1 border-blue-900": index !== 0,
                      }
                    )}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <a
                    onClick={() => toggleSubmenu(item.title)}
                    className={cn(
                      "w-full cursor-pointer text-left pl-[100px] pr-[80px] transition duration-300 font-bold text-lg py-6 flex hover:bg-[#0d477b] hover:pl-[130px] justify-between items-center",
                      {
                        "bg-[#0d477b]": activeSubmenu === item.title,
                        "border-t-1 border-blue-900": index !== 0,
                      }
                    )}
                  >
                    {item.title}
                    {item.hasSubmenu && <BsChevronRight className="h-4 w-4" />}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu (separate from sidebar) */}

          {/* Main Content Area */}
          <div className="flex-1 p-8 border-t-1 border-gray-200">
            {renderContent()}
          </div>
        </div>
      )}
      {moblieNav && <MobileMenu></MobileMenu>}
    </div>
  );
}
