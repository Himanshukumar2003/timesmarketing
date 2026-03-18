import { use } from "react"; // Import React.use to handle promise unwrapping
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Container } from "@mui/system";
import Navbar from "@/componts/nav";
import { Breadcrumb } from "@/componts/breadcrumb";
import Footer from "@/componts/footer";
import Link from "next/link";

const allCards = [
  {
    title: "Geared motors",
    slug: "geared-motors",
    metadata: {
      title: "Industrial Geared Motors in India | Timeskrane",
      description:
        "Explore Industrial Geared Motors in India with Timeskrane, designed for smooth power transmission, reliable performance, and efficient industrial drive solutions.",
      keywords: [
        "Parallel Shaft Geared Motors",
        "AC Geared Motors",
        "Planetary Geared Motors",
        "motor with gearbox",
        "geared motor price",
        "geared electric motor",
        "electric geared motor",
        "gears for motor",
      ],
      alternates: {
        canonical: "https://www.timeskrane.com/drives/geared-motors",
      },
      openGraph: {
        title: "Industrial Geared Motors in India | Timeskrane",
        description:
          "Explore Industrial Geared Motors in India with Timeskrane, designed for smooth power transmission, reliable performance, and efficient industrial drive solutions.",
        url: "https://www.timeskrane.com/drives/geared-motors",
        siteName: "Timeskrane",
        locale: "en_IN",
        type: "website",
      },
    },
    description: [
      "Our geared motors are built using a modular combination of motors and gearboxes that work perfectly together. This flexible system allows us to quickly create solutions that match your exact requirements in a cost-effective way.",
      "By using standardized components, we can easily design different types of geared motors, including offset, angular, and helical models. This approach helps save valuable project engineering time and ensures that you get a reliable and well-designed solution.",
      "At the same time, every module benefits from our strong design knowledge and real-world application experience, giving you a product you can trust for long-term performance.",
    ],
    cards: [
      {
        id: 1,
        title: "Offset geared motors",
        description: "Full drive performance, also in a small space",
        image: "/img/sraes/geared-motors.webp",
        slug: "/geared-motors/offset-geared-motors",
      },
      {
        id: 2,
        title: "Angular geared motors",
        slug: "/geared-motors/angular-geared-motors",
        description: "Compact drive solutions tailored to meet your needs",
        image: "/img/sraes/geared-motors1.webp",
      },
      {
        id: 3,
        title: "Helical geared motors",
        slug: "/geared-motors/helical-geared-motors",
        description: "Rugged drive solutions tailored to meet your needs",
        image: "/img/sraes/geared-motors2.webp",
      },
    ],
  },
  {
    title: "motors",
    slug: "motors",
    metadata: {
      title: "Industrial Electric Motors for Cranes & Drive Systems",
      description:
        "Find high-performance electric motors for cranes and industrial drives. Designed for efficiency, durability & smooth operation in heavy-duty applications.",
      keywords: [
        "industrial electric motors",
        "crane motors",
        "electric motors for drives",
        "heavy duty motors",
        "industrial drive motors",
        "energy efficient motors",
        "crane drive systems India",
      ],
      alternates: {
        canonical: "https://www.timeskrane.com/drives/motors",
      },
      openGraph: {
        title: "Industrial Electric Motors for Cranes & Drive Systems",
        description:
          "Find high-performance electric motors for cranes and industrial drives. Designed for efficiency, durability & smooth operation in heavy-duty applications.",
        url: "https://www.timeskrane.com/drives/motors",
        siteName: "Timeskrane",
        locale: "en_IN",
        type: "website",
      },
    },
    description: [
      "Our motors perform a wide variety of industrial drive tasks. Reliably and effectively. For example, our type Z cylindrical-rotor brake motors – also as brake motors – offer high drive efficiency – also in continuous duty. They are specially designed to match our gearbox range and provide for simple project engineering. Our conical-rotor brake motors with outputs of up to 55 kW are used for stopping-and-starting drives or for direct line-fed travel applications. Thanks to their unique brake principle, they are the first choice wherever demanding requirements have to be met by the brake.",
    ],
    cards: [
      {
        id: 4,
        title: "Cylindrical-rotor motors",
        description: "Universal drive solutions",
        image: "/img/sraes/moter2.webp",
        slug: "/cylindrical-rotor-motors",
      },
      {
        id: 5,
        title: "Conical-rotor brake motors",
        description: "Reliable drive units",
        image: "/img/sraes/moter.webp",
        slug: "/conical-rotor-brake-motors",
      },
    ],
  },
  {
    title: " wheel range",
    slug: "wheel-range",
    metadata: {
      title: "Industrial Wheel Range for Crane & Material Handling",
      description:
        "Find industrial wheel range systems for cranes & material handling. High load capacity, durable design & smooth travel performance for heavy-duty applications.",
      keywords: [
        "wheel range systems",
        "crane wheel range",
        "industrial wheel systems",
        "wheel block systems",
        "travel wheel systems",
        "material handling wheels",
        "heavy duty crane wheels",
        "wheel range India",
      ],
      alternates: {
        canonical: "https://www.timeskrane.com/drives/wheel-range",
      },
      openGraph: {
        title: "Industrial Wheel Range for Crane & Material Handling",
        description:
          "Find industrial wheel range systems for cranes & material handling. High load capacity, durable design & smooth travel performance for heavy-duty applications.",
        url: "https://www.timeskrane.com/drives/wheel-range",
        siteName: "Timeskrane",
        locale: "en_IN",
        type: "website",
      },
    },
    description: [
      "Our wheel and wheel block systems are designed as modular solutions to suit a wide variety of applications. They are widely used in many mobile machines and systems, either as individual components or as complete travel units.",
      "These wheel systems are known for their high reliability and long service life, performing efficiently every day while requiring very little maintenance.",
      "They are also designed for easy installation and alignment, with compact dimensions and multiple connection options. This makes them a cost-effective and flexible solution for many industrial applications.",
      "Our product range supports wheel loads of up to 60 tonnes, making it suitable for both light and heavy-duty operations. You can explore the full performance details and benefits on the respective product pages.",
    ],
    cards: [
      {
        id: 6,
        title: "DRS wheel block system",
        description: "DRS and DRS-M wheel block systems",
        image: "/img/sraes/wheel-range1.webp",
        slug: "/drs-and-drs-m-wheel-block-systems",
      },
      {
        id: 7,
        title: "LRS travel wheel system",
        description: "Solutions ready for installation for up to 240 m/min",
        image: "/img/sraes/wheel-range2.webp",
        slug: "/lrs-travel-wheel-system",
      },
      {
        id: 8,
        title: "RS wheel block system",
        description: "Solutions for tough applications",
        image: "/img/sraes/wheel-range3.webp",
        slug: "/rs-wheel-block-system",
      },
      {
        id: 9,
        title: "DWS wheel sets",
        description: "For loads up to 60 tonnes",
        image: "/img/sraes/wheel-range4.webp",
        slug: "/dws-wheel-sets",
      },
    ],
  },
];

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = allCards.find((item) => item.slug === slug);

  if (!product || !product.metadata) {
    return {
      title: product?.product,
      description: product?.summary?.description ?? "",
    };
  }

  return {
    title: product.metadata.title,
    description: product.metadata.description,
    keywords: product.metadata.keywords,
    alternates: product.metadata.alternates,
    openGraph: product.metadata.openGraph,
  };
}

export default function ProductPage({ params }) {
  const { slug } = use(params); // Unwrap the `params` with `React.use()`

  const selectedItem = allCards.find((item) => item.slug === slug);

  if (!selectedItem) {
    return <p className="text-center py-10 text-red-600">Item not found</p>;
  }

  return (
    <>
      <Navbar></Navbar>
      <Breadcrumb
        title={selectedItem.title}
        backgroundImage="/img/header1.webp"
        items={[{ label: `${selectedItem.title}`, href: "/", isCurrent: true }]}
      />
      <div className="section">
        <Container maxWidth="xl">
          <h2 className="text-center text-5xl font-bold text-gray-700">
            {selectedItem.title}
          </h2>
          <div className="mx-auto mt-2 mb-6 h-1 w-12 bg-yellow-400"></div>
          {selectedItem.description.map((des, index) => (
            <p
              className="mx-auto max-w-3xl text-center text-gray-600  mb-2"
              key={index}
            >
              {des}
            </p>
          ))}
        </Container>

        <div className="section bg-gray-100">
          <Container maxWidth="lg">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {selectedItem.cards.map((card) => (
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
                  </Link>
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
