"use client"
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

import './styles.css'

export default function Animation() {
  const [refresh, setRefresh] = useState(0);

  const handleRefresh = () => {
    setRefresh((state) => ++state);
  }

  return (
    <>
      <motion.button
      className="btn btn-primary"
        initial={{ opacity: 0 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
      >Hole</motion.button>
      <Reload onClick={handleRefresh} />
      <div className="p-2 overflow-x-hidden" key={refresh}>
        <motion.circle cx={500} animate={{ cx: [null, 100] }} />
        <motion.div
          className="w-[200px] border-2 p-1"
          //initial={{x: [0,1000,0]}}
          animate={{
            x: [0, 1000, 0, 500, 0, 250, 0, 125, 0, 75, 0]
          }}
          transition={{
            duration: 3
          }}
        >
          <div className="w-full border-2">
            Test
          </div>
        </motion.div>

        <Section>Animate</Section>
        <Section>when</Section>
        <Section>in</Section>
        <Section>view!</Section>
      </div>
    </>
  )
}

function Section({ children }: React.PropsWithChildren) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="text-black my-1">
      <span
        style={{
          border: '1px solid blue',
          transform: isInView ? "translateX(0)" : "translateX(-500px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

function Reload({ onClick }: React.HTMLProps<HTMLDivElement>) {
  return (
    <motion.div
      onClick={onClick}
      whileTap={{ scale: 0.8 }}
      className="sticky p-0.5 w-fit top-0.5 left-[95%] rounded-full bg-slate-300 cursor-pointer"
    >
      <ArrowPathIcon height={20} color="black" />
    </motion.div>
  )
}