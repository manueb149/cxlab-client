"use client"
import { useRef } from "react";
import classNames from "@/utils/classNames";
import { motion, useScroll } from "framer-motion";
import { SolutionTitle } from "@/Components/Cards";
import { useStore } from "@/Config/store";
import { Five9Logo } from "@/assets/icons/Five9";
import { SalesforceLogo } from "@/assets/icons/Salesforce";
import { ZoomLogo } from "@/assets/icons/Zoom";
import { ZooxLogo } from "@/assets/icons/Zoox";

const products = [
  {
    id: "p-0",
    name: "Five9",
    description:
      "Five9 offers an Omnichannel and Contact Center platform that transforms customer interactions. By enhancing interactions and providing real-time analytics, Five9 drives business growth by increasing efficiency, responsiveness, and cross-selling opportunities, contributing to a positive brand image, customer loyalty, and ROI growth.",
    href: "#",
    icon: Five9Logo,
    cta: false,
  },
  {
    id: "p-1",
    name: "Zoom Phone",
    description:
      "Zoom Phone revolutionizes business communication with its advanced cloud telephony. With smart features, centralized management, and efficient routing, it enhances collaboration and optimizes the user experience. By unifying communications and providing analytics, it drives productivity and business growth.",
    href: "#",
    icon: ZoomLogo,
    cta: false,
  },
  {
    id: "p-2",
    name: "Salesforce",
    description:
      "Salesforce empowers businesses to understand, address, and anticipate customer needs. This leads to more satisfying experiences, strong relationships, and sustainable business growth by optimizing sales, service, and marketing.",
    href: "#",
    icon: SalesforceLogo,
    cta: false,
  },
  {
    id: "p-3",
    name: "Zoox Smart Data",
    description:
      "Zoox Smart Data WiFi transforms business interaction by providing advanced WiFi connections. Using data analytics and AI, it delivers personalized experiences and valuable insights to enhance operations and growth strategies.",
    href: "#",
    icon: ZooxLogo,
    cta: false,
  },
];

const Solutions = () => {
  const { currectSolution } = useStore();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 50%', 'start start'] });

  return (
    <section id="home-solutions" className="px-[5vw] my-[2rem] lg:px-[25vw] bg-gradient-to-b from-white via-[#ed602939] to-white">
      <div className="relative flex w-full items-start" ref={ref}>
        <div className="w-0 py-[45vh] invisible">
          <ul className="flex flex-col gap-[50vh]">
            {products.map(({ name }, idx) => (
              <li key={idx}>
                <SolutionTitle
                  className="w-auto max-w-2xl h-28"
                  key={name}
                  title={name}
                />
              </li>
            ))}
          </ul>
        </div>
        <div ref={ref} className="w-full h-screen sticky top-0 flex items-center">
          <motion.div className="w-full h-full relative"
            style={{
              opacity: scrollYProgress
            }}
          >
            {products.map(({ name, description, icon: Icon }, idx) => (
              <div
                key={idx}
                className={classNames(
                  "p-3 absolute inset-0 flex flex-col gap-10 justify-center items-center opacity-0 transition-all",
                  currectSolution === name ? 'opacity-100' : 'opacity-0 hidden'
                )}
              >
                <h2
                  className="relative -top-[0px] left-0 right-0 bg-gradient-conic to-orange-900 from-cyan-900 via-orange-600 bg-clip-text text-transparent font-bold text-center text-xl md:text-3xl"
                >
                  Our Partners 
                </h2>
                <div className="card bg-white dark:bg-neutral-800 dark:text-white shadow-2xl">
                  <div className="card-body gap-10 min-h-[50vh] flex justify-center items-center">
                    <div className="flex min-h-20 w-auto flex-none items-center justify-center rounded-lg group-hover:bg-gray-50">
                      <div aria-hidden="true">{<Icon className="w-40 xl:w-70" />}</div>
                    </div>
                    <span className="h-auto text-justify text-sm lg:text-lg xl:text-xl 2xl:text-2xl">{description}</span>
                    <div className="know-more text-center text-sm underline hover:cursor-pointer underline-offset-1 xl:text-lg">Know more about {name}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="invisible"></div>
      </div>
    </section>
  )
}

export default Solutions
