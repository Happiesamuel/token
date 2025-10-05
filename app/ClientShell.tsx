"use client";

import { ReactNode } from "react";

export default function ClientShell({ children }: { children: ReactNode }) {
  return (
      <div className="flex min-h-screen w-full">
        {/* Main content area */}
        <div className="flex flex-1 flex-col w-full max-w-[1500px] mx-auto">
          <div className=" flex flex-1 flex-col overflow-hidden">
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </div>
  );
}
