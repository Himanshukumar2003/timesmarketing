"use client";

import { use, useState, useEffect } from "react"; // added useEffect
import Link from "next/link";
import { ChevronDown, Globe, Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { BsChevronRight } from "react-icons/bs";

import Image from "next/image";
import { MdEmail } from "react-icons/md";
import eotCranesData from "@/app/apis/eot-cranes";
import { craneCards } from "@/app/kbk-light-crane-system/crads";
import MobileMenu from "./mobilemenu";
import GetInTouch from "./getInqarry";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState("EOT Cranes");
  const [contentType, setContentType] = useState("EOT Cranes");
  const [moblieNav, setMobilenav] = useState(false);

  // ✅ Fix 3: Prevent background scroll when sidebar or mobile nav is open
  useEffect(() => {
    if (isSidebarOpen || moblieNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen, moblieNav]);

  // ✅ Fix 1: Toggle sidebar — close if same menu clicked again
  const toggleSubmenu = (menu) => {
    if (isSidebarOpen && activeSubmenu === menu) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
      setActiveSubmenu(menu);
      setContentType(menu);
    }
  };

  // ✅ Fix 2: Close sidebar when product is clicked
  const handleProductClick = () => {
    setIsSidebarOpen(false);
  };

  const sidebarItems = [
    { title: "EOT Cranes", hasSubmenu: true },
    { title: "KBK", hasSubmenu: true },
    { title: "Drives", hasSubmenu: true },
    { title: "Hoist Units", hasSubmenu: true },
    {
      title: "Portal Cranes",
      hasSubmenu: false,
      href: "portal-cranes",
    },
    {
      title: "Motorized Transfer Carts",
      hasSubmenu: false,
      href: "motorized-transfer-carts",
    },
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
    { title: "Cranes", hasSubmenu: true },
    { title: "Blogs", href: "/blog" },
    { title: "Gallery", href: "/gallery" },
    { title: "Contact", href: "/contact" },
  ];

  const drive = [
    {
      id: 1,
      title: "Geared motors",
      description: "The perfect combination of tried and tested components",
      image: "/img/geared-motors.png",
      slug: "/drives/geared-motors",
    },
    {
      id: 2,
      title: "Motors",
      description: "Reliable drive units",
      image: "/img/motors.png",
      slug: "/drives/motors",
    },
    {
      id: 3,
      title: "Wheel range",
      description: "The right wheel for every application",
      image: "/img/Wheels.webp",
      slug: "/drives/wheel-range",
    },
  ];

  const hoist = [
    {
      id: 1,
      title: "Rope hoists",
      description: "High handling rates up to 100 tonnes",
      image: "/img/chain-host-1.webp",
      slug: "/rope-hoists",
    },
    {
      id: 2,
      title: "Chain hoists",
      description:
        "Demag chain hoists – high productivity, efficiency, safety and reliability",
      image: "/img/chain-hoist.png",
      slug: "/chain-hoists",
    },
  ];

  const renderContent = () => {
    switch (contentType) {
      case "EOT Cranes":
      case "Cranes":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-center overflow-hidden">
            {eotCranesData.map((item, index) => (
              <div key={index}>
                {/* ✅ Fix 2: Close on product click */}
                <Link
                  href={`/eot-cranes/${item.slug}`}
                  onClick={handleProductClick}
                >
                  <div className="product-card">
                    <Image
                      src={item.mainImage}
                      width={500}
                      height={500}
                      className="w-100"
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
                {/* ✅ Fix 2: Close on product click */}
                <Link href={`${item.slug}`} onClick={handleProductClick}>
                  <div className="product-card">
                    <Image
                      src={item.image}
                      width={500}
                      height={500}
                      className="w-100"
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
                {/* ✅ Fix 2: Close on product click */}
                <Link href={`${item.slug}`} onClick={handleProductClick}>
                  <div className="product-card">
                    <Image
                      src={item.image}
                      width={1000}
                      height={1000}
                      className="w-100 h-100 aspect-video"
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

      case "Drives":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-center">
            {drive.map((item, index) => (
              <div key={index}>
                {/* ✅ Fix 2: Close on product click */}
                <Link href={`${item.slug}`} onClick={handleProductClick}>
                  <div className="product-card">
                    <Image
                      src={item.image}
                      width={500}
                      height={500}
                      className="w-100"
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
      <div className="bg-[#003366] text-white p-1 lg:p-0">
        <div className="mx-auto flex flex-wrap justify-between items-center px-4 py-2">
          <div className="hidden md:flex items-center">
            <Globe className="h-5 w-5 mr-2" />
            <span>English</span>
          </div>
          <div className="flex flex-wrap justify-between w-full md:w-auto gap-2 md:gap-4">
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
      <div className="bg-header px-4 mx-auto flex justify-between">
        <div className="flex items-center bg-white pr-0 md:pr-[150px] custom-clip">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="hidden md:block p-2 text-blue-900 border-1 border-blue-500 hover:bg-white"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <button
            onClick={() => setMobilenav(!moblieNav)}
            className="block md:hidden p-2 text-yellow-400 border-1 border-blue-200/20 hover:bg-blue-900"
          >
            {moblieNav ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link href="/" className="py-4 pl-2">
            <div className="flex pl-2 justify-center items-center">
              <Image
                src="/img/logo.png"
                width={250}
                height={200}
                alt="Logo"
                className="ml-7 bg-white rounded-sm transform scale-120"
              />
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center bg-[#0053a3]">
          {mainNavItems.map((item, index) => (
            <div key={index} className="relative group">
              {item.href ? (
                <Link
                  href={item.href}
                  className="px-4 py-6 border-b-4 text-white font-semibold border-[#0053a3] flex items-center hover:border-white"
                >
                  {item.title}
                </Link>
              ) : item.hasDropdown ? (
                <>
                  <button className="px-4 py-6 border-b-4 border-[#0053a3] text-white font-semibold flex items-center hover:border-white">
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
                // ✅ Fix 1: Toggle on click
                <button
                  onClick={() => toggleSubmenu(item.title)}
                  className={cn(
                    "px-4 py-6 border-b-4 border-[#0053a3] text-white font-semibold flex items-center hover:border-white",
                    {
                      "border-white":
                        isSidebarOpen && activeSubmenu === item.title,
                    }
                  )}
                >
                  {item.title}
                  {item.hasSubmenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </button>
              )}
            </div>
          ))}
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
                  // ✅ Fix 2: Close on sidebar link click
                  <Link
                    href={`/${item.href}`}
                    onClick={handleProductClick}
                    className={cn(
                      "w-full cursor-pointer text-left pl-[100px] pr-[80px] transition duration-300 font-bold text-lg py-6 flex hover:bg-[#0d477b] hover:pl-[130px] justify-between items-center",
                      { "border-t-1 border-blue-900": index !== 0 }
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
