"use client";

import Image from "next/image";
import {
  CheckCircle,
  Package,
  Anchor,
  Truck,
  Cable,
  Cog,
  PenToolIcon as Tool,
  Ruler,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { Breadcrumb } from "@/componts/breadcrumb";
import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";
import Container from "@mui/material/Container";
export default function Home() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="KBK extending cranes"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "KBK extending cranes",
            href: "/",
            isCurrent: true,
          },
        ]}
      />

      <Container maxWidth="lg" className="">
        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-3xl font-bold text-gray-900 text-center mb-6">
                  Large overhang – constant or variable
                </h1>
                <p className="text-lg text-gray-700 mb-8 text-center">
                  Loads can also be moved beyond the crane runway using overhung
                  and extending cranes from our KBK light crane system. These
                  solutions offer greater room to maneuver – and facilitate
                  optimum utilization of the available space.
                </p>
                <div className="flex justify-center mb-6 items-center">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/W5gmjITGpCk?si=Q4qS3BmQFiAj1CyQ"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>

                <h3 className="mb-4">
                  Our solutions to meet specific requirements include:
                </h3>
                <ul className="mt-4  list-disc">
                  <li>
                    Overhung cranes which are fitted with crane girders that
                    extend beyond the width of the crane runway
                  </li>
                  <li>
                    Extending cranes that consist of a fixed section and a crane
                    section that can extend in both directions
                  </li>
                  <li>
                    Crane girders that extend up to 2,500 mm beyond the runway
                    span
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* <h2>
          Single-girder suspension cranes: maximum distances between supports,
          crane spans and girder lengths
        </h2> */}

          {/* Technical Data */}
          <section className="py-12 bg-gray-50 ">
            <div className="container max-w-8xl mx-auto">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                  Technical data
                </h2>
                <h3>Overhung bridge cranes</h3>
                <div className=" max-w-3xl">
                  <Image
                    src="/img/kbk-overhung-and-extending-cranes.webp"
                    height={100}
                    width={100}
                    layout="responsive"
                    alt=""
                  ></Image>
                </div>

                <div className="overflow-x-auto">
                  <p className="text-sm text-gray-500 mt-4">
                    <b> Maximum permissible overhang dimensions </b>according to
                    profile and crane type; also dependent on the payload{" "}
                  </p>
                  <div className="overflow-x-auto mt-6">
                    <p className="font-semibold text-center mb-2">
                      Additional length of the girder{" "}
                      <span className="italic">
                        l<sub>A</sub>
                      </span>{" "}
                      [mm]
                    </p>
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="text-left px-4 py-2 border">Type</th>
                          <th className="text-center px-4 py-2 border">
                            KBK I
                          </th>
                          <th className="text-center px-4 py-2 border">
                            KBK II-L
                          </th>
                          <th className="text-center px-4 py-2 border">
                            KBK III
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="px-4 py-2 border font-medium text-left">
                            Single-girder suspension crane
                          </td>
                          <td className="px-4 py-2 border text-center">-</td>
                          <td className="px-4 py-2 border text-center">
                            1,500
                          </td>
                          <td className="px-4 py-2 border text-center">
                            1,800
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-4 py-2 border font-medium text-left">
                            Double-girder suspension crane
                          </td>
                          <td className="px-4 py-2 border text-center">
                            1,600
                          </td>
                          <td className="px-4 py-2 border text-center">
                            2,300
                          </td>
                          <td className="px-4 py-2 border text-center">
                            2,500
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="my-4 text-2xl md:text-3xl font-bold ">
                    Extending cranes
                  </h3>
                  <div className=" max-w-3xl">
                    <Image
                      src="/img/kbk-overhung-and-extending-cranes-2.webp"
                      height={100}
                      width={100}
                      layout="responsive"
                      alt=""
                    ></Image>
                  </div>

                  <p className="text-sm text-gray-500 mt-4">
                    <b> Maximum permissible overhang dimensions </b>according to
                    profile and crane type; also dependent on the payload{" "}
                  </p>

                  <div className="overflow-x-auto mt-6">
                    <p className="font-semibold text-center mb-2">
                      Additional extension length{" "}
                      <span className="italic">
                        I<sub>A1</sub>
                      </span>{" "}
                      max [mm]
                    </p>
                    <table className="min-w-full border border-gray-300">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="text-left px-4 py-2 border">Type</th>
                          <th className="text-center px-4 py-2 border">
                            KBK II-L
                          </th>
                          <th className="text-center px-4 py-2 border">
                            KBK II
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white">
                          <td className="px-4 py-2 border font-medium text-left">
                            A 1/1
                          </td>
                          <td className="px-4 py-2 border text-center">
                            1,500
                          </td>
                          <td className="px-4 py-2 border text-center">
                            1,800
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-4 py-2 border font-medium text-left">
                            B 2/1
                          </td>
                          <td className="px-4 py-2 border text-center">
                            1,500
                          </td>
                          <td className="px-4 py-2 border text-center">
                            2,000
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-4 py-2 border font-medium text-left">
                            B 2/2
                          </td>
                          <td className="px-4 py-2 border text-center">
                            2,300
                          </td>
                          <td className="px-4 py-2 border text-center">
                            2,500
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          
          </section>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
}
