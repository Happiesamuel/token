import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80, // offset for navbar
        behavior: "smooth",
      });

      // Recalculate GSAP trigger positions after smooth scroll
      setTimeout(() => ScrollTrigger.refresh(), 1000);
    }
  };
  const links = [
    {
      name: "About",
      route: "#about",
    },
    {
      name: "Roadmap",
      route: "#roadmap",
    },
    {
      name: "Tokenomics",
      route: "#tokenomics",
    },
    {
      name: "Whitepaper",
      route: "#whitepaper",
    },
  ];

  return (
    <div className="bg-black">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-5  px-5 md:px-8 lg:px-16 py-10">
        <div className="flex items-center gap-1">
          <img src="/logo-1.png" alt="" className="w-8 md:w-10" />
          <p className="uppercase text-white text-lg font-bold">Capita</p>
        </div>

        <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6 md:text-sm text-white lg:text-base font-semibold">
          {links.map((link) => (
            <li>
              <a
                onClick={(e) => handleNavClick(e, link.route)}
                href={link.route}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5 text-white text-2xl">
          <a href="https://t.me/CapitatokenHQ" target="_blank">
            <FaTelegramPlane />
          </a>
          <a href="https://x.com/CapitaToken?t=HTbrOH6Bx0i6CrDDOX81hw&s=09">
            <FaXTwitter />
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
