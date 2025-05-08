"use client";

import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const allSections = [
    {
      label: "Rope drum/rope drive",
      points: [
        "Low wear on ropes and return sheaves",
        "Common drum for steel and synthetic ropes with specific coating",
        "Easy access to upper return sheaves and rope anchorages",
        "Return sheaves with spokes (reduced weight)",
        "GJS 700 return sheaves (self-lubricating effect)"
      ]
    },
    {
      label: "Protective rope drum cover",
      points: [
        "Completely protected two-piece design for protection against external factors"
      ]
    },
    {
      label: "Protective rope guide",
      points: [
        "Made of tough, acid-resistant plastic in full-circumference design",
        "Inclined pull of up to 4° without touching the rope guide",
        "Rope guide identical for both rope types (stock benefit)"
      ]
    },
    {
      label: "Rope design",
      points: [
        "Flexible galvanised steel side with 1960 N/mm² tensile strength",
        "Optionally also with synthetic rope (reduced deadweight)"
      ]
    },
    {
      label: "Hoist gearbox",
      points: [
        "Three different gearbox sizes",
        "Compact and lightweight design",
        "Quiet and low-vibration operation thanks to ground spur gears",
        "Lubricated for life in die-cast aluminium housing (IP 66)"
      ]
    },
    {
      label: "Hoist brake",
      points: [
        "Magnetic disc brake with high brake torque",
        "Fully enclosed design, IP 55 protection",
        "Designed for 1 million switching cycles"
      ]
    },
    {
      label: "Drive system",
      points: [
        "High traction with low wear",
        "DualDrive with two driven wheels",
        "Minimum drive noise",
        "Long-lasting drive principle with high traction and reduced wear",
        "Highly durable travel and guide rollers with long service life",
        "DualDrive Plus for DHR 10 in particularly challenging environments",
        "Tailored drive concept",
        "Weight-optimised hoist trolley design with pressure rollers",
        "Alternative: version with counterweight"
      ]
    },
    {
      label: "Electric equipment",
      points: [
        "Universal electric equipment box for hard-wired or CAN bus control",
        "Option for EK-DHR for efficiency-enhancing assistance functions",
        "DMU with modem for Demag Equipment App (DEA) and StatusControl 2.0: Monitoring, remote diagnosis and parameter programming",
        "For 50 or 60 Hz operation",
        "Service-friendly wiring",
        "IP 55 enclosure"
      ]
    },
    {
      label: "Ergonomics and safety",
      points: [
        "Bottom block with guide handle for safe, ergonomic handling",
        "Return sheaves that protect the rope",
        "Protective cover for increased safety",
        "Load hook with DIN dimensions can be rotated 360°"
      ]
    },
    {
      label: "Travel unit structure",
      points: [
        "Weight-optimised design based on tube design for all sizes"
      ]
    },
    {
      label: "Travel motors",
      points: [
        "Infinitely variable cross-travel speeds with inverter (10/32 m/min)",
        "Further speeds possible",
        "Thermal overload protection",
        "Frequency inverters can be programmed via app"
      ]
    },
    {
      label: "Control concept",
      points: [
        "Numerous variants available",
        "DSB: up to 10 buttons (IP 65)",
        "DST: powerful and robust controllers",
        "Radio controllers with various feature levels: from simple control buttons to hand-held transmitters with infinitely variable speed and joystick control",
        "DRC: new generation of radio remote control"
      ]
    },
    {
      label: "Proven system",
      points: [
        "Continuously tested in our own test center and in external tests",
        "Quality made in Germany",
        "Light crane system from the market leader with more than 50 years of experience"
      ]
    },
    {
      label: "Professional planning support",
      points: [
        "Free KBK Designer online tool for project engineering your KBK installations",
        "Planning made easy: fast, self-explanatory configuration including static calculation, parts list, technical drawing and quotation price",
        "Link to the Demag Shop order system for simple and reliable orders at the click of your mouse"
      ]
    }
  ];
  
  
function ProductInformation() {
  return (
    <section className="py-12 ">
      <div className="container">

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {allSections.map((section, index) => (
            <div key={index} className=" p-4 bg-gray-100 rounded-lg shadow-sm">
            <h4 className="text-xl font-bold my-4 text-[#676f77]">{section.label}</h4>
              <ul className="space-y-3">
                {section.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircleIcon className="text-green-500 mr-2 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductInformation;
