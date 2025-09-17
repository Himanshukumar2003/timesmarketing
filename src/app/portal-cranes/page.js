import { Breadcrumb } from "@/componts/breadcrumb";
import ContactPopupForm from "@/componts/btn";
import Footer from "@/componts/footer";
import Navbar from "@/componts/nav";
import Container from "@mui/material/Container";
import Image from "next/image";

export default function PotalCranes(params) {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="PORTAL CRANES"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "PORTAL CRANES",
            href: "/",
            isCurrent: true,
          },
        ]}
      />
      <div className="section bg-gray-100">
        <Container maxWidth="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="lg:col-span-1 col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-4">
                PORTAL CRANES
              </div>
              <h6 className="mb-4 text-blue-700 text-lg font-semibold">
                Cost-Effective Outdoor Solution
              </h6>
              <p className="text-gray-600">
                TK KRANE full-portal cranes can often be integrated into
                existing production facilities and inhouse logistics processes
                with only little design effort. They mainly differ from
                semi-portal cranes by having an integrated articulated leg,
                which compensates any movements. The load-bearing crane girder
                is part of the frame structure which, together with the legs at
                either end, forms a travelling bridge. The cranes run on ground
                rails, which eliminates the need for a crane runway. Full-portal
                cranes are preferably used for outdoor operation in storage
                yards and loading areas.
              </p>

              <ContactPopupForm></ContactPopupForm>
            </div>
            <div className="lg:col-span-1 col-span-1">
              <Image
                src="/img/portalcrane.jpg"
                height={700}
                width={700}
                alt="Portal Crane"
                className="w-full h-auto    shadow-lg  rounded-lg"
              />
            </div>
          </div>
        </Container>
      </div>
      <div className="section">
        <Container maxWidth="lg">
          <div className="">
            <h2 className="text-2xl font-bold  text-[#676f77] mb-4">
              Portal & Semi-Portal Cranes
            </h2>
            <p className="text-gray-600">
              At <b>Times,</b> we specialize in the design and manufacturing of
              <b> Portal and Semi-Portal Cranes</b> to meet a wide range of
              industrial material handling needs. Our solutions are engineered
              for both indoor and outdoor applications where conventional EOT
              cranes may not be feasible.
            </p>

            <p className="text-gray-600 mt-4 ">
              We offer <b>custom-built cranes</b> in
              <b> both Single Girder and Double Girder configurations</b>,
              covering capacities from <b> 80 kg to 15 tons</b>, tailored to
              suit your specific span, height, and duty cycle requirements.
            </p>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl font-bold  text-[#676f77] mb-4">
              Our Offerings Include:
            </h2>

            <ul className="   list-disc  pl-6">
              <li className="text-gray-600">
                <b> Full Portal Cranes – </b>Ideal for open yard applications,
                container handling, and fabrication zones.
              </li>
              <li className="text-gray-600">
                <b> Semi-Portal Cranes – </b>Best suited for areas with
                structural support on one side, commonly used in workshops and
                semi-covered sheds.
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
