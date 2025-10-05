"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { links } from "@/lib/Nav";
import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function MobileHeader() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <div className="fixed top-0 z-40 w-full bg-white/90 backdrop-blur-sm shadow-sm h-14">
      <div className="flex flex-row items-center justify-between px-4 sm:px-10 py-3 w-full h-full">
        <a href="#hero">
          <div className="flex">
            <Image
              src="/layout/Frame.png"
              alt="capita_logo"
              width={90}
              height={60}
              className="cursor-pointer"
            />
          </div>
        </a>

        <div className="flex flex-row items-center gap-4">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button aria-label="menu">
                <RxHamburgerMenu className="cursor-pointer w-6 h-6" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-54">
              <div className="flex flex-col justify-center items-center gap-6 w-full h-full">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleClose}
                    className="relative inline-block text-[16px] font-medium text-[#111] hover:text-[#003DEF] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
