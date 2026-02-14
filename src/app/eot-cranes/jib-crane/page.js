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
import Feachers from "../_feachers";

export const metadata = {
  title: "Industrial Jib Crane Manufacturer in India | Timeskrane",
  description:
    "Timeskrane is a trusted jib crane manufacturer in India. We offer quality systems at the best prices for all industries.",
  keywords: [
    "Jib Crane price in India",
    "Jib crane manufacturers in India",
    "Jib cranes india",
    "jib crane hoist",
    "jib crane suppliers",
    "Gantry crane manufacturers in India",
    "EOT Crane manufacturers in India",
    "Jib Cranes Supplier in India",
  ],
  alternates: {
    canonical: "https://www.timeskrane.com/eot-cranes/jib-crane",
  },
};

export default function JibCrane() {
  const cranes = [
    {
      id: "pillar-cranes",
      title: "Pillar Cranes",
      subTitle: "Pillar Mounted Slewing JIB  Cranes",
      description:
        "Manually handling and moving relatively light loads are often not only time-consuming, but also an ergonomic burden for employees. With a wide selection of hoist units, our pillar mounted slewing JIB  Cranes installed direct at the workplace enable all types of work pieces to be lifted and transported easily and deposited gently and precisely. By this setting up and waiting times can be reduced and for workshop cranes to become available. Furthermore strengths of our pillar mounted slewing jibs include light and fast load handling and ease of operation and high operating safety and reliability.",

      image: "/img/jib.jpg",
    },
    {
      id: "wall-mounted",
      title: "Wall Mounted Cranes",
      subTitle: "Pillar Mounted Slewing JIB  Cranes",
      description:
        "The wall mounted slewing JIB  Cranes has been designed for safe and quick handling of work pieces, tools, or small parts and features a capacity of up to 250 kg. The articulating jib arm will enable you to easily and precisely reach every corner of the workplace; the offered crane virtually slews around the corner. Because of its compact design, this jib arm features a maximum lifting height and is perfectly suitable for feeding of machines and machining centers. The handling crane perfectly meets your requirements since its jib arm length can be adjusted individually.",
      image: "/img/wall.jpg",
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

  const technicalData = [
    {
      label: "Capacity, Tons",
      value: "0 UP to 5 Ton",
    },
    {
      label: "Outreach",
      value: "2m UP to 6m",
    },
    {
      label: "Hook Path",
      value: "0m UP to 12m",
    },
    {
      label: "Swivel",
      value: "0M UP to 360",
    },
  ];

  return (
    <>
      <Navbar />
      <Breadcrumb
        title="JIB  Cranes"
        backgroundImage="/img/header1.webp"
        items={[{ label: "JIB  Cranes", href: "/", isCurrent: true }]}
      />
      <div className="section">
        <Container maxWidth="lg">
          <div className="grid gap-10">
            {cranes.map((crane, index) => (
              <div
                key={crane.id}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 1 ? "md:flex-row-reverse " : ""
                } gap-4 mb-8  last:m-0`}
              >
                {/* Image Column */}
                <div className="w-full">
                  <Image
                    src={crane.image}
                    alt={crane.title}
                    width={500}
                    height={500}
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
                    <ul className="list-disc pl-6 space-y-1 text-gray-600">
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

      <Feachers technicalData={technicalData} className="mt-0 pt-0"></Feachers>
      <div className="bg-gray-100 section">
        <Image
          src="/img/jib-cranes.jpg"
          width={1000}
          height={1000}
          alt=""
          className="w-full max-w-lg  mx-auto bg-gray-100 rounded-4xl  mt-4"
        ></Image>
      </div>
      <Footer />
    </>
  );
}
