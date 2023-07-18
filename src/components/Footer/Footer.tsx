import React from "react";

import Image from "next/image";

import { DiscordIcon, SkypeIcon, TwitterIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-[#051245] px-10 py-4">
      <div className="flex w-full flex-row items-center justify-around border-b border-b-[#152b70] pb-2">
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
              <div className="max-w-min rounded-full border border-white p-[2px]">
                <SkypeIcon />
              </div>
            </a>
            <a href="http://" target="_blank">
              <div className="max-w-min rounded-full border border-white p-[2px]">
                <TwitterIcon />
              </div>
            </a>
            <a href="http://" target="_blank">
              <div className="max-w-min rounded-full border border-white p-[2px]">
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
