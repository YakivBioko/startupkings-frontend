import React from "react";

import Image from "next/image";

import {
  DiscordIcon,
  InstagramIcon,
  SkypeIcon,
  TwitterIcon,
} from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-[#051245] px-10 py-4">
      <div className="flex w-full flex-col items-center justify-around gap-12 border-b border-b-[#152b70] pb-2 md:flex-row">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={210}
          height={120}
        />
        <div className="flex flex-col gap-4">
          <div>Find Us On Social Media:</div>
          <div className="flex flex-row items-center justify-center gap-2">
            {/* <a
              href="https://join.skype.com/invite/q9bKgELmkd4m"
              target="_blank"
              rel="noopener"
            >
              <div className="max-w-min rounded-full border border-white p-[2px]">
                <SkypeIcon />
              </div>
            </a> */}
            <a
              href="https://instagram.com/the.startupkings?igshid=NGExMmI2YTkyZg=="
              target="_blank"
              rel="noopener"
            >
              <div className="max-w-min rounded-full border border-white p-[2px]">
                <InstagramIcon />
              </div>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener">
              <div className="max-w-min rounded-full border border-white p-[2px]">
                <TwitterIcon />
              </div>
            </a>
            {/* <a
              href="https://discord.gg/kkvMCe6WEX"
              target="_blank"
              rel="noopener"
            >
              <div className="max-w-min rounded-full border border-white p-[2px]">
                <DiscordIcon />
              </div>
            </a> */}
          </div>
        </div>
        <div>
          <div className="">We&apos;re Always Happy To Help</div>
          <a href="mailto:hello@startupkings.co">hello@startupkings.co</a>
        </div>
      </div>
      <div className="pt-2">Copyright © 2023 StartupKings</div>
    </footer>
  );
}
