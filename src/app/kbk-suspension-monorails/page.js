import Image from "next/image";
import { Breadcrumb } from "@/componts/breadcrumb";
import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";
import ProductInformation from "./tabs";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Container from "@mui/material/Container";

export const metadata = {
  title: "KBK Suspension Monorails in India ",
  description:
    "Timeskrane provides KBK suspension monorails in India along with KBK single girder suspension crane solutions. This setup ensures smooth and efficient material handling across industries.",
  keywords: [
    "KBK Modular Monorail Conveyor",
    "KBK single-girder suspension cranes",
    "KBK Suspension Monorails",
    "KBK light crane system",
    "KBK suspension monorails cost",
    "KBK Light Crane",
    "Single girder KBK crane",
    "KBK suspension configurator",
    "KBK Suspension Crane Configurator",
  ],
  alternates: {
    canonical: "https://www.timeskrane.com/kbk-suspension-monorails",
  },
  openGraph: {
    title: "KBK Suspension Monorails in India | Timeskrane",
    description:
      "Reliable KBK suspension monorail systems designed for smooth, flexible and efficient material handling applications.",
    url: "https://www.timeskrane.com/kbk-suspension-monorails",
    siteName: "Timeskrane",
    locale: "en_IN",
    type: "website",
  },
};

export default function KbkSuspension() {
  return (
    <>
      <Navbar />
      <Breadcrumb
        title="KBK suspension monorails
"
        backgroundImage="/img/header1.webp"
        items={[
          {
            label: "KBK suspension monorails",
            href: "/",
            isCurrent: true,
          },
        ]}
      />

      <div className="min-h-screen section bg-white">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-6">
                The smart choice for linear overhead material handling
              </div>
              <div className="flex justify-center">
                <div className=" mt-2 mb-6 text-center h-1 w-12 bg-yellow-400"></div>
              </div>

              <p className="text-base md:text-lg text-gray-700 mb-8 text-center">
                When you need a reliable, overhead handling solution that runs
                in a straight line, KBK suspension monorails from our KBK light
                crane system are built exactly for that. They&apos;re flexible,
                adaptable, and come with a wide range of options to match your
                exact requirements.
              </p>

              <div className="bg-gray-50 rounded-lg border p-6">
                <ul className="space-y-3 list-disc pl-5">
                  <li>
                    Simple, manually operated straight sections — also available
                    with lightweight aluminium profile sections
                  </li>
                  <li>Handles complex installations with ease</li>
                  <li>Load capacities up to 3,200 kg</li>
                  <li>
                    Flexible routing using straight and curved sections, track
                    switches, and turntables
                  </li>
                  <li>
                    Direct connection between pick-up and deposit points — works
                    in reversing operation or as a closed circuit
                  </li>
                  <li>
                    Available in manual, semi-automated, or fully automated
                    designs to suit your level of operation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-center mt-4  flex-col items-center">
          <h4 className="text-3xl font-bold my-4 text-[#676f77]">
            Product information
          </h4>
          <div className=" mt-2 mb-6 text-center h-1 w-12 bg-yellow-400"></div>
        </div>
        <Container maxWidth="md">
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">
                <span className="text-2xl font-bold  text-[#676f77]">
                  The benefits at a glance
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ProductInformation />
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
              <section className="py-12 ">
                <div className="container  px-4 md:px-6">
                  <div className="max-w-5xl ">
                    <p className="font-semibold text-gray-500 text-lg md:text-xl mb-6">
                      Profile section selection: maximum distances between
                      supports and headroom dimensions
                    </p>

                    <div className="mb-8">
                      <Image
                        src="/img/kbk-suspension-monorails-table.webp"
                        height={400}
                        width={400}
                        alt="KBK suspension monorails diagram"
                        className=" object-contain"
                      />
                    </div>

                    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm bg-white">
                      <p className="text-sm text-gray-500 p-4 bg-gray-100 border-b">
                        Load capacity [kg]
                      </p>
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                              KBK type
                            </th>
                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                              h [mm]
                            </th>
                            <th
                              className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider"
                              colSpan={8}
                            >
                              Load capacity [kg]
                            </th>
                          </tr>
                          <tr className="bg-gray-50">
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                              {" "}
                            </th>
                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                              Iw [m]
                            </th>
                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                              125
                            </th>
                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                              250
                            </th>
                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                              500
                            </th>
                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                              1,000
                            </th>
                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                              1,600
                            </th>
                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                              2,000
                            </th>
                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border-r">
                              2,500
                            </th>
                            <th className="px-4 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider">
                              3,200
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {[
                            ["I", "250", "3.8", "2.6", "", "", "", "", "", ""],
                            [
                              "II-L",
                              "370",
                              "7.9",
                              "5.9",
                              "3.7",
                              "2.7",
                              "",
                              "",
                              "",
                              "",
                            ],
                            [
                              "II",
                              "400",
                              "",
                              "8.0",
                              "5.7",
                              "3.2",
                              "",
                              "",
                              "",
                              "",
                            ],
                            [
                              "II-H",
                              "413",
                              "",
                              "10.5",
                              "9.2",
                              "6.7",
                              "",
                              "",
                              "",
                              "",
                            ],
                            [
                              "III",
                              "446",
                              "",
                              "",
                              "",
                              "",
                              "3.7",
                              "3.0",
                              "2.3",
                              "1.9",
                            ],
                          ].map((row, rowIndex) => (
                            <tr
                              key={rowIndex}
                              className={
                                rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                              }
                            >
                              {row.map((cell, cellIndex) => (
                                <td
                                  key={cellIndex}
                                  className={`px-4 py-3 text-sm border-r ${
                                    cellIndex === 0
                                      ? "font-medium text-left"
                                      : "text-center"
                                  } ${
                                    cellIndex === row.length - 1
                                      ? "border-r-0"
                                      : ""
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <div className="p-4 bg-gray-50 text-sm text-gray-500 border-t">
                        <p>h: Adjustable headroom dimension</p>
                        <p>lW: Suspension distance for suspension monorail</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </AccordionDetails>
          </Accordion>
        </Container>
        {/* Technical Data */}
      </div>
      <Footer />
    </>
  );
}
