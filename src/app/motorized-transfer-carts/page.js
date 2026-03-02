import { Breadcrumb } from "@/componts/breadcrumb";
import ContactPopupForm from "@/componts/btn";
import Footer from "@/componts/footer";
import Navbar from "@/componts/nav";
import Container from "@mui/material/Container";
import Image from "next/image";
export const metadata = {
  title: "Motorized Transfer Carts in India | Timeskrane",
  description:
    "Timeskrane provides motorized transfer carts in India for easy and safe movement of heavy loads, built to support smooth operations and better productivity.",
  keywords: [
    "Motorized transfer cart price",
    "Motorized transfer cart heavy duty",
    "Battery Operated Transfer Trolley in India",
    "Operator-controlled rail-guided transfer carts",
    "Electric Transfer Trolley",
    "Motorised Transfer Trolleys Trader",
    "motorized transfer cart in india",
  ],
  alternates: {
    canonical: "https://www.timeskrane.com/motorized-transfer-carts",
  },
  openGraph: {
    title: "Motorized Transfer Carts in India | Timeskrane",
    description:
      "Timeskrane provides motorized transfer carts in India for easy and safe movement of heavy loads, built to support smooth operations and better productivity.",
    url: "https://www.timeskrane.com/motorized-transfer-carts",
    siteName: "Timeskrane",
    locale: "en_IN",
    type: "website",
  },
};
export default function PotalCranes(params) {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="Motorized Transfer Carts"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "Motorized Transfer Carts",
            href: "/",
            isCurrent: true,
          },
        ]}
      />
      <div className="section">
        <Container maxWidth="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="lg:col-span-1 col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-4">
                Motorized Transfer Carts
              </div>

              <p className="text-gray-600">
                At <b>Times</b>, we design and manufacture high-performance
                <b> Motorized Transfer Carts</b> ranging from{" "}
                <b>2 tons to 45 tons</b>, engineered for seamless material
                movement across workshops, bays, and shop floors.
              </p>

              <p className="text-gray-600">
                Our transfer carts offer a safe, efficient, and flexible
                solution to handle heavy loads and bulky equipment, particularly
                in environments where overhead cranes are not suitable or where
                ground-level transport is preferred.
              </p>
              <div className="mt-4">
                <h2 className="text-2xl font-bold  text-[#676f77] mb-4">
                  Product Range:
                </h2>

                <ul className="list-disc pl-6 mt-2 text-gray-600">
                  <li>
                    <b>Capacity:</b> 2 Ton to 45 Ton
                  </li>
                  <li>
                    <b>Type:</b> Rail-mounted
                  </li>
                  <li>
                    <b>Control:</b> Wired pendant or wireless remote
                  </li>
                  <li>
                    <b>Drive:</b> AC motorized with geared motors
                  </li>
                </ul>
              </div>
              <ContactPopupForm></ContactPopupForm>
            </div>
            <div className="lg:col-span-1 col-span-1">
              <div className=" rounded-xl overflow-hidden shadow-lg h-full">
                <Image
                  src="/img/transfer-cart.jpg"
                  height={700}
                  width={700}
                  alt="Portal Crane"
                  className="w-full h-auto -mt-[5px] "
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
}
