"use client"
import { useRef } from "react";
import { Variants, motion, useInView, useScroll, useTransform } from "framer-motion"
import { RightArrowIcon } from "@/assets/icons/RightArrow";
import { useDimensions } from "@/utils/hooks/useDimentions";
import { useWindowSize } from "@uidotdev/usehooks";

const services = [
  {
    name: "Inbound",
    tasks: [
      "Lead Generation",
      "Performance Analysis",
      "Customized Sales Scenarios",
      "External Data Integration"
    ],
  },
  {
    name: "Outbound",
    tasks: [
      "Smart Dialing",
      "Flexible Scalability",
      "Real-time Analytics",
      "Automated Response Management"
    ],
  },
  {
    name: "Omnichannel",
    tasks: [
      "Unified Channel Management",
      "Response Automation",
      "Omnichannel Interaction Tracking",
      "Continuous Support"
    ],
  },
  {
    name: "Artificial Intelligence",
    tasks: [
      "Virtual Assistants and Chatbots",
      "Sentiment Analysis",
      "Sales Scenario Optimization",
      "Back-Office Task Automation"
    ],
  },
  {
    name: "Consultancy",
    tasks: [
      "Customer Experience Design",
      "Workforce Automation (WFA)",
      "Omnichannel Strategy Development",
      "Training and Education"
    ]
  }
]

const servicesVariants: Variants = {
  notInView: {
    y: 50,
    opacity: 0,
    scale: 0,
    transition: { stiffness: 1000 },
  },
  isInView: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      stiffness: 1000, velocity: -100,
      staggerChildren: 0.1
    }
  }
}

const HowWeDo = () => {

  const refHWD = useRef(null);
  const { scrollYProgress: scrollYHWD } = useScroll({ target: refHWD, offset: ['start end', 'end 50%'] });
  const yHWD = useTransform(scrollYHWD, [0, 1], ["-100%", "0%"]);

  const refServices = useRef<HTMLDivElement>(null);
  const isInView = useInView(refServices, { margin: "-50% 0px -40% 0px" })
  // const isInView = useInView(refServices, { margin: "0% 0px 10% 0px" })

  return (
    <section ref={refServices} id="home-hwd" className="px-5 mt-16 mb-8 lg:px-[5vw] xl:h-full 2xl:h-full flex flex-col items-center justify-center">
      <div className="wwd-header flex flex-col justify-center items-center">
        <motion.div
          style={{
            translateX: yHWD,
            opacity: scrollYHWD
          }}
        >
          <h2 ref={refHWD} className="uppercase my-6 font-bold bg-gradient-conic to-orange-900 from-cyan-900 via-orange-600 bg-clip-text text-transparent md:text-lg lg:text-3xl">How we achieve it?</h2>
        </motion.div>
      </div>
      <motion.div
        variants={servicesVariants}
        animate={isInView ? "isInView" : "notInView"}
        className="services w-full flex flex-wrap xl:flex-nowrap gap-5 justify-center"
      >
        {services.map(({ name, tasks }) => (
          <motion.div
            key={name}
            className="service py-16 px-5 w-full md:w-80 lg:min-w-[100] h-auto rounded-md bg-slate-200 border-2 border-[#b450212e]"
            variants={servicesVariants}
          >
            <div className="name pb-5 uppercase font-bold bg-gradient-to-r from-orange-900 to-orange-500 bg-clip-text text-transparent text-xl">{name}</div>
            <ul>
              {tasks.map((tasks, idx) => (
                <motion.li key={idx} className="italic font-[500] text-gray-500"><RightArrowIcon className="mr-2" width={10} />{tasks}</motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default HowWeDo
