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
                Subscribe to our newsletter to get updates to our latest
                collections
              </h3>
              <p className="text-sm mb-4">
                Get 20% off on your first order just by subscribing to our
                newsletter.
              </p>

              <form onSubmit={handleSubscribe} className="flex gap-2 mb-2">
                <div className="relative flex-grow">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white text-gray-900 rounded-md pl-10 pr-4 py-2 w-full text-sm"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white text-[#E3BC17] px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100"
                >
                  Subscribe
                </button>
              </form>

              <p className="text-xs">
                You can be able to unsubscribe at any time.
                <Link href="/privacy-policy" className="underline ml-1">
                  Read our privacy policy here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className=" bg-[#091B3C] shadow-2xl pt-[120px]">
        <div className="max-w-6xl  mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            <div className="md:col-span-3">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/img/logo.png"
                  alt=""
                  width={300}
                  height={300}
                  className="    object-contain"
                ></Image>
              </div>
              <p className="text-white text-sm    font-semibold mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit et
                aliquam, purus sit amet luctus venenatis.
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
                    href="#"
                    className="text-white font-semibold hover:text-blue-500 text-sm"
                  >
                    Eot Cranes
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white font-semibold hover:text-blue-500 text-sm"
                  >
                    Underslung Crane
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white font-semibold hover:text-blue-500 text-sm"
                  >
                    KBK
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white font-semibold hover:text-blue-500 text-sm"
                  >
                    HoIst
                  </Link>
                </li>
                <li>
                  {/* <Link
                    href="#"
                    className="text-white font-semibold hover:text-blue-500 text-sm"
                  >
                   
                  </Link> */}
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="md:col-span-1">
              <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-white" />
                  <span className="text-white font-semibold text-sm">
                    0129-4050169
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-white" />
                  <span className="text-white font-semibold text-sm">
                    011-29942370
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-white" />
                  <span className="text-white  font-semibold text-sm">
                    info@timesmarketing.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm mb-4    font-semibold md:mb-0">
              © Copyright by Colorlib. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
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
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
