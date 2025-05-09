"use client";

import { useState } from "react";
import Image from "next/image";

export default function CertificateImageGallery() {
  const images = [
    "/img/thumb1.jpg",
    "/img/thumb2.jpg",
    "/img/certificate1.jpg",
    "/img/certificate2.jpg",
  ];

  return (
    <div className="section mb-[60px] bg-gray-100">
      <div className="container mx-auto px-4 ">
        <h1 className="text-3xl font-bold text-center mb-12">Certificated</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer  flex justify-center items-center  overflow-hidden object-contain rounded-lg  border-2 border-dotted p-4 border-blue-500 bg-gray-100"
            >
              <Image
                height={100}
                width={100}
                layout="responsive"
                src={image || "/placeholder.svg"}
                alt={`Certificate ${index + 1}`}
                className="w-full h-100  mix-blend-multiply   object-contain hover:scale-110 transition-transform duration-800"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
