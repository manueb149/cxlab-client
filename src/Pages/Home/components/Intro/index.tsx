"use client"
import Button from "@/Components/Buttons"
import { AnimatedCX } from "@/assets/animations/AnimatedCX"

const Intro = () => {
  return (
    <section id="home-intro" className="bg-gradient-to-br to-orange-100 from-cyan-50 via-orange-200 h-full 2xl:h-screen pt-14 pb-10 px-5 lg:px-[5vw] flex flex-col items-center justify-center">
      <h2 className="font-bold text-center text-3xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r to-orange-900 from-cyan-500 via-orange-500 bg-clip-text text-transparent">
        Empower Customer Experience with Omnichannel Tools
      </h2>
      <p className="text-center text-md lg:text-lg xl:text-2xl text-gray-800 py-4 lg:px-32">
        We transform interactions into profitable investments
        through experiences that last in the mind of your customer.
      </p>
      <div>
        <AnimatedCX />
      </div>
      <Button className="mt-10 h-20 text-xl">
        Schedule an appointment
      </Button>
    </section>
  )
}

export default Intro
