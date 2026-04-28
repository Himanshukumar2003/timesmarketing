import Navbar from "@/componts/nav";
import SlickSlider from "@/componts/slider";
import CardsSection from "@/componts/products";
import UniqueFeatures from "@/componts/why-chose-us";
import Footer from "@/componts/footer";
import ServiceCards from "@/componts/services";
import GridGallery from "@/componts/gallery";
import About from "@/componts/about";
import Script from "next/script";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Script
        type="application/ld+json"
        id="application"
        strategy="beforeInteractive"
      >
        {`
            {
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "name": "Timeskrane",
                  "url": "https://www.timeskrane.com/",
                  "logo": "https://www.timeskrane.com/img/logo.png",
                  "description": "Timeskrane provides industrial crane and lifting solutions, including EOT cranes, hoists, KBK systems, and customized lifting equipment.",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "India"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "sales",
                    "areaServed": "IN"
                  }
                },
                {
                  "@type": "Service",
                  "serviceType": "Industrial Crane and Lifting Solutions",
                  "provider": {
                    "@type": "Organization",
                    "name": "Timeskrane"
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "India"
                  },
                  "description": "Industrial crane solutions including EOT cranes, KBK light crane systems, hoists, and customized lifting equipment for industries."
                },
             
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://www.timeskrane.com/"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Cranes",
                      "item": "https://www.timeskrane.com/eot-cranes"
                    }
                  ]
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "What types of cranes does Timeskrane provide?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Timeskrane provides industrial crane solutions including EOT cranes, KBK light crane systems, underslung cranes, and hoists for safe and efficient material handling."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What industries use industrial crane services?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Industrial crane services are used in manufacturing plants, warehouses, construction sites, engineering units, steel plants, and heavy production industries."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is an EOT crane used for?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "An EOT crane is used for lifting and moving heavy materials inside factories, workshops, and warehouses with precision and safety."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is the difference between EOT crane and gantry crane?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "EOT cranes run on overhead runway beams inside buildings, while gantry cranes move on ground rails and are often used outdoors or in open yards."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is a KBK light crane system?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A KBK light crane system is a modular material handling system used for light to medium loads, offering flexibility for assembly lines and production areas."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Why is industrial crane safety important?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Industrial crane safety prevents workplace accidents, protects workers, avoids equipment damage, and ensures reliable lifting operations."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How do I choose the right crane for my industry?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Choosing the right crane depends on load capacity, lifting height, workspace layout, frequency of use, and the type of material being handled."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What are hoists used for in lifting systems?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Hoists are lifting devices used to raise or lower loads vertically using chains or wire ropes and are commonly integrated into crane systems."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Do industrial crane solutions improve productivity?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, crane systems reduce manual handling, speed up material movement, improve workflow efficiency, and increase overall industrial productivity."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What are customized crane solutions?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Customized crane solutions are lifting systems designed based on specific industrial requirements such as load type, plant layout, and operational needs."
                      }
                    }
                  ]
                }
              ]
            }
          `}
      </Script>
      <Navbar></Navbar>
      <SlickSlider></SlickSlider>
      <About></About>
      <UniqueFeatures />
      <CardsSection />
      <ServiceCards></ServiceCards>

      <GridGallery></GridGallery>
      <Footer />
    </>
  );
}
