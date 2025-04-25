import Image from "next/image";
import Container from "@mui/material/Container";
import { FiChevronRight } from "react-icons/fi";

export default function About() {
  return (
    <div className="section bg-gray-100">
      <Container maxWidth="2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div>
            <h2 className="text-sm font-medium tracking-widest text-yellow-600 uppercase">
              About Us
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-4">
              Helping businesses <span className="text-blue-700">succeed</span>{" "}
              through the power of video.
            </h1>
            <p className="mt-2 text-slate-600">
              In VS Code if I type lorem and then press enter it will generate a
              paragraph of lorem ipsum. The only problem is that the paragraph
              comes out as one very long line of text as opposed to several
              lines in the text editor. Is there a setting I can change so that
              it automatically generates my lorem ipsum on multiple lines?
            </p>
            <a className="flex rounded-sm mt-4 items-center  btn">
              <span className="shadow-lg items-center  bg-blue-700 hover:bg-blue-800 text-white font-bold  px-4 py-2 ">
                <span className="flex-1 text-center mr-2">READ MORE</span>
              </span>
              <span className="bg-blue-500  shadow-lg py-2 px-2  ">
              <FiChevronRight className=" text-white  text-2xl  font-bold"/>
            </span>
            </a>
            
          </div>
          <div>{/* Optional: Add an image or SVG here */}</div>
        </div>
      </Container>
    </div>
  );
}
