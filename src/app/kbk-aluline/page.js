import Image from "next/image";
import { PenToolIcon as Tool, ArrowRight } from "lucide-react";
import ProductInformation from "./tabs";
import { Breadcrumb } from "@/componts/breadcrumb";
import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";

export const metadata = {
  title: "KBK Aluline Systems in India | Timeskrane",
  description:
    "Timeskrane is a trusted provider of KBK Aluline systems in India. We offer reliable KBK Aluline light crane systems for effective material handling.",
  keywords: [
    "Kone",
    "KBK Light Crane Systems",
    "KBK Aluline price",
    "KBK light crane system in India",
    "KBK manual",
    "KBK parts in India",
    "KBK modular system",
    "KBK light Crane in India",
  ],
  alternates: {
    canonical: "https://www.timeskrane.com/kbk-aluline",
  },
  openGraph: {
    title: "KBK Aluline Systems in India | Timeskrane",
    description:
      "Reliable KBK Aluline light crane systems in India designed for flexible and efficient material handling.",
    url: "https://www.timeskrane.com/kbk-aluline",
    siteName: "Timeskrane",
    locale: "en_IN",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="KBK Aluline"
        backgroundImage="/img/header1.webp"
        items={[{ label: "KBK Aluline", href: "/", isCurrent: true }]}
      />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-3xl md:text-3xl font-bold text-gray-900 text-center mb-6">
                Demag KBK Aluline Light Crane System — Where Ergonomics Meets
                Productivity
              </div>
              <div className="flex justify-center">
                <div className=" mt-2 mb-6 text-center h-1 w-12 bg-yellow-400"></div>
              </div>
              <p className="text-lg text-gray-700 mb-8 text-center">
                The numbers don&apos;t lie. International studies consistently
                show that better workplace ergonomics leads directly to higher
                productivity. So the question isn&apos;t whether ergonomics
                matters — it&apos;s whether your equipment is keeping up.
                <br></br>
              </p>
              <p className="text-lg text-gray-700    text-center mb-3">
                <b>That&apos;s exactly where the KBK Aluline comes in.</b>
              </p>
              <p className="text-lg text-gray-700 mb-8 text-center">
                We didn&apos;t just improve our light crane system — we
                completely redefined what smooth running means. The result is
                one of the smoothest-running systems on the market today, making
                every movement easier, more controlled, and less physically
                demanding for your operators.
              </p>
              <p>
                The benefits speak for themselves. Your team gets more ergonomic
                workflows, more convenient load handling, and a system that now
                confidently handles loads of up to 2,000 kg. Whether you&apos;re
                running an assembly line, a workshop, or a full production
                facility, the KBK Aluline is built to help your people work
                smarter — every single day.
              </p>
              <div className="flex justify-center my-6 items-center">
                {" "}
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/W5gmjITGpCk?si=c9EGsdtGR7l7bLjN"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Smart Planning Starts with the Right System
              </h3>
              <p className="text-lg text-gray-700 mb-8 ">
                <b>
                  Every workspace is different — and the KBK Aluline is designed
                  with that in mind.
                </b>
              </p>
              <p className="text-lg text-gray-700">
                Our optimised and modular KBK Aluline components are built to
                address spatial challenges right from the planning stage.
                Nothing is left to chance. Our optimised trolleys reduce
                approach dimensions, helping you make the most of every inch of
                available space without compromise.
              </p>
              <p className="text-lg text-gray-700">
                {" "}
                And it doesn&apos;t stop there. During the project engineering
                phase, planners get greater flexibility than ever before. Larger
                distances between suspensions and the option of an integrated
                conductor line mean less installation work, lower assembly
                costs, and a smoother path from design to operation.
              </p>
              <Image
                src="/img/tablel.webp"
                height={100}
                width={100}
                layout="responsive"
                className="my-6"
                alt=""
              ></Image>
              <h3 className="text-xl font-semibold mb-4">
                Ready for Change, Whenever It Comes
              </h3>
              <p className="text-lg text-gray-700 my-6">
                Business needs evolve — and your crane system should be able to
                keep up.<br></br>
                That&lsquo;ss why KBK additional components are designed to give
                installation owners the flexibility to adapt at any time. Take
                variable travel path limitation, for example. It allows you to
                restrict travel motions in just a few simple steps — no
                complicated procedures, no lengthy downtime. Quick to install
                and easy to adjust, it&apos;s the kind of practical solution
                that makes a real difference on the ground.
              </p>
            </div>
          </div>
        </section>
        <div className="section">
          <Container maxWidth="md">
            <div className="flex justify-center   flex-col items-center">
              <h4 className="text-3xl font-bold my-4 text-[#676f77]">
                Product information
              </h4>
              <div className=" mt-2 mb-6 text-center h-1 w-12 bg-yellow-400"></div>
            </div>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">
                  {" "}
                  <span className="text-2xl font-bold  text-[#676f77]">
                    The benefits at a glance
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ProductInformation></ProductInformation>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">
                  <span className="text-2xl font-bold  text-[#676f77]">
                    Other features
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <section className="bg-white">
                  <div>
                    <div>
                      <div className="mb-10">
                        <h3 className="text-xl font-semibold mb-4">
                          Profile Sections
                        </h3>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              8 inside-running extruded profile sections
                              available in 5 sizes, two of which feature
                              integrated conductor lines
                            </span>
                          </li>

                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              NEW: Demag KBK Aluline profile A28 offers 50%
                              larger hanging distances
                            </span>
                          </li>

                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              Easy to install thanks to simple bolted connecting
                              plates
                            </span>
                          </li>

                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              Extremely low deadweight combined with high
                              rigidity for reliable performance
                            </span>
                          </li>

                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              Compatible with older installations via adapters
                            </span>
                          </li>

                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              ITEM-compatible slots for added flexibility
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="mb-10">
                        <h3 className="text-xl font-bold text-[#676f77] mb-4">
                          Profile Sections at a Glance
                        </h3>

                        <ul className="space-y-2">
                          {[
                            "KBK Aluline A12 — 120 mm headroom dimension",
                            "KBK Aluline A16 — 160 mm headroom dimension",
                            "KBK Aluline A18 — 180 mm headroom dimension",
                            "KBK Aluline A18-R — with integrated conductor line",
                            "KBK Aluline A22 — 220 mm headroom dimension",
                            "KBK Aluline A22-R — with integrated conductor line",
                            "KBK Aluline A28 — 280 mm headroom dimension",
                            "KBK Aluline A28-R — with integrated conductor line",
                          ].map(function (item, index) {
                            return (
                              <li key={index} className="flex items-start">
                                <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-[#676f77] mb-4">
                          Suspension Variants
                        </h3>

                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              Articulated Classic suspensions for flexible
                              movement
                            </span>
                          </li>

                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              Rigid KBK Ergo suspensions for stable applications
                            </span>
                          </li>

                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              Can be suspended directly from workshop ceilings
                              or roof structures — no additional support columns
                              required
                            </span>
                          </li>

                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span>
                              Height-adjustable with millimetre precision for a
                              perfect fit
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography component="span">
                  <span className="text-2xl font-bold  text-[#676f77]">
                    Technical data
                  </span>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <section className="">
                  <div className="">
                    <div className="">
                      <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-300">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="min-w-[180px] px-4 py-2 border">
                                Profile section/load capacity [kg]
                              </th>
                              <th className="text-center px-4 py-2 border">
                                100
                              </th>
                              <th className="text-center px-4 py-2 border">
                                150
                              </th>
                              <th className="text-center px-4 py-2 border">
                                250
                              </th>
                              <th className="text-center px-4 py-2 border">
                                500
                              </th>
                              <th className="text-center px-4 py-2 border">
                                750
                              </th>
                              <th className="text-center px-4 py-2 border">
                                1,000
                              </th>
                              <th className="text-center px-4 py-2 border">
                                1,250
                              </th>
                              <th className="text-center px-4 py-2 border">
                                1,600
                              </th>
                              <th className="text-center px-4 py-2 border">
                                2,000
                              </th>
                              <th className="text-center px-4 py-2 border">
                                2,500
                              </th>
                              <th className="text-center px-4 py-2 border">
                                2,600
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              [
                                "A12",
                                "4.6",
                                "3.7",
                                "2.9",
                                "2.0",
                                "1.4",
                                "1.0",
                                "",
                                "",
                                "",
                                "",
                                "",
                              ],
                              [
                                "A16",
                                "7.0",
                                "5.7",
                                "4.4",
                                "3.1",
                                "2.3",
                                "1.8",
                                "",
                                "",
                                "",
                                "",
                                "",
                              ],
                              [
                                "A18",
                                "8.0",
                                "8.0",
                                "6.4",
                                "4.5",
                                "3.7",
                                "3.2",
                                "",
                                "",
                                "",
                                "",
                                "",
                              ],
                              [
                                "A22",
                                "8.0",
                                "8.0",
                                "8.0",
                                "5.9",
                                "4.8",
                                "4.2",
                                "3.6",
                                "2.9",
                                "2.3",
                                "1.8",
                                "1.7",
                              ],
                              [
                                "A28",
                                "10.5",
                                "10.5",
                                "10.5",
                                "9.2",
                                "7.5",
                                "6.5",
                                "5.8",
                                "5.1",
                                "4.2",
                                "3.4",
                                "3.2",
                              ],
                            ].map((row, idx) => (
                              <tr key={idx}>
                                {row.map((cell, i) => (
                                  <td
                                    key={i}
                                    className={`px-4 py-2 border text-center ${
                                      i === 0 ? "font-medium text-left" : ""
                                    }`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <p className="text-sm text-gray-500 mt-4">
                        Suspension distances [m]
                      </p>
                    </div>
                  </div>
                </section>
              </AccordionDetails>
            </Accordion>
          </Container>
          {/* Technical Data */}
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
