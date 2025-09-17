"use client";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";
import Image from "next/image";
import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";
import { Breadcrumb } from "@/componts/breadcrumb";

export const images = [
  { id: 1, src: "/img/gallery/1.jpeg", alt: "Image 1" },
  { id: 10, src: "/img/gallery/10.jpeg", alt: "Image 10" },
  { id: 12, src: "/img/gallery/12.jpeg", alt: "Image 12" },
  { id: 15, src: "/img/gallery/15.jpeg", alt: "Image 15" },
  { id: 17, src: "/img/gallery/17.jpeg", alt: "Image 14" },
  { id: 18, src: "/img/gallery/18.jpeg", alt: "Image 15" },
  { id: 19, src: "/img/gallery/19.jpeg", alt: "Image 16" },
  { id: 20, src: "/img/gallery/20.jpeg", alt: "Image 17" },
];

export default function GridGallery() {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Thumbs: false,
      Toolbar: true,
    });

    return () => {
      Fancybox.unbind("[data-fancybox='gallery']");
    };
  }, []);

  return (
    <>
      <Navbar />
      <Breadcrumb
        title="Gallery"
        backgroundImage="/img/header1.webp"
        items={[{ label: "Gallery", href: "/", isCurrent: true }]}
      />
      <div className="section py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {images.map((image) => (
              <a
                key={image.id}
                data-fancybox="gallery"
                href={image.src}
                data-caption={image.alt}
                className="break-inside-avoid block"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={500}
                  height={700}
                  className="w-full h-auto rounded-lg shadow-md hover:opacity-80 transition-opacity duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
