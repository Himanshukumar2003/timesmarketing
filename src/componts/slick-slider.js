"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="custom-arrow custom-prev"
      style={{
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        zIndex: 2,
        background: "#000",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <FiChevronLeft color="#fff" size={24} />
    </div>
  );
};

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="custom-arrow custom-next"
      style={{
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        zIndex: 2,
        background: "#000",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <FiChevronRight color="#fff" size={24} />
    </div>
  );
};

const SlickCarousel = ({ data = [] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative">
      <Slider {...settings} className=" md:max-h-auto">
        {data.map((item, index) => (
          <div key={index} className="px-2">
            <div className="relative group mx-auto">
              <Image
                src={item.image || "/placeholder.svg"}
                width={2000}
                height={2000}
                alt={item.title}
                className="rounded-xl min-h-[300px] lg:min-h-[400px] object-cover w-full"
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Hide default slick arrows just in case */}
      <style jsx global>{`
        .slick-prev,
        .slick-next {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default SlickCarousel;
