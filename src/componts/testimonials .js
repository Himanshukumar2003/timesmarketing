"use client";

import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const sliderRef = useRef(null);

  const testimonials = [
    {
      name: "THOMAS FERNANDO",
      role: "Future Theme",
      image: "/img/footer-img.png",
      quote:
        "How all this mistaken of denouncing pleasure and praising pain was born and will give you a complete expound.",
    },
    {
      name: "WILLIAM SUSANTE",
      role: "ECo System",
      image: "/img/footer-img.png",
      quote:
        "Explain to you how all this mistaken ideas of denouncing and praising pain was born will give you a complete.",
    },
    {
      name: "JOHN MECKENCY",
      role: "Villo Steels",
      image: "/img/footer-img.png",
      quote:
        "Undertakes laborious physical exercise too to obtain some advantages from it but to enjoy a pleasure workers.",
    },
    {
      name: "ELENA SMITH",
      role: "Tech Corp",
      image: "/img/footer-img.png",
      quote:
        "Working with this team was a delight! Their attention to detail and professionalism was unmatched.",
    },
    {
      name: "DAVID RICHARDS",
      role: "Greenwood Inc.",
      image: "/img/footer-img.png",
      quote:
        "Absolutely fantastic experience from start to finish. Highly recommended!",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="section ">
    <div className="relative w-full px-4 ">
      <div className="text-center mb-10">
        <p className="text-sm text-gray-500">Testimonials</p>
        <h2 className="text-3xl font-bold text-gray-800">WHAT CUSTOMERS SAID</h2>
      </div>

      <div className="relative">
        {/* Slider */}
        <Slider ref={sliderRef} {...sliderSettings}>
          {testimonials.map((t, i) => (
            <div key={i} className="p-4 ">
              <div className="rounded-lg shadow text-center h-full border-2 border-yellow-500 overflow-hidden group hover:border-blue-900">
              <div className="bg-gray-200 p-4 ">
                <p className="mb-4 text-sm text-gray-700">{t.quote}</p>
                <div className="flex justify-center items-center mb-[-50px]" >
                <div className="h-[70px] bg-yellow-500  overflow-hidden p-2  object-cover w-[70px] rounded-full flex justify-center items-center group-hover:bg-blue-900 ">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={60}
                  height={60}
                  className="object-cover overflow-hidden"
                  
                /></div>
                </div></div>
                <div className="p-4 bg-white pt-8 ">
                <h4 className="font-bold mt-4 text-gray-800">{t.name}</h4>
                <p className="text-blue-600 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Arrows */}
        <button
          className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
          onClick={() => sliderRef.current?.slickPrev()}
        >
          <FiChevronLeft size={20} />
        </button>
        <button
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
          onClick={() => sliderRef.current?.slickNext()}
        >
          <FiChevronRight size={20} />
        </button>
      </div>
    </div>
    </div>
  );
}
