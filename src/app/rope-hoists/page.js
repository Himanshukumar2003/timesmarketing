import { Breadcrumb } from "@/componts/breadcrumb";
import Footer from "@/componts/footer";
import Navbar from "@/componts/nav";
import Container from "@mui/material/Container";
import {
  ChevronLeft,
  ChevronRight,
  Image,
  Maximize2,
  Play,
  Volume2,
} from "lucide-react";
import { FiChevronRight } from "react-icons/fi";
import KbkCard from "./cards";

export default function KbkLight(params) {
  return (
    <>
      <Navbar></Navbar>
      <Breadcrumb
        title="Rope hoists"
        backgroundImage="/img/header1.webp"
        items={[{ label: "Rope hoists", href: "/", isCurrent: true }]}
      ></Breadcrumb>
      <div className="px-4 pb-10">
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-3xl font-bold text-gray-900 text-center mb-6">
                Hoists to meet individual needs
              </h1>
              <p className="text-lg text-gray-700 mb-8 text-center">
                Demag rope hoists feature high handling rates, cost-effective
                operation and maximum safety. As basic hoist units for
                integration into plant and machinery or as lifting solutions
                with electronic controls that are optimized for crane
                applications, with our wide range of rope hoists we offer the
                optimum solution to meet our customers specific requirements for
                efficiently lifting loads weighing up to 100 tonnes.
              </p>
            </div>
          </div>
        </section>

        <KbkCard />
        <div className="section bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="space-y-4 text-gray-600 text-center">
              <p>
                Demag rope hoists and hoist units feature high handling rates,
                cost-effective operation and maximum safety. They can be used as
                basic hoist units for integration into plant and machinery, as
                components for a crane set or as lifting solutions with
                electronic controls that are optimised for crane applications.
                With our large portfolio of rope hoists and hoist units, we
                offer the best possible solution for your specific needs:
                cost-effective lifting equipment for loads up to 100 t.
              </p>
              <h2 className="text-xl font-semibold ">
                Demag rope hoists and rope winches
              </h2>
              <p className="">
                Demag electric rope hoists are a key element of our crane
                installations. They are the result of decades of research and
                development work at Demag. Our electric rope hoists impress with
                their lifting force with load capacities of between 1 t and 100
                t. Depending on your application and specific needs, you can
                choose from a wide variety of models: from standard rope hoists
                in the lower load capacity range to special rope hoist designs
                with additional system components in the upper load capacity
                range.
              </p>
              <p>
                In addition, we offer various assemblies that can extend the
                lifting height. This can be achieved by mounting the hoist unit
                or rope winch on the side of the crane. The modular designs of
                our electric rope hoists are hard to beat in terms of lifting
                force, material quality and versatility – always with a view to
                efficiency. Our crane trolleys, which reliably move the rope
                winches and rope hoists, are also key. However, all rope hoist
                types have one feature in common: maximum availability and
                reliability in production operations and material flow.
              </p>
              <p>
                Our classic Demag DH hoist unit is available in three sizes. A
                maximum load of 100 t can be lifted over a hook path of up to
                104 metres. The electric rope hoist achieves particularly
                precise positioning thanks to its mechanical microspeed unit.
                Its space-saving planetary gear is protected inside the drum.
              </p>
              <p>
                Our DS10 rope winches are designed for onshore and offshore
                installations and primarily offer solutions for the wind power
                industry. In wind turbines, for example, a winch can be used to
                lift maintenance material and transport the load into the
                nacelle with the appropriate lifting force. Using the electric
                rope winch, great heights of up to 180 m can be overcome quickly
                and efficiently without any problems.
              </p>
              <p>
                Our combination of rope hoist and crane is optimised for your
                needs. The hoist or winch, rope and lifting force create an
                enormously efficient and reliable combination when used with our
                cranes and trolleys. The electric drive combined with our
                dynamic braking system ensures outstanding safety and
                reliability. That is innovative strength from Wetter.
              </p>
              <h2 className="text-xl font-semibold ">
                Evolving innovations from Wetter
              </h2>
              <p>
                Rope hoists and chain hoists have been used to transport goods
                for over a century. The first motor winch was presented by Demag
                in 1900. The year 1912 saw the market launch of a crane with a
                separate electric drive for long-travel and lifting motions, and
                with it the type A electric rope hoist. Ever since then, Demag
                has continued to present innovative electric rope hoists and
                rope winches. For over 200 years, the company has stood for
                innovations from Wetter an der Ruhr. But why are hoist units
                needed?
              </p>
              <p>
                All hoists have the same task: lifting a load with the
                appropriate lifting force. In combination with a trolley, the
                hoist can finally also move the load. With an electric trolley,
                the load can be very conveniently moved on the electric rope
                hoist by the operator. This facilitates many work processes and
                provides employees with enhanced ergonomics in their daily work.
              </p>
              <p>
                At the end of the 19th century, cranes were still operated with
                steam; since 1912, electric rope hoists or electric rope winches
                have been used almost exclusively. The principle of lifting
                remains the same: a load is suspended with its weight on a load
                hook. The wire rope attached to the load hook is connected to an
                electrically driven motor via a rope drum, thus obtaining its
                lifting force. Depending on the size of the hoist unit, the
                rating of the motor and the length of the rope, the maximum
                lifting speed and lifting height as well as the maximum load
                capacity can vary.
              </p>
              <h2 className="text-xl font-semibold ">
                Your solution from Demag
              </h2>
              <p>
                Take a look at our different rope hoist variants on the relevant
                product pages. There you can find out about the many different
                applications and see further material, such as our brochures and
                technical data. If you have any questions about our electric
                rope hoists and electric rope winches, need a price for the
                hoist in question or are looking for spare parts or accessories,
                please feel free to contact our crane experts.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
