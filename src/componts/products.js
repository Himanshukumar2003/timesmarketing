import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Products() {
  const products = [
    {
      title: "KBK Single Girder Suspension Crane",
      description:
        "Single-girder suspension cranes from our KBK light crane system enable you to achieve.",
      imagePath: "/img/products.webp",
      href: "/cranes",
      id: "1",
    },
    {
      title: "Underslung Crane",
      description: "Underslung Crane",
      imagePath: "/img/products.webp",
      href: "/underslung-crane",
      id: "2",
    },
    {
      title: "KBK Crane",
      description: "Keeping your business on the move.",
      imagePath: "/img/products.webp",
      href: "/kbk-light-crane-system",
      id: "2",
    },
    {
      title: "Rope Hoists",
      description: "Always tailored to your specific needs.",
      imagePath: "/img/products.webp",
      href: "/rope-hoists",
      id: "5",
    },
  ];

  return (
    <div className="section">
      <main className=" w-full px-4 mx-auto ">
        <div className="grid grid-cols-12 gap-6">
          {products.map((product, index) => {
            return (
              <div
                key={index}
                className={`${
                  product.id % 2 == 0 ? "col-span-8" : "col-span-4"
                }`}
              >
                <Link
                  href={product.href}
                  className="group relative block overflow-hidden h-[300px] transition-all duration-300 hover:shadow-xl"
                >
                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 transition-all duration-300 ${
                      product.id % 2 == 0
                        ? "bg-[rgba(0,61,116,0.7)] z-10 group-hover:bg-blue-900"
                        : "bg-[rgba(246,212,27,0.7)] z-10 group-hover:bg-[#E3BC17]"
                    }`}
                  ></div>

                  {/* Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={product.imagePath || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover brightness-75 group-hover:brightness-100 transition-all duration-300"
                      priority
                    />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6 text-white z-10">
                    <div>
                      <h2 className="text-4xl font-bold mb-2">
                        {product.title}
                      </h2>
                      <p className="text-lg   font-semibold">
                        {product.description}
                      </p>
                    </div>
                    <div className="self-end">
                      <div className="bg-white p-2 rounded-full group-hover:bg-blue-100 transition-colors">
                        <ArrowRight className="h-6 w-6 text-blue-900" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
