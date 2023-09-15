"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface Props extends React.PropsWithChildren {
  counterAnimate?: boolean;
}

const Contact = ({ children, counterAnimate }: Props) => {

  const refContact = useRef(null);
  const { scrollYProgress: scrollYContact } = useScroll({ target: refContact, offset: counterAnimate ? ['start end', 'end start'] : ['start end', 'end end'] });
  const yContact = useTransform(scrollYContact, [0, 1], counterAnimate ? ["100%", "0%"] : ["-100%", "0%"]);

  return (
    <motion.div
      style={{
        translateY: yContact,
        //translateX: yContact,
        opacity: scrollYContact
      }}
    >
      <section ref={refContact} id="home-contact" className="px-5 md:px-[5vw] relative h-[20vh] bg-orange-500 p-10 grid place-content-center">
        <span className="text-2xl md:text-3xl lg:text-4xl text-black text-center font-bold">
          {children || 'Do you want to increase contact with your customers?'}
          <span className="text-white underline underline-offset-1 hover:cursor-pointer whitespace-nowrap">{"Let's talk!"}</span></span>
      </section>
    </motion.div>
  )
}

export default Contact
