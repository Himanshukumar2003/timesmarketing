import { useRouter } from 'next/router';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

// Static cards data (can be imported from JSON or fetched)
const allCards = {
  'geared-motors': {
    title: "Our geared motors",
    description:
      "Our geared motors are configured from a modular range of motors and gearboxes that are designed for a perfect match...",
    cards: [
      { id: 1, title: "Offset geared motors", description: "Full drive performance, also in a small space", image: "/offset.jpg" },
      { id: 2, title: "Angular geared motors", description: "Compact drive solutions tailored to meet your needs", image: "/angular.jpg" },
      { id: 3, title: "Helical geared motors", description: "Rugged drive solutions tailored to meet your needs", image: "/helical.jpg" },
    ],
  },
  motors: {
    title: "Our motors",
    description:
      "Our motors perform a wide variety of industrial drive tasks. Reliably and effectively...",
    cards: [
      { id: 4, title: "Cylindrical-rotor motors", description: "Universal drive solutions", image: "/cylindrical.jpg" },
      { id: 5, title: "Conical-rotor brake motors", description: "Reliable drive units", image: "/conical.jpg" },
    ],
  },
  'wheel-range': {
    title: "Our wheel range",
    description:
      "Our wheels and wheel block systems are designed and manufactured as modular solutions...",
    cards: [
      { id: 6, title: "DRS wheel block system", description: "DRS and DRS-M wheel block systems", image: "/drs.jpg" },
      { id: 7, title: "LRS travel wheel system", description: "Solutions ready for installation for up to 240 m/min", image: "/lrs.jpg" },
      { id: 8, title: "RS wheel block system", description: "Solutions for tough applications", image: "/rs.jpg" },
      { id: 9, title: "DWS wheel sets", description: "For loads up to 60 tonnes", image: "/dws.jpg" },
    ],
  },
};

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;

  const data = allCards[slug];

  if (!data) return <p className="p-8 text-center">No data found for this section.</p>;

  return (
    <div className="px-6 py-12">
      <h2 className="text-center text-2xl font-bold text-gray-700">{data.title}</h2>
      <div className="mx-auto mt-2 mb-6 h-1 w-12 bg-yellow-400"></div>
      <p className="mx-auto max-w-3xl text-center text-gray-600 mb-10">{data.description}</p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.cards.map((card) => (
          <div
            key={card.id}
            className="group relative overflow-hidden rounded-md bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
          >
            <div className="absolute right-4 top-4 z-10 rounded-full bg-yellow-400 p-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <ChevronRight size={18} className="text-white" />
            </div>
            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute inset-0 bg-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
              <Image src={card.image || "/placeholder.svg"} alt={card.title} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <div className="my-2 h-1 w-12 bg-yellow-400"></div>
              <p className="mb-4 text-sm text-gray-600">{card.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-400">Learn more</span>
                <button className="flex h-8 w-8 items-center justify-center rounded-sm bg-gray-200 text-gray-600 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
