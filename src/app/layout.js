// import { Geist, Geist_Mono } from "next/font/google";
import PageSidebar from "@/componts/pageSidebar";
import "./globals.css";

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
      <body suppressHydrationWarning>
        <PageSidebar></PageSidebar>

        {children}
      </body>
    </html>
  );
}
