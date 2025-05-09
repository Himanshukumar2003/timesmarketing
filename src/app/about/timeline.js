"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Award,
  Briefcase,
  Building,
  Rocket,
  Users,
} from "lucide-react";
import { MdMiscellaneousServices } from "react-icons/md";

export default function Timeline() {
  const milestones = [
    {
      year: "1988",
      title: "Company Founded",
      description:
        "Started the organization in 1988 with KSB Pumps and other Process Industry Products like Sugar, Pharma, Petro Chemical etc.",
      icon: <Rocket className="h-5 w-5 text-white" />,
      color: "bg-blue-900",
      id: "1",
    },
    {
      year: "1994",
      title: "First Major Client",
      description:
        "Started our Association with M/s- Atlas Copco (I) Ltd. for Air Compressor business in NCR Region.",
      icon: <Briefcase className="h-5 w-5 text-white" />,
      color: "bg-yellow-500",
      id: "2",
    },
    {
      year: "1996",
      title: "Product Launch",
      description:
        "Started Our association with M/s- Sulzer Pump (I) Ltd. for business of sales and service in North India.",
      icon: <Activity className="h-5 w-5 text-white" />,
      color: "bg-blue-900",
      id: "3",
    },
    {
      year: "2010",
      title: "International Expansion",
      description:
        "Started our association with M/s- Demag cranes and Components India Pvt Ltd. PAN India basis.",
      icon: <Building className="h-5 w-5 text-white" />,
      color: "bg-yellow-500",
      id: "4",
    },
    {
      year: "2012",
      title: "Series A Funding",
      description:
        "Started our Fabrication shop in Faridabad as a Demag authorised crane builder/partner in North India.",
      icon: <Award className="h-5 w-5 text-white" />,
      color: "bg-blue-900",
      id: "5",
    },
    {
      year: "2014",
      title: "Team Growth",
      description:
        "Started our Manufacturing and fabrication company in the name of Times Industrial Engineers Pvt. Ltd.",
      icon: <Users className="h-5 w-5 text-white" />,
      color: "bg-yellow-500",
      id: "6",
    },
    {
      year: "2016",
      title: "Team Growth",
      description:
        "Started our association with M/s- Voltas fork lift Ltd. for selling & providing services in NCR Region.",
      icon: <MdMiscellaneousServices className="h-5 w-5 text-white" />,
      color: "bg-blue-900",
      id: "7",
    },
  ];

  return (
    <div className="section bg-img">
      <div className="mx-auto max-w-4xl px-4 md:p-8 ">
        <h2 className="mb-8 text-center text-3xl font-bold">Our Journey</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[28px] top-0 h-full w-1 bg-gradient-to-b from-blue-900  via-blue-500 to-yellow-500 md:left-1/2 md:-ml-0.5"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col gap-6 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-0 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-white shadow-lg md:left-1/2 md:-ml-7">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${milestone.color}`}
                  >
                    {milestone.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="ml-20 md:ml-0 md:w-1/2 md:px-8">
                  <div
                    className={`rounded-lg  p-6 shadow-lg ${
                      parseInt(milestone.id) % 2 === 0
                        ? "bg-yellow-500"
                        : "bg-blue-900"
                    }`}
                  >
                    <span
                      className={`inline-block rounded-full px-3 py-1    italic font-semibold text-white text-2xl ${milestone.color}`}
                    >
                      {milestone.year}
                    </span>
                    {/* <h3 className="mt-2 text-xl text-white font-bold">
                      {milestone.title}
                    </h3> */}
                    <p className="mt-2 text-white">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
