"use client";

import { useState } from "react";
import Image from "next/image";

export default function CertificateImageGallery() {
  const images = [
    "/img/thumb2.jpg",
    "/img/certificate1.jpg",
    "/img/certificate2.jpg",
  ];

  return (
    <div className="section mb-[60px] bg-gray-100" id="certificated">
      <div className="container mx-auto px-4 ">
        <h1 className="text-3xl font-bold text-center mb-12">Certificates</h1>
        <div className="mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
            {images.map((image, index) => (
              <div
                key={index}
                className="cursor-pointer flex justify-center items-center overflow-hidden rounded-lg border-2 border-dotted p-4 border-blue-500 bg-gray-100"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Certificate ${index + 1}`}
                  width={100}
                  height={100}
                  layout="responsive"
                  className="object-contain mix-blend-multiply hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
