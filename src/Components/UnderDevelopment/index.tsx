"use client"
import { LogoMark } from "@/assets/icons/Logo"
import { motion } from "framer-motion"

const UnderDevelopment = ({ children }: React.PropsWithChildren) => {

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-neutral-100 gap-2">
      <motion.div
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0, 1, 1, 0],
          rotateY: [0, 270, 180, 0],
        }}
        transition={{
          duration: 5,
          times: [0, 0.1, 0.3, 1],
          repeat: Infinity,
        }}
      >
        <LogoMark />
      </motion.div>
      {children}
      <div className="">
        <motion.p 
          className="uppercase font-mono font-bold text-sm text-center px-1 py-5"
          animate={{
            color: ['#a6adba', '#ea642b', '#a6adba']
          }}
          transition={{
            type: "keyframes",
            duration: 5,
            times: [0, 0.1, 1],
            repeat: Infinity
          }}
        >webpage under development</motion.p>
      </div>
    </div>
  )
}

export default UnderDevelopment