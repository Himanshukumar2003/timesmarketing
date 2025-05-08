import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function KbkCard() {
  const craneCards = [
    {
      id: 1,
      title: "DC-Pro chain hoist",
      description: "The industry standard – including all equipment options",
      image: "/img/chain-hoist/chain-hoist1.webp",
    },
    {
      id: 2,
      title: "DCS-Pro chain hoist",
      description: "Smooth positioning and fast lifting speeds",
      image: "/img/chain-hoist/chain-hoist2.webp",
    },
    {
      id: 3,
      title: "DCM-Pro Manulift",
      description: "Ergonomic single-handed load handling",
      image: "/img/chain-hoist/chian-hoist-3.webp",
    },
    {
      id: 4,
      title: " DC-Com chain hoist",
      description: "Reliability in daily operation",
      image: "/img/chain-hoist/chain-hoist4.webp",
    },
    {
      id: 5,
      title: "DCMS-Pro Manulift",
      description: "Exact load handling, precise positioning.",
      image: "/img/chain-hoist/chain-hoist5.webp",
    },
    {
      id: 6,
      title: " DCBS chain hoist",
      description: "Based on our DC range, DCBS chain hoists include a balancer function that allows loads be guided and precisely positioned with ease.",
      image: "/img/chain-hoist/chain-hoist-6.webp",
    },
    {
      id: 7,
      title: "DC-II chain hoist",
      description: "The industry benchmark. Second generation.",
      image: "/img/chain-hoist/chain-hoist7.webp",
    },
  ]

  return (
    <main className="section">
      <div className="container mx-auto">
        <h1 className="mb-8 text-3xl font-bold">DC chain hoists</h1>

      
     

        {/* Hover Effect Card Style 2 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {craneCards.map((card) => (
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

   <KbkCardTwo></KbkCardTwo>
      </div>
    </main>
  )
}



function generateSlug(title) {
  return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
}

export function KbkCardTwo() {
  const hoistProductSections = [
    {
      heading: "DC chain hoists - special solutions",
      cards: [
        {
          image: "/img/chain-hoist/chain-hoist-8.webp",
          title: "DC-Wind chain hoist",
          description: "A great hoist for the maintenance of wind turbines"
        },
        {
          image: "/img/chain-hoist/chain-hoist-9.webp",
          title: "LDC-D & KLDC-D Double chain hoists",
          description: "Demag double chain hoist: Two mechanically synchronised chain lead-offs for safely handling bulky loads"
        },
        {
          image: "/img/chain-hoist/chain-hoist-10.webp",
          title: "Chain hoist with KDC low-headroom travelling hoist",
          description: "Demag KDC low-headroom travelling hoist: Optimum utilization of space with particularly large C dimension"
        },
        {
          image: "/img/chain-hoist/chain-hoist-11.webp",
          title: "KLDC traveling hoist for big bags",
          description: "Low-headroom traveling hoist with extended hook lead-off for big bags"
        },
        {
          image: "/img/chain-hoist/chain-hoist-12.webp",
          title: "LDC-Q quadro chain hoist",
          description: "Mechanically synchronised"
        }
      ]
    },
    {
      heading: "DC chain hoists - trolleys",
      cards: [
        {
          image: "/img/chain-hoist/chain-hoist-13.webp",
          title: "Trolleys for DC chain hoists",
          description: "Trolleys for DC chain hoists"
        },
        {
          image: "/img/chain-hoist/chain-hoist-14.webp",
          title: "DDC articulated trolley",
          description: "DDC articulated monorail hoist for travel on curved track"
        }
      ]
    }
  ];

  return (
    <main className="section">
      <div className="container mx-auto">
        {hoistProductSections.map((section, idx) => (
          <div key={idx} className="mb-12">
            <h2 className="mb-8 text-3xl font-bold">{section.heading}</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {section.cards.map((card, index) => {
                const slug = generateSlug(card.title);
                return (
                  <div
                    key={slug + index}
                    className="group relative overflow-hidden rounded-md bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="absolute right-4 top-4 z-10 rounded-full bg-yellow-400 p-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <ChevronRight size={18} className="text-white" />
                    </div>
                    <div className="relative h-48 w-full overflow-hidden">
                      <div className="absolute inset-0 bg-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
                      <Image src={card.image} alt={card.title} fill className="object-cover" />
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
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

