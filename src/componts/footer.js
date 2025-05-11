"use client";

import { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  return (
    <>
      <div>
        <div className="bg-[#E3BC17]  rounded-lg mx-auto max-w-3xl p-8  shadow-lg mb-[-110px] z-20  relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="flex justify-center md:justify-start items-end ">
              <Image
                src="/img/footer-img.png"
                alt="Blue vacuum cleaner"
                width={200}
                height={200}
                className="object-contain relative md:absolute bottom-0"
              />
            </div>
            <div className="text-white">
              <h3 className="text-xl font-semibold mb-2">
                Need a Custom Lifting Solution? <br /> Let&#39; s Talk!
              </h3>
              <p className="text-sm mb-4">
                Looking for a reliable partner for your next industrial or
                construction project?
              </p>
              <ul className="   list-disc white-bullets list-inside  text-white mb-4">
                <li> Connect with Us for Expert Consultation</li>
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
      <footer className=" bg-[#091B3C] shadow-2xl pt-[120px]">
        <div className="max-w-6xl  mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/img/logo.png"
                  alt=""
                  width={300}
                  height={300}
                  className=" bg-white p-2   rounded-sm   object-contain"
                ></Image>
              </div>
              <p className="text-white text-sm    font-semibold mb-4">
                Delivering reliable industrial solutions since 1988. Authorized
                Distributor for Demag Cranes & Components, and trusted makers of
                TK Crane.
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
                <Link href="#" className="text-white hover:text-blue-500">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <span className="text-lg font-bold">G</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-white font-semibold hover:text-blue-500 text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white font-semibold hover:text-blue-500 text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white font-semibold hover:text-blue-500 text-sm"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white font-semibold hover:text-blue-500 text-sm"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Our Products</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/eot-cranes/single-girder-crane"
                    className="text-white font-semibold hover:text-blue-500 text-sm"
                  >
                    Eot Cranes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/underslung-crane"
                    className="text-white font-semibold hover:text-blue-500 text-sm"
                  >
                    Underslung Crane
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kbk-light-crane-system"
                    className="text-white font-semibold hover:text-blue-500 text-sm"
                  >
                    KBK
                  </Link>
                </li>
                <li>
                  <Link
                    href="/chain-hoists"
                    className="text-white font-semibold hover:text-blue-500 text-sm"
                  >
                    Chain hoists
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rope-hoists"
                    className="text-white font-semibold hover:text-blue-500 text-sm"
                  >
                    Rope Hoists
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="md:col-span-1">
              <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
              <div className="space-y-2">
                <a
                  href="tel:"
                  target="_blank"
                  className="flex text-white  gap-2"
                >
                  Sales:
                  <span className="text-white font-semibold text-sm">
                    +91 9810040296
                  </span>
                </a>
                <div className="flex text-white  font-semibold gap-2">
                  Services:
                  <span className="text-white font-semibold text-sm">
                    +91 98109 01759
                  </span>
                </div>
                <div className="flex text-white  font-semibold items-center gap-2">
                  Inquiry:
                  <span className="text-white  font-semibold text-sm">
                    gauravmehta@timeskrance.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-center items-center">
            <p className="text-white text-sm mb-4  text-center   font-semibold md:mb-0">
              &copy; 2025 Copyright Times Industrial Engineers Private Limited.
              All rights reserved.
            </p>
            {/* <div className="flex gap-4 text-sm">
              <Link
                href="#"
                className="text-white font-semibold  hover:text-blue-500"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-white font-semibold hover:text-blue-500"
              >
                Terms of Use
              </Link>
              <Link
                href="#"
                className="text-white font-semibold hover:text-blue-500"
              >
                Legal
              </Link>
              <Link
                href="#"
                className="text-white font-semibold hover:text-blue-500"
              >
                Site Map
              </Link>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
}
