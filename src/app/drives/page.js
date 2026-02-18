import Container from "@mui/material/Container";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { Breadcrumb } from "@/componts/breadcrumb";
import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";

import { ChevronRightCircleIcon, ChevronRightIcon } from "lucide-react";

const Drives = () => {
  const drive = [
    {
      id: 1,
      title: "Geared motors",
      description: "The perfect combination of tried and tested components",
      image: "/img/geared-motors.png",
      slug: "geared-motors",
    },
    {
      id: 2,
      title: "Motors",
      description: "Reliable drive units",
      image: "/img/motors.png",
      slug: "motors",
    },
    {
      id: 3,
      title: "Wheel range",
      description: "The right wheel for every application",
      image: "/img/Wheels.webp",
      slug: "wheel-range",
    },
  ];

  return (
    <>
      <Navbar />

      <Breadcrumb
        title="Drives"
        backgroundImage="/img/header1.webp"
        items={[{ label: "Drives", href: "/", isCurrent: true }]}
      />

      <div className="section py-10">
        <Container maxWidth="xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {drive.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-md bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <Link href={`/drivess/${item.slug}`}>
                  <div className="absolute right-4 top-4 z-10 rounded-full bg-yellow-400 p-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ChevronRightIcon size={18} className="text-white" />
                  </div>

                  <div className="relative h-48 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>

                    <div className="my-2 h-1 w-12 bg-yellow-400"></div>

                    <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-400">
                        Learn more
                      </span>

                      <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-gray-200 text-gray-600 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                        <ChevronRightCircleIcon size={18} />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Drives;
