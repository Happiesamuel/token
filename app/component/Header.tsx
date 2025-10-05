"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { links } from "@/lib/Nav";

function Header() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${
        scroll > 100
          ? "fixed w-full z-50 bg-[#F5F7FA] py-5 shadow-xl"
          : "pt-8 px-1 lg:px-15"
      } flex items-center justify-center transition-all duration-500 px-14 lg:px-15`}
    >
      <div
        className={`flex items-center justify-between w-full ${
          scroll > 100 ? "rounded-none" : "pt-4"
        }`}
      >
        {/* Logo */}
        <a href="#hero" className="">
          <div className="flex">
            <Image
              src="/layout/Frame.png"
              alt="capita_logo"
              width={130}
              height={34}
              className="cursor-pointer"
            />
          </div>
        </a>

        {/* Nav Links */}
        <div className="flex flex-row items-center space-x-20">
          <div className="flex gap-x-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative inline-block pt-2 text-[16px] font-medium text-[#111] hover:text-[#2379bc] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <Button className="bg-[#003DEF] cursor-pointer text-white font-medium px-6 py-2 rounded-xl shadow-md hover:bg-blue-700 transition-colors">
              Purchase $CPT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
