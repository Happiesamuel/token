import About from "./components/About";

import FinanceHub from "./components/PS";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import Roadmap from "./components/Roadmap";
import Runtime from "./components/Runtime";
import Tokenomics from "./components/Tokenomics";
import Why2 from "./components/Why2";
import Why from "./components/Token";
import { Toaster } from "@/components/ui/toaster";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Layout />
      <Toaster />
    </div>
  );
}

function Layout() {
  return (
    <div className="font-sora">
      {/* <CountDown /> */}
      <div className="min-h-[100%] bg-white ">
        <Navbar />
        <div className="flex flex-col lg:flex-row items-center py-10">
          <Hero />
        </div>
      </div>
      <Runtime />
      <div
        className="py-14 px-5 md:px-8 lg:px-16"
        style={{
          backgroundImage: "url(/bg_hub.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <About />
        <FinanceHub />
        <Why />
      </div>
      <Roadmap />
      <Tokenomics />
      <Why2 />
      <Contact />
      {/* <CountDown2 /> */}
      <Footer />
    </div>
  );
}

export default App;
