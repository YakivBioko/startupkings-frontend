"use client";

import { HTMLAttributes } from "react";

import Image from "next/image";

import {
  AnimatedTextWord,
  opacityVariants,
  RightArrowIcon,
} from "@/components";
import { m } from "@/libs/framer-motion";

import Circle from "./Circle";
import Hello from "./Hello";

export default function Hero({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={["", className].join(" ")} {...props}>
      <div className="relative float-right h-[330px] w-[380px] pr-[40px]">
        <Image
          src="/assets/images/home/avatars.png"
          alt="avatars"
          width={380}
          height={330}
        />
      </div>

      <div className="mt-[58px] max-w-[670px]">
        <div className="mb-[17px] flex items-center gap-[14px] pl-[15px]">
          <Circle className="text-[#D67F04]" />
          <Circle className="text-[#14E410]" />
          <Circle className="text-[#9C7EFF]" />
        </div>
        <Hello />
        <m.p
          className="mb-[25px] mt-[18px] text-[18px] leading-[158.7%] -tracking-[0.54px] text-white"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          variants={opacityVariants}
        >
          Hire Pre-Vetted Remote Developers, Designers & Product Managers With
          World Class Technical And Communication Skills, Without Worrying About
          Crazy Fees Or The Legal Hassle.
        </m.p>
        <a href="#contact">
          <button className="gap-2.5 rounded-[40px_40px_0_40px] bg-[#14E410] px-[32px] py-[22px] text-[15px] font-bold leading-[1.587] text-black">
            Hire Talent&nbsp;
            <span className="h-[29px] w-[29px] rounded-full bg-white">
              <RightArrowIcon />
            </span>
          </button>
        </a>
      </div>

      <div className="mt-[92px] flex w-full justify-center">
        <div className="relative h-[55px] w-[36px] rounded-full border-4 border-[#DCD3FB]">
          <p className="absolute left-[50%] top-[8px] h-[12px] w-[6px] -translate-x-[50%] rounded-full bg-[#DCD3FB] "></p>
        </div>
      </div>
    </div>
  );
}
