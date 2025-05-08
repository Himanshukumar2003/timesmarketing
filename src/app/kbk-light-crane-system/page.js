import { Breadcrumb } from "@/componts/breadcrumb";
import Footer from "@/componts/footer";
import Navbar from "@/componts/nav";
import Container from "@mui/material/Container";
import {
  ChevronLeft,
  ChevronRight,
  Image,
  Maximize2,
  Play,
  Volume2,
} from "lucide-react";
import { FiChevronRight } from "react-icons/fi";
import KbkCard from "./crads";

export default function KbkLight(params) {
  return (
    <>
      <Navbar></Navbar>
      <Breadcrumb
        title="KBK light crane system"
        backgroundImage="/img/header1.webp"
        items={[
          { label: "KBK light crane system", href: "/", isCurrent: true },
        ]}
      ></Breadcrumb>
      <div className="pt-8">
        <div className="section bg-two">
          <Container maxWidth="xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full    items-center">
              <div>
                <div className="rounded-lg">
                  <img
                    src="/img/kbk1.webp"
                    alt="Oil Sealed Vane Pump"
                    className="w-full h-100 rounded-lg shadow-lg h-auto object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-4">
                  Proven innovations since 1963
                </h1>

                <div className="space-y-4 text-gray-600">
                  <p>
                    We launched our Demag KBK light crane system more than 60
                    years ago – today, we are the world market leader with this
                    product in the light crane system sector. Using our KBK
                    system, we can meet your specific application requirements
                    precisely, quickly and efficiently. The components of our
                    modular system can be combined to create individual
                    suspension monorail, suspension crane, pillar and
                    wall-mounted slewing jib crane solutions. Thanks to the
                    systems high flexibility, our KBK installations can be
                    integrated easily into any production infrastructure – and
                    modified at any time.
                  </p>

                  <p>
                    Our efficient network of crane builders and installation
                    partners plans and installs the systems with the Demag KBK
                    light crane system: from individual workstations to complete
                    intralogistics solutions.
                  </p>
                  <p>
                    See all the performance details and benefits on the product
                    pages.
                  </p>
                </div>

                <a className="flex rounded-sm mt-4 items-center btn">
                  <span className="shadow-lg items-center bg-blue-700 hover:bg-blue-800 text-white font-bold px-4 py-2">
                    <span className="flex-1 text-center mr-2">READ MORE</span>
                  </span>
                  <span className="bg-blue-500 shadow-lg py-2 px-2">
                    <FiChevronRight className="text-white text-2xl font-bold" />
                  </span>
                </a>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="section  bg-gray-100">
        <Container maxWidth="sm">
          <div className="overflow-hidden  rounded-xl bg-gray-900 shadow-xl">
            <div className="relative">
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/Coa0RqnKEK0?si=zj-YJHtuHyypL86v"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <KbkCard />

      <Footer></Footer>
    </>
  );
}
