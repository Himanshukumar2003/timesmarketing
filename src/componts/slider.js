"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronRight } from "lucide-react";
import { FiChevronRight } from "react-icons/fi";

export default function SlickSlider() {
  const [mainSlider, setMainSlider] = useState(null);
  const [thumbnailSlider, setThumbnailSlider] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef(null);

  const slides = [
    {
      id: 1,
      image: "/img/header1.webp",
      title: "Demag DHR rope hoist",
      subtitle: "Innovative. Smart. Lifting to the next level.",
      buttonText: "READ MORE",
      label: "Lifting the future",
    },
    {
      id: 2,
      image: "/img/header1.webp",
      title: "Demag DMR modular hoist",
      subtitle: "Versatile. Powerful. Engineered for excellence.",
      buttonText: "DISCOVER",
      label: "Demag DMR hoist unit",
    },
    {
      id: 3,
      image: "/img/header1.webp",
      title: "Demag DWS crane system",
      subtitle: "Precise. Reliable. Maximum efficiency.",
      buttonText: "EXPLORE",
      label: "Demag DWS crane hoist",
    },
  ];

  useEffect(() => {
    setProgress(0);

    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }

    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (100 / 3000) * 16.67; // 60fps
      });
    }, 16.67);

    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [currentSlide]);

  const mainSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_, next) => setCurrentSlide(next),
  };

  const thumbnailSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    focusOnSelect: true,
    arrows: false,
    swipeToSlide: false,
  };

  return (
    <>
      <div className="relative w-full h-[100vh] overflow-hidden">
        {/* Main Slider */}
        <div className="h-full">
          <Slider
            {...mainSettings}
            ref={(slider) => setMainSlider(slider)}
            asNavFor={thumbnailSlider || undefined}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="relative  h-[100vh]">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="contaneir">
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute top-30 left-0 p-8 text-white z-10 max-w-md">
                    <h2 className="text-4xl font-bold">{slide.title}</h2>
                    <p className="text-xl mt-2">{slide.subtitle}</p>
                    <a className="flex rounded-sm mt-4 items-center  btn">
                      <span className="shadow-lg items-center  bg-blue-700 hover:bg-blue-800 text-white font-bold  px-4 py-2 ">
                        <span className="flex-1 text-center mr-2">
                          READ MORE
                        </span>
                      </span>
                      <span className="bg-blue-500  shadow-lg py-2 px-2  ">
                        <FiChevronRight className=" text-white  text-2xl  font-bold" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Progress Bar */}

        {/* Thumbnail Slider */}
        <div className="    hidden absolute bottom-10 w-[500px]  md:flex justify-center items-center  left-10 z-20  ">
          <div className="">
            <div className="flex justify-center items-center">
              <Slider
                {...thumbnailSettings}
                ref={(slider) => setThumbnailSlider(slider)}
                asNavFor={mainSlider || undefined}
              >
                {slides.map((slide, idx) => (
                  <div key={slide.id} className="cursor-pointer px-2    ">
                    <div className="relative ">
                      <div
                        className={`relative  overflow-hidden transition-all duration-300 transform  ${
                          currentSlide === idx
                            ? " border-t-2 border-blue-500"
                            : ""
                        }`}
                      >
                        <div className="transform h-full   w-full">
                          <Image
                            src={slide.image || "/placeholder.svg"}
                            alt={`Thumbnail ${slide.title}`}
                            width={150}
                            height={96}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>

                      <div className="text-white text-xs font-bold mt-4  text-center">
                        {slide.label}
                      </div>
                      {/* <div className="h-full bg-blue-500 transition-all duration-100 ease-linear" style={{ width: `${progress}%` }} /> */}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
