import { Breadcrumb } from "@/componts/breadcrumb";
import ContactPopupForm from "@/componts/btn";
import Footer from "@/componts/footer";
import DemaggNavbar from "@/componts/nav";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
// import pumpImage from './img/double-ginder-1.jpg';

function EotCranes(params) {
  return (
    <>
      <DemaggNavbar></DemaggNavbar>
      <Breadcrumb
        title="SinDouble Girder Crane"
        backgroundImage="/img/header1.webp"
        items={[
          { label: "SinDouble Girder Crane", href: "/", isCurrent: true },
        ]}
      />
      <div className="section bg-two">
        <Container maxWidth="xl"></Container>
      </div>
      <Footer></Footer>
    </>
  );
}

export default EotCranes;
