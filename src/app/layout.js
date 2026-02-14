// import { Geist, Geist_Mono } from "next/font/google";
import PageSidebar from "@/componts/pageSidebar";
import "./globals.css";
import Script from "next/script";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Your Trusted Lifting Partner for Safe and Reliable Crane Solutions",
  description:
    "Timeskrane provides reliable and safe lifting solutions for industrial needs. Find precision-built cranes and high-performance equipment.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords:
    "hoist crane, hoist for crane, hoisting lift, eot crane single girder, single girder eot crane, hoist wire rope, single girder eot crane manufacturer, material lifting equipment, Tower Crane Rental Services in India, Crane Rental Services in India, best crane services for rental purpose in India, Loading And Unloading Crane Service, Affordable Crane Rental Services",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Timeskrane | Your Trusted Lifting Partner for Safe and Reliable Crane Solutions",
    description:
      "Timeskrane delivers innovative, reliable, and safe lifting solutions tailored to industrial needs.",
    url: "https://www.timeskrane.com/",
    siteName: "Timeskrane",
    images: [
      {
        url: "https://www.timeskrane.com/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Timeskrane Industrial Crane Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Timeskrane | Your Trusted Lifting Partner for Safe and Reliable Crane Solutions",
    description:
      "Timeskrane delivers innovative, reliable, and safe lifting solutions tailored to industrial needs.",
    images: ["https://www.timeskrane.com/img/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="r4ZZOH9QQgw_c2NbXTjvEv-ibi5VErRU-npAqD-mu5Q"
        />

        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TQ78Z4WX3K"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TQ78Z4WX3K');
          `}
        </Script>

        <Script type="application/ld+json" id="application">
          {`
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
      "@type": "Product",
      "name": "EOT Crane System",
      "brand": {
        "@type": "Brand",
        "name": "Timeskrane"
      },
      "description": "Electric Overhead Travelling (EOT) cranes designed for heavy industrial lifting and material handling.",
      "category": "Industrial Crane"
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
`}
        </Script>
      </head>

      <body suppressHydrationWarning>
        <PageSidebar></PageSidebar>

        {children}
      </body>
    </html>
  );
}
