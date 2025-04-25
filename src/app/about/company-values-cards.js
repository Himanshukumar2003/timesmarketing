import { Award, Lightbulb, Target, Eye, ShieldCheck, Wrench, ChevronRight } from "lucide-react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const cardData = [
  {
    title: "Our Mission",
    description: "Driving industrial excellence",
    icon: <Target className="h-6 w-6" />,
    content: [
      "To be the premier provider of innovative, sustainable industrial solutions, delivering exceptional value to our clients through cutting-edge technology, industry expertise, and unwavering commitment to quality, safety, and environmental responsibility.",
      "We are dedicated to fostering long-term partnerships and empowering our clients to achieve operational excellence and sustainable growth."
    ],
    color: "#E3BC17",
  },
  {
    title: "Our Vision",
    description: "Shaping the future of lifting",
    icon: <Eye className="h-6 w-6" />,
    content: "Empowering industries globally with innovative, energy-efficient, and reliable crane technology, we strive to redefine the future of lifting solutions through superior engineering, unparalleled service, and a steadfast commitment to safety and excellence.",
    color: "#091B3C",
  },
  {
    title: "Our Strengths",
    description: "Built on expertise",
    icon: <Wrench className="h-6 w-6" />,
    content: [
      "Times Kräne epitomizes strength, precision, and innovation, setting the industry standard for crane excellence.",
      "Our foundation of engineering expertise and unyielding reliability ensures the delivery of robust, high-performance solutions that conquer the most formidable industrial challenges.",
      "Times Kräne empowers industries to operate with confidence, efficiency, and unparalleled dependability."
    ],
    color: "#E3BC17",
  },
];

export default function CompanyValuesCards() {
  return (
    <div className="">
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Times Kräne Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <Card
              key={index}
              style={{ borderRadius: "20px", background:"#f7fafc",  paddingBottom:"0px", borderTop: `4px solid ${card.color}`,  }} // inline style for custom border color
              className="shadow-md hover:shadow-lg  transition-all duration-300"
            >
              <CardHeader
            
                avatar={
                    
                  <Box

                    style={{ marginBottom:"0px", backgroundColor: card.color }} 
                    className="p-3 rounded-full text-white"
                  >
                    {card.icon}
                  </Box>
                }
                title={<Typography variant="h6">{card.title}</Typography>}
                subheader={<Typography className="text-sm text-gray-500 pb-4">{card.description}</Typography>}
                className="relative"
                style={{ background: `linear-gradient(to right, ${card.color}50, ${card.color}100)`, }} // custom gradient background
              />
              <CardContent style={{paddingTop:"0px !impotent"}}>
                {Array.isArray(card.content) ? (
                  card.content.map((item, idx) => (
                    <Typography key={idx} className="text-gray-700 text-sm pt-4">{item}</Typography>
                  ))
                ) : (
                  <Typography className="text-gray-700 text-sm pt-4">{card.content}</Typography>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
