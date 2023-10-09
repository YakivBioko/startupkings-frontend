"use client";

import { HTMLAttributes } from "react";

import Image from "next/image";

import { opacityVariants, RightArrowIcon, RingStar } from "@/components";
import { m } from "@/libs/framer-motion";

import Circle from "./Circle";
import Hello from "./Hello";

export default function Hero({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={["", className].join(" ")} {...props}>
      <div className="flex flex-col-reverse items-center justify-between gap-[20px] md:flex-row">
        <div className="mt-[58px] max-w-[670px]">
          <div className="mb-[17px] hidden items-center gap-[14px] pl-[15px] md:flex">
            <Circle className="text-[#D67F04]" />
            <Circle className="text-[#14E410]" />
            <Circle className="text-[#9C7EFF]" />
          </div>
          <Hello />
          <m.p
            className="mb-[25px] mt-[18px] text-center text-[16px] leading-[158.7%] -tracking-[0.54px] text-white md:text-left md:text-[18px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            variants={opacityVariants}
          >
            Hire Pre-Vetted Remote Developers, Designers & Product Managers With
            World Class Technical And Communication Skills, Without Worrying
            About Crazy Fees Or The Legal Hassle.
          </m.p>
          <a href="#contact">
            <button className="mx-auto gap-2.5 rounded-[40px_40px_0_40px] bg-[#14E410] px-[32px] py-[22px] text-[15px] font-bold leading-[1.587] text-black md:mx-0">
              Hire Talent&nbsp;
              <span className="h-[29px] w-[29px] rounded-full bg-white">
                <RightArrowIcon />
              </span>
            </button>
          </a>
        </div>

        <div className="min-w-[270px] max-w-[335px] md:w-[400px]">
          <Image
            src="/assets/images/home/avatars.png"
            alt="avatars"
            width={400}
            height={350}
          />
          <div className="mx-auto mt-0 flex max-w-[335px] gap-[12px] rounded-[10px] bg-[linear-gradient(166deg,#061A53_0%,#142363_100%)] px-4 py-2.5 md:mt-5">
            <RingStar />
            <div className="flex flex-1 items-center justify-between">
              <span>Task Completed</span>
              <span>30</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[92px] flex w-full justify-center">
        <div className="relative h-[55px] w-[36px] rounded-full border-4 border-[#DCD3FB]">
          <p className="absolute left-[50%] top-[8px] h-[12px] w-[6px] -translate-x-[50%] rounded-full bg-[#DCD3FB] "></p>
        </div>
      </div>
    </div>
  );
}
