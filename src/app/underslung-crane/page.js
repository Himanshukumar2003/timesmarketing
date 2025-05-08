import { Breadcrumb } from "@/componts/breadcrumb";
import ContactPopupForm from "@/componts/btn";
import Footer from "@/componts/footer";
import DemaggNavbar from "@/componts/nav";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import { FiChevronRight } from "react-icons/fi";
// import pumpImage from './img/double-ginder-1.jpg';

function UnderslungCrane(params) {
  return (
    <>
      <DemaggNavbar></DemaggNavbar>
      <Breadcrumb
        title="Underslung Crane"
        backgroundImage="/img/header1.webp"
        items={[{ label: "Underslung Crane", href: "/", isCurrent: true }]}
      />
      <div className="section bg-two">
        <Container maxWidth="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full    items-center">
            <div>
              <div className="rounded-lg">
                <Image
                  src="/img/underslung.jpg"
                  alt="Oil Sealed Vane Pump"
                  width={600}
                  height={400}
                  className="w-full  rounded-lg shadow-lg h-auto object-contain"
                  priority
                />
              </div>
            </div>

            <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-4">
                Underslung Crane
              </h1>

              <div className="space-y-4 text-gray-600">
                <p className="    text-justify">
                  Times Marketing Pvt. Ltd. utilize an advanced design system
                  and meticulously evaluate all mechanical, structural and
                  electrical components used in the production of every double
                  girder crane, resulting in cost effective, reliable, and safe
                  lifting solutions. Our Drive System, which comes as standard
                  on all of our cranes, is one of the features which sets us
                  apart from other suppliers. This offers a high level of
                  performance by allowing for variable speed control. As a
                  leading manufacturer, we can produce double girder cranes to
                  suit any application in any industry. These overhead cranes a
                  are a lifting solution designed to carry medium and heavy duty
                  loads. By using two adjacently positioned beams, these cranes
                  offer improved support for the goods being handled, this
                  allows the movement of larger capacities.
                </p>
              </div>

              <ContactPopupForm></ContactPopupForm>
            </div>
          </div>
        </Container>
      </div>
      <div className="section bg-three">
        <Container maxWidth="xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              // key={crane.id}
              className=" rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
            >
              <div className="relative   group  w-full  card">
                <div className="absolute inset-0 overlay "></div>

                <Image
                  src="/img/double-ginder-1.jpg"
                  width={700}
                  height={300}
                  layout="responsive"
                  alt="relative img"
                />

                <div className="">
                  <h4 className="absolute bottom-[20px] text-white text-center font-bold  text-[21px]   text-shadow-lg group-hover:text-blue-900">
                    20 Ton ZKKE Double Girder Overhead Travelling Crane
                  </h4>

                  <div className="absolute top-0 left-0 bg-yellow-500 text-white px-4 py-1 rounded-br-lg font-medium z-10">
                    20 Ton
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Footer></Footer>
    </>
  );
}

export default UnderslungCrane;
