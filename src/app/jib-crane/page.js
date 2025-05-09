import Image from "next/image";
import { ChevronRight, Maximize2, ArrowRight } from "lucide-react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { Container } from "@mui/system";
import { FiChevronRight } from "react-icons/fi";
import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";
import { Breadcrumb } from "@/componts/breadcrumb";
import ContactPopupForm from "@/componts/btn";
export default function JibCrane() {
  const cranes = [
    {
      id: "pillar-cranes",
      title: "Pillar Cranes",
      subTitle: "Pillar Mounted Slewing JIB Cranes",
      description:
        "Manually handling and moving relatively light loads are often not only time-consuming, but also an ergonomic burden for employees. With a wide selection of hoist units, our pillar mounted slewing jib cranes installed direct at the workplace enable all types of work pieces to be lifted and transported easily and deposited gently and precisely. By this setting up and waiting times can be reduced and for workshop cranes to become available. Furthermore strengths of our pillar mounted slewing jibs include light and fast load handling and ease of operation and high operating safety and reliability.",

      image: "/img/jib.jpg",
    },
    {
      id: "wall-mounted",
      title: "Wall Mounted Cranes",
      subTitle: "Pillar Mounted Slewing JIB Cranes",
      description:
        "The wall mounted slewing jib cranes has been designed for safe and quick handling of work pieces, tools, or small parts and features a capacity of up to 250 kg. The articulating jib arm will enable you to easily and precisely reach every corner of the workplace; the offered crane virtually slews around the corner. Because of its compact design, this jib arm features a maximum lifting height and is perfectly suitable for feeding of machines and machining centers. The handling crane perfectly meets your requirements since its jib arm length can be adjusted individually.",

      image: "/img/mounted.jpg",
    },
    {
      id: "ekwk",
      title: "EKWK wall-mounted travelling cranes",
      subTitle: "High-level efficiency",
      description:
        "Our EKWK wall-mounted travelling cranes are ideal workstation cranes for workplaces that are arranged next to each other. They are used to transport materials to the individual workstations and, at the same time, are used for positioning at assembly stations. They operate below the bridge crane level on crane runway rails that are arranged one above the other along the workshop wall. Other features:",
      benefits: [
        "outreaches up to 12 m",
        "load capacities up to 6.3 tonnes",
        "control via cable-connected control pendant or by radio",
        "travel units made of Demag drive components with first-class travel characteristics",
        "travelling DR rope hoist on a cantilever bracket.",
      ],
      image: "/img/wall-mounted.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb
        title="Jib Cranes"
        backgroundImage="/img/header1.webp"
        items={[{ label: "Jib Cranes", href: "/", isCurrent: true }]}
      />
      <div className="section">
        <Container maxWidth="lg">
          <div className="grid gap-10">
            {cranes.map((crane, index) => (
              <div
                key={crane.id}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } gap-4 mb-8`}
              >
                {/* Image Column */}
                <div className="w-full">
                  <Image
                    src={crane.image}
                    alt={crane.title}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>

                {/* Content Column */}
                <div className=" w-full">
                  <h2 className="text-3xl md:text-3xl font-bold text-blue-700 leading-tight mb-2">
                    {crane.title}
                  </h2>
                  {crane.subTitle && (
                    <h3 className="text-lg text-gray-500 font-semibold mb-2">
                      {crane.subTitle}
                    </h3>
                  )}
                  <p className="text-gray-700 mb-4">{crane.description}</p>

                  {crane.benefits && (
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {crane.benefits.map((benefit, idx) => (
                        <li key={idx}>{benefit}</li>
                      ))}
                    </ul>
                  )}

                  <ContactPopupForm />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
