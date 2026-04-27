"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function CityDropdown({ city, items }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // ✅ Close only when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
        className="flex justify-between cursor-pointer border-b border-gray-600 pb-2 text-sm text-gray-300 hover:text-white"
      >
        <span>{city}</span>
        <span className={`transition ${open ? "rotate-45" : ""}`}>+</span>
      </div>

      {/* ✅ Dropdown */}
      {open && (
        <div className="absolute top-full mt-2 w-64 bg-[#0f2557] border border-gray-600 rounded shadow-lg max-h-64 overflow-y-auto z-50">
          {/* Heading */}
          <div className="px-4 py-2 border-b font-semibold text-white">
            {city}
          </div>

          {/* Items */}
          {items.map((item) => (
            <Link
              key={item.id}
              href={`/${item.slug}`}
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
