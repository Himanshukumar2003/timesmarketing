import Container from "@mui/material/Container";
import Image from "next/image";

const data = {
  image_position_note: "DMU and OWL have image on the left side",
  DHR_Rope_Hoist: {
    description:
      "DHR units give you variable-speed drive solutions for lifting and travel motions, available at different technology levels.",
    advantages: [
      "Variable speeds: 1:10, 1:25, ESR 1:37",
      "Less wear: gentle lifting/travel motions relieve the load on the crane installation",
      "Longer motor/brake service life",
      "Significant energy savings of up to 50%",
      "Smooth start-up, less load sway",
    ],
    load_dependent_speeds: [
      "High speed without load – up to 300% faster",
      "Medium speed with partial load",
      "Precise speed at full load",
    ],
  },
  OWL: {
    image: "left",
    title: "OWL – keeps an eye on things",
    description:
      "A compact unit for overload cut-off and status display. More safety. Easier maintenance.",
    features: [
      "Overload protection",
      "Condition monitoring",
      "Number of switching oper,ations",
      "Operating time",
      "Braking operations",
      "Control operations",
      "Temperature",
      "Overload events",
      "Can be used for SWP calculation",
    ],
  },
  DMU: {
    image: "left",
    title: "DMU – the smart monitoring unit",
    description:
      "With CAN bus functions for better safety, longer brake life, and smarter maintenance intervals (ELM II).",
    features: [
      "Overload protection",
      "Monitors sudden load increases",
      "Temperature monitoring for motors",
      "SWP elapsed operating time counter",
      "Motor function monitoring",
      "Supply voltage monitoring",
      "Motor start/stop at slow speed",
      "Tandem operation with up to five hoists",
      "Design limit warnings",
      "Optional remote monitoring modem",
      "Smart CAN bus features",
    ],
  },
  further_options: [
    "Radio control",
    "Second hoist brake for DHR 3, 5, 10",
    "Cable drum",
    "Double load hook",
    "IP66 protection",
    "Stand-by heating",
    "Thermal contacts for all motors",
    "Large load display",
    "Rain canopy",
    "Limit switches",
    "Anti-collision protection",
    "Rail sweepers",
    "And many more",
  ],
};

export default function CraneSystemDetails() {
  return (
    <Container maxWidth="lg">
      <div className=" space-y-12 ">
        {/* DHR Rope Hoist */}
        <section>
          <h2 className="text-xl font-bold my-4 text-[#676f77]">
            DHR Rope Hoist – smart lifting, your way
          </h2>
          <p className="mb-4">{data.DHR_Rope_Hoist.description}</p>
          <h3 className="text-xl font-bold my-4 text-[#676f77]">
            Why you&apos;ll like it::
          </h3>
          <ul className="list-disc pl-10 mb-4">
            {data.DHR_Rope_Hoist.advantages.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <h3 className="text-xl font-bold my-4 text-[#676f77]">
            Load-dependent speeds – automatic adjustment:
          </h3>
          <ul className="list-disc pl-10">
            {data.DHR_Rope_Hoist.load_dependent_speeds.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* OWL */}
        <SectionWithImage data={data.OWL} imageSrc="/img/owl.webp" />

        {/* DMU */}
        <SectionWithImage data={data.DMU} imageSrc="/img/dmu.webp" />

        {/* Further Options */}
        <section>
          <h2 className="text-xl font-bold my-4 text-[#676f77]">
            More options? We&lsquo;ve got plenty
          </h2>
          <ul className="list-disc pl-10">
            {data.further_options.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </Container>
  );
}

export function SectionWithImage({ data, imageSrc }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div className="md:order-1">
        <Image
          src={imageSrc}
          alt={data.title}
          width={500}
          height={300}
          className="rounded shadow max-w-[250px]"
        />
      </div>
      <div>
        <h4 className="text-xl font-bold my-4 text-[#676f77]">{data.title}</h4>
        <p className="mb-4">{data.description}</p>
        <h3 className="text-xl font-bold my-4 text-[#676f77]">Features:</h3>
        <ul className="list-disc pl-10">
          {data.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
