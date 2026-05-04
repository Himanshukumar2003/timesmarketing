"use client";

import { useEffect, useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { baseUrl } from "@/lib/utils";
import CityDropdown from "./city-dropdown";

export default function Footer() {
  const [cities, setCities] = useState([]);

  // Fetch Cities
  const getAllCities = async () => {
    try {
      const res = await axios.get(`${baseUrl}/city-blogs`);
      return res?.data?.data?.products || [];
    } catch (error) {
      console.error("City API Error:", error);
      return [];
    }
  };

  useEffect(() => {
    async function fetchCities() {
      const data = await getAllCities();
      setCities(data);
    }
    fetchCities();
  }, []);

  // ✅ Group by city
  const groupedCities = Object.fromEntries(
    Object.entries(
      cities.reduce((acc, item) => {
        const city = item.city || "Other";
        if (!acc[city]) acc[city] = [];
        acc[city].push(item);
        return acc;
      }, {})
    ).sort()
  );

  return (
    <>
      {/* CTA */}
      <div>
        <div className="bg-[#E3BC17] rounded-lg mx-auto max-w-3xl p-8 shadow-lg mb-[-110px] relative z-20">
          <div className="text-white text-center">
            <h3 className="text-3xl font-semibold mb-2">
              Need a Custom Lifting Solution? <br /> Let’s Talk!
            </h3>
            <p className="text-sm mb-4">
              Looking for a reliable partner for your next industrial project?
            </p>

            <ul className="list-disc pl-6 text-left inline-block">
              <li>Expert Consultation</li>
              <li>Pan-India Service</li>
            </ul>

            <div>
              <Link
                href="/contact"
                className="bg-white mt-4 inline-block text-[#E3BC17] px-4 py-2 rounded-md text-sm font-medium"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#091B3C] pt-[120px] text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo */}
            <div className="md:col-span-2">
              <Image
                src="/img/logo.png"
                alt="logo"
                width={300}
                height={100}
                className="bg-white p-2 rounded mb-4"
              />
              <p className="text-sm mb-4">
                Delivering reliable industrial solutions since 1988.
              </p>

              <div className="flex gap-4">
                <Facebook />
                <Twitter />
                <Instagram />
                <Linkedin />
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/eot-cranes">EOT Cranes</Link>
                </li>
                <li>
                  <Link href="/kbk-light-crane-system">KBK System</Link>
                </li>
                <li>
                  <Link href="/chain-hoists">Chain Hoists</Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm">+91 9810040296</p>
              <p className="text-sm">+91 9810901759</p>
              <p className="text-sm">gauravmehta@timesmarketing.com</p>
            </div>
          </div>

          {/* ✅ Cities Dropdown Section */}
          {Object.keys(groupedCities).length > 0 && (
            <div className="border-t border-b border-gray-700 py-6 my-12">
              <p className="font-semibold mb-4">All Locations</p>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {Object.entries(groupedCities).map(([city, items]) => (
                  <CityDropdown key={city} city={city} items={items} />
                ))}
              </div>
            </div>
          )}

          {/* Bottom */}
          <div className="text-center text-sm">
            © {new Date().getFullYear()} Times Industrial Engineers Pvt Ltd
          </div>
        </div>
      </footer>
    </>
  );
}
