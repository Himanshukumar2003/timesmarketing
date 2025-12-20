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
  { id: 21, src: "/img/gallery/21.jpeg", alt: "Image 21" },
  { id: 22, src: "/img/gallery/22.jpeg", alt: "Image 22" },
  { id: 23, src: "/img/gallery/23.jpeg", alt: "Image 23" },
  { id: 24, src: "/img/gallery/24.jpeg", alt: "Image 24" },
  { id: 25, src: "/img/gallery/25.jpeg", alt: "Image 25" },
  { id: 26, src: "/img/gallery/26.jpeg", alt: "Image 26" },
  { id: 27, src: "/img/gallery/27.jpeg", alt: "Image 27" },
  { id: 28, src: "/img/gallery/28.jpeg", alt: "Image 28" },
  { id: 29, src: "/img/gallery/29.jpeg", alt: "Image 29" },
  { id: 30, src: "/img/gallery/30.jpeg", alt: "Image 30" },
  { id: 31, src: "/img/gallery/31.jpeg", alt: "Image 31" },
  // { id: 32, src: "/img/gallery/32.jpeg", alt: "Image 32" },
  { id: 33, src: "/img/gallery/33.jpeg", alt: "Image 33" },
  { id: 34, src: "/img/gallery/34.jpeg", alt: "Image 34" },
  { id: 35, src: "/img/gallery/35.jpeg", alt: "Image 35" },
  { id: 36, src: "/img/gallery/36.jpeg", alt: "Image 36" },
  { id: 37, src: "/img/gallery/37.jpeg", alt: "Image 37" },
  { id: 38, src: "/img/gallery/38.jpeg", alt: "Image 38" },
  { id: 40, src: "/img/gallery/40.jpeg", alt: "Image 40" },
  { id: 41, src: "/img/gallery/41.jpeg", alt: "Image 41" },
  { id: 42, src: "/img/gallery/42.jpeg", alt: "Image 42" },
  { id: 43, src: "/img/gallery/43.jpeg", alt: "Image 43" },
  { id: 44, src: "/img/gallery/44.jpeg", alt: "Image 44" },
  { id: 45, src: "/img/gallery/45.jpeg", alt: "Image 45" },

  { id: 47, src: "/img/gallery/47.jpeg", alt: "Image 47" },
  { id: 48, src: "/img/gallery/48.jpeg", alt: "Image 48" },
  { id: 49, src: "/img/gallery/49.jpeg", alt: "Image 49" },
  { id: 50, src: "/img/gallery/50.jpeg", alt: "Image 50" },
  { id: 51, src: "/img/gallery/51.jpeg", alt: "Image 51" },
  { id: 52, src: "/img/gallery/52.jpeg", alt: "Image 52" },
  { id: 53, src: "/img/gallery/53.jpeg", alt: "Image 53" },
  { id: 54, src: "/img/gallery/54.jpeg", alt: "Image 54" },
  { id: 55, src: "/img/gallery/55.jpeg", alt: "Image 55" },
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
