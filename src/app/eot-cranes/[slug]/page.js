"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { FiChevronRight, FiChevronsRight } from "react-icons/fi";
import eotCranesData from "@/app/apis/eot-cranes";
import { useParams } from "next/navigation";
import Image from "next/image";
import Container from "@mui/material/Container";
import Navbar from "@/componts/nav";
import { Breadcrumb } from "@/componts/breadcrumb";
import Footer from "@/componts/footer";
import ContactPopupForm from "@/componts/btn";
const EotCranes = ({ params }) => {
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
  console.log(selectedItem, "sdvvjhs");

  return (
    <>
      <Navbar></Navbar>

      <Breadcrumb
        title={selectedItem.title}
        backgroundImage="/img/header1.webp"
        items={[{ label: `${selectedItem.title}`, href: "/", isCurrent: true }]}
      />
      <div className="section bg-two mt-10">
        <Container maxWidth="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-center">
            <div>
              <Image
                src={selectedItem.mainImage}
                alt={selectedItem.title}
                width={600}
                layout="responsive"
                height={400}
                className="w-full rounded-lg shadow-lg h-auto object-contain"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-4">
                {selectedItem.title}
              </h1>

              <p className="text-justify text-gray-600">
                {selectedItem.description}
              </p>

              <ContactPopupForm></ContactPopupForm>
            </div>
          </div>
        </Container>
      </div>
      <div className="section">
        <Container maxWidth="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedItem.cranes.map((item, index) => (
              <div
                key={index}
                className=" overflow-hidden  transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
              >
                <div className="relative group w-full ">
                  {/* <div className="absolute inset-0 overlay"></div> */}

                  <Image
                    src={item.image}
                    width={700}
                    height={300}
                    layout="responsive"
                    alt={item.title}
                    className="rounded-xl"
                  />

                  <h4 className=" text-center text-yellow-500 font-bold text-[21px]  group-hover:text-blue-900 w-full">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default EotCranes;
