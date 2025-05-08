"use client";

import { useState, useEffect, use} from "react";
import Link from "next/link";
import { FiChevronRight, FiChevronsRight } from "react-icons/fi";
import eotCranesData from "@/app/apis/eot-cranes";
import { useParams } from "next/navigation";
import Image from "next/image";
import Container from "@mui/material/Container";
import Navbar from "@/componts/nav";
import { Breadcrumb } from "@/componts/breadcrumb";
import Footer from "@/componts/footer";
const EotCranes = ({params}) => {
  const { slug } = use(params); 
  const [selectedItem, setSelectedItem] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchInner = eotCranesData.find((val) => val.slug === slug); 
    if (fetchInner) {
      setSelectedItem(fetchInner);
    } else {
      setError("Item not found");
    }
  }, [slug]);

  if (error) return <p>{error}</p>;
  if (!selectedItem) return <p>Loading...</p>;
  console.log(selectedItem, "sdvvjhs")

  return (
    <>
     

<Navbar></Navbar>

<Breadcrumb
        title={selectedItem.title}
        backgroundImage="/img/header1.webp"
        items={[
          { label: `${selectedItem.title}`, href: "/", isCurrent: true },
        ]}
      />
      <div className="section bg-two mt-10">
      <Container maxWidth="lg">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-center">
          <div>
            <img
              src={selectedItem.mainImage}
              alt={selectedItem.title}
              width={600}
              height={400}
              className="w-full rounded-lg shadow-lg h-auto object-contain"
            />
          </div>
          <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-4">
              {selectedItem.title}
            </h1>
            <p className="text-justify text-gray-600">
              {selectedItem.description}
            </p>

            <button className="flex rounded-sm mt-4 items-center  btn">
              <span className="shadow-lg items-center  bg-blue-700 hover:bg-blue-800 text-white font-bold  px-4 py-2 ">
                <span className="flex-1 text-center mr-2">READ MORE</span>
              </span>
              <span className="bg-blue-500  shadow-lg py-2 px-2  ">
                <FiChevronRight className=" text-white  text-2xl  font-bold" />
              </span>
            </button>
          </div>
        </div>
        </Container>
      </div>
      <div className="section">
        <Container maxWidth="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedItem.cranes.map((item, index) => (
              <Link
                key={index}
                href={`/eot-cranes/${selectedItem.slug}/${item.slug}`} // Adjust path based on routing setup
                className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
              >
                <div className="relative group w-full card">
                  <div className="absolute inset-0 overlay"></div>

                  <Image
                    src={item.image}
                    width={700}
                    height={300}
                    layout="responsive"
                    alt={item.title}
                  />

                  <h4 className="absolute bottom-[20px] text-white text-center font-bold text-[21px] text-shadow-lg group-hover:text-blue-900 w-full">
                    {item.title}
                  </h4>

                  <div className="absolute top-0 left-0 bg-yellow-500 text-white px-4 py-1 rounded-br-lg font-medium z-10">
                    {/* {item.capacity || "20 Ton"} */}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default EotCranes;
