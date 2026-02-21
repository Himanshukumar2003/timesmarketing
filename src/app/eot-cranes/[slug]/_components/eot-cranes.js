"use client";

import Container from "@mui/material/Container";
import Navbar from "@/componts/nav";
import { Breadcrumb } from "@/componts/breadcrumb";
import Footer from "@/componts/footer";
import ContactPopupForm from "@/componts/btn";
import SlickCarousel from "@/componts/slick-slider";
import Feachers from "../../_feachers";

const EotCranesComponent = ({ selectedItem }) => {
  return (
    <>
      <Navbar />

      <Breadcrumb
        title={selectedItem.title}
        backgroundImage="/img/header1.webp"
        items={[
          { label: "Home", href: "/" },
          { label: selectedItem.title, isCurrent: true },
        ]}
      />

      <div className="section bg-two mt-6 lg:mt-10">
        <Container maxWidth="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-center">
            {/* Left Slider */}
            <div>
              {selectedItem.cranes && (
                <SlickCarousel data={selectedItem.cranes} />
              )}
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-4">
                {selectedItem.title}
              </h2>

              <p className="text-justify text-gray-600">
                {selectedItem.description}
              </p>

              <div className="mt-4">
                <ContactPopupForm />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Technical Data Section */}
      {selectedItem.technicalData && (
        <Feachers technicalData={selectedItem.technicalData} />
      )}

      <Footer />
    </>
  );
};

export default EotCranesComponent;
