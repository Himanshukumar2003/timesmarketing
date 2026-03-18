import Container from "@mui/material/Container";
import Image from "next/image";
import { use } from "react"; // Import React.use to handle promise unwrapping

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Breadcrumb } from "@/componts/breadcrumb";
import Navbar from "@/componts/nav";
import Footer from "@/componts/footer";

const data = [
  {
    product: "DC-Pro chain hoist",
    slug: "dc-pro-chain-hoist",
    metadata: {
      title: "DC-Pro Chain Hoist in India | Timeskrane",
      description:
        "Upgrade your lifting system with DC-Pro Chain Hoists from Timeskrane, built for reliable performance, smooth handling, and long-lasting industrial use.",
      keywords: [
        "Demag dc pro chain hoist in india",
        "Dc pro chain hoist in india price",
        "Demag chain hoist manual",
        "Demag DC-Pro chain hoist manual",
        "Electric Chain Hoist manufacturer in India",
        "Demag DC Pro hoist",
      ],
      alternates: {
        canonical: "https://www.timeskrane.com/chain-hoists/dc-pro-chain-hoist",
      },
      openGraph: {
        title: "DC-Pro Chain Hoist in India | Timeskrane",
        description:
          "Upgrade your lifting system with DC-Pro Chain Hoists from Timeskrane, built for reliable performance, smooth handling, and long-lasting industrial use.",
        url: "https://www.timeskrane.com/chain-hoists/dc-pro-chain-hoist",
        siteName: "Timeskrane",
        locale: "en_IN",
        type: "website",
      },
    },
    summary: {
      title: "The new benchmark",
      description:
        "We designed the DC-Pro chain hoist to be the best in its class. It’s a versatile powerhouse that's incredibly easy to set up, getting you to work faster. Plus, we’ve included all the premium features that other companies charge extra for, right from the start.",
      benefits: [
        "Everything included: Premium features come standard, with no hidden costs.",
        "Precision control: Two lifting speeds are built-in for better handling.",
        "Safety first: Includes 24 V control, limit switches, and a usage counter for peace of mind.",
        "Smart protection: The slipping clutch automatically monitors speed to prevent overloads.",
        "Built for you: Designed for comfort and easy maintenance, with main components that stay worry-free for up to 10 years.",
      ],
      video: ["/img/chain-hoist/02-DC-Pro-EN.gif"],
    },
    productInformation: {
      tabHeading: "The benefits at a glance",
      heading: "High-Performance Equipment",
      benefits: [
        {
          label: "High-performance equipment",
          points: [
            "Truly all-inclusive: The features you need are built-in, not added on.",
            "Precision handling: Dual lifting speeds come standard.",
            "Safety built-in: Includes 24 V contactor control, limit switches, and a usage counter.",
            "Rugged design: Durable, powder-coated aluminum housing.",
            "Reliable output: Ready for heavy use with a 60% duty factor and 360 starts per hour.",
            "Smart versatility: Fully equipped for three-axis motion and tandem operation.",
            "Flexible capacity: A wide range of options to handle loads up to 5,000 kg.",
            "Compact design: Improved suspension brackets for better overhead clearance (DC 1–10).",
          ],
        },
        {
          label: "Long service life",
          points: [
            "Low maintenance: The gearbox, brake, and clutch are maintenance-free for up to 10 years (DC-Pro 10–25 brake for up to 5 years).",
            "Smart braking: Regenerative braking minimizes wear, so you never have to worry about manual brake adjustments.",
            "Enhanced safety: The slipping clutch is positioned ahead of the brake, ensuring the load stays secure.",
            "Reduced wear: 1/1 reeving for loads up to 1,000 kg helps your chain last much longer.",
            "Built to last: A robust motor with a separate cooling fan and a double-encapsulated, non-bonding brake keeps things running smoothly in any environment.",
          ],
        },
        {
          label: "High operating reliability",
          points: [
            "  Built-in safety: Meets all functional safety standards automatically.",
            "Smart monitoring: Our slipping clutch includes an automatic cut-out to prevent continuous slipping.",
            "Robust electronics: Features a 24 V control system with tri-state signal transfer for extra security.",
            "Weather-ready: Fully IP 55 enclosed to protect against dust and moisture.",
            "Fail-safe design: The system automatically brakes if the control signal is lost.",
          ],
        },
        {
          label: "Optimum ergonomics",
          points: [
            "Comfort first: Height-adjustable control pendants designed to reduce fatigue.",
            "Custom setup: Easily adjust cable length and control position on-site without any complex rewiring.",
            "Easy attachment: The pivoting suspension bracket makes installation simple, even when the trolley is already fitted.",
          ],
        },
        {
          label: "Service-friendly",
          points: [
            `"Plug & Play": All electrical connections use simple "Plug & Lift" and "Plug & Drive" tech.`,
            "Clear status updates: An onboard display shows operation hours and any error messages instantly.",
            "Smart diagnostics: Manage and read data easily via our infrared IDAPSY software.",
            "Quick access: The service cover lets you get to connections, cables, and the chain drive in seconds.",
            "Built-in lubrication: A dedicated port (sizes DC 1–10) makes keeping your chain smooth and long-lasting a breeze.",
            "Less downtime: Designed so you can replace the chain drive without having to take apart the motor or gearbox.",
          ],
        },
      ],
    },
  },

  {
    product: "DCS-Pro chain hoist",
    slug: "dcs-pro-chain-hoist",

    metadata: {
      title: "Buy Demag DCS-Pro Chain Hoist in India",
      description:
        "Choose Timeskrane to buy Demag DCS-Pro chain hoist in India, built for precision handling, strong safety, and dependable operations.",
      keywords: [
        "Demag DCS-Pro Chain",
        "Demag DC-Pro chain hoist manual",
        "Demag DCS-pro electric hoist",
        "Demag dc pro 25 price in india",
        "Demag dc pro 25 specifications",
        "Demag DC-Pro Chain Hoist Supplier",
        "Electric Chain Hoist manufacturer in India",
        "Demag dc pro chain hoist supplier in india",
      ],
      alternates: {
        canonical:
          "https://www.timeskrane.com/chain-hoists/dcs-pro-chain-hoist",
      },
      openGraph: {
        title: "Buy Demag DCS-Pro Chain Hoist in India",
        description:
          "Choose Timeskrane to buy Demag DCS-Pro chain hoist in India, built for precision handling, strong safety, and dependable operations.",
        url: "https://www.timeskrane.com/chain-hoists/dcs-pro-chain-hoist",
        siteName: "Timeskrane",
        locale: "en_IN",
        type: "website",
      },
    },

    summary: {
      title: "A hoist that pays for itself",
      description:
        "The DCS-Pro chain hoist is built for operations where precision really matters — gently and safely lifting, lowering, and positioning valuable or sensitive parts with confidence. It's efficient, reliable, and thanks to nearly double the rated speed in the partial load range, it keeps things moving fast when you need it most.",
      benefits: [
        "Variable speed across the full load range",
        "Exceptionally fine control at slow speeds",
        "Up to 90% higher speeds for lighter loads thanks to the Pro-Hub function",
        "Load capacities up to 3,200 kg",
      ],
      video: ["/img/chain-hoist/03-DCS-Pro-EN.gif"],
    },
    productInformation: {
      tabHeading: "Why the DCS-Pro works for you",
      benefits: [
        {
          label: "High-performance equipment",
          points: [
            "Comprehensive features included as standard — nothing extra needed",
            "Two lifting speeds as standard",
            "24 V contactor control",
            "Operating limit switches for upper and lower positions",
            "Elapsed operating time counter included",
            "Aluminium housing components with powder coating",
            "Duty factor: 60% (40/20), 360 starts/hour",
            "Signal outputs for applications with three motion axes",
            "Suitable for tandem operation",
            "Wide selection of finely graded load capacities up to 5,000 kg",
            "Suspension brackets for improved C dimension — available for sizes DC 1–10",
          ],
        },
        {
          label: "High safety and reliability",
          points: [
            "Meets standard requirements for functional safety",
            "No continuous slipping thanks to slipping clutch with automatic cut-out",
            '24 V contactor control with internal "tri-state" signal transfer',
            "Chain hoist and travel drive feature IP 55 enclosure, insulation class F",
            "Automatically brakes if the control system fails",
          ],
        },
        {
          label: "Optimised for easy service",
          points: [
            "Quick to install and commission — minimal setup time needed",
            "Fast, ergonomic height adjustment of the control pendant with no extra wiring required",
            "Pivoting service cover gives rapid access to all plug-and-socket connections, pendant height adjustment, and chain lubrication",
            "Elapsed operating time counter and diagnosis interface included",
            "Interchangeable chain drive can be replaced quickly without removing the motor or gearbox",
            "Full features give you flexibility right out of the box",
            "Gearbox, brake, and slipping clutch are maintenance-free for up to 10 years",
          ],
        },
        {
          label: "Built to last",
          points: [
            "Gearbox, brake, and slipping clutch maintenance-free for up to 10 years (DC-Pro 10–25 brake up to 5 years)",
            "Low-wear brake thanks to regenerative braking",
            "No brake adjustment needed — ever",
            "Slipping clutch arranged in front of the brake prevents load dropping",
            "Reduced chain wear thanks to 1/1 reeving for loads up to 1,000 kg",
            "Robust cylindrical-rotor motor with fan and separate DC brake",
            "Double encapsulated brake prevents brake bonding",
          ],
        },
        {
          label: "Easy to service",
          points: [
            "Plug-and-play connections keep setup time to a minimum",
            "Quick access to all important plug-in connections",
            "Separate service panel with 3m pendant cable, gear and brake service cover",
            "Chain lubrication slot for easy service access",
            "Chain drive and brake can be replaced quickly when needed",
          ],
        },
        {
          label: "Comfortable to operate",
          points: [
            "Simple commissioning and servicing via plug-&-lift and plug-&-drive connections",
            "Fatigue-free operation with the ergonomic, plug-in DSC-S control pendant",
            "Two sizes of suspension bracket give you flexibility as standard",
            "Quick and easy trolley installation with infinitely variable adjustment to the flange width",
          ],
        },
      ],

      technicalData: {
        tabHeading: "Technical Data",
        heading: "DCS-Pro chain hoist: variable lifting speeds",
        tableHeadings: [
          "LC (kg)",
          "Chain hoist type (DCS-Pro)",
          "Reeving",
          "FEM",
          "Lifting speed at 50/60 Hz [m/min]",
          "Hook path [m]",
          "Weight for chain length (kg)",
        ],
        tableData: [
          [
            "80",
            "1",
            "1/1",
            "4m",
            "VSrated: 0.15-30, VSmax: 30",
            "5 and 8²)",
            "5m: 25, 8m: 27",
          ],
          ["100", "1", "", "", "", "", ""],
          ["125", "", "", "", "", "", ""],
          [
            "160",
            "2",
            "",
            "4m",
            "VSrated: 0.15-16, VSmax: 30",
            "",
            "5m: 25, 8m: 27",
          ],
          ["200", "", "", "3m", "", "", ""],
          ["250", "", "", "2m*)", "", "", ""],
          [
            "315",
            "5",
            "",
            "4m",
            "VSrated: 0.08-8, VSmax: 15",
            "",
            "5m: 29, 8m: 31",
          ],
          [
            "",
            "10",
            "",
            "",
            "VSrated: 0.11-12, VSmax: 22",
            "",
            "5m: 59, 8m: 63",
          ],
          [
            "400",
            "5",
            "",
            "3m",
            "VSrated: 0.08-8, VSmax: 15",
            "",
            "5m: 29, 8m: 31",
          ],
          [
            "",
            "10",
            "",
            "4m",
            "VSrated: 0.11-12, VSmax: 22",
            "",
            "5m: 59, 8m: 63",
          ],
          [
            "500",
            "5",
            "",
            "2m*)",
            "VSrated: 0.08-8, VSmax: 15",
            "",
            "5m: 29, 8m: 31",
          ],
          [
            "",
            "10",
            "",
            "4m",
            "VSrated: 0.11-12, VSmax: 22",
            "",
            "5m: 59, 8m: 63",
          ],
          [
            "630",
            "10",
            "",
            "4m",
            "VSrated: 0.06-6, VSmax: 11",
            "",
            "5m: 54, 8m: 58",
          ],
          ["", "", "", "", "VSrated: 0.11-12, VSmax: 22", "", "5m: 59, 8m: 63"],
          [
            "800",
            "",
            "",
            "3m",
            "VSrated: 0.06-6, VSmax: 11",
            "",
            "5m: 54, 8m: 58",
          ],
          [
            "",
            "",
            "",
            "2m*)",
            "VSrated: 0.11-12, VSmax: 22",
            "",
            "5m: 59, 8m: 63",
          ],
          [
            "1.000",
            "15",
            "",
            "4m",
            "VSrated: 0.08-8, VSmax: 15",
            "4",
            "5m: 75, 8m: 80",
          ],
          [
            "1.250",
            "10",
            "",
            "1Am",
            "VSrated: 0.04-4, VSmax: 7",
            "5 and 8",
            "5m: 54, 8m: 58",
          ],
          [
            "",
            "",
            "2/1",
            "4m",
            "VSrated: 0.06-6, VSmax: 11",
            "",
            "5m: 68, 8m: 72",
          ],
          [
            "",
            "15",
            "1/1",
            "3m",
            "VSrated: 0.08-8, VSmax: 15",
            "4",
            "5m: 75, 8m: 80",
          ],
          [
            "1.600",
            "10",
            "2/1",
            "3m",
            "VSrated: 0.06-6, VSmax: 11",
            "5 and 8",
            "5m: 68, 8m: 72",
          ],
          [
            "",
            "15",
            "1/1",
            "2m*)",
            "VSrated: 0.08-8, VSmax: 15",
            "4",
            "5m: 75, 8m: 80",
          ],
          [
            "2.000",
            "10",
            "2/1",
            "2m*)",
            "VSrated: 0.06-6, VSmax: 11",
            "5 and 8",
            "5m: 68, 8m: 72",
          ],
          [
            "",
            "15",
            "",
            "4m",
            "VSrated: 0.04-4, VSmax: 7",
            "4",
            "5m: 89, 8m: 99",
          ],
          ["2.500", "10", "", "1Am", "", "5 and 8", "5m: 68, 8m: 72"],
          ["", "15", "", "3m", "", "4", "5m: 89, 8m: 99"],
          ["3.200", "15", "", "2m*)", "", "4", "5m: 89, 8m: 99"],
        ],
        description: [
          "1) Maximum lifting speed in the partial load range/without load.",
          "2) Longer hook paths on request.",
          "FEM corresponds to 1000 hours at full load.",
        ],
        img: "/img/chain-hoist/dcs-pro-table.webp",
      },
    },
  },
  {
    product: "DCM-Pro Manulift",
    slug: "dcm-pro-manulift",

    metadata: {
      title: "DCM-Pro Manulift Chain Hoist in India | Timeskrane",
      description:
        "Timeskrane brings DCM-Pro Manulift chain hoists for quick, safe, and easy one-hand load handling, improving efficiency and reliability in industrial lifting tasks.",
      keywords: [
        "Demag DC-Pro chain hoist manual",
        "Demag DC-Com chain hoist",
        "Best Electric Chain Hoist",
        "Demag hoist pendant cable",
        "DC hoist motor",
        "Demag DC Pro and DC Com Chain Hoists Supplier in India",
        "Best Demag Chain Hoist Suppliers in India",
      ],
      alternates: {
        canonical: "https://www.timeskrane.com/chain-hoists/dcm-pro-manulift",
      },
      openGraph: {
        title: "DCM-Pro Manulift Chain Hoist in India | Timeskrane",
        description:
          "Timeskrane brings DCM-Pro Manulift chain hoists for quick, safe, and easy one-hand load handling, improving efficiency and reliability in industrial lifting tasks.",
        url: "https://www.timeskrane.com/chain-hoists/dcm-pro-manulift",
        siteName: "Timeskrane",
        locale: "en_IN",
        type: "website",
      },
    },
    summary: {
      title: "One hand. Total control. Zero hassle.",
      description:
        "The DCM-Pro Manulift is designed for operators who need to move loads quickly and safely — with just one hand. Built on the lifting unit of the DC-Pro chain hoist and paired with the DSM-C control unit, the control unit connects directly to the load handling attachment. That means one hand does it all — operating the hoist and guiding the load at the same time. Here's what else makes it a great choice:",
      benefits: [
        "Effortless one-handed operation and load guidance",
        "Compatible with all standard Manulift attachments or custom-developed load handling solutions",
        "Quick and easy attachment swaps thanks to the quick-change coupling",
        "Works comfortably for both right-handed and left-handed operators",
      ],
    },
    productInformation: {
      tabHeading: "Why the DCM-Pro works for you",
      benefits: [
        {
          label: "Versatile performance",
          points: [
            "Two hoist speeds included as standard",
            "Adapts easily to a wide range of tasks",
            "Quick-change coupling makes swapping load handling devices fast and simple",
            "Suitable for both right-handed and left-handed use",
          ],
        },
        {
          label: "High operating quality",
          points: [
            "Comfortable single-handed handling and guidance of loads up to 250 kg",
            "Quick-change coupling supports a wide variety of attachments — load hooks, pantograph tongs, clamping and shaft grippers, parallel gripper systems, and custom solutions",
            "Diagnostics interface keeps servicing quick and straightforward",
          ],
        },
        {
          label: "High safety and reliability",
          points: [
            "24 V contactor control for safe, consistent operation",
            "FEM classification from 2m+ to 4m",
            "Slipping clutch with speed monitoring for added protection",
            "No brake adjustment needed — ever",
            "Slipping clutch arranged in front of the brake prevents load dropping",
            "Operating limit switches included as standard",
          ],
        },
        {
          label: "Built to last",
          points: [
            "Gearbox, brake, and slipping clutch are maintenance-free for up to 10 years",
            "Aluminium motor, gearbox, and electrical cover parts finished with UV-resistant powder coating",
            "Robust cylindrical-rotor motor with fan and a separate DC brake beneath the electrical cover",
          ],
        },
      ],
    },
  },
  {
    product: "DCMS-Pro Manulift",
    slug: "dcms-pro-manulift",

    metadata: {
      title: "DCMS-Pro Manulift Chain Hoist in India | Timeskrane",
      description:
        "Upgrade material handling with DCMS-Pro Manulift chain hoists from Timeskrane, offering smooth control, variable lifting speed, and safe industrial performance.",
      keywords: [
        "DCMS-Pro Manulift chain hoist",
        "Demag DCMS-Pro Manulift",
        "electric chain hoist India",
        "industrial chain hoist supplier",
        "material handling hoist India",
        "Demag Chain Hoist DCMS-Pro Manulift",
      ],
      alternates: {
        canonical: "https://www.timeskrane.com/chain-hoists/dcms-pro-manulift",
      },
      openGraph: {
        title: "DCMS-Pro Manulift Chain Hoist in India | Timeskrane",
        description:
          "Upgrade material handling with DCMS-Pro Manulift chain hoists from Timeskrane, offering smooth control, variable lifting speed, and safe industrial performance.",
        url: "https://www.timeskrane.com/chain-hoists/dcms-pro-manulift",
        siteName: "Timeskrane",
        locale: "en_IN",
        type: "website",
      },
    },
    summary: {
      title: "One hand. Full control.",
      description:
        "The DCMS-Pro Manulift lets you handle loads quickly, safely, and precisely — all with just one hand. Built on the proven lifting unit of our DCS-Pro chain hoist and paired with the DSM-CS control unit, it gives you variable speed control and real confidence in every lift. Here's what makes it stand out:",
      benefits: [
        "Full hoist operation and load handling with just one hand",
        "Safe, precise positioning of sensitive or valuable goods thanks to variable speed control",
        "Fast lifting at nearly double the rated speed when working with partial loads",
        "Quick-change coupling for a secure, reliable hold every time",
        "Load handling attachments can be swapped out quickly and easily",
        "Works comfortably for both right-handed and left-handed operators",
      ],
      video: ["/img/chain-hoist/DCMS-Pro.gif"],
    },
    productInformation: {
      tabHeading: "Why the DCMS-Pro works for you",
      benefits: [
        {
          label: "Effortless to operate",
          points: [
            "Infinitely variable speed control for lifting and lowering across the full load range",
            "Exceptionally fine control at slow speeds — perfect for delicate work",
            "Smooth starts and precise positioning every time",
            "Creep lifting speed starting from just 0.15 m/min",
            "Lifting speed, acceleration, and braking ramp are all easy to adjust via the control unit",
            "Comfortable for both right-handed and left-handed users",
          ],
        },
        {
          label: "Versatile and adaptable",
          points: [
            "Manulift load handling attachments can be swapped out with ease",
            "Pro-Hub function delivers up to 90% higher nominal speed during partial load or no-load operations",
            "Automatically switches to creep lifting speed before reaching upper or lower limit positions — speed ratio 1:100",
          ],
        },
        {
          label: "High safety and reliability",
          points: [
            "Motor temperature monitoring keeps things running safely",
            "Acceleration and braking ramps help reduce load sway during operation",
          ],
        },
      ],
      technicalData: {
        tabHeading: "Technical Data",
        tables: [
          {
            heading: "DCMS-Pro Manulift (variable lifting speed)",
            tableHeadings: [
              "Load Capacity (kg)",
              "Manulift type (DCMS-Pro	)",
              "Lifting speed at 50/60 Hz (m/min)",
              "Hook path (m)",
              "FEM",
              "Reeving",
              "Weight [kg] for hook path",
            ],
            tableData: [
              [
                "80",
                "1",
                "0.15–30",
                "2.8 and 4.3",
                "4m",
                "1/1",
                "2.8m: 25, 4.3m: 27",
              ],
              ["125", "1", "0.15–30", "4m", "4m", "1/1", "4m: 27"],
              ["200", "2", "0.15–16", "4m", "2m*", "1/1", "4m: 27"],
              ["250", "2", "0.15–16", "2m*", "2m*", "1/1", "2m*: 27"],
            ],
          },
          {
            heading: "DCRS-Pro rocker switch (variable lifting speed)",
            tableHeadings: [
              "Load Capacity (kg)",
              "Manulift type (DCRS-Pro	)",
              "Lifting speed at 50/60 Hz (m/min)",
              "Hook path (m)",
              "FEM",
              "Reeving",
              "Weight [kg] for hook path (2.8m - 4.3m)",
            ],
            tableData: [
              [
                "80",
                "1",
                "0.15–30",
                "2.8 and 4.3",
                "4m",
                "1/1",
                "2.8m: 25, 4.3m: 27",
              ],
              ["125", "1", "0.15–30", "4m", "4m", "1/1", "2.8m: 25, 4.3m: 27"],
              ["200", "2", "0.15–16", "3m", "2m*", "1/1", "2.8m: 25, 4.3m: 27"],
              [
                "250",
                "2",
                "0.15–16",
                "2m*",
                "2m*",
                "1/1",
                "2.8m: 25, 4.3m: 27",
              ],
            ],
          },
        ],
        description: ["* '2m*' corresponds to 1,900 hours at full load."],
        img: "/img/chain-hoist/dcms-pro-table.webp",
      },
    },
  },
  {
    product: "DC-Com chain hoist",
    slug: "dc-com-chain-hoist",

    metadata: {
      title: "Demag DCM-Pro Manulift Hoist in India",
      description:
        "Find Demag DCM-Pro Manulift hoist in India at Timeskrane, designed for easy one-hand operation, safe lifting, and smooth industrial performance.",
      keywords: [
        "Demag Chain Hoist DCMS-Pro Manulift",
        "dcms pro manulift",
        "Demag DC-Pro Chain Hoist Supplier",
        "Demag DC Pro Electric Chain Hoist",
        "Electric Chain Hoist manufacturer in India",
        "Electric wire rope hoist India",
        "electric chain hoist 1 ton",
        "Electric Hoist manufacturers in India",
      ],
      alternates: {
        canonical: "https://www.timeskrane.com/chain-hoists/dc-com-chain-hoist",
      },
      openGraph: {
        title: "Demag DCM-Pro Manulift Hoist in India",
        description:
          "Find Demag DCM-Pro Manulift hoist in India at Timeskrane, designed for easy one-hand operation, safe lifting, and smooth industrial performance.",
        url: "https://www.timeskrane.com/chain-hoists/dc-com-chain-hoist",
        siteName: "Timeskrane",
        locale: "en_IN",
        type: "website",
      },
    },

    summary: {
      title: "Reliable quality for everyday lifting needs",
      description:
        "If you need a dependable chain hoist for everyday use, the DC-Com is built for exactly that. It's straightforward, reliable, and backed by the trusted Demag quality you can count on. The DC-Com fits neatly into KBK light crane system rails or mounts on I-beam girders — with U 11–U 22 trolleys keeping your loads moving smoothly. Here's what else it brings to the table:",
      benefits: [
        "Quick and simple to commission",
        "Comfortable and ergonomic to use",
        "Easy to service when needed",
        "FEM classification starting from 2m",
        "24 V contactor control for safe operation",
        "Two hoist speeds included as standard",
      ],
    },
    productInformation: {
      tabHeading: "Why the DC-Com works for you",
      benefits: [
        {
          label: "Reliable performance",
          points: [
            "Multiple sizes available with load capacities up to 2,000 kg",
            "Standard 4-m hook path right out of the box",
            "Elapsed operating time counter and diagnosis interface included",
          ],
        },
        {
          label: "Easy to get and easy to use",
          points: [
            "Available directly from stock — no long wait times",
            "Plug connections make commissioning fast and straightforward",
            "Ergonomic design for comfortable day-to-day operation",
            "Designed to be serviced quickly and easily",
          ],
        },
        {
          label: "High safety and reliability",
          points: [
            "High-quality powder-coated surfaces for better protection and a longer service life",
            "24 V contactor control for safe and consistent operation",
            "Slipping clutch with automatic cut-out via speed monitoring",
            "IP 55 enclosure on both the chain hoist and trolley",
          ],
        },
        {
          label: "Versatile and adaptable",
          points: [
            "Two hoist speeds to match your lifting needs",
            "Interface ready for electric travel",
            "Optional operating limit switches available up to 1,000 kg",
          ],
        },
        {
          label: "U 11–U 34 trolleys",
          points: [
            "Push travel available in three sizes",
            "Quick and simple to install",
            "Works on both parallel and sloping flanges",
            "Smooth, low-resistance travel every time",
          ],
        },
      ],
      technicalData: {
        tabHeading: "Technical data",
        heading: "DC-Com selection table",
        tableHeadings: [
          "Load capacity [kg]",
          "Chain hoist type",
          "Reeving",
          "Hoist speed [m/min] at 50 Hz / 60 Hz",
          "CDF [%]",
          "Hook path [m]",
          "Group of mechanisms FEM/ISO",
        ],
        tableData: [
          [
            "80",
            "DC-Com 1",
            "1/1",
            "8.0 / 2.0 | 9.6 / 2.4",
            "40 / 20",
            "4, 5 and 8",
            "4m/M7",
          ],
          ["100/125", "DC-Com 1", "", "", "", "", "3m/M6"],
          ["160", "DC-Com 2", "", "6.0 / 1.5 | 7.2 / 1.8", "", "", "3m/M6"],
          ["200/250", "DC-Com 2", "", "", "", "", "2m/M5"],
          ["315", "DC-Com 5", "", "5.4 / 1.3 | 6.4 / 1.3", "", "", "3m/M6"],
          ["400/500", "DC-Com 5", "", "", "", "", "2m/M5"],
          ["630", "DC-Com 10", "", "4.0 / 1.0 | 4.8 / 1.2", "", "", "2m/M5"],
          ["800 / 1,000", "DC-Com 10", "", "", "", "", "2m/M5"],
          ["1,250", "DC-Com 10", "2/1", "", "", "", "2m/M5"],
          ["1,600 / 2,000", "DC-Com 10", "", "", "", "", "2m/M5"],
        ],
        description: ["* Longer hook paths on request."],
      },
    },
  },
  {
    product: "LDC-D & KLDC-D Double chain hoists",
    slug: "ldc-d-and-kldc-d-double-chain-hoists",
    metadata: {
      title: "LDC-D & KLDC-D Double Chain Hoists | Timeskrane",
      description:
        "Find Timeskrane's LDC-D and KLDC-D double chain hoists, which are built for dependable handling of large industrial loads, smooth control, and balanced lifting.",
      keywords: [
        "LDC-D & KLDC-D Double chain hoists",
        "Double chain hoists",
        "Demag chain hoist manual",
        "Demag low-headroom chain hoist",
        "Demag hoist hook",
        "Low profile Chain Hoist",
        "Demag DC-Pro Chain Hoist Supplier",
      ],
      alternates: {
        canonical:
          "https://www.timeskrane.com/chain-hoists/ldc-d-and-kldc-d-double-chain-hoists",
      },
      openGraph: {
        title: "LDC-D & KLDC-D Double Chain Hoists | Timeskrane",
        description:
          "Find Timeskrane's LDC-D and KLDC-D double chain hoists, which are built for dependable handling of large industrial loads, smooth control, and balanced lifting.",
        url: "https://www.timeskrane.com/chain-hoists/ldc-d-and-kldc-d-double-chain-hoists",
        siteName: "Timeskrane",
        locale: "en_IN",
        type: "website",
      },
    },
    summary: {
      title:
        "Demag double chain hoist: Two mechanically synchronised chain lead-offs for safely handling bulky loads",
      description:
        "When you're dealing with long materials or load bars, a double chain hoist is the smart choice. Demag's double chain hoists come with two mechanically synchronised chain lead-offs that lift and lower bulky loads in perfect balance — every time. And if your application calls for it, the load can even be distributed asymmetrically to suit your specific needs.",

      subdescription: [
        {
          benefits: [
            {
              title: "The right double chain hoist for your application",
              description: [
                "The LDC-D is built for speed. It can move loads of up to 5,000 kg at 24 m/min — making it a great fit for fast-paced operations. You can choose between 2-stage or variable-speed control, and run it as a stationary, push, or electric-travel unit — including on our modular Demag KBK light crane system.",
                "The KLDC-D takes a different approach — its low-headroom design means a short C dimension, so you get more out of your available space. It handles loads up to 2,000 kg with 2-stage or variable speeds, and like the LDC-D, it works as a stationary unit or with push or electric travel.",
              ],
            },
            {
              title: "Built to last, designed to save you money",
              description: [
                "The LDC-D is built for speed and can move loads of up to 5,000 kg at 24 m/min. With 2-stage or variable-speed control and flexible mounting options — stationary, push or electric travel — it fits right into your existing setup, including the Demag KBK light crane system.",
                "Every component in the DC chain hoist range is chosen with longevity in mind. The generously sized gearbox supports FEM classification up to 4m — delivering up to 6,300 hours of reliable operation, even in the most demanding conditions.",
              ],
            },
          ],

          img: "/img/chain-hoist/11-LDC-D_EN.gif",
          video:
            "https://www.youtube.com/embed/-yF8wJYLo8g?si=KpTjPqmSSs645ZsA",
        },
      ],

      benefits: [
        "Variable speed across the full load range",
        "Exceptionally fine control at slow speeds",
        "Up to 90% faster speeds for lighter loads thanks to the Pro-Hub function",
        "Load capacities up to 3,200 kg",
      ],
      video: ["/img/chain-hoist/03-DCS-Pro-EN.gif"],
    },
    productInformation: {
      tabHeading: "Why these hoists work for you",
      benefits: [
        {
          label: "LDC-D benefits",
          points: [
            "Built for higher speeds without compromising control",
            "Longer chain service life thanks to a reduced polygon effect — no additional chain return sprockets needed",
            "Load capacities up to 5 t",
            "Hook center distances from 550 mm to 3,200 mm",
            "Lifting speeds up to 24 m/min",
            "Available with 2-stage or variable speeds",
            "Flexible variants: stationary, traveling, for KBK operation, and for articulated trolleys",
            "Asymmetric load distribution supported",
          ],
        },
        {
          label: "KLDC-D benefits",
          points: [
            "Low C dimension thanks to low-headroom design — makes the most of your available headroom",
            "2/4 lead-off position",
            "Load capacities up to 2 t",
            "Hook center distances from 400 mm to 4,600 mm",
            "Available with 2-stage or variable speeds",
            "Flexible variants: stationary, traveling, for KBK operation, and for articulated trolleys",
            "Asymmetric load distribution supported",
          ],
        },
      ],
    },
  },
  {
    product: "Chain hoist with KDC low-headroom travelling hoist",
    slug: "chain-hoist-kdc-low-headroom-travelling-hoist",
    metadata: {
      title: "KDC Low Headroom Chain Hoist India | Timeskrane",
      description:
        "Find KDC low headroom travelling hoists at Timeskrane, designed for compact spaces, smooth load movement, and reliable performance in industrial lifting.",
      keywords: [
        "Low Headroom Electric Chain Hoist Price",
        "Low headroom Chain block",
        "Low headroom Electric Chain Hoist",
        "Chain hoist with kdc low headroom travelling hoist manual",
        "Chain hoist with kdc low headroom travelling hoist price",
        "Demag chain hoist Manual",
        "KLDC travelling hoist for big bags",
        "Electric chain hoist low headroom version",
      ],
      alternates: {
        canonical:
          "https://www.timeskrane.com/chain-hoists/chain-hoist-kdc-low-headroom-travelling-hoist",
      },
      openGraph: {
        title: "KDC Low Headroom Chain Hoist India | Timeskrane",
        description:
          "Find KDC low headroom travelling hoists at Timeskrane, designed for compact spaces, smooth load movement, and reliable performance in industrial lifting.",
        url: "https://www.timeskrane.com/chain-hoists/chain-hoist-kdc-low-headroom-travelling-hoist",
        siteName: "Timeskrane",
        locale: "en_IN",
        type: "website",
      },
    },
    summary: {
      title:
        "Demag KDC low-headroom travelling hoist: Make the most of every inch of space",
      description:
        "Tight on headroom? The Demag KDC monorail travelling hoist is designed to work in exactly those conditions — delivering an exceptionally compact build that maximises your available hook path. It works with all trolley variants, including KBK suspension cranes and KBK monorails, making it easy to move loads of up to 2,000 kg anywhere across your workspace. Choose between 2-stage or variable lifting and cross-travel speeds to match the way you work.",
      video: ["/img/chain-hoist/KDC-42318-0-13.jpg"],

      subdescription: [
        {
          benefits: [
            {
              title: "High safety and reliability",
              description: [
                "Every KDC unit comes with operating limit switches for the highest and lowest hook positions as standard — so lifting and lowering is always smooth and controlled. Cross-travel starts and stops gently, keeping load sway to a minimum. And you can count on the safety-related functions meeting at least Performance Level c and Category 2 to EN ISO 13849-1.",
              ],
            },
            {
              title: "Built to last, designed to save you money",
              description: [
                "Every component in the DC chain hoist range is chosen with longevity in mind. The generously sized gearbox supports FEM classification up to 4m — meaning up to 6,300 hours of reliable operation, even under the most demanding conditions.",
              ],
            },
          ],

          video:
            "https://www.youtube.com/embed/-yF8wJYLo8g?si=T0hZiFNClGvknolq",
        },
      ],

      video: ["/img/chain-hoist/KDC-42318-0-13.jpg"],
    },
    productInformation: {
      tabHeading: "Why the KDC works for you",
      benefits: [
        {
          label: "Low-headroom traveling hoist",
          points: [
            "Handles load capacities up to 2,000 kg",
            "Smart, compact design makes the most of every bit of available height",
            "Compatible with all trolley types",
            "All KDC travelling hoists include operating limit switches for the highest and lowest hook positions",
            "Available with 2-stage or variable lifting speeds",
          ],
        },
      ],
    },
  },
  {
    product: "KLDC travelling hoist for big bags",
    slug: "kldc-traveling-hoist-big-bags",
    metadata: {
      title: "KLDC Traveling Hoist for Big Bags | Timeskrane",
      description:
        "Timeskrane provides KLDC traveling hoists for big bags that are made for safe handling of heavy industrial loads, smooth lifting, and extended hook reach.",
      keywords: [
        "LDC-D & KLDC-D Double Chain hoists",
        "Kldc travelling hoist for big bags price list",
        "Kldc travelling hoist for big bags price",
        "DC-Com chain hoist",
        "Demag DC Chain Hoist Assembly Guide",
        "The Demag DC Chain Hoist Buyer's Guide",
      ],
      alternates: {
        canonical:
          "https://www.timeskrane.com/chain-hoists/kldc-traveling-hoist-big-bags",
      },
      openGraph: {
        title: "KLDC Traveling Hoist for Big Bags | Timeskrane",
        description:
          "Timeskrane provides KLDC traveling hoists for big bags that are made for safe handling of heavy industrial loads, smooth lifting, and extended hook reach.",
        url: "https://www.timeskrane.com/chain-hoists/kldc-traveling-hoist-big-bags",
        siteName: "Timeskrane",
        locale: "en_IN",
        type: "website",
      },
    },
    summary: {
      title:
        "Demag KLDC travelling hoist for big bags: Extended hook lead-off and maximum lifting height",
      description:
        "Long load bars and limited lifting height can be a real challenge in certain applications. The Demag KLDC travelling hoist for big bags solves this problem neatly — combining the maximum lifting height of a KDC low-headroom travelling hoist with an extended hook lead-off. This means your load can still reach the highest hook position without any compromise. The result? Maximum use of the C dimension for loads weighing up to 2,000 kg.",
      video: ["/img/chain-hoist/KDC-42318-0-13.jpg"],

      subdescription: [
        {
          benefits: [
            {
              title: "Handling bulky loads — made easy",
              description: [
                "Pair the KLDC with the modular Demag KBK light crane system and you've got a powerful combination for moving even the bulkiest loads with ease. Operating limit switches for the highest and lowest hook positions come as standard, and you can choose between 2-stage or variable lifting and travel speeds to suit your workflow.",
              ],
            },
            {
              title: "Built to last, designed to save you money",
              description: [
                "Every component in the DC chain hoist range is chosen for reliability and a long service life. The generously sized gearbox supports FEM classification up to 4m — delivering up to 6,300 hours of dependable operation, even in the most demanding conditions.",
              ],
            },
          ],

          video:
            "https://www.youtube.com/embed/-yF8wJYLo8g?si=H8eZVUrHnYERzTzp",
        },
      ],

      video: ["/img/chain-hoist/08-KLDC-EN.gif"],
    },
  },
  {
    product: "LDC-Q quadro chain hoist",
    slug: "ldc-q-quadro-chain-hoist",
    metadata: {
      title: "LDC-Q Quadro Chain Hoist in India | Timeskrane",
      description:
        "Find LDC-Q Quadro chain hoists at Timeskrane, designed with four synchronized hooks for precise, balanced lifting of large or bulky industrial loads.",
      keywords: [
        "LDC-Q quadro chain hoist",
        "Ldc q quadro chain hoist manual",
        "Demag chain hoist manual",
        "Demag 5 ton hoist",
        "Hand Chain Hoist Chain Bag Large",
        "Demag DC Chain hoists",
      ],
      alternates: {
        canonical:
          "https://www.timeskrane.com/chain-hoists/ldc-q-quadro-chain-hoist",
      },
      openGraph: {
        title: "LDC-Q Quadro Chain Hoist in India | Timeskrane",
        description:
          "Find LDC-Q Quadro chain hoists at Timeskrane, designed with four synchronized hooks for precise, balanced lifting of large or bulky industrial loads.",
        url: "https://www.timeskrane.com/chain-hoists/ldc-q-quadro-chain-hoist",
        siteName: "Timeskrane",
        locale: "en_IN",
        type: "website",
      },
    },
    summary: {
      title:
        "Demag LDC-Q quadro chain hoist: Four mechanically synchronised chain lead-offs",
      description:
        "When you're handling large, awkward loads or custom attachments weighing up to 3,200 kg, four attachment points make all the difference. The Demag LDC-Q quadro chain hoist delivers exactly that — four mechanically synchronised chain lead-offs that lift and lower loads evenly and with exceptional precision. One hoist drives all four chain lead-offs, keeping everything perfectly in sync. Safe, reliable, and built to perform. LDC-Q units even allow work to be carried out under suspended loads in line with accident prevention regulation BGV D8+.",

      subdescription: [
        {
          benefits: [
            {
              title: "Precision engineering by Demag",
              description: [
                "Travel starts and stops smoothly, keeping load sway to a minimum during cross-travel. And with the choice between 2-stage or variable lifting speeds, you get a lifting solution that's both comfortable to use and impressively precise — every single time.",
              ],
            },
            {
              title: "Built to last, designed to save you money",
              description: [
                "Every component in the DC chain hoist range is chosen with longevity in mind. The generously sized gearbox supports FEM classification up to 4m — meaning up to 6,300 hours of reliable operation, even in the most demanding applications.",
              ],
            },
          ],

          video:
            "https://www.youtube.com/embed/-yF8wJYLo8g?si=4jzzSq7-Z7sjTEjY",
        },
      ],
    },
    productInformation: {
      tabHeading: "Why the LDC-Q works for you",
      benefits: [
        {
          label: "Low-headroom traveling hoist",
          points: [
            "Handles load capacities up to 2,000 kg",
            "Smart design makes the most of every bit of available height",
            "Compatible with all trolley types",
            "All KDC travelling hoists include operating limit switches for the highest and lowest hook positions",
            "Available with 2-stage or variable lifting speeds",
          ],
        },
      ],
    },
  },
  {
    product: "Demag DC-II chain hoist",
    slug: "dc-ii-chain-hoist",
    metadata: {
      title: "DC-II Chain Hoist in India | Timeskrane",
      description:
        "Find DC-II chain hoists with Timeskrane, built for smooth lifting, precise control, and reliable performance for safe and efficient industrial material handling.",
      keywords: [
        "Demag dc ii chain hoist in india",
        "Best dc ii chain hoist in india",
        "Electric Chain Hoist manufacturer in India",
        "Chain Hoist 2 Ton",
        "Electric Chain Hoist manufacturer in India",
        "Chain Hoist 5 Ton",
      ],
      alternates: {
        canonical: "https://www.timeskrane.com/chain-hoists/dc-ii-chain-hoist",
      },
      openGraph: {
        title: "DC-II Chain Hoist in India | Timeskrane",
        description:
          "Find DC-II chain hoists with Timeskrane, built for smooth lifting, precise control, and reliable performance for safe and efficient industrial material handling.",
        url: "https://www.timeskrane.com/chain-hoists/dc-ii-chain-hoist",
        siteName: "Timeskrane",
        locale: "en_IN",
        type: "website",
      },
    },
    summary: {
      title: "Quality. Performance. Demag DC-II chain hoist.",
      description:
        "The Demag DC-II chain hoist raises the bar — again. Building on everything that made the first generation great, this second-generation hoist brings fresh innovation while staying true to the high standards Demag is known for. Proudly made in Wetter.",

      subdescription: [
        {
          benefits: [
            {
              title: "Innovation from Wetter.",
              description: [
                "Just like its predecessor, the DC-II comes loaded with a comprehensive set of standard features — plus a wide range of options that give you the flexibility to adapt it to almost any application. Its modular design makes customisation simple and straightforward.",
              ],
              video:
                "https://www.youtube.com/embed/ba9Y2DxPh1c?si=w_CM-Iqz_ymyLhrn",
            },

            {
              description: [
                "Every component inside the DC-II reflects the quality you'd expect from Demag. The gearbox is produced and assembled in-house at the Wetter plant — a clear sign of the expertise and craftsmanship that has made the DC a true industry benchmark.",
              ],
              //   img: "/img/chain-hoist/DC-II-Bauformen.webp",
            },

            {
              title:
                "Second generation. Everything included — no extras needed.",
              description: [
                "The core components of the DC-II are maintenance-free for up to ten years. No special tools are needed for adjustments, and the Plug & Lift principle keeps servicing quick and hassle-free.",
                "Safety is built in from the ground up — with a slipping clutch that features automatic cut-off via speed monitoring, 24 V contactor control, operating limit switches, and an elapsed operating time counter. You're covered at every step.",
              ],
            },

            {
              title: "Demag DC-II chain hoist",
              description: [
                "From day one, the DC-II is available straight from stock in pre-configured variants with load capacities from 125 to 1,000 kg. The DC-Com II is the solid everyday option, while the DC-Pro II steps things up with higher FEM / ISO mechanism group classification and faster lifting speeds. Both variants share the same high level of standard equipment — no compromises.",
              ],
              img: "/img/chain-hoist/DC-II-Bauformen.webp",
            },

            {
              title: "Ready when you are",
              description: [
                "At launch, Demag is offering three sizes — DC-II 1/2, DC-II 5, and DC-II 10 — as fully pre-assembled chain hoists, available straight from stock. That means fast delivery and perfectly matched, tried-and-tested components right out of the box. These hoists feature safe, low-wear, ergonomic 1/1 reeving and can achieve up to 6,300 hours of service across the 2m to 4m mechanism groups.",
              ],
              highlight: [
                {
                  heading: "Standard lifting heights",
                  list: ["DC-Pro II — 5 metres", "DC-Com II — 4 metres"],
                },
              ],

              subdescription: [
                "Two speed settings give you the best of both worlds — V2 for fast, efficient operation and V1 for precise, sensitive load positioning.",
                "The full DC chain hoist range is being transitioned to the new DC-II generation. Once complete, every model in the lineup will benefit from the improvements this new generation brings.",
              ],
            },
          ],
          img: "/img/chain-hoist/429622.webp",

          //   video:
          //     "https://www.youtube.com/embed/ba9Y2DxPdivc?si=BwH0VJCP8lqyEdNu",
        },
      ],
    },
  },

  {
    product: "DC-Wind chain hoist",
    slug: "dc-wind-chain-hoist",
    metadata: {
      title: "DC-Wind Chain Hoist in India | Timeskrane",
      description:
        "Timeskrane provides DC-Wind chain hoists with high performance and long-lasting operation that are designed for safe, dependable lifting in wind turbine maintenance.",
      keywords: [
        "Demag wire rope hoist",
        "Demag DC-Wind chain hoist",
        "Wind Turbine Hoist Suppliers in India",
        "DC-Wind chain hoist",
        "Demag DC-Wind Electric Hoist",
        "Electric Chain Hoist manufacturer in India",
        "Dc wind chain hoist manual",
        "DC Wind Chain Hoist for Wind Power Stations",
        "electric chain hoist 1 ton",
      ],
      alternates: {
        canonical:
          "https://www.timeskrane.com/chain-hoists/dc-wind-chain-hoist",
      },
      openGraph: {
        title: "DC-Wind Chain Hoist in India | Timeskrane",
        description:
          "Timeskrane provides DC-Wind chain hoists with high performance and long-lasting operation that are designed for safe, dependable lifting in wind turbine maintenance.",
        url: "https://www.timeskrane.com/chain-hoists/dc-wind-chain-hoist",
        siteName: "Timeskrane",
        locale: "en_IN",
        type: "website",
      },
    },
    summary: {
      title:
        "DC-Wind chain hoist: The go-to hoist for wind turbine maintenance",
      description:
        "When it comes to maintaining wind turbines — whether onshore or offshore — the DC-Wind Demag chain hoist is trusted by teams around the world. Built to handle tough conditions, it safely lifts loads and tools weighing up to 1,500 kg to heights of up to 180 metres. Reliable, powerful, and ready for the job.",

      subdescription: [
        {
          benefits: [
            {
              title: "Safe. By Demag.",
              description: [
                "Fast lifting speeds mean less downtime and more productivity — keeping your turbines running at their best. The DC-Wind is easy to operate and comes packed with everything you'd expect from our trusted DC chain hoist range. A robust brake/coupling system and a corrosion-protected brake with IP55 enclosure help keep your team safe, even in the most demanding environments.",
              ],
            },
            {
              title: "Quick to set up, easy to maintain",
              description: [
                "Getting started is simple — just use the Plug & Lift connectors and your hoist is ready to go in no time. The components are built tough and keep working reliably even in harsh conditions. The gearbox and slipping clutch are maintenance-free for up to 10 years, and we carefully select components to suit different climate zones around the world.",
              ],
              highlight: [
                {
                  heading: "What it can do for you",
                  list: [
                    "Easy and convenient to operate",
                    "High safety standard you can count on",
                    "Lifts loads up to 1,500 kg with confidence",
                    "Hook paths reaching up to 180 metres",
                    "Flexible mounting — attach to a slewing arm or a travelling portal arrangement",
                  ],
                },
              ],
            },
          ],

          video:
            "https://www.youtube.com/embed/ddRPfXN_jLg?si=uv4J0FVEVP2DQhE8",
        },
      ],
    },

    productInformation: {
      tabHeading: "Why the DC-Wind stands out",

      benefits: [
        {
          label: "High safety standard",
          points: [
            "Handles loads safely and reliably thanks to a robust brake/coupling system and a corrosion-protected brake with IP 55 protection — built for the harshest environments.",
          ],
        },
        {
          label: "Built around your needs",
          points: [
            "Customisable to your specific requirements — from lifting height to chain collector design",
            "Adapted for different climate zones (including cold climate versions), offshore use, and high-altitude installation sites",
          ],
        },
        {
          label: "Easy and comfortable to operate",
          points: [
            "Fast main lifting speed to get the job done quickly",
            "Creep lifting speed for precise, careful positioning",
            "Trolley locks easily with a simple handle",
            "Ergonomic control pendant for comfortable, fatigue-free use",
          ],
        },
        {
          label: "Fast to install, simple to handle",
          points: [
            "Plug & Lift connections make commissioning and servicing quick and hassle-free",
            "Long service life and very low wear thanks to electrical braking and slip monitoring",
            "Gearbox and slipping clutch stay maintenance-free for up to 10 years",
          ],
        },
        {
          label: "Low-headroom traveling hoist",
          points: [
            "Handles load capacities up to 2,000 kg",
            "Smart design makes the most of every bit of available height",
            "Compatible with all trolley types",
            "All KDC travelling hoists include operating limit switches for the highest and lowest hook positions",
            "Available with 2-stage or variable lifting speeds",
          ],
        },
      ],
      technicalData: {
        tabHeading: "Technical data",
        tables: [
          {
            heading: "DC-Wind Selection Table",
            tableHeadings: [
              "SWL [kg]",
              "Type",
              "LS at 50 Hz [m/min]",
              "Hook path H",
              "Max. weight *) RUDC [kg]",
              "Max. weight *) Stationary [kg]",
            ],
            tableData: [
              ["125", "DC-Wind 2", "16/4", "≤120", "28", "20"],
              ["125", "DC-Wind 5", "24/6", null, "33", "26"],
              ["250", "DC-Wind 5", "16/4", null, "33", "26"],
              ["250", "DC-Wind 10", "24/6", "≤180", "59", "45"],
              ["500", "DC-Wind 5", "12/3", "≤120", "43", "36"],
              ["500", "DC-Wind 10", "12/3", "≤120", "59", "45"],
              ["500", null, "24/6", "≤180", "59", "45"],
              ["800", null, "18/4,5", "≤150", "84", "64"],
              ["1000", null, "18/4,5", "≤150", "84", "64"],
              ["1000", null, "12/3", "≤120", "84", "64"],
              ["1200", "DC-Wind 15", "16/4", "≤150", "155", "125"],
              ["1500", null, "12/3", "≤120", "155", "125"],
            ],
          },
        ],
        description: [
          "*) Weight without chain",
          "SWL: safe working load",
          "LS: lifting speed",
        ],
        img: "/img/chain-hoist/dcms-pro-table.webp",
      },
    },
  },

  {
    product: "Trolleys for DC chain hoists",
    slug: "trolleys-dc-chain-hoists",
    metadata: {
      title: "Demag DC Chain Hoist Trolleys India | Timeskrane",
      description:
        "Find trolleys for DC chain hoists at Timeskrane, designed for smooth travel, low resistance, and reliable load movement in industrial material handling.",
      keywords: [
        "Trolleys for DC chain hoists",
        "Electric Chain Hoist manufacturer in India",
        "Demag trolley manual",
        "Demag DC-Pro hoist",
        "Demag trolley",
        "Chain Hoist 5 Ton",
        "Demag DC-Pro chain hoist",
        "Demag DC-Pro Chain Hoist Supplier",
        "Demag Electric Hoists",
        "LDC-D & KLDC-D Double chain hoists",
      ],
      alternates: {
        canonical:
          "https://www.timeskrane.com/chain-hoists/trolleys-dc-chain-hoists",
      },
      openGraph: {
        title: "Demag DC Chain Hoist Trolleys India | Timeskrane",
        description:
          "Find trolleys for DC chain hoists at Timeskrane, designed for smooth travel, low resistance, and reliable load movement in industrial material handling.",
        url: "https://www.timeskrane.com/chain-hoists/trolleys-dc-chain-hoists",
        siteName: "Timeskrane",
        locale: "en_IN",
        type: "website",
      },
    },
    summary: {
      title: "Trolleys for DC chain hoists",
      description:
        "Looking for the perfect trolley to pair with your DC chain hoist? Demag trolleys are built to work hand-in-hand with DC chain hoists and fit neatly onto I-beam girders or the modular KBK light crane system. Whether you need simple push travel or precise electric positioning, there's a trolley here that's tailored to your exact needs.",

      subdescription: [
        {
          benefits: [
            {
              description: [
                "Every trolley in the Demag range is built to roll smoothly and stay that way — right through its entire service life. The components are tough, well-matched, and designed to make load transport as easy and reliable as possible, no matter the application.",
              ],
              highlight: [
                {
                  heading: "Demag trolleys — find the one that fits:",
                  list: [
                    "U type trolleys for straightforward manual travel",
                    "E type trolleys for smooth, low-sway electric travel",
                    "Click-fit trolleys that snap into place in seconds",
                    "KBK trolleys designed as part of the KBK system",
                    "Low-headroom travelling hoists to make the most of limited vertical space",
                    "Double chain hoists for mechanically synchronised lifting — great for long materials or large components",
                  ],
                },
              ],
            },
          ],

          video:
            "https://www.youtube.com/embed/-yF8wJYLo8g?si=CoBYhjDU1HYBMVRK",
        },
      ],
    },

    productInformation: {
      tabHeading: "Why these trolleys make a difference",

      benefits: [
        {
          label: "Click-fit trolleys",
          points: [
            "Snaps into place quickly — no complicated installation",
            "Articulated design handles curves down to 800 mm radius",
            "Easily adjusts to standard-profile or parallel-flange sections",
            "Integrated drop-stop and lift-off protection for added peace of mind",
            "Handles loads up to 550 kg — a versatile all-rounder",
            "Works with flange widths from 50 to 91 mm",
          ],
        },
        {
          label: "U/RU push-travel trolleys",
          points: [
            "Excellent travel characteristics right out of the box",
            "Quick and simple to install",
            "Works on both parallel and sloping flanges",
            "Smooth, low-resistance travel every time",
            "Handles curves with a minimum radius of 1,000 mm",
            "Drop stop built right into the side cheek",
            "Extremely gentle on the girder — minimal wear over time",
            "Available with polyamide or steel rollers",
            "Compact, modern industrial design",
            "Four sizes to choose from: U 11 up to 1,100 kg, U 22 up to 2,200 kg, U 34 up to 3,400 kg, RU 56 up to 5,600 kg",
          ],
        },
        {
          label: "E 11 to E 34 electric travel drives",
          points: [
            "Starts and stops smoothly — no jolts or sudden movements",
            "Keeps load sway to a minimum during travel",
            "Fast to install and get up and running",
            "Designed specifically for use with DC-Pro chain hoists",
            "Controlled via DSE 10-C or DSE 10-CS pendant controllers",
            "Plug-&-drive connection makes setup with DC-Pro hoists incredibly quick",
            "Easy pendant installation for long and cross travel",
            "Optional cross-type limit switches available for fast-to-slow and final cut-off",
          ],
        },
        {
          label: "KBK trolleys",
          points: [
            "E 22 comes standard with the RF 125 friction-wheel travel drive — ready for the KBK light crane system",
            "Especially short approach dimensions thanks to the vertical mounting arrangement",
          ],
        },
      ],

      technicalData: {
        tabHeading: "Technical Data",
        tables: [
          {
            heading: "Selection table",
            tableHeadings: [
              "Max. dis- placeable weight incl.dead load2)[kg]",
              "Travel drive",
              "Travel speed at 50/60 Hz	",
              "Possible trolleys",
              "",
              "",
              "",
              "",
            ],
            tableData: [
              ["Steps", "Stepless	", "", "", "", "", "", ""],
              [
                "Vrated at full load [m/min]",
                "Vmax at partial load1)[m/min] ",
                "V at full load [m/min]",
                "V at partial load[m/min]	",
                "",
                "",
                "",
                "",
              ],
              [
                "1,100",
                "E 11",
                "24/6",
                "30.7/5",
                "1.2-24",
                "1.5-30",
                "U 11",
                "4",
              ],
              [
                "2,200",
                "E 22-C",
                "24/6",
                "30.7/5",
                "1.2-24",
                "1.5-30",
                "U 22 U 34",
                "5",
              ],
              [
                "2,200",
                "E 22-C",
                "27/7",
                "33/8",
                "1.4-27",
                "1.65-33",
                "RF 125",
                "5",
              ],
              ["3,400", "E 34", "14/3.5", "-", "0.7-14", "-", "U 34", "5"],
              [
                "5,600",
                "EU 56",
                "12/4 24/6 40/10",
                "-",
                "On application",
                null,
                "RU 56",
                "8.8",
              ],
            ],
          },
          {
            heading: "Curve radii for trolleys",
            tableHeadings: [
              "Trolleys",
              "Load capacity",
              "Runway girder	",
              "Travel wheel material	",
              "",
              "",
              "",
              "",
            ],
            tableData: [
              ["Push travel	", "Electric travel", "", "", "", "", "", ""],
              [
                "	",
                "[kg]",
                "Flange width [mm]	",
                "Rmin	",
                "Flange width [mm]	",
                "Rmin",
                "",
                "",
              ],
              ["CF 5", "550", null, "50-91", "800", "-", "-", "Plastic"],
              [
                "U 11 DC\nEU 11 DC",
                "1,100",
                null,
                "58-310",
                "1,000",
                "58-310",
                "2,000",
                "Plastic ²)",
              ],
              [
                "U 22 DC\nEU 22 DC",
                "2,200",
                null,
                "74-200⁴)",
                "2,000",
                "82-200⁴)",
                "3,000",
                "Spheroidal-graphite cast iron ³)",
              ],
              [
                "U 34 DC\nEU 34 DC",
                "2,200",
                "3,400",
                "201-310¹)",
                "2,000",
                "82-310¹)",
                "3,000",
                "Spheroidal-graphite cast iron",
              ],
              [
                "RU 56\nDC\nEU 56\nDC",
                "5,600",
                null,
                "98-310",
                "2,000⁵)",
                "98-310",
                "2,500⁵)",
                "Spheroidal-graphite cast iron",
              ],
            ],
          },
        ],
        description: [
          "¹) Other parameters can be programmed to adjust this.",
          "²) For gradients over 1%, please get in touch with us for a custom solution.",
          "¹) For DC 16/25, the flange width is 90–310 mm.",
          "²) Steel travel wheels are available as an option.",
          "³) Plastic travel wheels are available on request.",
          "⁴) For DC 16/25, the flange width is 90–200 mm.",
          "⁵) Applies from a flange width of 106 mm.",
          "The curve radii listed are based on standard use. For applications involving frequent curve travel — such as automated systems — please reach out to the manufacturer or your local representative.",
        ],
        img: "/img/chain-hoist/dcms-pro-table.webp",
      },
    },
  },

  {
    product: "DDC articulated trolley",
    slug: "ddc-articulated-trolley",
    metadata: {
      title: "DDC Articulated Trolley Chain Hoist | Timeskrane",
      description:
        "Explore DDC articulated trolley chain hoists at Timeskrane, designed for smooth travel on curved tracks and reliable, precise material handling.",
      keywords: [
        "Ddc articulated trolley parts",
        "Ddc articulated trolley manual",
        "Demag trolley",
        "Demag electric hoist catalogue",
        "Demag hoist",
        "Demag chain hoist manual",
        "Trolley Hoists Price",
        "Manufacturers & Suppliers",
        "DCM-Pro Manulift",
      ],
      alternates: {
        canonical:
          "https://www.timeskrane.com/chain-hoists/ddc-articulated-trolley",
      },
      openGraph: {
        title: "DDC Articulated Trolley Chain Hoist | Timeskrane",
        description:
          "Explore DDC articulated trolley chain hoists at Timeskrane, designed for smooth travel on curved tracks and reliable, precise material handling.",
        url: "https://www.timeskrane.com/chain-hoists/ddc-articulated-trolley",
        siteName: "Timeskrane",
        locale: "en_IN",
        type: "website",
      },
    },
    summary: {
      title: "DDC articulated monorail hoist — built for curved track travel",
      description:
        "When your workspace has curves, you need equipment that can keep up. The R/EUDDC (standard-headroom) and R/EKDDC (low-headroom) monorail hoists with articulated trolleys are designed specifically to glide smoothly along curved I-beam tracks. Whether you're working in a tight space or a normal-headroom setup, DDC units handle curve radii as tight as 800 mm with ease. And thanks to their lateral guide rollers, travel stays quiet and gentle on the track.",

      subdescription: [
        {
          benefits: [
            {
              label: "Built to fit your setup",
              description: [
                "Need even more flexibility? You can add a Demag geared motor to make the trolley fully electric — then control it effortlessly using a radio remote or pendant controller. There's also an angular gearbox option that lets the unit squeeze through narrow openings without any hassle.",
              ],
              img: "/img/chain-hoist/10-Kurvenfahrten-EN.gif",
              video:
                "https://www.youtube.com/embed/-yF8wJYLo8g?si=PRy_69YvOrhu",
            },
          ],
        },
      ],
    },

    productInformation: {
      tabHeading: "Why the DDC stands out",

      benefits: [
        {
          label: "DDC articulated trolley",
          points: [
            "Travels smoothly on curved I-beam tracks with a minimum curve radius of just 800 mm",
            "Lateral guide rollers keep movement quiet and easy on the runway",
            "Optional angular gearbox lets the trolley travel through tight, narrow openings",
            "Available in both standard and low-headroom versions to suit your space",
          ],
        },
      ],
    },
  },

  {
    product: "DCBS chain hoist",
    slug: "dcbs-chain-hoist",
    metadata: {
      title: "DCBS Chain Hoist in India | Timeskrane",
      description:
        "Explore DCBS Chain Hoists with Timeskrane, designed for smooth load control, precise positioning, and safe, efficient material handling in modern industries.",
      keywords: [
        "Microsite Demag DCBS chain hoist",
        "Demag dcbs chain hoist in india",
        "Demag chain hoist",
        "Electric Chain Hoist manufacturer in India",
        "Chain Hoist 5 Ton",
        "Chain Hoist parts",
        "Electric Chain Hoist Manufacturer in India",
        "1 ton electric chain hoist",
        "hoist 1 ton electric",
        "chain block 1 ton",
      ],
      alternates: {
        canonical: "https://www.timeskrane.com/chain-hoists/dcbs-chain-hoist",
      },
      openGraph: {
        title: "DCBS Chain Hoist in India | Timeskrane",
        description:
          "Explore DCBS Chain Hoists with Timeskrane, designed for smooth load control, precise positioning, and safe, efficient material handling in modern industries.",
        url: "https://www.timeskrane.com/chain-hoists/dcbs-chain-hoist",
        siteName: "Timeskrane",
        locale: "en_IN",
        type: "website",
      },
    },
    summary: {
      title: "Demag chain hoist with a built-in balancer",
      subtitle: "Work smarter, move loads easier",
      description:
        "Imagine being able to lift, guide, and position heavy loads almost effortlessly — that's exactly what the DCBS chain hoist makes possible. Built on our trusted DC range, it comes with a smart balancer function that lets operators handle loads with precision and very little effort. It's available in two sizes and can handle loads up to 250 kg. Plus, it works seamlessly with our Demag KBK light crane system.",
      subdescription: [
        {
          benefits: [
            {
              video: "//www.youtube.com/embed/RlG34Xwg3IA?si=dZYWcinyq17dly2g",
            },

            {
              description: [
                "DCBS hoists move smoothly along KBK rail systems — whether that's a single-girder suspension crane, a monorail system, or a slewing jib crane. Need to use lifting masts, manipulators, or your own custom load attachments? No problem. The controller sensors can be fitted directly into your load-bearing setup.",
              ],
              highlight: [
                {
                  heading: "Safe and reliable by design",
                  description: "What the DCBS does at its core",
                  list: [
                    "Lift and lower loads using gentle manual force on the control handle",
                    "Guide and position loads with ease",
                    "Built-in protection against slack chain",
                    "Prevents sudden load snatching",
                    "Automatically stops movement if a load swings too much",
                    "Monitors and limits load capacity when needed",
                  ],
                },
              ],
            },

            {
              highlight: [
                {
                  heading: "Designed with safety in mind",
                  list: [
                    "Regenerative braking means less wear on the brake over time",
                    "No manual brake adjustments needed — ever",
                    "Brake sits ahead of the slipping clutch, so loads never slip",
                    "Automatically brakes if something goes wrong",
                    "Slipping clutch has a built-in auto cut-out via speed monitoring — no continuous slipping",
                    "Gearbox, slipping clutch, and brake are all maintenance-free for up to 10 years",
                    "Safety functions meet at least Performance Level c and Category 2 per EN ISO 13849-1",
                  ],
                },
              ],
            },
            {
              highlight: [
                {
                  heading: "Key features you'll appreciate",
                  list: [
                    "Upper and lower operating limit switches",
                    "Built-in elapsed operating time counter",
                    "Easy system visibility through the IDAPSY operating data interface",
                    "External sensor option for the load-bearing arrangement",
                  ],
                },
              ],
            },

            {
              highlight: [
                {
                  heading: "Where it works best",
                  list: [
                    "Lifting masts",
                    "Manipulators",
                    "Custom load attachments",
                  ],
                },
              ],
            },
          ],

          video:
            "https://www.youtube.com/embed/ddRPfXN_jLg?si=uv4J0FVEVP2DQhE8",
        },
      ],
    },

    productInformation: {
      tabHeading: "Why people love the DCBS",
      benefits: [
        {
          video:
            "https://www.youtube.com/embed/TEQI_hvKniM?si=2k64-NcrkzxnBQyz",
          label: "Grip control",
          points: [
            "The D-Grip Servo control handle makes it super easy to control the load — even in tight or tricky situations.",
          ],
        },
        {
          label: "Load positioning",
          points: [
            "Switch to 'load positioning mode' and you can literally grab the load and guide it by hand with just a light touch. It's that intuitive.",
          ],
        },

        {
          label: "Assembly mode",
          points: [
            "Perfect for detailed assembly work. It keeps the load steady and suppresses any unwanted swinging or sudden movements, giving you more control and confidence.",
          ],
        },

        {
          label: "Load pick-up mode",
          points: [
            "Gently lifts and pre-tensions load handling attachments",
            "Removes loads cleanly — no dropping, no sudden upward jerk",
            "Protects your jigs and machinery by only lifting until a preset force is reached",
          ],
          img: "/img/chain-hoist/chain-hoist-DCBS.webp",
        },
      ],
    },
  },
];

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const product = data.find((item) => item.slug === slug);

  if (!product || !product.metadata) {
    return {
      title: product?.product,
      description: product?.summary?.description ?? "",
    };
  }

  return {
    title: product.metadata.title,
    description: product.metadata.description,
    keywords: product.metadata.keywords,
    alternates: product.metadata.alternates,
    openGraph: product.metadata.openGraph,
  };
}
const OffsetGearedMotors = ({ params }) => {
  const { slug } = use(params);

  const productData = data.find((item) => item.slug === slug);

  if (!productData) {
    return <p className="text-center py-10 text-red-600">Item not found</p>;
  }
  return (
    <>
      <Navbar />
      <Breadcrumb
        title={productData.product}
        backgroundImage="/img/header1.webp"
        items={[{ label: productData.product, href: "/", isCurrent: true }]}
      />
      <div className="p-6">
        <Container maxWidth="md" className="   mx-auto">
          {/* Summary Section */}
          <h2 className="text-5xl font-bold text-gray-700 text-center">
            {productData.summary.title}
          </h2>
          <div className="flex justify-center">
            <div className="mb-6  h-1 w-20 bg-yellow-400 mt-5 text-center"></div>
          </div>

          {productData.summary.subtitle && (
            <h4 className="text-2xl text-center font-bold my-4 text-[#676f77]">
              {productData.summary.subtitle}
            </h4>
          )}

          <p className="text-gray-600 text-center mb-10 text-lg ">
            {productData.summary.description}
          </p>

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
          <ul className="list-disc list-outside  pl-4  mt-2">
            {productData.summary.benefits?.map((item, i) => (
              <li key={i} className="text-lg">
                {item}
              </li>
            ))}
          </ul>

          {productData.summary.subdescription?.map((section, index) => (
            <div key={index} className="mt-12">
              {/* Render Benefits */}
              {section.benefits?.map((product, i) => (
                <div key={i} className="mb-8">
                  {/* Title */}
                  {product.title && (
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {product.title}
                    </h3>
                  )}

                  {/* Description */}
                  {Array.isArray(product.description) &&
                    product.description.length > 0 &&
                    product.description.map((desc, di) => (
                      <p key={di} className="text-gray-600 mb-2 text-lg">
                        {desc}
                      </p>
                    ))}

                  {product.video && (
                    <div className="my-4">
                      <iframe
                        src={product.video}
                        title="Product Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                        className="w-full max-w-xl h-[300px] mx-auto rounded"
                      />
                    </div>
                  )}

                  {/* Image(s) */}
                  {product.img &&
                    (Array.isArray(product.img) ? (
                      product.img.map((imgSrc, ii) => (
                        <div key={ii} className="my-4">
                          <Image
                            width={500}
                            height={500}
                            src={imgSrc}
                            alt={`Image ${ii + 1}`}
                            className="w-full max-w-xl mx-auto rounded shadow"
                          />
                        </div>
                      ))
                    ) : (
                      <div className="my-4">
                        <Image
                          width={500}
                          height={500}
                          src={product.img}
                          alt="Product Image"
                          className="w-full max-w-xl mx-auto rounded shadow"
                        />
                      </div>
                    ))}
                  {Array.isArray(product.features) &&
                    product.features.length > 0 && (
                      <ul className="list-disc list-outside  pl-4  text-gray-600 space-y-1">
                        {product.features.map((feature, fi) => (
                          <li key={fi} className="text-lg">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}

                  {/* Highlight */}
                  {product.highlight?.map((highlight, hi) => (
                    <div key={hi} className="mt-4">
                      {highlight.heading && (
                        <h4 className="text-lg font-semibold text-gray-700 mb-1">
                          {highlight.heading}
                        </h4>
                      )}
                      {Array.isArray(highlight.list) && (
                        <ul className="list-disc list-outside  pl-4  text-gray-600 space-y-1">
                          {highlight.list.map((item, li) => (
                            <li key={li} className="text-lg">
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}

                  {/* Subdescription Texts */}
                  {Array.isArray(product.subdescription) && (
                    <div className="mt-4 space-y-2">
                      {product.subdescription.map((sub, si) => (
                        <p key={si} className="text-gray-600 text-lg">
                          {sub}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Section-level Video */}
              {section.video && (
                <div className="my-6">
                  <iframe
                    src={section.video}
                    title="Subsection Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    frameBorder="0"
                    className="w-full max-w-xl h-[300px] mx-auto rounded"
                  />
                </div>
              )}
              {section.image && (
                <div className="my-6">
                  <Image
                    src={section.image}
                    alt="section.img"
                    width={500}
                    height={500}
                    className="mx-auto w-full max-w-xl"
                  ></Image>
                </div>
              )}
            </div>
          ))}

          {/* Product Info Section */}

          {productData?.productInformation && (
            <div className="flex justify-center mt-4 flex-col items-center">
              <h4 className="text-3xl font-bold my-4 text-[#676f77]">
                Product Information
              </h4>
              <div className="mt-2 mb-6 text-center h-1 w-12 bg-yellow-400"></div>
            </div>
          )}

          {/* Benefits Accordion */}
          {productData.productInformation?.benefits && (
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <h2 className="text-2xl font-bold text-[#676f77]">
                  {productData.productInformation.tabHeading}
                </h2>
              </AccordionSummary>
              <AccordionDetails>
                <div className="">
                  {productData.productInformation.benefits.map(
                    (item, index) => (
                      <div key={index} className="border-b pb-4 mt-4 space-y-4">
                        {item.video && (
                          <div className="mt-4">
                            <iframe
                              src={item.video}
                              title="Product Video"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              frameBorder="0"
                              className="w-full max-w-xl h-[300px] mx-auto rounded"
                            />
                          </div>
                        )}
                        {item.label && (
                          <h3 className="text-xl font-bold text-[#676f77]">
                            {item.label}
                          </h3>
                        )}

                        {item.points?.length > 0 && (
                          <ul className="list-disc list-outside text-lg  pl-4 space-y-1 text-gray-700">
                            {item.points.map((point, i) => (
                              <li className="" key={i}>
                                {point}
                              </li>
                            ))}
                          </ul>
                        )}

                        {item.img && (
                          <div className="mt-4">
                            <Image
                              src={item.img}
                              width={400}
                              height={400}
                              alt="Benefit visual"
                              className="w-full max-w-xl mx-auto rounded shadow"
                            />
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>
              </AccordionDetails>
            </Accordion>
          )}

          {/* Technical Data Accordion */}
          {productData.productInformation?.technicalData && (
            <Accordion value="technical-data" className="border rounded-lg">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                className="px-6 py-4 text-left"
              >
                <h4 className="text-2xl font-bold text-[#676f77]">
                  {productData.productInformation.technicalData.tabHeading}
                </h4>
              </AccordionSummary>
              <AccordionDetails className="px-6 pb-6">
                <div className="space-y-8">
                  {/* Single Table */}
                  {productData.productInformation.technicalData.tableData && (
                    <div>
                      <h5 className="text-xl font-bold text-[#676f77] mb-4">
                        {productData.productInformation.technicalData.heading}
                      </h5>
                      <div className="overflow-x-auto">
                        <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                          <thead className="bg-gray-100">
                            <tr>
                              {productData.productInformation.technicalData.tableHeadings.map(
                                (heading, i) => (
                                  <th
                                    key={i}
                                    className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700 text-sm"
                                  >
                                    {heading}
                                  </th>
                                )
                              )}
                            </tr>
                          </thead>
                          <tbody>
                            {productData.productInformation.technicalData.tableData.map(
                              (row, i) => (
                                <tr
                                  key={i}
                                  className={
                                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                                  }
                                >
                                  {row.map((cell, j) => (
                                    <td
                                      key={j}
                                      className="border border-gray-300 px-4 py-3 text-sm text-gray-800"
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Multiple Tables */}
                  {productData.productInformation.technicalData.tables?.map(
                    (table, tableIndex) => (
                      <div key={tableIndex}>
                        <h5 className="text-xl font-bold text-[#676f77] mb-4">
                          {table.heading}
                        </h5>
                        <div className="overflow-x-auto">
                          <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                            <thead className="bg-gray-100">
                              <tr>
                                {table.tableHeadings.map((heading, i) => (
                                  <th
                                    key={i}
                                    className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700 text-sm"
                                  >
                                    {heading}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {table.tableData.map((row, i) => (
                                <tr
                                  key={i}
                                  className={
                                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                                  }
                                >
                                  {row.map((cell, j) => (
                                    <td
                                      key={j}
                                      className="border border-gray-300 px-4 py-3 text-sm text-gray-800"
                                    >
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )
                  )}

                  {/* Description */}
                  {productData.productInformation.technicalData.description && (
                    <div>
                      <ul className="list-disc list-outside text-lg  pl-4  text-gray-700 space-y-1">
                        {productData.productInformation.technicalData.description.map(
                          (point, i) => (
                            <li key={i}>{point}</li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  {/* Technical Data Image */}
                  {/* {productData.productInformation.technicalData.img && (
                    <div className="flex justify-center">
                      <Image
                        src={
                          productData.productInformation.technicalData.img ||
                          "/placeholder.svg"
                        }
                        alt="Technical specifications diagram"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  )} */}
                </div>
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
