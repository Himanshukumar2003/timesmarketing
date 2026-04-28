import PageSidebar from "@/componts/pageSidebar";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "EOT Crane Manufacturers in India | Timeskrane",
  description:
    "Timeskrane is one of the reliable EOT crane manufacturers in India. They provide safe, long-lasting, and customized lifting solutions for various industries.",
  icons: {
    icon: "/favicon.ico",
  },

  authors: [
    {
      name: "Timeskrane",
      url: "Timeskrane",
    },
  ],

  creator: "Timeskrane",
  publisher: "Timeskrane",

  keywords:
    "hoist crane, hoist for crane, hoisting lift, eot crane single girder, single girder eot crane, hoist wire rope, single girder eot crane manufacturer, material lifting equipment, Tower Crane Rental Services in India, Crane Rental Services in India, best crane services for rental purpose in India, Loading And Unloading Crane Service, Affordable Crane Rental Services",

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
      </head>

      <body suppressHydrationWarning>
        <PageSidebar />
        {children}

        {/* Google Analytics */}
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

        {/* JSON-LD Structured Data */}
      </body>
    </html>
  );
}
