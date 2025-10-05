import About from "./component/About";
import Header from "./component/Header";
import Hero from "./component/Hero";
import MobileHeader from "./component/MobileHeader";
import ProblemsS from "./component/ProblemsS";
import Runtime from "./component/Runtime";
import Token from "./component/Token";
import Tokenomics from "./component/Tokenomics";
import Roadmap from "./component/Roadmap";
import Whitepaper from "./component/Whitepaper";
import Sub from "./component/Sub";
import Footer from "./component/Footer";

function Capita() {
  return (
    <div className="bg-[#FFFFFF] w-full min-h-screen">
      <div className="hidden md:block">
        <Header />
      </div>
      <div className="block md:hidden">
        <MobileHeader />
      </div>

      <section id="hero">
        <Hero />
      </section>

      <section id="runtime" className="py-5">
        <Runtime />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="problems" className="py-5">
        <ProblemsS />
      </section>

      <section id="token" className="py-15">
        <Token />
      </section>

      <section id="tokenomics" className="py-5">
        <Tokenomics />
      </section>

      <section id="roadmap" className="py-10">
        <Roadmap />
      </section>

      <section id="whitepaper">
        <Whitepaper />
      </section>

      <section id="sub">
        <Sub />
      </section>

      <Footer />
    </div>
  );
}

export default Capita;
