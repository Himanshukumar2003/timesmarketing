import Image from "next/image";
import React from "react";

const data = {
    "features": [
      {
        "title": "Safety",
        "points": [
          "Low-voltage control pendant thanks to 24 V contactor control system",
          "Safety-related functions satisfy at least Performance Level c and Category 2 to EN ISO 13849-1"
        ],
        img:"/img/icons/icon1.webp"
      },
      {
        "title": "Minimum load sway",
        "points": [
          "Smooth cross-travel starting and braking motions for low-sway load handling",
          "Speeds and acceleration/braking rates can be modified by means of the control pendant, if required"
        ],
        img:"/img/icons/icon2.webp"

      },
      {
        "title": "Long service life",
        "points": [
          "Generously specified gearbox. 2m+ (1,900 hours) for main load capacities and up to 4m (6,300 hours) for demanding applications",
          "All sub-assemblies of the chain hoist are rated for a long service life, even under the most demanding conditions"
        ],
        img:"/img/icons/icon3.webp"

      },
      {
        "title": "Temperature range",
        "points": [
          "Reliable operation from -20 °C to +45 °C without any reduction in the duty factor",
          "Operation also possible up to 60 °C and more"
        ],
        img:"/img/icons/icon4.webp"

      },
      {
        "title": "Ergonomics",
        "points": [
          "Length of control cable or position of control pendant can be adjusted without the need for any wiring",
          "Length of control cable that is not needed can be stored under the service cover"
        ],
        img:"/img/icons/icon5.webp"

      },
      {
        "title": "High-performance motor",
        "points": [
          "Hoist motor has large safety reserves to provide for reliable operation for many years",
          "Can be used for switching cycles way beyond usual market levels"
        ],
        img:"/img/icons/icon6.webp"

      },
      {
        "title": "Pro-Hub function",
        "points": [
          "Up to 90% higher rated lifting speed in reduced load range"
        ],
        img:"/img/icons/icon7.webp"

      },
      {
        "title": "Easy to service",
        "points": [
          "Gearbox & slipping clutch maintenance-free for up to 10 years",
          "Brake maintenance-free for up to 10 years (up to 5 years for DC 10–25)",
          "Simple and rapid maintenance and repair of individual components thanks to the modular chain hoist design – cuts any downtime to a minimum"
        ],
        img:"/img/icons/icon8.webp"

      },
      {
        "title": "Variable speeds",
        "points": [
          "Valuable and sensitive parts can be moved and positioned more smoothly and reliably",
          "Variable button characteristic like a car accelerator pedal"
        ],
        img:"/img/icons/icon9.webp"

      },
      {
        "title": "Status display",
        "points": [
          "Display for elapsed operating time counter and operating statuses",
          "Always up-to-date for service purposes"
        ],
        img:"/img/icons/icon10.webp"

      },
      {
        "title": "Slipping clutch monitoring",
        "points": [
          "Harmful continuous slipping eliminated thanks to speed monitoring",
          "Reliable protection against extreme overload",
          "Load securely held in any operating situation and cannot drop while hoist is at standstill, since brake is arranged in front of the slipping clutch in load-bearing arrangement"
        ],
        img:"/img/icons/icon11.webp"

      },
      {
        "title": "Low noise level",
        "points": [
          "Reduced operating noise thanks to helical gearing in all gearbox stages",
          "Smooth running characteristics thanks to high-quality gearing"
        ],
        img:"/img/icons/icon12.webp",

      },
      {
        "title": "Online product configurator",
        "points": [
          "Easy to use",
          "Specify products to meet your needs",
          "Save your configuration",
          "Immediate results",
          "Online ordering via Demag Shop"
        ],
        img:"/img/icons/icon14.webp"

      },
      {
        "title": "CAD geometry data",
        "points": [
          "Configure 2D or 3D geometry data online in many file formats",
          "3D PDF for rapid view without CAD program"
        ],
        img:"/img/icons/icon15.webp"

      },
      {
        "title": "Information available 24/7",
        "points": [
          "Whenever you want",
          "Up-to-date information"
        ],
        img:"/img/icons/icon16.webp"

      },
      {
        "title": "Documentation",
        "points": [
          "Product description",
          "Technical data",
          "Circuit diagrams",
          "Documents"
        ],
        img:"/img/icons/icon17.webp"

      }
    ]
  }
  

const FeaturesSection = () => {
  return (
    <div className="">
        {data.features.map((feature, index) => (
          <div key={index}>
<Image src={feature.img} width={60} height={60} alt="" className="mb-4"></Image>           
                <p className="card-title font-medium text-lg mb-4">{feature.title}</p>
                <ul className=" list-disc px-4 mb-4">
                  {feature.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
             
          </div>
        ))}
    </div>
  );
};

export default FeaturesSection;
