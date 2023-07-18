import React from "react";
import Image from "next/image";

import { SkypeIcon, TwitterIcon, DiscordIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="px-10 py-4 flex flex-col items-center bg-[#051245]">
      <div className="flex pb-2 flex-row items-center w-full justify-around border-b border-b-[#152b70]">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={210}
          height={120}
        />
        <div className="flex flex-col gap-4">
          <div>Find Us On Social Media:</div>
          <div className="flex flex-row items-center justify-center gap-2">
            <a href="http://" target="_blank">
              <div className="border border-white rounded-full max-w-min p-[2px]">
                <SkypeIcon />
              </div>
            </a>
            <a href="http://" target="_blank">
              <div className="border border-white rounded-full max-w-min p-[2px]">
                <TwitterIcon />
              </div>
            </a>
            <a href="http://" target="_blank">
              <div className="border border-white rounded-full max-w-min p-[2px]">
                <DiscordIcon />
              </div>
            </a>
          </div>
        </div>
        <div>
          <div className="">We&apos;re Always Happy To Help</div>
          <a href="http://">support@startupkings.com</a>
        </div>
      </div>
      <div className="pt-2">Copyright © 2023 StartupKings</div>
    </footer>
  );
}
