import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const metadata = {
  title: "High Performance DVR Rope Hoist in India",
  description:
    "DVR Rope Hoist in India by Timeskrane delivers smooth lifting, high efficiency and reliable performance, ensuring safe and easy material handling for industries.",
  keywords: [
    "Dvr rope hoist price",
    "Demag DVR Rope Hoist spares",
    "wire rope for hoist",
    "electric wire rope hoist",
    "wire rope electric hoist",
    "Demag DVR rope hoists",
    "dvr rope hoist manufacturer in india",
  ],
  alternates: {
    canonical: "https://www.timeskrane.com/dvr-rope-hoist",
  },
  openGraph: {
    title: "High Performance DVR Rope Hoist in India",
    description:
      "DVR Rope Hoist in India by Timeskrane delivers smooth lifting, high efficiency and reliable performance, ensuring safe and easy material handling for industries.",
    url: "https://www.timeskrane.com/dvr-rope-hoist",
    siteName: "Timeskrane",
    locale: "en_IN",
    type: "website",
  },
};

function ProductInformation() {
  const allSections = [
    {
      label: "Rope drum and drive – designed to go easy on your ropes",
      points: [
        "We built this setup to reduce wear—on both the ropes and the sheaves. Less friction means fewer replacements and smoother operation.",
        "One drum does it all. Works for steel rope and synthetic rope, with a special coating tailored to each.",
        "Maintenance-friendly. Upper return sheaves and rope anchorages are easy to get to when you need them.",
        "Smart sheave design. Spokes lighten the load without compromising strength.",
        "Self-lubricating material. Made from GJS 700, the return sheaves naturally reduce friction. No extra grease, no extra work.",
      ],
    },
    {
      label: "Rope drum cover",
      points: [
        "Two-piece design. Fully protects against dirt, weather, and debris.",
      ],
    },
    {
      label: "Protective rope guide",
      points: [
        "Made from tough, acid-resistant plastic that wraps all the way around the rope.",
        "Handles an inclined pull up to 4° without the rope touching the guide.",
        "Same rope guide works for steel and synthetic ropes—so you stock one part, not two.",
        "Made from tough, acid-resistant plastic",
        "Full-circumference design",
        "Allows up to 4° inclined pull—no contact with the guide",
        "One guide fits both steel and synthetic ropes (simpler stocking)",
      ],
    },
    {
      label: "Rope design",
      points: [
        "Steel rope: Flexible, galvanised, and strong—1960 N/mm² tensile strength",
        "Synthetic rope option: Cuts down deadweight when you need it lighter",
      ],
    },
    {
      label: "Hoist gearbox",
      points: [
        "Three sizes to choose from",
        "Compact and lightweight",
        "Ground spur gears keep things quiet and smooth",
        "Die-cast aluminium housing, IP66-protected",
        "Lubricated for life—no maintenance, no hassle",
        "Three sizes to choose from",
        "Compact and lightweight",
        "Ground spur gears keep things quiet and smooth",
        "Die-cast aluminium housing, IP66-protected",
        "Lubricated for life—no maintenance, no hassle",
      ],
    },
    {
      label: "Hoist brake",
      points: [
        "Magnetic disc brake with strong stopping power",
        "Fully enclosed, IP55 protection",
        "Built for 1 million switching cycles—made to last",
      ],
    },
    {
      label: "Drive system – strong grip, low wear",
      points: [
        "DualDrive comes standard—two driven wheels give you reliable traction without wearing things down fast.",
        "Quiet operation. The drive runs smooth and quiet, so it won't add noise to your workspace.",
        "Built to last. High traction, reduced wear, and travel rollers that keep going for the long haul.",
        "DualDrive Plus is available for the DHR 10 when conditions get tough—outdoor use, dirt, heavy environments.",
        "Weight-optimised hoist trolley with pressure rollers keeps things light and balanced. Prefer a version with a counterweight? That's an option too.",
      ],
    },
    {
      label: "Electric equipment",
      points: [
        "Universal electric equipment box – works with hard-wired or CAN bus control",
        "EK-DHR version can support efficiency-boosting assistance functions",
        "DMU with modem enables Demag Equipment App (DEA) and StatusControl 2.0 – for monitoring, remote diagnosis, and parameter programming",
        "Runs on 50 or 60 Hz",
        "Service-friendly wiring – easier when you need access",
        "IP55 enclosure – protects against dust and water",
      ],
    },
    {
      label: "Ergonomics and safety",
      points: [
        "Bottom block with guide handle – gives you a safe, comfortable grip during handling",
        "Return sheaves – designed to protect the rope and extend its life",
        "Protective cover – adds an extra layer of safety",
        "Load hook – meets DIN standards and rotates a full 360° for easy positioning",
      ],
    },
    {
      label: "Travel unit structure",
      points: [
        "Weight-optimised tube design – keeps it light without sacrificing strength",
        "Same smart structure across all sizes",
      ],
    },
    {
      label: "Travel motors",
      points: [
        "Infinitely variable cross-travel speeds using an inverter – standard range: 10 to 32 m/min",
        "Other speeds available if needed",
        "Built-in thermal overload protection",
        "Frequency inverters can be programmed conveniently via app",
      ],
    },
    {
      label: "Control concept – plenty of ways to run things",
      points: [
        "You've got options—whatever feels right for the job.",
        "DSB pendants: Up to 10 buttons, IP65-rated",
        "DST controllers: Powerful and built tough",
        "Radio controllers: Pick your level—from simple button control to hand-held transmitters with joysticks and infinitely variable speed",
        "DRC: The newest generation of radio remote control",
        "Wired or wireless. Simple or advanced. Your call.",
      ],
    },
    {
      label: "Proven system",
      points: [
        "Tested and retested—in our own test center and by external labs",
        "Quality made in Germany",
        "A light crane system from the market leader, backed by over 50 years of experience",
      ],
    },
    {
      label: "Professional planning support",
      points: [
        "Free KBK Designer online tool – helps you plan your KBK installation step by step",
        "Planning made easy: Fast, intuitive configuration with static calculation, parts list, technical drawing, and quotation price all included",
        "Direct link to Demag Shop – order simply and reliably with just a few clicks",
      ],
    },
  ];
  return (
    <section className="py-12 ">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {allSections.map((section, index) => (
            <div key={index} className=" p-4 bg-gray-100 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold my-4 text-[#676f77]">
                {section.label}
              </h4>
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
