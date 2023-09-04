"use client"

import { useStore } from "@/Config/store";
import classNames from "@/utils/classNames";
import { motion, useInView, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";


interface Props {
  title: string;
  className?: string;
  description?: string;
}
export const SolutionTitle: React.FC<Props> = ({ title, description, className }) => {

  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-40% 0px -40% 0px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 90%', 'start 40%'] });
  const setCurrectSolution = useStore((state) => state.setCurrectSolution);

  useEffect(() => {
    if(inView) setCurrectSolution(title);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <motion.div
      style={{
        opacity: scrollYProgress
      }}
    >
      <div
        ref={ref}
        className={classNames("card bg-zinc-50 border-solid border-gray-300 border-2 dark:border-none dark:bg-gray-900 shadow-inner transition-all", className || '')}
      >
        <div className={classNames("card-body py-0 my-0 justify-center items-center")}>
          <h2 className="card-title justify-center text-center text-base lg:text-2xl">{title || ''}</h2>
          {description ? <p className="">{description}</p> : null}
        </div>
      </div>
    </motion.div>

  )
}