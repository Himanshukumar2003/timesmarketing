import {
  Award,
  Lightbulb,
  Target,
  Eye,
  ShieldCheck,
  Wrench,
  ChevronRight,
} from "lucide-react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const cardData = [
  {
    title: "Our Mission",
    description: "Driving industrial excellence",
    icon: <Target className="h-6 w-6" />,
    content: [
      "We aim to lead in delivering forward-thinking, sustainable solutions that help industries thrive. By integrating advanced technologies, deep expertise, and a firm focus on safety and quality, we bring measurable value to every client.",
      "Our focus is on building lasting collaborations and enabling our partners to realize operational excellence and long-term, eco-friendly growth.",
    ],
    color: "#E3BC17",
  },
  {
    title: "Our Vision",
    description: "Shaping the future of lifting",
    icon: <Eye className="h-6 w-6" />,
    content: [
      "Our goal is to revolutionize global industries with efficient, smart, and dependable crane solutions. Through pioneering engineering and unmatched service, we shape the future of lifting with unwavering dedication to performance, safety, and innovation.",
      "We envision a world where lifting systems elevate not just loads—but standards of excellence across every industry.",
    ],
    color: "#091B3C",
  },
  {
    title: "Our Strengths",
    description: "Built on expertise",
    icon: <Wrench className="h-6 w-6" />,
    content: [
      "At Times Kräne, our strength lies in fusing precision, innovation, and dependability—defining benchmarks in crane technology and engineering.",
      "Backed by unmatched technical know-how, we deliver high-performance solutions tailored for the toughest industrial environments.",
      "We enable businesses to operate with certainty, speed, and rock-solid trust in every lift.",
    ],
    color: "#E3BC17",
  },
];

export default function CompanyValuesCards() {
  return (
    <div className="section">
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Drives Times Kräne
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <Card
              key={index}
              style={{
                borderRadius: "20px",
                background: "#f7fafc",
                paddingBottom: "0px",
                borderTop: `4px solid ${card.color}`,
              }} // inline style for custom border color
              className="shadow-md hover:shadow-lg  transition-all duration-300"
            >
              <CardHeader
                avatar={
                  <Box
                    style={{ marginBottom: "0px", backgroundColor: card.color }}
                    className="p-3 rounded-full text-white"
                  >
                    {card.icon}
                  </Box>
                }
                title={<Typography variant="h6">{card.title}</Typography>}
                subheader={
                  <Typography className="text-sm text-gray-500 pb-4">
                    {card.description}
                  </Typography>
                }
                className="relative"
                style={{
                  background: `linear-gradient(to right, ${card.color}50, ${card.color}100)`,
                }} // custom gradient background
              />
              <CardContent style={{ paddingTop: "0px !impotent" }}>
                {Array.isArray(card.content) ? (
                  card.content.map((item, idx) => (
                    <Typography
                      key={idx}
                      className="text-gray-700 text-sm pt-4"
                    >
                      {item}
                    </Typography>
                  ))
                ) : (
                  <Typography className="text-gray-700 text-sm pt-4">
                    {card.content}
                  </Typography>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
