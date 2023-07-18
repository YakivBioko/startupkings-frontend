import React from "react";

import Image from "next/image";

export default function Achievement() {
  return (
    <section className="flex w-full items-center justify-around bg-[url('/assets/images/home/world.png')] bg-repeat-x px-10 py-20">
      <Image
        src="/assets/images/home/job_alert.svg"
        alt="job"
        width={535}
        height={554}
      />
      <div className="max-w-xl">
        <h2 className="text-left">
          Reach our <b>network of reliable, remote talent</b>
        </h2>
        <p className="mb-5">
          Thousands of elite professionals workers, vetted by our team and our
          software, are looking for their next bounty on StartupKings
        </p>
        <div className="mb-8 flex flex-row gap-3">
          <div>
            <div className="text-[#14E410]">20+</div>
            Companies served
          </div>
          <div>
            <div className="text-[#D67F04]">8s+</div>
            Years of experience
          </div>
          <div>
            <div className="text-[#9C7EFF]">3 days</div>
            Average time-to-hire
          </div>
        </div>
        <a href="#contact">
          <div className="max-w-max rounded-md bg-[#DCD3FB] px-3 py-2 text-black">
            Find a talent!
          </div>
        </a>
      </div>
    </section>
  );
}
