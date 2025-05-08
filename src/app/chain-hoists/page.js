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
        title="Chain hoists"
        backgroundImage="/img/header1.webp"
        items={[{ label: "Chain hoists", href: "/", isCurrent: true }]}
      ></Breadcrumb>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-3xl font-bold text-gray-900 text-center mb-6">
              Demag chain hoists – high productivity, efficiency, safety and
              reliability
            </h1>
            <p className="text-lg text-gray-700 mb-8 text-center">
              Demag chain hoists meet all the requirements of state-of-the-art
              hoist units, such as high productivity, efficiency, safety and
              reliability, and give you the certainty of a secure long-term
              investment. We develop and produce materials handling solutions
              for all industries and companies of all sizes, from small
              workshops to major industrial corporations.
            </p>
          </div>
        </div>


        <div className="flex justify-center mb-6 items-center">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/-yF8wJYLo8g?si=ch40GGLyYLi0K6jm"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
      </section>

      <KbkCard />
      <div className="section bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="space-y-4 text-gray-600 text-center">
            <p>Thanks to our expertise and proximity to the customer, we have developed electric chain hoists that can lift almost any type of load with a high degree of safety with fast or individually adapted lifting movements.
</p>
<p>Demag DC chain hoists are electrically driven and can be moved electrically or manually by means of trolleys, depending on the application. In addition, a Demag electric chain hoist can of course also be operated in stationary position or on a crane.
</p>
            <h2 className="text-xl font-semibold ">
            High level safety with our electric chain hoists
            </h2>
            <p className="">
            Thanks to robust and proven electronic control, the electric chain hoists of our DC product line offer improved safety compared to conventional controls. Demag electric chain hoists satisfy at least Performance Level c and Category 2 to EN ISO 13849-1 for the safety-related functions specified in DIN EN 14492-2.

</p>
            <p>
            You can rely on our chain hoists to handle your load. The standard operating limit switches, 24 V contactor control and slipping clutch secure your load in every application.


            </p>
            <p>
              Our classic Demag DH hoist unit is available in three sizes. A
              maximum load of 100 t can be lifted over a hook path of up to 104
              metres. The electric rope hoist achieves particularly precise
              positioning thanks to its mechanical microspeed unit. Its
              space-saving planetary gear is protected inside the drum.
            </p>
            <p>
              Our DS10 rope winches are designed for onshore and offshore
              installations and primarily offer solutions for the wind power
              industry. In wind turbines, for example, a winch can be used to
              lift maintenance material and transport the load into the nacelle
              with the appropriate lifting force. Using the electric rope winch,
              great heights of up to 180 m can be overcome quickly and
              efficiently without any problems.
            </p>
            <p>
              Our combination of rope hoist and crane is optimised for your
              needs. The hoist or winch, rope and lifting force create an
              enormously efficient and reliable combination when used with our
              cranes and trolleys. The electric drive combined with our dynamic
              braking system ensures outstanding safety and reliability. That is
              innovative strength from Wetter.
            </p>
            <h2 className="text-xl font-semibold ">
              Evolving innovations from Wetter
            </h2>
            <p>
              Rope hoists and chain hoists have been used to transport goods for
              over a century. The first motor winch was presented by Demag in
              1900. The year 1912 saw the market launch of a crane with a
              separate electric drive for long-travel and lifting motions, and
              with it the type A electric rope hoist. Ever since then, Demag has
              continued to present innovative electric rope hoists and rope
              winches. For over 200 years, the company has stood for innovations
              from Wetter an der Ruhr. But why are hoist units needed?
            </p>
            <p>
              All hoists have the same task: lifting a load with the appropriate
              lifting force. In combination with a trolley, the hoist can
              finally also move the load. With an electric trolley, the load can
              be very conveniently moved on the electric rope hoist by the
              operator. This facilitates many work processes and provides
              employees with enhanced ergonomics in their daily work.
            </p>
            <p>
              At the end of the 19th century, cranes were still operated with
              steam; since 1912, electric rope hoists or electric rope winches
              have been used almost exclusively. The principle of lifting
              remains the same: a load is suspended with its weight on a load
              hook. The wire rope attached to the load hook is connected to an
              electrically driven motor via a rope drum, thus obtaining its
              lifting force. Depending on the size of the hoist unit, the rating
              of the motor and the length of the rope, the maximum lifting speed
              and lifting height as well as the maximum load capacity can vary.
            </p>
            <h2 className="text-xl font-semibold ">Your solution from Demag</h2>
            <p>
              Take a look at our different rope hoist variants on the relevant
              product pages. There you can find out about the many different
              applications and see further material, such as our brochures and
              technical data. If you have any questions about our electric rope
              hoists and electric rope winches, need a price for the hoist in
              question or are looking for spare parts or accessories, please
              feel free to contact our crane experts.
            </p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
