import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

function Footer() {
  return (
    <div className="bg-black">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-5  px-5 md:px-8 lg:px-16 py-10">
        <div className="flex items-center gap-1">
          <img src="/logo-1.png" alt="" className="w-8 md:w-10" />
          <p className="uppercase text-white text-lg font-bold">Capita</p>
        </div>

        <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6 md:text-sm text-white lg:text-base font-semibold">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#roadmap">Roadmap</a>
          </li>
          <li>
            <a href="#tokenomics">Tokenomics</a>
          </li>
          <li>
            <a href="#whitepaper">Whitepaper</a>
          </li>
        </ul>

        <div className="flex items-center gap-5 text-white text-2xl">
          <a href="https://t.me/CapitatokenHQ" target="_blank">
            <FaTelegramPlane />
          </a>
          <a href="https://x.com/CapitaToken?t=HTbrOH6Bx0i6CrDDOX81hw&s=09">
            <FaXTwitter />
          </a>
          <a href="https://youtube.com/@capitashowcase?si=p5uQan73qsWfOjJW">
            <IoLogoYoutube />
          </a>
          {/* <IoLogoGithub /> */}
        </div>
      </div>
      <div className="text-white text-center border-t-[2px] border-white/50 py-5 px-5 md:px-8 lg:px-16">
        Copyright &copy; 2025 Capita
      </div>
    </div>
  );
}

export default Footer;
