"use client";

import { use } from "react"; // Import React.use to handle promise unwrapping
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Container } from "@mui/system";
import Navbar from "@/componts/nav";
import { Breadcrumb } from "@/componts/breadcrumb";
import Footer from "@/componts/footer";

const allCards = [
  {
    title: "Geared motors",
    slug: "geared-motors",
    description:
      "Our geared motors are configured from a modular range of motors and gearboxes that are designed for a perfect match...",
    cards: [
      {
        id: 1,
        title: "Offset geared motors",
        description: "Full drive performance, also in a small space",
        image: "/img/sraes/geared-motors.webp",
      },
      {
        id: 2,
        title: "Angular geared motors",
        description: "Compact drive solutions tailored to meet your needs",
        image: "/img/sraes/geared-motors1.webp",
      },
      {
        id: 3,
        title: "Helical geared motors",
        description: "Rugged drive solutions tailored to meet your needs",
        image: "/img/sraes/geared-motors2.webp",
      },
    ],
  },
  {
    title: "motors",
    slug: "motors",
    description:
      "Our motors perform a wide variety of industrial drive tasks. Reliably and effectively. For example, our type Z cylindrical-rotor brake motors – also as brake motors – offer high drive efficiency – also in continuous duty. They are specially designed to match our gearbox range and provide for simple project engineering. Our conical-rotor brake motors with outputs of up to 55 kW are used for stopping-and-starting drives or for direct line-fed travel applications. Thanks to their unique brake principle, they are the first choice wherever demanding requirements have to be met by the brake.",
    cards: [
      {
        id: 4,
        title: "Cylindrical-rotor motors",
        description: "Universal drive solutions",
        image: "/img/sraes/moter2.webp",
      },
      {
        id: 5,
        title: "Conical-rotor brake motors",
        description: "Reliable drive units",
        image: "/img/sraes/moter.webp",
      },
    ],
  },
  {
    title: " wheel range",
    slug: "wheel-range", // ✅ Fixed typo here
    description:
      "Our wheels and wheel block systems are designed and manufactured as modular solutions...",
    cards: [
      {
        id: 6,
        title: "DRS wheel block system",
        description: "DRS and DRS-M wheel block systems",
        image: "/img/sraes/wheel-range1.webp",
      },
      {
        id: 7,
        title: "LRS travel wheel system",
        description: "Solutions ready for installation for up to 240 m/min",
        image: "/img/sraes/wheel-range2.webp",
      },
      {
        id: 8,
        title: "RS wheel block system",
        description: "Solutions for tough applications",
        image: "/img/sraes/wheel-range3.webp",
      },
      {
        id: 9,
        title: "DWS wheel sets",
        description: "For loads up to 60 tonnes",
        image: "/img/sraes/wheel-range4.webp",
      },
    ],
  },
];

export default function ProductPage({ params }) {
  const { slug } = use(params); // Unwrap the `params` with `React.use()`

  const selectedItem = allCards.find((item) => item.slug === slug);

  if (!selectedItem) {
    return <p className="text-center py-10 text-red-600">Item not found</p>;
  }

  return (
    <><Navbar></Navbar>
          <Breadcrumb
            title= {selectedItem.title}
            backgroundImage="/img/header1.webp"
            items={[
              { label: `${selectedItem.title}`, href: "/", isCurrent: true },
            ]}
          />
    <div className="section">
      <Container maxWidth="xl">
        <h2 className="text-center text-5xl font-bold text-gray-700">
          {selectedItem.title}
        </h2>
        <div className="mx-auto mt-2 mb-6 h-1 w-12 bg-yellow-400"></div>
        <p className="mx-auto max-w-3xl text-center text-gray-600 mb-10">
          {selectedItem.description}
        </p>
      </Container>

      <div className="section bg-gray-100">
        <Container maxWidth="lg">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {selectedItem.cards.map((card) => (
              <div
                key={card.id}
                className="group relative overflow-hidden rounded-md bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <div className="absolute right-4 top-4 z-10 rounded-full bg-yellow-400 p-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ChevronRight size={18} className="text-white" />
                </div>
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    fill
                    className="object-cover w-100"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <div className="my-2 h-1 w-12 bg-yellow-400"></div>
                  <p className="mb-4 text-sm text-gray-600">
                    {card.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-400">
                      Learn more
                    </span>
                    <button className="flex h-8 w-8 items-center justify-center rounded-sm bg-gray-200 text-gray-600 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}
