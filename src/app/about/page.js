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
              Times Industrial Engineers Private Limited is a company to trust
              upon because we always listen to our customers, understand their
              needs and then work hard to fulfill those needs. Based in
              Faridabad (Haryana, India); we have our infrastructure that is
              spread over a large piece of land and is equipped with all the
              resources that we require to cater the demands of our customers.
              We are a recognized as reliable supplier of Chain Hoist, KBK
              Suspension Monorails, Motors, EOT Crane Spare Parts, JIB Crane
              Spares, etc., because of their excellent quality. The people of
              our company persistently work to cater our customer &#39; s
              demands in the every possible way.
            </p>

            {/* Feature Highlights */}
            <div className="flex flex-col sm:flex-row gap-6">
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
            </div>
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
