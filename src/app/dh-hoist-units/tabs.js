import Image from "next/image";

const ropeGuides = [
  {
    title: 'Standard PA 12 Rope Guide',
    description: [
    "Wear-resistant made of acid-resistant PA12 plastic",
    "Slack rope protection thanks to enclosed design and pressure roller"
    ],
    partNo: '/img/dh-host-9.webp',
  },
  {
    title: 'Rope Guide Type F',
    description: [
      'Frost-resistant and reinforced construction',
      'Designed for outdoor use in harsh environments',
    ],
    partNo: '/img/dh-host-10.webp',
  },
  {
    title: 'Rope Guide Type S',
    description: [
      "Heavy, double reinforced for medium inclined tensile loads, also at low temperatures."
    ],
    partNo: '/img/dh-host-11.webp',
  },
  {
    title: 'Double Rope Guide Type DSZ',
    description: [
      'For heavy-duty hoist units with double-groove drum, especially in heavy-duty operating conditions with magnet or grab operation. Reduced sway.',
      
    ],
    partNo: '/img/dh-host-12.webp',
  },
];

export default function RopeGuideSection() {
  return (
    <section className="bg-white py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Protection Against Extreme Loads – Precisely Guided
        </h2>
        <p className="text-gray-600 mb-10 max-w-3xl">
          Demag DH hoist units are safeguarded by specially designed rope guides that offer reliable protection against extreme load conditions such as inclined pull, load sway, and rope vibrations. Made from tough, wear-resistant plastic, these rope guides can withstand inclined pulls of up to <strong>4°</strong> without contact. They are two-part units that are easily replaceable without special tools. Reinforced versions are available for demanding applications.
        </p>

        <div className="">
          {ropeGuides.map((guide, index) => (
            <div key={index} className="">
              <h3 className="text-xl font-bold my-4 text-[#676f77]">{guide.title}</h3>
              <ul className="list-disc ">
                {guide.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <Image height={300} width={300} layout="responsive" className="w-100 mt-4" src={guide.partNo} alt="" ></Image>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
