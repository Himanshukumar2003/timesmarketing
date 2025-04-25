import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const OilGasSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-12 bg-white">
      {/* Left Side - Image Section */}
      <div className="relative">
        <img
          src="your-image-path.jpg" // Replace with your actual image path
          alt="Industry Tour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-6">
          <div className="mb-6">
            <button className="w-20 h-20 rounded-full bg-white/30 text-white text-5xl flex items-center justify-center hover:bg-white/50 transition">
              <FaPlayCircle fontSize="inherit" />
            </button>
          </div>
          <h2 className="text-white text-2xl font-bold">Watch Our Industry Tour</h2>
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="flex flex-col justify-center space-y-6">
        <div>
          <p className="text-sm tracking-widest uppercase text-gray-500 mb-2">
            Get to know us
          </p>
          <h2 className="text-3xl font-bold text-gray-800 leading-snug">
            Achieving Outcomes With Trust And Oil Gas Reliability
          </h2>
        </div>

        <p className="text-gray-600">
          Tincidunt ornare massa eget egestas purus viverra accumsan in nisl.
          Varius quam quisque id diam vel quam. Cras pulvinar mattis nunc sed blandit.
        </p>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">◆</span> Ullamcorper nulla litora donec
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">◆</span> Rhoncus urna neque viverra
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">◆</span> Maecenas pharetra convallis
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">◆</span> Purus faucibus ornare suspendisse
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">◆</span> Eros in cursus turpis massa tincidunt
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-500">◆</span> Sagittis purus sit amet volutpat
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded shadow">
            More Info
          </button>
          <div>
            <p className="text-sm text-gray-600">Call 24 hrs / 7 Days</p>
            <p className="font-bold text-gray-800">+00 123 456 789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OilGasSection;
