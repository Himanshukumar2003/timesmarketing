import { Breadcrumb } from "@/componts/breadcrumb";
import Footer from "@/componts/footer";
import Navbar from "@/componts/nav";
import KbkCard from "./cards";

export const metadata = {
  title: "Demag Wire Rope Hoists in India",
  description:
    "Demag Wire Rope Hoists in India from Timeskrane are designed for safe, smooth and efficient lifting, ensuring reliable performance for daily industrial operations.",
  keywords: [
    "Demag wire rope hoist",
    "Demag wire rope hoist parts",
    "Demag Wire Rope Hoists in India",
    "Demag DH hoist Manual",
    "Demag wire rope hoist price in India",
    "Maintaining Your Demag DH Wire Rope Hoist",
    "chain hoist electric",
    "demag cranes and components corp",
  ],
  alternates: {
    canonical: "https://www.timeskrane.com/rope-hoists",
  },
  openGraph: {
    title: "Demag Wire Rope Hoists in India",
    description:
      "Demag Wire Rope Hoists in India from Timeskrane are designed for safe, smooth and efficient lifting, ensuring reliable performance for daily industrial operations.",
    url: "https://www.timeskrane.com/rope-hoists",
    siteName: "Timeskrane",
    locale: "en_IN",
    type: "website",
  },
};

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
              <div className="text-3xl md:text-3xl font-bold text-gray-900 text-center mb-6 capitalize">
                A hoist that fits your work, not the other way around
              </div>
              <p className="text-lg text-gray-700 mb-2 text-center">
                Lifting heavy loads shouldn&apos;t be complicated. Whether you
                need 100 kg or 100 tonnes, our Demag rope hoists are designed to
                handle it—safely, efficiently, and without fuss.
              </p>
              <p className="text-lg text-gray-700 mb-2 text-center">
                Fast and cost-effective – high handling rates keep things
                moving, while low operating costs keep your budget happy.
              </p>
              <p className="text-lg text-gray-700 mb-2 text-center">
                Built for your setup – maybe you&apos;re integrating a basic
                hoist unit into existing machinery. Or perhaps you need a
                smarter solution with electronic controls optimized for crane
                applications. Either way, we&apos;ve got you covered.
              </p>
              <p className="text-lg text-gray-700 mb-2 text-center">
                Safety you can count on – because when tonnes are in the air,
                reliability isn&apos;t optional.
              </p>
              <p className="text-lg text-gray-700 mb-8 text-center">
                Whatever your lifting challenge, we&apos;ll help you find the
                right fit.
              </p>
            </div>
          </div>
        </section>

        <KbkCard />
        <div className="section bg-gray-100">
          <div className="container mx-auto px-4 max-w-5xl ">
            <div className="space-y-4 text-gray-600 text-center">
              <h3 className="text-xl font-bold my-4 ">
                <strong>Lifting has come a long way. So have we.</strong>
              </h3>
              <p>
                For over a century, Demag has been helping people lift
                things&mdash;from a few hundred kilos to a hundred tonnes. What
                started with the first motor winch in 1900 has grown into a full
                portfolio of rope hoists and winches built for real-world work.
              </p>
              <p>
                Fast, safe, and efficient &ndash; whether you&apos;re moving
                materials on a shop floor or servicing a wind turbine 180 metres
                up, our hoists keep things moving without wasting time or
                energy.
              </p>
              <h3 className="text-xl font-bold my-4 text-[#676f77]">
                <strong>Rope hoists that fit your world</strong>
              </h3>
              <p>
                Every job is different. That&apos;s why we offer more than just
                a standard hoist.
              </p>
              <ul className=" pl-10">
                <li>
                  Loads from 1 t to 100 t &ndash; from light lifting to
                  heavy-duty
                </li>
                <li>
                  Lifting heights up to 104 metres &ndash; and even higher with
                  side-mounted winches
                </li>
                <li>
                  Modular design &ndash; so you can add components, extend
                  heights, and tailor the setup to your space
                </li>
                <li>
                  Crane trolleys included &ndash; because moving the load is
                  just as important as lifting it
                </li>
              </ul>
              <p>
                Our DH hoist unit comes in three sizes and delivers precise
                positioning thanks to a mechanical microspeed unit. The
                planetary gear is tucked neatly inside the drum&mdash;compact,
                protected, and smart.
              </p>
              <p>
                For extreme heights, our DS10 rope winches are built for onshore
                and offshore use. They&apos;re a favourite in the wind industry
                for hauling maintenance materials straight up into the
                nacelle&mdash;quickly, safely, and reliably.
              </p>
              <h3 className="text-xl font-bold my-4 text-[#676f77]">
                <strong>Built on 200 years of &#34;what if?&#34;</strong>
              </h3>
              <p>
                We&apos;ve been in Wetter an der Ruhr for over two centuries,
                constantly asking: <em>How can we make this better?</em> The
                result is a hoist that&apos;s not just strong, but smart.
              </p>
              <p>
                Electric drive. Dynamic braking. Precise control. Whether
                you&apos;re lifting, lowering, or moving sideways, everything
                works together smoothly.
              </p>
              <h3 className="text-xl font-bold my-4 text-[#676f77]">
                <strong>So, why do you need a hoist?</strong>
              </h3>
              <p>
                Same reason anyone does: to lift something heavy and move it
                where it needs to go. Maybe it&apos;s raw material on a
                production line. Maybe it&apos;s spare parts for a turbine.
                Maybe it&apos;s something we haven&apos;t even thought of yet.
              </p>
              <p>Whatever it is, we&apos;ve got a hoist for that.</p>
              <h3 className="text-xl font-bold my-4 text-[#676f77]">
                <strong>Let&apos;s find yours</strong>
              </h3>
              <p>
                Browse our product pages for technical data, brochures, and
                options. Need a price? Spare parts? Just want to talk it through
                with someone who knows hoists inside and out?
              </p>
              <p>Get in touch. We&apos;re here to help.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
