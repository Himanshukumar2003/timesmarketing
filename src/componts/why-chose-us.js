import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

const OilGasSection = () => {
  return (
    <div className="grid grid-cols-12 gap-6 px-6 py-12 bg-white">
      {/* Left Side - Image Section */}
      <div className="col-span-12 md:col-span-5 relative">
        <Image
          width={300}
          height={300}
          layout="responsive"
          src="/img/whychoose.jpg" // Replace with your actual image path
          alt="Industry Tour"
          className="w-full rounded-lg shadow-md h-full object-cover"
        />
        {/* You can uncomment the overlay section here if needed */}
      </div>

      {/* Right Side - Text Content */}
      <div className="col-span-12 md:col-span-7 flex flex-col justify-center space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 leading-snug">
            Engineering Excellence, Lifting Trust
          </h2>
        </div>

        <p className="text-gray-600">
          With over three decades of industrial legacy and a decade of crane
          manufacturing expertise under the TK Crane brand, we are dedicated to
          delivering superior lifting solutions across manufacturing,
          engineering, and construction sectors.
        </p>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <ul className="space-y-2">
            <li className="flex items-start gap-2 font-semibold text-sm">
              <span className="text-yellow-500">◆</span> Over 35 Years of
              Industrial Experience
            </li>
            <li className="flex items-start gap-2 font-semibold text-sm">
              <span className="text-yellow-500">◆</span> Advanced EOT Cranes
              Tailored to Your Needs
            </li>
            <li className="flex items-start gap-2 font-semibold text-sm">
              <span className="text-yellow-500">◆</span> Precision Engineering
              with Safety & Efficiency
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 font-semibold text-sm">
              <span className="text-yellow-500">◆</span> Trusted by Industry
              Leaders Across India
            </li>
            <li className="flex items-start gap-2 font-semibold text-sm">
              <span className="text-yellow-500">◆</span> Cutting-Edge Technology
              & Sustainable Solutions
            </li>
            <li className="flex items-start gap-2 font-semibold text-sm">
              <span className="text-yellow-500">◆</span> A Team Committed to
              Excellence & Innovation
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4 ">
          <Link href="/about" className="flex rounded-sm items-center btn">
            <span className="shadow-lg items-center bg-blue-700 hover:bg-blue-800 text-white font-bold px-4 py-2">
              <span className="flex-1 text-center mr-2">READ MORE</span>
            </span>
            <span className="bg-blue-500 shadow-lg py-2 px-2">
              <FiChevronRight className="text-white text-2xl font-bold" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OilGasSection;
