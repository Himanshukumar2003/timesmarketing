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

import SlickCarousel from "@/componts/slick-slider";
import Feachers from "../_feachers";

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
      <div className="section bg-two  mt-6 lg:mt-10">
        <Container maxWidth="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-center">
            <div>
              <SlickCarousel data={selectedItem.cranes} />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-4">
                {selectedItem.title}
              </div>

              <p className="text-justify text-gray-600">
                {selectedItem.description}
              </p>

              <ContactPopupForm></ContactPopupForm>
            </div>
          </div>
        </Container>
      </div>

      <Feachers technicalData={selectedItem.technicalData || []} />

      <Footer />
    </>
  );
};

export default EotCranes;
