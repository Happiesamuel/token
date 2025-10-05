"use client";

import { links } from "@/lib/Nav";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between py-10 border-b border-[#222] px-6 max-w-[70rem] mx-auto">
        <a href="#hero">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image src="/layout/logo.png" alt="logo" width={100} height={50} />
          </div>
        </a>

        <div className="flex md:flex-row flex-col flex-wrap justify-start gap-x-6 gap-y-4 mt-8 md:mt-0">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-[#2FD8FB] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-row items-center space-x-6 text-2xl mt-8 md:mt-0">
          <a
            href="https://t.me/capitatokenHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2FD8FB] transition-colors"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://x.com/capitatoken?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2FD8FB] transition-colors"
          >
            <BsTwitterX />
          </a>
          <a
            href="https://discord.gg/BQEPVGw5C"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2FD8FB] transition-colors"
          >
            <FaDiscord />
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center py-5 px-4 text-center">
        <p className="text-sm text-gray-400 leading-relaxed">
          Copyright © 2025, <span className="text-white font-medium">Capita</span>
        </p>
      </div>
    </footer>
  );
}
