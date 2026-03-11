"use client";

import { useEffect, useState } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { baseUrl } from "@/lib/utils";

export default function Footer() {
  const [cities, setCities] = useState([]);

  // Fetch Cities
  const getAllCities = async () => {
    const { data } = await axios.get(`${baseUrl}/city-blogs`);
    return data.data.products;
  };

  useEffect(() => {
    async function fetchCities() {
      const res = await getAllCities();
      setCities(res);
    }

    fetchCities();
  }, []);

  return (
    <>
      {/* CTA Section */}
      <div>
        <div className="bg-[#E3BC17] rounded-lg mx-auto max-w-3xl p-8 shadow-lg mb-[-110px] z-20 relative">
          <div className="grid grid-cols-12 gap-4 items-center">
            <div className="text-white col-span-12 flex flex-col items-center">
              <h3 className="text-3xl text-center font-semibold mb-2">
                Need a Custom Lifting Solution? <br /> Let’s Talk!
              </h3>

              <p className="text-sm mb-4 text-center">
                Looking for a reliable partner for your next industrial project?
              </p>

              <ul className="list-disc list-inside text-center text-white mb-4">
                <li>Connect with Us for Expert Consultation</li>
                <li>Pan-India Service | Customized Solutions</li>
              </ul>

              <Link
                href="/contact"
                className="bg-white mt-4 text-[#E3BC17] px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#091B3C] shadow-2xl pt-[120px]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <Image
                src="/img/logo.png"
                alt="logo"
                width={300}
                height={100}
                className="bg-white p-2 rounded-sm object-contain mb-4"
              />

              <p className="text-white text-sm font-semibold mb-4">
                Delivering reliable industrial solutions since 1988. Authorized
                Distributor for Demag Cranes & Components.
              </p>

              <div className="flex gap-4">
                <Link href="#" className="text-white hover:text-blue-500">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="text-white hover:text-blue-500">
                  <Twitter size={20} />
                </Link>
                <Link href="#" className="text-white hover:text-blue-500">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="text-white hover:text-blue-500">
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white text-lg">
                Quick Links
              </h4>

              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-white hover:text-blue-500 text-sm"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className="text-white hover:text-blue-500 text-sm"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/gallery"
                    className="text-white hover:text-blue-500 text-sm"
                  >
                    Gallery
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="text-white hover:text-blue-500 text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-lg">
                Our Products
              </h4>

              <ul className="space-y-2">
                <li>
                  <Link
                    href="/eot-cranes/single-girder-crane"
                    className="text-white hover:text-blue-500 text-sm"
                  >
                    EOT Cranes
                  </Link>
                </li>

                <li>
                  <Link
                    href="/eot-cranes/underslung-crane"
                    className="text-white hover:text-blue-500 text-sm"
                  >
                    Underslung Crane
                  </Link>
                </li>

                <li>
                  <Link
                    href="/kbk-light-crane-system"
                    className="text-white hover:text-blue-500 text-sm"
                  >
                    KBK System
                  </Link>
                </li>

                <li>
                  <Link
                    href="/chain-hoists"
                    className="text-white hover:text-blue-500 text-sm"
                  >
                    Chain Hoists
                  </Link>
                </li>

                <li>
                  <Link
                    href="/rope-hoists"
                    className="text-white hover:text-blue-500 text-sm"
                  >
                    Rope Hoists
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-white text-lg">
                Contact Us
              </h4>

              <div className="space-y-2 text-white text-sm">
                <p>
                  Sales:
                  <span className="font-semibold"> +91 9810040296</span>
                </p>

                <p>
                  Services:
                  <span className="font-semibold"> +91 98109 01759</span>
                </p>

                <p>
                  Inquiry:
                  <span className="font-semibold">
                    {" "}
                    gauravmehta@timesmarketing.com
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Cities Section */}
          <div className="mt-12">
            <div className="border-t  border-gray-700 pt-6 mt-10">
              <div className="flex flex-wrap justify-center gap-6 gap-y-3">
                {cities.map(function (item) {
                  return (
                    <Link
                      key={item.id}
                      href={`/${item.slug}`}
                      className="text-gray-300 text-sm hover:text-white transition"
                    >
                      {item.city || item.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Footer */}

          <div className="border-t mt-10 pt-6 text-center">
            <p className="text-white text-sm font-semibold">
              © {new Date().getFullYear()} Times Industrial Engineers Private
              Limited. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
