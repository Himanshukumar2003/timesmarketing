"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

// Menu data
const quickLinks = [
  { title: "Home", slug: "/" },
  { title: "About", slug: "/about" },
  { title: "Contact", slug: "/" },
  { title: "Services", slug: "/" },
];

const menuItems = [
  {
    id: "EOT",
    title: "EOT Cranes",
    items: [
      {
        id: "double-girder-crane",
        title: "Double Girder Crane",
        slug: "/eot-cranes/double-girder-crane",
      },

      {
        id: "single-girder-crane",
        title: "Single Girder Crane",
        slug: "/eot-cranes/single-girder-crane",
      },
    ],
  },
  {
    id: "KBK",
    title: "KBK",
    items: [
      { id: "kbk-aluline", title: "KBK Aluline", slug: "/kbk-aluline" },
      {
        id: "kbk-single-girder",
        title: "KBK single-girder suspension cranes",
        slug: "/kbk-single-girder-suspension-cranes",
      },
      {
        id: "kbk-double-girder",
        title: "KBK double-girder suspension cranes",
        slug: "/kbk-double-girder-suspension-cranes",
      },
      {
        id: "kbk-overhung",
        title: "KBK overhung and extending cranes",
        slug: "/kbk-overhung-and-extending-cranes",
      },
      {
        id: "kbk-manipulators",
        title: "KBK cranes for manipulators",
        slug: "/kbk-cranes-manipulators",
      },
      {
        id: "kbk-monorails",
        title: "KBK suspension monorails",
        slug: "/kbk-suspension-monorails",
      },
      {
        id: "kbk-stacker",
        title: "KBK stacker cranes",
        slug: "/kbk-stacker-cranes",
      },
      {
        id: "kbk-portal",
        title: "KBK portal cranes",
        slug: "/kbk-portal-cranes",
      },
    ],
  },

  {
    id: "hoist-units",
    title: "Hoist Units",
    items: [
      {
        id: "chain-hoists",
        title: "Chain hoists",
        slug: "/chain-hoists",
      },
      { id: "rope-hoists", title: "Rope hoists", slug: "/rope-hoists" },
    ],
  },

  {
    id: "drives",
    title: "Drives",
    items: [
      {
        id: "geared-motors",
        title: "Geared motors",
        slug: "/sraaes/geared-motors",
      },
      { id: "motors", title: "Motors", slug: "/sraaes/motors" },
      { id: "wheel-range", title: "Wheel range", slug: "/sraaes/wheel-range" },
    ],
  },
  {
    id: "components",
    title: "Components & Parts",
    items: [
      { id: "wheels", title: "Wheels and rollers" },
      { id: "rails", title: "Rails and tracks" },
      { id: "electrical", title: "Electrical components" },
    ],
  },
  {
    id: "services",
    title: "Services",
    items: [
      { id: "maintenance", title: "Maintenance" },
      { id: "repair", title: "Repair" },
      { id: "installation", title: "Installation" },
    ],
  },
];

export default function MobileMenu() {
  // State to track active category
  const [activeCategory, setActiveCategory] = useState(null);

  // Animation variants for sliding effect
  const slideVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { type: "tween", duration: 0.3 } },
    exit: { x: "100%", transition: { type: "tween", duration: 0.3 } },
  };

  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden">
      <AnimatePresence mode="wait">
        {activeCategory === null ? (
          // Main menu
          <motion.div
            key="main-menu"
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className="bg-white"
          >
            {/* Quick Links */}
            <div className="border-b">
              {quickLinks.map((link) => (
                <Link key={link.title} href={link.slug}>
                  <button className="w-full py-4 px-5 text-left font-medium border-b">
                    {link.title}
                  </button>
                </Link>
              ))}
            </div>

            {/* EOT Cranes */}
            {menuItems.map((item) => (
              <div key={item.id} className="border-b">
                <button
                  onClick={() => setActiveCategory(item.id)}
                  className="w-full py-4 px-5 flex justify-between items-center text-left font-medium"
                >
                  {item.title}
                  <ChevronRight className="h-5 w-5 text-blue-500" />
                </button>
              </div>
            ))}
          </motion.div>
        ) : (
          // Submenu for the selected category
          <motion.div
            key="sub-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideVariants}
            className="bg-white"
          >
            <div className="border-b sticky top-0 bg-white z-10">
              <button
                onClick={() => setActiveCategory(null)}
                className="w-full py-4 px-5 flex items-center text-left font-medium"
              >
                <ChevronLeft className="h-5 w-5 text-blue-500 mr-2" />
                {menuItems.find((item) => item.id === activeCategory)?.title}
              </button>
            </div>
            <div>
              {menuItems
                .find((item) => item.id === activeCategory)
                ?.items?.map((subItem) => (
                  <div key={subItem.id} className="border-b">
                    <Link href={`${subItem.slug}`}>
                      <button
                        onClick={() =>
                          console.log(`Selected: ${subItem.title}`)
                        }
                        className="w-full py-4 px-5 text-left"
                      >
                        {subItem.title}
                      </button>
                    </Link>
                  </div>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
