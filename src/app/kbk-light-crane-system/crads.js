import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const craneCards = [
  {
    id: 1,
    title: "KBK Aluline",
    description: "Crane systems featuring aluminum",
    image: "/img/kbk1.webp",
    slug: "/kbk-aluline",
  },
  {
    id: 2,
    title: "KBK single-girder suspension cranes",
    description: "For production processes",
    image: "/img/kbk2.webp",
    slug: "/kbk-single-girder-suspension-cranes",
  },
  {
    id: 3,
    title: "KBK double-girder suspension cranes",
    description: "Large lifting heights and spans",
    image: "/img/kbk3.webp",
    slug: "/kbk-double-girder-suspension-cranes",
  },
  {
    id: 4,
    title: "KBK overhung and extending cranes",
    description: "Large outreach – compact in design",
    image: "/img/kbk4.webp",
    slug: "/kbk-overhung-and-extending-cranes",
  },
  {
    id: 5,
    title: "KBK cranes for manipulators",
    description: "Optimum ergonomics handling",
    image: "/img/kbk5.webp",
    slug: "/kbk-cranes-manipulators",
  },
  {
    id: 6,
    title: "KBK suspension monorails",
    description: "Solutions for linear transport applications",
    image: "/img/kbk6.webp",
    slug: "/kbk-suspension-monorails",
  },
  {
    id: 7,
    title: "KBK stacker cranes",
    description: "Specialized handling equipment for parts and fixtures",
    image: "/img/kbk7.webp",
    slug: "/kbk-stacker-cranes",
  },
  {
    id: 8,
    title: "KBK portal cranes",
    description: "Mobile workplace units",
    image: "/img/kbk8.webp",
    slug: "/kbk-portal-cranes",
  },
];

export default function KbkCard() {
  return (
    <main className="section">
      <div className="container mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center">
          Industrial Crane Solutions
        </h1>

        {/* Hover Effect Card Style 2 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {craneCards.map((card) => (
            <div
              key={card.id}
              className="group relative overflow-hidden rounded-md bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <Link href={`${card.slug}`}>
                <div className="absolute right-4 top-4 z-10 rounded-full bg-yellow-400 p-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ChevronRight size={18} className="text-white" />
                </div>
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    fill
                    className="object-cover"
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
