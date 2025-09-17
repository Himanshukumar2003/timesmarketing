import Container from "@mui/material/Container";
import Image from "next/image";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Breadcrumb } from "@/components/breadcrumb"; // Fixed path
import Navbar from "@/components/nav"; // Fixed path
import Footer from "@/components/footer"; // Fixed path

const data = [
  {
    product: "DC-Pro chain hoist",
    slug: "dc-pro-chain-hoist",
    summary: {
      title: "The industry benchmark",
      description:
        "With our DC-Pro chain hoist, we meet our own high standards in terms of quality and innovation. The DC-Pro chain hoist is a fully featured, highly versatile chain hoist, which can be installed and put into service in minimum time. Many features that have to be ordered and bought as extras elsewhere are already integrated as standard. The result:",
      benefits: [
        "All inclusive features at no extra cost",
        "Two lifting speeds as standard",
        "Improved safety thanks to 24 V contactor control, operating limit switches and elapsed operating time counter as standard",
        "Slipping clutch with automatic cut-out by means of speed monitoring",
        "Optimum ergonomics and ease of service",
        "Main components are maintenance-free for up to 10 years.",
      ],
      video: ["/img/chain-hoist/02-DC-Pro-EN.gif"],
    },
    productInformation: {
      tabHeading: "The benefits at a glance",
      heading: "High-performance equipment",
      benefits: [ // Corrected spelling
        {
          label: "High-performance equipment",
          points: [
            '"All inclusive" features already as standard',
            "Two lifting speeds as standard",
            "24 V Contactor control",
            "Operating limit switches (upper/lower)",
            "Elapsed operating time counter",
            "Aluminum housing components with powder coating",
            "Duty factor: 60% (40/20), 360 starts/hour",
            "Signals for applications with three motion axes",
            "Suitable for tandem operation",
            "Comprehensive selection of finely graded load capacities up to 5,000 kg",
            "Suspension brackets for improved C dimension (for sizes DC 1–10)",
          ],
        },
        {
          label: "Long service life",
          points: [
            "Gearbox, brake and slipping clutch are maintenance-free for up to 10 years (DC-Pro 10–25 brake for up to 5 years)",
            "Low-wear brake thanks to regenerative braking",
            "Brake adjustment is not necessary",
            "No load dropping thanks to slipping clutch arranged in front of the brake in the load-bearing arrangement",
            "Reduced chain wear thanks to 1/1 reeving for loads up to 1,000 kg",
            "Robust cylindrical-rotor motor with fan and separate DC brake",
            "No brake bonding thanks to double encapsulated brake",
          ],
        },
        {
          label: "High operating reliability",
          points: [
            "Standard requirements satisfied for functional safety",
            "No continuous slipping thanks to slipping clutch with automatic cut-out",
            "24 V contactor control with internal “tri-state” signal transfer",
            "Chain hoist and travel drive feature IP 55 enclosure, insulation class F",
            "Automatic braking if the control system fails",
          ],
        },
        {
          label: "Optimum ergonomics",
          points: [
            "Height-adjustable DSC/DSC-S control pendants with low-fatigue actuation force",
            "Control cable length and control pendant position can be adjusted to meet specific needs on site (without any need for wiring)",
            "Pivoting suspension bracket enables the chain hoist to be attached when the trolley has been fitted",
          ],
        },
        {
          label: "Service-friendly",
          points: [
            '"Plug & Lift" and "Plug & Drive" for all electrical connections',
            "Elapsed operating time counter, status and error messages shown on display",
            "Infrared diagnostic interface with IDAPSY software (to read out and manage specific data)",
            "Service cover for rapid access to plug connections, strain relief arrangements, collector for 3 m control cable and chain drive",
            "Chain lubrication through lubrication opening in the chain guide for improved lubrication between links (sizes DC 1–10)",
            "Reduced downtimes as chain drive can be replaced without dismantling motor or gearbox parts",
          ],
        },
      ],
    },
  },
  // ... (other products remain unchanged)
];

const OffsetGearedMotors = () => {
  const productData =
    data.find((product) => product.slug === "dcms-pro-manulift") || data[0];

  return (
    <>
      <Navbar />
      <Breadcrumb
        title={productData.product}
        backgroundImage="/img/header1.webp"
        items={[{ label: productData.product, href: "/", isCurrent: true }]}
      />
      <div className="p-6">
        <Container maxWidth="md">
          {/* Summary Section */}
          <h2 className="text-5xl font-bold text-gray-700">
            {productData.summary.title}
          </h2>

          <div className="mb-6 text-center h-1 w-20 bg-yellow-400 mt-5"></div>
          <p className="text-gray-600 mb-10">
            {productData.summary.description}
          </p>

          <ul className="list-disc list-inside mt-2">
            {productData.summary.benefits?.map((item, i) => (
              <li key={i} className="text-lg">
                {item}
              </li>
            ))}
          </ul>

          {productData.summary.video?.[0] && (
            <div className="mx-auto flex justify-center mt-4">
              <Image
                src={productData.summary.video[0]}
                height={500}
                width={500}
                alt={`${productData.product} video`}
                className="w-2xl"
              />
            </div>
          )}

          {/* Product Info Section */}
          <div className="flex justify-center mt-4 flex-col items-center">
            <h4 className="text-3xl font-bold my-4 text-[#676f77]">
              Product Information
            </h4>
            <div className="mt-2 mb-6 text-center h-1 w-12 bg-yellow-400"></div>
          </div>

          {/* Benefits Accordion */}
          {productData.productInformation?.benefits && ( // Corrected spelling
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <h2 className="text-2xl font-bold text-[#676f77] mb-4">
                  {productData.productInformation.tabHeading}
                </h2>
              </AccordionSummary>
              <AccordionDetails>
                <div className="space-y-8">
                  {productData.productInformation.benefits.map( // Corrected spelling
                    (item, index) => (
                      <div key={index} className="border-b pb-4">
                        <h3 className="text-xl font-semibold mb-2">
                          {item.label}
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          {item.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </AccordionDetails>
            </Accordion>
          )}
          {/* Technical Data Accordion */}
          {productData.productInformation?.technicalData && (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <h4 className="text-2xl font-bold text-[#676f77]">
                  {productData.productInformation.technicalData.tabHeading}
                </h4>
              </AccordionSummary>
              <AccordionDetails>
                <section className="my-4">
                  <h4 className="text-xl font-bold text-[#676f77] mb-4">
                    {productData.productInformation.technicalData.heading}
                  </h4>

                  {/* Get array of tables even if single */}
                  {(Array.isArray(
                    productData.productInformation.technicalData.tableData
                  )
                    ? [productData.productInformation.technicalData]
                    : productData.productInformation.technicalData
                  ).map((tableSet, tIndex) => (
                    <div key={tIndex} className="mb-6">
                      {/* Optional sub-heading if needed (use heading2 or so) */}

                      {/* Table */}
                      {tableSet.tableData?.length > 0 && (
                        <table className="table-auto w-full border border-gray-300 mt-4 text-sm text-left shadow-sm rounded-lg overflow-hidden">
                          <thead className="bg-gray-100 text-gray-700 uppercase tracking-wide">
                            <tr>
                              {tableSet.tableHeadings.map((heading, i) => (
                                <th
                                  key={i}
                                  className="border border-gray-300 px-4 py-2"
                                >
                                  {heading.label}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="text-gray-800">
                            {tableSet.tableData.map((row, i) => (
                              <tr
                                key={i}
                                className={
                                  i % 2 === 0
                                    ? "bg-white"
                                    : "bg-gray-50 hover:bg-orange-50"
                                }
                              >
                                {tableSet.tableHeadings.map((heading, j) => {
                                  const label = heading.label.toLowerCase();
                                  const keyMatch = Object.keys(row).find((k) =>
                                    label.includes(k.toLowerCase())
                                  );
                                  const value = keyMatch ? row[keyMatch] : "";

                                  return (
                                    <td
                                      key={j}
                                      className="border border-gray-300 px-4 py-2 text-sm"
                                    >
                                      {typeof value === "object"
                                        ? Object.entries(value)
                                            .map(([k, v]) => `${k}: ${v}`)
                                            .join(", ")
                                        : value}
                                    </td>
                                  );
                                })}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                  ))}

                  {/* Description */}
                  {productData.productInformation.technicalData.description
                    ?.length > 0 && (
                    <div className="mt-4">
                      <ul className="list-disc list-inside text-gray-700 text-sm">
                        {productData.productInformation.technicalData.description.map(
                          (point, i) => (
                            <li key={i}>{point}</li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  {/* Image */}
                  {productData.productInformation.technicalData.img && ( // Uncommented this section
                    <div className="mt-6 flex justify-center">
                      <Image
                        src={productData.productInformation.technicalData.img}
                        alt="Technical data"
                        width={600}
                        height={400}
                        className="rounded shadow"
                      />
                    </div>
                  )}
                </section>
              </AccordionDetails>
            </Accordion>
          )}
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default OffsetGearedMotors;
