import { Breadcrumb } from "@/componts/breadcrumb";
import Footer from "@/componts/footer";
import DemaggNavbar from "@/componts/nav";
import Container from "@mui/material/Container";
import Image from "next/image";
import Link from "next/link";
import eotCranesData from "../apis/eot-cranes";
import { ChevronRightCircleIcon, ChevronRightIcon } from "lucide-react";

function EotCranes(params) {
  return (
    <>
      <DemaggNavbar></DemaggNavbar>
      <Breadcrumb
        title="EOT Crenes"
        backgroundImage="/img/header1.webp"
        items={[{ label: "Eot Crenes", href: "/", isCurrent: true }]}
      />
      <div className="section ">
        <Container maxWidth="xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full items-center">
            {eotCranesData.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-md bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <Link href={`/eot-cranes/${item.slug}`}>
                  <div className="absolute right-4 top-4 z-10 rounded-full bg-yellow-400 p-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <ChevronRightIcon size={18} className="text-white" />
                  </div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
                    <Image
                      src={item.mainImage || "/placeholder.svg"}
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
                      <button className="flex h-8 w-8 items-center justify-center rounded-sm bg-gray-200 text-gray-600 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                        <ChevronRightCircleIcon size={18} />
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
      <Footer></Footer>
    </>
  );
}

export default EotCranes;
