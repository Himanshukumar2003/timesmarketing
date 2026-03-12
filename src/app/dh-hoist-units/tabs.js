import Image from "next/image";

const ropeGuides = [
  {
    title: "Standard PA12 rope guide",
    description: [
      "Wear-resistant, acid-resistant PA12 plastic",
      "Enclosed design with pressure roller provides built-in slack rope protection",
    ],
    partNo: "/img/dh-host-9.webp",
  },
  {
    title: "Rope Guide Type F",
    description: [
      "Frost-resistant and reinforced",
      "Built for outdoor use in harsh environments",
    ],
    partNo: "/img/dh-host-10.webp",
  },
  {
    title: "Rope Guide Type S",
    description: [
      "Heavy-duty construction",
      "Double reinforced for medium inclined tensile loads",
      "Performs reliably even at low temperatures",
    ],
    partNo: "/img/dh-host-11.webp",
  },
  {
    title: "Double Rope Guide Type DSZ",
    description: [
      "Designed for heavy-duty hoist units with double-groove drum",
      "Ideal for tough conditions—magnet or grab operation",
      "Helps reduce load sway",
    ],
    partNo: "/img/dh-host-12.webp",
  },
];

export default function RopeGuideSection() {
  return (
    <section className="bg-white py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Protection against extreme loads – precisely guided
        </h2>
        <p className="text-gray-600 mb-10 max-w-3xl">
          Demag DH hoist units come with rope guides built for the tough
          stuff—inclined pull, load sway, rope vibrations. They&apos;re made
          from tough, wear-resistant plastic and can handle angled pulls up to
          4° without the rope touching the guide.
          <br></br>Easy to maintain: Two-part design means you can replace them
          without special tools. Need something stronger? Reinforced versions
          are available for demanding applications.
        </p>

        <div className="">
          {ropeGuides.map((guide, index) => (
            <div key={index} className="">
              <h3 className="text-xl font-bold my-4 text-[#676f77]">
                {guide.title}
              </h3>
              <ul className="list-disc ">
                {guide.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <Image
                height={300}
                width={300}
                layout="responsive"
                className="w-100 mt-4"
                src={guide.partNo}
                alt=""
              ></Image>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
