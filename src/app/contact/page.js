'use client';
import { Breadcrumb } from "@/componts/breadcrumb";
import Footer from "@/componts/footer";
import DemaggNavbar from "@/componts/nav";
import ContactForm from "./contact";

export default function Contact(params) {
 return(
  <>
<DemaggNavbar></DemaggNavbar>


<Breadcrumb title="Contact Us"
        backgroundImage="/img/header1.webp"
        items={[
          { label: "Contact", href: "/", isCurrent: true },
        ]}/>


        <ContactForm></ContactForm>
<Footer></Footer>


  </>
 ) 
}