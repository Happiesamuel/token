import About from "./components/About";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import Roadmap from "./components/Roadmap";
import Runtime from "./components/Runtime";
import Tokenomics from "./components/Tokenomics";
import Why2 from "./components/Why2";
import Why from "./components/Token";
import Contact from "./components/Contact";
import SmoothScrollLayout from "./components/SmoothScroll";
import { useRef } from "react";
import MobileNav from "./components/MobileNavbar";
import Preloader from "./components/Preloader";

function App() {
  return (
    <div>
      <Layout />
    </div>
  );
}

function Layout() {
  const section2Ref = useRef<HTMLDivElement>(null);
  return (
    <div className="font-sora">
      <Preloader />
      <Navbar section2Ref={section2Ref} />
      <div className="lg:hidden">
        <MobileNav />
      </div>
      <SmoothScrollLayout>
        <Hero />
        <Runtime section2Ref={section2Ref} />
        <div
          ref={section2Ref}
          className="py-14 px-5 md:px-8 lg:px-16"
          style={{
            backgroundImage: "url(/bg_hub.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <About />
          <Why />
        </div>
        <Tokenomics />
        <Roadmap />
        <Why2 />
        <Contact />
        <Footer />
      </SmoothScrollLayout>
    </div>
  );
}

export default App;
