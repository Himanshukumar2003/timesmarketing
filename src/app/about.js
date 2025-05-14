import Image from "next/image";
import Container from "@mui/material/Container";
import { FiChevronRight } from "react-icons/fi";

export default function About() {
  return (
    <div className="section bg-gray-100">
      <Container maxWidth="2xl">
        <div className="grid grid-cols-12 items-center gap-8">
          <div className="col-span-12 md:col-span-7">
            <h2 className="text-sm font-medium tracking-widest text-yellow-600 uppercase">
              About Us
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-4">
              Powering{" "}
              <span className="text-blue-700">Industrial Success </span> with
              Innovation and Expertise
            </h1>
            <p className="mt-2 text-slate-600">
              With a rich legacy dating back to 1988, we have been committed to
              delivering innovative and reliable industrial products. In 2012,
              we took a significant leap forward by launching TK Crane, our
              specialized brand for manufacturing state-of-the-art EOT (Electric
              Overhead Travel) cranes. Driven by cutting-edge technology and a
              highly experienced team, every TK Crane is engineered to meet the
              highest standards of safety, efficiency, and durability. Over the
              years, we have established ourselves as a trusted name across the
              manufacturing, engineering, and construction sectors.
            </p>
            <a href="/about" className="flex rounded-sm mt-4 items-center  btn">
              <span className="shadow-lg items-center  bg-blue-700 hover:bg-blue-800 text-white font-bold  px-4 py-2 ">
                <span className="flex-1 text-center mr-2">READ MORE</span>
              </span>
              <span className="bg-blue-500  shadow-lg py-2 px-2  ">
                <FiChevronRight className=" text-white  text-2xl  font-bold" />
              </span>
            </a>
          </div>
          <div className="col-span-12 md:col-span-5">
            <Image
              src="/img/about.jpg"
              layout="responsive"
              width={100}
              height={100}
              alt="about "
              className="w-100 rounded-lg shadow-lg"
            ></Image>
          </div>
        </div>
      </Container>
    </div>
  );
}
