"use client";
import Intro from "./components/Intro";
import WhatWeDo from "./components/WhatWeDo";
import HowWeDo from "./components/HowWeDo";
import Solutions from "./components/Solutions";
import Contact from "./components/Contact";

import "./Home.styles.css";


const Home = (): JSX.Element => {
  return (
    <main id="home" className="relative">

      {/* INTRO SECTION */}
      <Intro />

      {/* WHAT WE DO SECTION */}
      <WhatWeDo />

      {/* HOW WE ACHIEVE IT SECTION */}
      <HowWeDo />

      <Contact counterAnimate>
        Turn your customers into fans of your brand.
      </Contact>

      {/* SOLUTIONS SECTION */}
      <Solutions />

      <Contact />
    </main>
  );
};

export default Home;
