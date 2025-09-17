"use client";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";
import { Breadcrumb } from "@/componts/breadcrumb";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "@mui/material/Container";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
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
  const sliderRef = useRef(null);

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Thumbs: false,
      Toolbar: true,
    });
    return () => {
      Fancybox.unbind("[data-fancybox='gallery']");
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false, // We'll use custom arrows
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <div className="section relative py-12">
        <Container maxWidth="xl" className="relative">
          <h2 className="text-3xl md:text-4xl text-center font-bold text-slate-800 leading-tight mb-10">
            Our Photo Gallery
          </h2>

          {/* Slider with ref */}
          <Slider ref={sliderRef} {...settings}>
            {images.map((image) => (
              <div key={image.id} className="px-2">
                <a
                  data-fancybox="gallery"
                  href={image.src}
                  data-caption={image.alt}
                  className="block"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={700}
                    className="w-full h-[350px] object-cover rounded-lg shadow-md hover:opacity-80 transition-opacity duration-300"
                  />
                </a>
              </div>
            ))}
          </Slider>

          {/* Custom Arrows */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <FiChevronRight size={20} />
          </button>
        </Container>
      </div>
    </>
  );
}
