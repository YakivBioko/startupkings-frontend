import React from "react";

import Image from "next/image";

export default function Achievement() {
  return (
    <section className="flex w-full items-center justify-around bg-[url('/assets/images/home/world.png')] bg-repeat-x px-10 py-20">
      <Image
        className="hidden lg:block"
        src="/assets/images/home/job_alert.svg"
        alt="job"
        width={535}
        height={554}
      />
      <div className="max-w-xl">
        <h2 className="text-center text-[30px] md:text-left md:text-[58px]">
          Reach our <b>network of reliable, remote talent</b>
        </h2>
        <p className="mb-6 text-center text-[16px] md:text-left md:text-[18px]">
          Thousands of elite professionals workers, vetted by our team and our
          software, are looking for their next bounty on StartupKings
        </p>
        <div className="mb-16 flex flex-col gap-9 md:flex-row md:gap-4">
          <div className="text-center md:text-left">
            <div className="pb-2 text-[32px] font-bold text-[#14E410]">20+</div>
            <span className="text-[16px] md:text-[18px]">Companies served</span>
          </div>
          <div className="text-center md:text-left">
            <div className="pb-2 text-[32px] font-bold text-[#D67F04]">8s+</div>
            <span className="text-[16px] md:text-[18px]">
              Years of experience
            </span>
          </div>
          <div className="text-center md:text-left">
            <div className="pb-2 text-[32px] font-bold text-[#9C7EFF]">
              3 days
            </div>
            <span className="text-[16px] md:text-[18px]">
              Average time-to-hire
            </span>
          </div>
        </div>
        <a href="#contact">
          <div className="mx:p-8 mx-auto max-w-max rounded-md bg-[#DCD3FB] p-6 text-[18px] text-black md:mx-0">
            Find a talent!
          </div>
        </a>
      </div>
    </section>
  );
}
