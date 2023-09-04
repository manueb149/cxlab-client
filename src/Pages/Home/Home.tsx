"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { AnimatedCX } from "@/assets/animations/AnimatedCX";
import { SolutionTitle } from "@/Components/Cards";
import { ZoomLogo } from "@/assets/icons/Zoom";
import { WifiIcon } from "@/assets/icons/Wifi";
import { useStore } from "@/Config/store";
import classNames from "@/utils/classNames";
import { Five9Logo } from "@/assets/icons/Five9";
import { SalesforceLogo } from "@/assets/icons/Salesforce";
import { ZooxLogo } from "@/assets/icons/Zoox";

import "./Home.styles.css";

const Home = (): JSX.Element => {
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

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 50%', 'start start'] });

  const refContact = useRef(null);
  const { scrollYProgress: scrollYContact } = useScroll({ target: refContact, offset: ['end end', 'end 50%'] });

  const { currectSolution } = useStore();

  return (
    <main id="home" className="py-10">
      <div id="home-intro" className="pt-14 pb-10 px-5 lg:px-[5vw] lg:pb-32 lg:pt-28 flex flex-col items-center">
        <h2 className="font-bold text-3xl text-center lg:text-6xl bg-gradient-to-r to-orange-900 from-cyan-500 via-orange-500 bg-clip-text text-transparent">
          Empower Customer Experience with Omnichannel Tools
        </h2>
        <p className="text-center text-md lg:text-lg text-gray-800 py-4 lg:px-32">
          We transform interactions into profitable investments
          through experiences that last in the mind of your customer.
        </p>
        <div>
          <AnimatedCX />
        </div>
      </div>
      <div id="home-solutions" className="px-5 lg:px-[5vw] bg-gradient-to-b from-white via-[#ed602939] to-white">
        <div className="flex w-full gap-20 items-start" ref={ref}>
          <div className="w-full py-[45vh]">
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
                  <h2 className="relative -top-[0px] left-0 right-0 text-neutral-800 text-center text-xl md:text-3xl">Solutions</h2>
                  <div className="card bg-white dark:bg-neutral-800 dark:text-white shadow-2xl">
                    <div className="card-body gap-10 min-h-[50vh] flex justify-center items-center">
                      <div className="flex min-h-20 w-auto flex-none items-center justify-center rounded-lg group-hover:bg-gray-50">
                        <div aria-hidden="true">{<Icon width={100} />}</div>
                      </div>
                      <span className="h-auto text-justify lg:text-lg">{description}</span>
                      <div className="know-more text-sm underline hover:cursor-pointer underline-offset-1">Know more about {name}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div id="home-wwd" className="px-5 lg:px-[5vw] lg:h-[80vh] 2xl:h-[50vh] flex flex-col items-center justify-center">
        <div className="wwd-header flex flex-col justify-center items-center">
          <h3>What we do?</h3>
          <h2 className="uppercase my-6 bg-gradient-conic to-orange-900 from-cyan-900 via-orange-600 bg-clip-text text-transparent md:text-lg lg:text-3xl">We increase ROI</h2>
          <p className="pb-8 text-justify text-gray-600 md:text-md lg:text-xl">Through a precise blend of technology and strategy, we work to enhance operational efficiency and elevate customer satisfaction. By optimizing every touchpoint and delivering more meaningful experiences, we generate measurable results.</p>
        </div>
        <div className="services w-full flex flex-wrap gap-5 justify-center">
          {services.map(({ name, tasks }) => (
            <div key={name} className="service p-3 min-w-full md:min-w-[300px] h-auto rounded-md bg-slate-200 border-2 border-[#b450212e]">
              <div className="name font-bold text-gray-700">{name}</div>
              <ul>
                {tasks.map((tasks, idx) => (
                  <li key={idx} className="whitespace-nowrap italic text-gray-500">{"- "}{tasks}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div ref={refContact} id="home-contact" className="px-0 lg:px-[5vw] relative h-[100%] bg-zinc-50 p-10 grid place-content-center rounded-full">
        <span className="text-xl text-black">Do you want to increase contact with your customers? <span className="text-orange-600 text-2xl underline underline-offset-1 hover:cursor-pointer">{"Let's talk!"}</span></span>
      </div>
    </main>
  );
};

export default Home;
