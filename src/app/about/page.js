import { Breadcrumb } from "@/componts/breadcrumb";
import DemaggNavbar from "@/componts/nav";
import ServiceCards from "@/componts/services";
import CompanyValuesCards from "./company-values-cards";
import Timeline from "./timeline";
import Footer from "@/componts/footer";
import { IoMdBuild } from "react-icons/io";
import { FaBuilding } from "react-icons/fa";
import Image from "next/image";

function About(params) {
  return (
    <>
      <DemaggNavbar></DemaggNavbar>
      <Breadcrumb
        title="About Us"
        backgroundImage="/img/header1.webp"
        items={[{ label: "About", href: "/about", isCurrent: true }]}
      />

      <div className="section">
        <div className="flex flex-col lg:flex-row px-6  gap-8 items-start">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <Image
              height={400}
              width={400}
              src="/img/products.webp"
              alt="Industrial plant"
              className="w-full h-auto rounded"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">About us</h2>
            <p className="text-gray-700 mb-4 border-l-4 border-yellow-500 pl-4">
              With a rich legacy dating back to 1988, we have been committed to
              delivering innovative and reliable industrial products. In 2012,
              we took a significant leap forward by launching TK Crane, our
              specialized brand for manufacturing state-of-the-art EOT (Electric
              Overhead Travel) cranes.
            </p>
            <p className="text-gray-700 mb-4  pl-4">
              Driven by cutting-edge technology and a highly experienced team,
              every TK Crane is engineered to meet the highest standards of
              safety, efficiency, and durability. Over the years, we have
              established ourselves as a trusted name across the manufacturing,
              engineering, and construction sectors.
            </p>
            <p className="text-gray-700 mb-4  pl-4">
              Our unwavering focus on excellence, innovation, and sustainability
              enables us to provide high-quality products and customized
              solutions that cater to the evolving needs of our diverse
              clientele. At TK Crane, we don’t just build cranes — we build
              long-lasting partnerships based on performance, precision, and
              trust.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-start gap-3">
                <FaBuilding className="text-yellow-500 mt-1 text-4xl" />
                <div>
                  <h4 className="font-bold text-black">Parts and systems</h4>
                  <p className="text-sm text-gray-600">
                    Bring to the table win-win survival strategies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <IoMdBuild className="text-yellow-500 mt-1 text-4xl" />
                <div>
                  <h4 className="font-bold text-black">Maintenance</h4>
                  <p className="text-sm text-gray-600">
                    Capitalise on low hanging fruit to identify ballpark.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Timeline></Timeline>

      <CompanyValuesCards></CompanyValuesCards>

      <Footer></Footer>
    </>
  );
}

export default About;
