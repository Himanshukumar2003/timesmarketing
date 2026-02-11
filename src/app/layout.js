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
  title:
    "Timeskrane | Your Trusted Lifting Partner for Safe and Reliable Crane Solutions",
  description:
    "Timeskrane delivers innovative, reliable, and safe lifting solutions tailored to industrial needs. Explore our range of cranes and lifting equipment built with precision and care.",
  icons: {
    icon: "/favicon.ico",
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
      </head>

      <body suppressHydrationWarning>
        <PageSidebar></PageSidebar>

        {children}
      </body>
    </html>
  );
}
