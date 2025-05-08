import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function KbkCard() {
  const craneCards = [
    {
      id: 1,
      title: "DHR rope hoist",
      description: "Innovative. Smart. Lifting to the next level.",
      image: "/img/chain-host-1.webp",
      slug: "/dhr-rope-hoist",
    },
    {
      id: 2,
      title: "DVR rope hoist",
      description:
        "The DVR rope hoist offers customisable solutions for the various requirements of crane and lifting technology.",
      image: "/img/chain-host-3.webp",
      slug: "/dvr-rope-hoist",
    },
    {
      id: 3,
      title: "DH hoist units",
      description:
        "Demag DH. The hoist unit: Beyond classic crane applications",
      image: "/img/chian-host-2.webp",
      slug: "/dh-hoist-units",
    },
  ];

  return (
    <main className="section">
      <div className="container mx-auto">
        <h1 className="mb-8 text-3xl font-bold">Industrial Crane Solutions</h1>

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
