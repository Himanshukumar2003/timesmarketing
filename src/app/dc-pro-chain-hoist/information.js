"use client";

import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const productSections = [
  {
    label: "High-performance equipment",
    points: [
      '"All inclusive" features already as standard',
      'Two lifting speeds as standard',
      '24 V contactor control',
      'Operating limit switches (upper/lower)',
      'Elapsed operating time counter',
      'Aluminum housing components with powder coating',
      'Duty factor: 60% (40/20), 360 starts/hour',
      'Signals for applications with three motion axes',
      'Suitable for tandem operation',
      'Comprehensive selection of finely graded load capacities up to 5,000 kg',
      'Suspension brackets for improved C dimension (for sizes DC 1–10)'
    ]
  },
  {
    label: "Long service life",
    points: [
      'Gearbox, brake and slipping clutch are maintenance-free for up to 10 years (DC-Pro 10–25 brake for up to 5 years)',
      'Low-wear brake thanks to regenerative braking',
      'Brake adjustment is not necessary',
      'No load dropping thanks to slipping clutch arranged in front of the brake in the load-bearing arrangement',
      'Reduced chain wear thanks to 1/1 reeving for loads up to 1,000 kg',
      'Robust cylindrical-rotor motor with fan and separate DC brake',
      'No brake bonding thanks to double encapsulated brake'
    ]
  },
  {
    label: "High operating reliability",
    points: [
      'Standard requirements satisfied for functional safety',
      'No continuous slipping thanks to slipping clutch with automatic cut-out',
      '24 V contactor control with internal “tri-state” signal transfer',
      'Chain hoist and travel drive feature IP 55 enclosure, insulation class F',
      'Automatic braking if the control system fails'
    ]
  },
  {
    label: "Optimum ergonomics",
    points: [
      'Height-adjustable DSC/DSC-S control pendants with low-fatigue actuation force',
      'Control cable length and control pendant position can be adjusted to meet specific needs on site (without any need for wiring)',
      'Pivoting suspension bracket enables the chain hoist to be attached when the trolley has been fitted'
    ]
  },
  {
    label: "Service-friendly",
    points: [
      '"Plug & Lift" and "Plug & Drive" for all electrical connections',
      'Elapsed operating time counter, status and error messages shown on display',
      'Infrared diagnostic interface with IDAPSY software (to read out and manage specific data)',
      'Service cover for rapid access to plug connections, strain relief arrangements, collector for 3 m control cable and chain drive',
      'Chain lubrication through lubrication opening in the chain guide for improved lubrication between links (sizes DC 1–10)',
      'Reduced downtimes as chain drive can be replaced without dismantling motor or gearbox parts'
    ]
  }
];

function ProductInformation() {
  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {productSections.map((section, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
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
