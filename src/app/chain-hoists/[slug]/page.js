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
import { list } from "postcss";

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
      benefits: [
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
            '24 V contactor control with internal "tri-state" signal transfer',
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

  {
    product: "DCS-Pro chain hoist",
    slug: "dcs-pro-chain-hoist",
    summary: {
      title: "An investment with added value",
      description:
        "Our DCS-Pro chain hoist offers high efficiency and reliability to ensure maximum precision in assembly operations – for gently and safely lifting, lowering and positioning valuable and sensitive parts. Thanks to almost double rated speed in the partial load range, lifting motions can be performed very quickly.",
      benefits: [
        "Variable speed over the entire load spectrum",
        "Exceptionally fine control at slow speed",
        "Up to 90% higher speeds for reduced loads thanks to its Pro-Hub function",
        "Load capacities up to 3,200 kg",
      ],
      video: ["/img/chain-hoist/03-DCS-Pro-EN.gif"],
    },
    productInformation: {
      tabHeading: "The benefits at a glance",
      benefits: [
        {
          label: "High-performance equipment",
          points: [
            "All inclusive features already as standard",
            "Two lifting speeds as standard",
            "24 V contactor control",
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
          label: "High safety and reliability",
          points: [
            "Standard requirements satisfied for functional safety",
            "No continuous slipping thanks to slipping clutch with automatic cut-out",
            '24 V contactor control with internal "tri-state" signal transfer',
            "Chain hoist and travel drive feature IP 55 enclosure, insulation class F",
            "Automatic braking if the control system fails",
          ],
        },
        {
          label: "Optimized safety",
          points: [
            "Installation and commissioning in a minimum of time",
            "Fast and ergonomic height adjustment of the control pendant without the need for any additional wiring",
            "Rapid access to all important plug-and-socket connections, height adjustment of the control pendant and chain lubrication thanks to pivoting service cover",
            "Elapsed operating time counter and diagnosis interface",
            "Interchangeable chain drive can be quickly and easily replaced without the need to remove motor or gearbox parts",
            "High flexibility thanks to complete features",
            "Gearbox, brake and slipping clutch are maintenance-free for up to 10 years",
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
          label: "Service-friendly",
          points: [
            "Plug-and-play connections to minimize setup time",
            "Rapid access to all important plug-in connections",
            "Separate service panel with 3m pendant cable, gear and brake service cover",
            "Chain lubrication slot for easy service access",
            "Chain drive and brake can be replaced quickly",
          ],
        },
        {
          label: "Ergonomic operation",
          points: [
            "Simple commissioning and service thanks to plug-&-lift and plug-&-drive connections",
            "Fatigue-free operation thanks to ergonomic, plug-in DSC-S control pendant",
            "Flexibility as standard thanks to two sizes of suspension bracket",
            "Fast and simple installation thanks to infinitely variable adjustment of trolleys to the flange width.",
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
    summary: {
      title: "Convenient operation and load handling with one hand",
      description:
        "The DCM-Pro Manulift was developed for handling loads quickly and safely with only one hand. The DCM-Pro is based on the lifting unit of the DC-Pro chain hoist and the DSM-C control unit. Thanks to the control unit which is rigidly connected to the load handling attachment, the operator only needs one hand to operate the hoist and guide the load. Further strengths:",
      benefits: [
        "Convenient operation and load guidance with one hand",
        "For all Manulift load handling attachments or specially developed load handling attachments",
        "Simple replacement thanks to quick-change coupling",
        "Suitable for right-hand and left-hand operation",
      ],
    },
    productInformation: {
      tabHeading: "The benefits at a glance",
      benefits: [
        {
          label: "Versatile performance",
          points: [
            "Two hoist speeds as standard",
            "Versatile adaptability to any task",
            "Simple exchange of the load handling device thanks to quick-change coupling",
            "For right-hand and left-hand operation",
          ],
        },
        {
          label: "High operating quality",
          points: [
            "Convenient single-handed handling and guidance of loads weighing up to 250 kg",
            "Quick-change coupling for a variety of load handling attachments (load hooks, pantograph tongs, clamping and shaft grippers, parallel gripper systems, specifically developed load handling attachments)",
            "Service-friendly thanks to diagnostics interface",
          ],
        },
        {
          label: "High safety and reliability",
          points: [
            "24 V contactor control",
            "FEM classification from 2m+ to 4m",
            "Slipping clutch with speed monitoring",
            "No brake adjustment",
            "No load dropping thanks to slipping clutch arranged in front of the brake",
            "Operating limit switches",
          ],
        },
        {
          label: "Long service life",
          points: [
            "Gearbox, brake and slipping clutch maintenance-free for up to 10 years",
            "Aluminum motor, gearbox and electrical cover parts provided with UV-resistant powder coating",
            "Robust cylindrical-rotor motor with fan and separate DC brake beneath the electrical cover",
          ],
        },
      ],
    },
  },
  {
    product: "DCMS-Pro Manulift",
    slug: "dcms-pro-manulift",
    summary: {
      title: "Single-handed operation",
      description:
        "Our DCMS-Pro Manulift combines fast and reliable load handling with variable speed control and operation with only one hand. It is based on the lifting unit of our DCS-Pro chain hoist and our DSM-CS control unit. The wide range of performance offered by the DCMS-Pro:",
      benefits: [
        "Chain hoist operation and load handling with one hand",
        "Safe, reliable and precise positioning of sensitive goods and valuable products thanks to variable speed control",
        "Fast lifting motions at almost double the rated speed in the partial load range",
        "Quick-change coupling for a reliable hold",
        "Simple replacement of the load handling attachment",
        "Suitable for right-hand and left-hand operation",
      ],
      video: ["/img/chain-hoist/DCMS-Pro.gif"],
    },
    productInformation: {
      tabHeading: "The benefits at a glance",
      benefits: [
        {
          label: "Maximum ease of operation",
          points: [
            "Infinitely variable speed control for lifting and lowering motions over the entire load range",
            "Exceptionally fine control at slow speed",
            "Smooth starting and exact positioning",
            "Creep lifting speed from 0.15 m/min",
            "Lifting speed, acceleration and braking ramp can be simply modified via the control unit",
            "Suitable for right-hand and left-hand operation",
          ],
        },
        {
          label: "Versatile performance",
          points: [
            "The various Manulift load handling attachments can be changed with ease",
            "Pro-Hub function for up to 90 per cent higher nominal speed for partial load or no-load operations",
            "Automatic switchover to creep lifting speed before the upper/lower limit positions are reached – speed ratio 1:100",
          ],
        },
        {
          label: "High safety and reliability",
          points: [
            "Motor temperature monitoring device",
            "Acceleration and braking ramps to reduce load sway",
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
    summary: {
      title: "High quality for everyday needs",
      description:
        "Our DC-Com chain hoist is the right choice for everyday needs: designed for applications with normal requirements – simplicity and reliability in proven Demag quality. DC-Com units can be integrated into the rails of our KBK light crane system or installed on I-beam girders – where our U 11–U 22 generation of trolleys provides smooth transport of your loads. And what else do they offer?",
      benefits: [
        "Simple commissioning",
        "Ergonomic handling",
        "Service-friendly",
        "FEM classification from 2m",
        "24 V contactor control",
        "Two hoist speeds as standard",
      ],
    },
    productInformation: {
      tabHeading: "The benefits at a glance",
      benefits: [
        {
          label: "Reliable performance",
          points: [
            "Various sizes with load capacities up to 2,000 kg",
            "Standard 4-m hook path",
            "Elapsed operating time counter and diagnosis interface",
          ],
        },
        {
          label: "Good availability and ease of operation",
          points: [
            "Available direct ex stock",
            "Fast and simple commissioning thanks to plug connections",
            "Ergonomic handling",
            "Service-friendly",
          ],
        },
        {
          label: "High safety and reliability",
          points: [
            "High-quality powder-coated surfaces for improved protection and a longer service life",
            "24 V contactor control",
            "Slipping clutch with automatic cut-out by means of speed monitoring",
            "IP 55 enclosure for chain hoist and trolley",
          ],
        },
        {
          label: "Great versatility",
          points: [
            "Two hoist speeds",
            "Interface for electric travel",
            "Optional operating limit switches up to 1,000 kg",
          ],
        },
        {
          label: "U 11–U 34 trolleys",
          points: [
            "Push travel in three sizes",
            "Fast and simple installation",
            "Can be used on parallel and sloping flanges",
            "Smooth travel and low travel resistance",
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
    summary: {
      title:
        "Demag double chain hoist: Two mechanically synchronised chain lead-offs for safely handling bulky loads",
      description:
        "Double chain hoists are particularly suitable for handling long material or for operation with load bars. Demag offers solutions with two mechanically synchronised chain lead-offs that can lift and lower bulky loads in perfect balance. The load can also be asymmetrically distributed to meet special application needs.",

      subdescription: [
        {
          benefits: [
            {
              title: "The right double chain hoist for your application",
              description: [
                "LDC-D double chain hoists are suitable for higher speeds. The chain hoist can transport loads weighing up to 5,000 kg at 24 m/min. You can choose between a 2-stage or variable-speed control system and can use the chain hoist as a stationary, push or electric-travel unit, for example on our modular Demag KBK light crane system.",
                "KLDC-D double chain hoists offer a short C dimension thanks to their low-headroom. This increases utilisation of the available space and loads weighing up to 2,000 kg can be lifted and lowered at 2-stage or variable speeds. KLDC-D chain hoists can also be operated as stationary units or with push or electric travel.",
              ],
            },
            {
              title: "Durable components for uncompromising cost-efficiency",
              description: [
                "LDC-D double chain hoists are suitable for higher speeds. The chain hoist can transport loads weighing up to 5,000 kg at 24 m/min. You can choose between a 2-stage or variable-speed control system and can use the chain hoist as a stationary, push or electric-travel unit, for example on our modular Demag KBK light crane system.",
                "The components installed in the DC chain hoist range are selected for their longevity. The generously specified gearbox allows for FEM classification up to 4m and, therefore, 6,300 hours of operation for demanding applications.",
              ],
            },
          ],

          img: "/img/chain-hoist/11-LDC-D_EN.gif",
          video:
            "https://www.youtube.com/embed/-yF8wJYLo8g?si=KpTjPqmSSs645ZsA",
        },
      ],

      benefits: [
        "Variable speed over the entire load spectrum",
        "Exceptionally fine control at slow speed",
        "Up to 90% higher speeds for reduced loads thanks to its Pro-Hub function",
        "Load capacities up to 3,200 kg",
      ],
      video: ["/img/chain-hoist/03-DCS-Pro-EN.gif"],
    },
    productInformation: {
      tabHeading: "The benefits at a glance",
      benefits: [
        {
          label: "LDC-D benefits",
          points: [
            "Suitable for higher speeds",
            "Longer chain service life thanks to reduced polygon effect since there are no additional chain return sprockets",
            "Load capacities up to 5 t",
            "Hook center distances from 550 mm to 3,200 mm",
            "Lifting speeds up to 24 m/min",
            "Available with 2-stage or variable speeds",
            "Possible variants: stationary, traveling, for operation with KBK and for articulated trolleys",
            "Asymmetric load distribution permitted",
          ],
        },
        {
          label: "KLDC-D benefits",
          points: [
            " Low C dimension as for low-headroom design for optimum utilization of the available headroom",
            "2/4 lead-off position",
            "Load capacities up to 2 t",
            "Hook center distances from 400 mm to 4,600 mm",
            "Available with 2-stage or variable speeds",
            "Possible variants: stationary, traveling, for operation with KBK and for articulated trolleys",
            "Asymmetric load distribution permitted",
          ],
        },
      ],
    },
  },
  {
    product: "Chain hoist with KDC low-headroom travelling hoist",
    slug: "chain-hoist-kdc-low-headroom-travelling-hoist",
    summary: {
      title:
        "Demag KDC low-headroom travelling hoist: Optimum utilization of space with particularly large C dimension",
      description:
        "The particularly compact KDC monorail travelling hoist offers extremely low headroom for optimum utilisation of the hook path. KDC hoists can be used with all trolley variants, for example in combination with KBK suspension cranes or KBK monorails. Therefore, you can easily move loads weighing up to 2,000 kg over any area or from point to point. You have the choice between 2-stage or variable lifting and cross-travel speeds.",
      video: ["/img/chain-hoist/KDC-42318-0-13.jpg"],

      subdescription: [
        {
          benefits: [
            {
              title: "High safety and reliability",
              description: [
                "All KDC units are equipped with operating limit switches for the highest and lowest hook position as standard, ensuring convenient lifting and lowering with the chain hoist at all times. Smooth cross-travel starting and braking motions of the trolley provide for low-sway load handling. The safety-related functions satisfy Performance Level c and Category 2 to EN ISO 13849-1 as a minimum requirement.",
              ],
            },
            {
              title: "Durable components for uncompromising cost-efficiency",
              description: [
                "The components installed in the DC chain hoist range are selected for their longevity. The generously specified gearbox allows for FEM classification up to 4m and, therefore, 6,300 hours of operation for demanding applications.",
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
      tabHeading: "The benefits at a glance",
      benefits: [
        {
          label: "Low-headroom traveling hoist",
          points: [
            "Load capacity up to 2,000 kg",
            "Optimized design for maximum utilization of the available height",
            "Can be used for all trolley types",
            "All KDC traveling hoists are equipped with operating limit switches for the highest and lowest hook position",
            "Available with 2-stage or variable lifting speeds",
          ],
        },
      ],
    },
  },
  {
    product: "KLDC travelling hoist for big bags",
    slug: "kldc-traveling-hoist-big-bags",
    summary: {
      title:
        "Demag KLDC travelling hoist for big bags: Extended hook lead-off and maximum lifting height",
      description:
        "The combination of long load bars and a low lifting height can cause problems in some applications. KLDC travelling hoists for big bags combine the maximum lifting height of a Demag KDC low-headroom travelling hoist with an extended hook lead-off, which enables the load to be lifted to the highest hook position. This results in maximum utilisation of the C dimension for handling loads weighing up to 2,000 kg.",
      video: ["/img/chain-hoist/KDC-42318-0-13.jpg"],

      subdescription: [
        {
          benefits: [
            {
              title: "Convenient load handling of bulky goods",
              description: [
                "Together with the modular Demag KBK light crane system, this creates a winning combination for the convenient handling also of bulky loads. KLDC travelling hoists for big bags are equipped with operating limit switches for the highest and lowest hook position and can be operated with 2-stage as well as variable lifting and travel speeds.",
              ],
            },
            {
              title: "Durable components for uncompromising cost-efficiency",
              description: [
                "The components installed in the DC chain hoist range feature reliability and a long service life. The generously specified gearbox allows for FEM classification up to 4m and, therefore, 6,300 hours of operation for demanding applications.",
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
    summary: {
      title:
        "Demag LDC-Q quadro chain hoist: Four mechanically synchronised chain lead-offs",
      description:
        "Four attachment points are a good solution for transporting customised load handling attachments or loads weighing up to 3,200 kg that have a large surface area. With its LDC-Q quadro chain hoist, Demag can supply a chain hoist with four mechanically synchronised chain lead-offs that can lift and lower loads evenly and with high precision. Its special feature is a chain hoist that drives all four chain lead-offs. With high safety and reliability. LDC-Q units allow work to be performed under suspended loads according to accident prevention regulation BGV D8+.",

      subdescription: [
        {
          benefits: [
            {
              title: "Precision engineering by Demag ",
              description: [
                "Smooth cross-travel starting and braking motions for low-sway load handling. A choice between 2-stage or variable lifting speeds rounds off a convenient and precise lifting solution with the Demag LDC-Q.",
              ],
            },
            {
              title: "Durable components for uncompromising cost-efficiency",
              description: [
                "The components installed in the DC chain hoist range are selected for their longevity. The generously specified gearbox allows for FEM classification up to 4m and, therefore, 6,300 hours of operation for demanding applications.",
              ],
            },
          ],

          video:
            "https://www.youtube.com/embed/-yF8wJYLo8g?si=4jzzSq7-Z7sjTEjY",
        },
      ],
    },
    productInformation: {
      tabHeading: "The benefits at a glance",
      benefits: [
        {
          label: "Low-headroom traveling hoist",
          points: [
            "Load capacity up to 2,000 kg",
            "Optimized design for maximum utilization of the available height",
            "Can be used for all trolley types",
            "All KDC traveling hoists are equipped with operating limit switches for the highest and lowest hook position",
            "Available with 2-stage or variable lifting speeds",
          ],
        },
      ],
    },
  },
  {
    product: "Demag DC-II chain hoist",
    slug: "dc-ii-chain-hoist",
    summary: {
      title: "Quality. Performance. Demag DC-II chain hoist.",
      description:
        "The Demag DC-II chain hoist meets high standards of quality and innovation. With its second generation, Demag is consistently following the DC path and once again defining the industry benchmark. Naturally made in Wetter.",

      subdescription: [
        {
          benefits: [
            {
              title: "Innovation from Wetter.",
              description: [
                "Like its predecessor, the DC-II offers the most comprehensive standard equipment and also a wide-ranging option package, which underscores the flexible application possibilities of the hoist and its modular design.",
              ],
              video:
                "https://www.youtube.com/embed/ba9Y2DxPdivc?si=BqmNg-7jL1C537aP",
            },

            {
              description: [
                "The high-quality components of the chain hoist meet all the demands of 'made by Demag' quality. In-house gearbox production and assembly at the main plant in Wetter epitomise the expertise that has established the DC as an industry benchmark.",
              ],
              //   img: "/img/chain-hoist/DC-II-Bauformen.webp",
            },

            {
              title:
                "Second generation. Fully equipped instead of a list of extras.",
              description: [
                "The main components of the DC-II are maintenance-free for up to ten years. Easy adjustment options without the need for special tools and the Plug&Lift principle characterise the service-friendliness of this hoist.",
                "Safety during operation is underlined by the slipping clutch with automatic cut-off through speed monitoring. In addition, 24 V contactor control, operating limit switches and elapsed operating time counter ensure safe operation with the DC-II.",
              ],
            },

            {
              title: "Demag DC-II chain hoist",
              description: [
                "From its inception, the DC-II is available in pre-configured variants with load capacities from 125 to 1,000 kg direct from stock. The basic DC-Com II variant and the high-end DC-Pro II variant differ in terms of their classification in the FEM / ISO group of mechanisms and their lifting speeds. Both variants of the DC-II have the same high level of equipment.",
              ],
              img: "/img/chain-hoist/DC-II-Bauformen.webp",
            },

            {
              title: "Immediately available",
              description: [
                "With the market launch, Demag is offering three sizes (DC-II 1/2, DC-II 5 and DC-II 10) as pre-assembled chain hoists. The benefits for you are fast availability and perfect harmonisation of the tried-and-tested components. These chain hoists, which are available direct from stock, feature safe, low-wear and ergonomic 1/1 reeving. With the 2m to 4m groups of mechanisms, they can achieve up to 6,300 hours of service.",
              ],
              highlight: [
                {
                  heading: "Your lifting heights",
                  list: ["DC-Pro II 5 metres", "DC-Com II 4 metres"],
                },
              ],

              subdescription: [
                "With the two speed settings, you can select a high operating speed with the powerful V2 and a sensitive positioning speed with V1.",

                "The transition of the existing chain hoist range to the new generation is ongoing. Once it is complete, the entire DC chain hoist range will be available in the new DC-II generation.",
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
    summary: {
      title:
        "DC-Wind chain hoist: A great hoist for the maintenance of wind turbines",
      description:
        "Our DC-Wind Demag chain hoists are used for the maintenance and service of wind turbines all over the world. Both in onshore and offshore applications, DC-Wind units can overcome adverse conditions. They can safely and reliably transport loads and tools weighing up to 1,500 kg to heights of up to 180 metres.",

      subdescription: [
        {
          benefits: [
            {
              title: "Safe. By Demag.",
              description: [
                "Its high lifting speeds enable it to cut maintenance and downtimes to a minimum – making a valuable contribution towards its high availability and efficient operation. The DC-Wind chain hoist can be conveniently controlled and offers all the benefits of our DC chain hoist range as standard. Its high safety standard with a brake/coupling system and corrosion-protected brake with IP55 enclosure are just two of the benefits to improve workplace safety.",
              ],
            },
            {
              title: "Fast installation, simple maintenance",
              description: [
                "Our DC chain hoist can be quickly installed and put into service with Plug & Lift plug connectors. Its durable components are designed for reliable operation also under harsh conditions. The gearbox and the slipping clutch are maintenance-free for up to 10 years and we select the right components to meet the needs of different climate zones.",
              ],
              highlight: [
                {
                  heading: "Your lifting heights",
                  list: [
                    "Convenient operation",
                    "High safety standard",
                    "Simple transport of loads weighing up to 1,500 kg",
                    "Hook paths up to 180 meters",
                    "Variable attachment to a slewing arm or a traveling portal arrangement",
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
      tabHeading: "The benefits at a glance",

      benefits: [
        {
          label: "High safety standard",
          points: [
            "Safe and reliable load handling thanks to its brake/coupling system and its corrosion-protected brake featuring IP 55 protection",
          ],
        },
        {
          label: "Can be adapted to meet customer requirements",
          points: [
            "Specification to suit individual needs, e.g. lifting height and chain collector design",
            "Modification for different climate zones (e.g. cold climate versions), offshore operation and installation sites at great heights",
          ],
        },
        {
          label: "Convenient operation",
          points: [
            "Fast main lifting speed",
            "Precise positioning at creep lifting speed",
            "Trolley can be simply locked with a handle",
            "Ergonomic control pendant",
          ],
        },
        {
          label: "Fast installation and simple handling",
          points: [
            "Simple commissioning and convenient service thanks to Plug & Lift connections",
            "Long product service life and extremely low wear due to electrical braking and slip monitoring of the slipping clutch",
            "Gearbox and slipping clutch maintenance-free for up to 10 years",
          ],
        },
        {
          label: "Low-headroom traveling hoist",
          points: [
            "Load capacity up to 2,000 kg",
            "Optimized design for maximum utilization of the available height",
            "Can be used for all trolley types",
            "All KDC traveling hoists are equipped with operating limit switches for the highest and lowest hook position",
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
    summary: {
      title: "Trolleys for DC chain hoists",
      description:
        "Demag trolleys for chain hoists are a perfect match for DC chain hoists and ideal for installation on I-beam girders or on the modular KBK light crane system. For push travel or with electric positioning – these trolleys provide horizontal travel solutions tailored to meet specific requirements for our compact hoist units.",

      subdescription: [
        {
          benefits: [
            {
              description: [
                "All trolleys feature a low rolling resistance and smooth travel characteristics over their entire service life. The robust components are perfectly matched and can provide convenient transport solutions for your application needs.",
              ],
              highlight: [
                {
                  heading: "Demag trolleys – the choice is yours:",
                  list: [
                    "U type trolleys for manual travel",
                    "E type trolleys for low-sway electric travel",
                    "Click-fit trolleys that can be clicked into position",
                    "Smooth-running KBK trolleys as system components",
                    "Low-headroom travelling hoists for optimum utilisation of the available height",
                    "Double chain hoist for mechanically synchronised lifting, e.g. for long material or large-volume components",
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
      tabHeading: "The benefits at a glance",

      benefits: [
        {
          label: "Click-fit trolleys",
          points: [
            "Simple click-fit installation",
            "Articulated trolleys (minimum curve radius: 800 mm)",
            "Easily adaptable to standard-profile or parallel-flange sections",
            "High safety and reliability thanks to integrated drop-stop and lift-off protection",
            "Universal solutions for loads up to 550 kg",
            "Flange widths from 50 to 91 mm",
          ],
        },
        {
          label: "U/RU push-travel trolleys",
          points: [
            "Excellent travel characteristics",
            "Fast and simple installation",
            "Can be used on parallel and sloping flanges",
            "Smooth travel, low travel resistance",
            "Negotiate curves down to a minimum radius of 1,000 mm",
            "Drop stop integrated into the side cheek",
            "Extremely low girder wear",
            "Designs with polyamide or steel rollers",
            "Compact, state-of-the-art industrial design",
            "Four sizes: U 11 up to 1,100 kg, U 22 up to 2,200 kg, U 34 up to 3,400 kg, RU 56 up to 5,600 kg",
          ],
        },
        {
          label: "E 11 to E 34 electric travel drives",
          points: [
            "Smooth starting and braking",
            "Low-sway load handling",
            "Fast installation and commissioning",
            "Designed for operation with DC-Pro chain hoists",
            "Control via DSE 10-C/DSE 10-CS control pendants",
            "Fast availability thanks to plug-&-drive: plug-in connection to DC-Pro chain hoists",
            "Simple installation of the control pendant for long/cross travel",
            "Optional accessory: cross-type limit switches for fast-to-slow and final limit-switch cut-off",
          ],
        },
        {
          label: "KBK trolleys",
          points: [
            "E 22 fitted as standard with RF 125 friction-wheel travel drive for use with KBK light crane system",
            "Particularly short approach dimensions for vertical mounting arrangement",
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
          "¹) Possible by programming other parameters",
          "²) Max. displaceable weight/max. gradient 1% > 1% on request",
          "¹) Flange width for DC 16/25 = 90-310 mm",
          "²) Steel travel wheels optional",
          "³) Plastic travel wheels on request",
          "⁴) Flange width for DC 16/25 = 90-200 mm",
          "⁵) From flange width 106 mm",
          "The specified curve radii apply for normal applications. Contact the manufacturer or his representative for frequent curve travel operation (e.g. automatic installations).",
        ],
        img: "/img/chain-hoist/dcms-pro-table.webp",
      },
    },
  },

  {
    product: "DDC articulated trolley",
    slug: "ddc-articulated-trolley",
    summary: {
      title: "DDC articulated monorail hoist for travel on curved track",
      description:
        "R/EUDDC (standard-headroom) and R/EKDDC (low-headroom) monorail travelling hoists with articulated trolleys are ideally suited for travel on curved tracks made of I-beam girders. DDC units are the solution for normal or low-headroom applications for a minimum curve radius of 800 mm. Their lateral guide rollers provide for quiet travel characteristics that are kind to the track.",

      subdescription: [
        {
          benefits: [
            {
              label: "Adapted to meet your needs",
              description: [
                "Demag geared motors can be installed as an option, making the trolley suitable for electric travel with even more convenient control via a radio or pendant controller. The installation of an angular gearbox also allows the unit to travel through narrow openings.",
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
      tabHeading: "The benefits at a glance",

      benefits: [
        {
          label: "DDC articulated trolley",
          points: [
            " Suitable for travel on curved tracks with I-beam girders for curve radii of at least 800 mm",
            "Lateral guide rollers for quiet operation and gentle on the runway",
            "Travel motor can be optionally mounted on angular gearbox for travel through narrow openings",
            "Available as standard or low-headroom variants",
          ],
        },
      ],
    },
  },

  {
    product: "DCBS chain hoist",
    slug: "dcbs-chain-hoist",
    summary: {
      title: "Demag chain hoist with balancer function",
      subtitle: "Higher availability for greater efficiency",
      description:
        "Intuitive load handling has never been so easy; and, at the same time, efficient. Based on our DC range, DCBS chain hoists include a balancer function that allows loads to be guided and precisely positioned with ease. DCBS units are available in two sizes with load capacities up to 250 kg. They are compatible with our comprehensive Demag KBK light crane system.",
      subdescription: [
        {
          benefits: [
            {
              video: "//www.youtube.com/embed/RlG34Xwg3IA?si=dZYWcinyq17dly2g",
            },

            {
              description: [
                "DCBS units can easily travel on KBK profile section rails: on single-girder suspension cranes, suspension monorail systems or on slewing JIB  Cranes. If you want to implement an application with lifting masts, manipulators or your own load-handling attachments, the controller sensors can be installed in the load-bearing arrangement.",
              ],
              highlight: [
                {
                  heading: "High safety and reliability",
                  description: "DCBS core functions",
                  list: [
                    "Lifting and lowering by manual force on the control handle",
                    "Manipulating loads",
                    "Protection against slack chain",
                    "Protection against snatching loads",
                    "Movements can be stopped if loads fluctua , te widely",
                    "Monitoring/reducing load capacity",
                  ],
                },
              ],
            },

            {
              highlight: [
                {
                  heading: "High safety",
                  list: [
                    "Low-wear brake thanks to regenerative braking",
                    "No need to adjust the brake",
                    "Brake arranged before slipping clutch in the drive arrangement (no load slipping)",
                    "Automatic braking if a malfunction occurs",
                    "Slipping clutch with automatic cut-out by means of speed monitoring (no continuous slipping)",
                    "Gearbox, slipping clutch and brake maintenance-free for up to 10 years",
                    "Safety-related functions satisfy at least Performance Level c and Category 2 to EN ISO 13849-1",
                  ],
                },
              ],
            },
            {
              highlight: [
                {
                  heading: "Features",
                  list: [
                    "Operating limit switches (upper/lower)",
                    "Elapsed operating time counter",
                    "Installation transparency thanks to operating data interface (IDAPSY)",
                    "External sensor in the load-bearing arrangement",
                  ],
                },
              ],
            },

            {
              highlight: [
                {
                  heading: "Applications",
                  list: [
                    "lifting masts",
                    "manipulators",
                    "customer-specific load attachments",
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
      tabHeading: "Benefits at a glance",
      benefits: [
        {
          video:
            "https://www.youtube.com/embed/TEQI_hvKniM?si=2k64-NcrkzxnBQyz",
          label: "Grip control",
          points: [
            "The load can be controlled very easily with the D-Grip Servo control handle.",
          ],
        },
        {
          label: "Load positioning",
          points: [
            "By switching over to “load positioning mode”, the operator can grasp and guide the load directly with light pressure.",
          ],
        },

        {
          label: "Assembly mode",
          points: [
            "High level of safety and precision for assembly operations, since any oscillation and uncontrolled load movements are suppressed.",
          ],
        },

        {
          label: "Load pick-up mode",
          points: [
            "Load handling attachments can be lifted and pre-tensioned",
            "Load can be removed without dropping or sudden upward pull",
            "Protection for jigs and machinery. The balancer only lifts until a preset force is reached.",
          ],
          img: "/img/chain-hoist/chain-hoist-DCBS.webp",
        },
      ],
    },
  },
];

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
