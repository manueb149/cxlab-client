"use client"
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"

const WhatWeDo = () => {

  const refWWD = useRef(null);
  const { scrollYProgress: scrollYWWD } = useScroll({ target: refWWD, offset: ['start end', 'end 50%'] });
  const yWWD = useTransform(scrollYWWD, [0, 1], ["-100%", "0%"]);

  return (
    <section id="home-wwd" className="px-5 mt-24 mb-24 lg:px-[5vw] xl:h-full 2xl:h-full flex flex-col items-center justify-center">
      <div className="wwd-header flex flex-col justify-center items-center">
        <h3 className="text-lg xl:text-2xl">What we do?</h3>
        <motion.div
          style={{
            translateX: yWWD,
            opacity: scrollYWWD
          }}
        >
          <h2 ref={refWWD} className="uppercase my-6 font-bold bg-gradient-conic to-orange-900 from-cyan-900 via-orange-600 bg-clip-text text-transparent md:text-lg lg:text-3xl">We increase ROI</h2>
        </motion.div>

        <motion.div
          style={{
            translateX: yWWD,
            opacity: scrollYWWD
          }}
        >
          <p className="pb-8 text-justify text-gray-600 md:text-md lg:text-xl">Through a precise blend of technology and strategy, we work to enhance operational efficiency and elevate customer satisfaction. By optimizing every touchpoint and delivering more meaningful experiences, we generate measurable results.</p>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatWeDo
