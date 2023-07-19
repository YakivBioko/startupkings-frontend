import { HTMLAttributes } from "react";

import { RightArrowIcon } from "@/components";

export default function ReadyToStart({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={[
        "relative flex flex-col items-center gap-[38px] bg-[url('/assets/images/home/ready_background.svg')] bg-cover px-12 pb-[71px] pt-[90px] md:px-[100px]",
        className,
      ].join(" ")}
      {...props}
    >
      <h2 className="text-[30px] leading-[1.277] -tracking-[1.74px] text-white md:text-[58px]">
        <b>Ready to contract talent</b> in a new,
        <br />
        smarter way&nbsp;
        <b>
          with Your Team<span className="text-[#D67F04]">?</span>
        </b>
      </h2>
      <a href="#contact">
        <button className="gap-1 rounded-full bg-[#14E410] px-[15px] py-[8px] text-[15px] font-semibold text-[#152B70]">
          Build My Team
          <span className="h-[29px] w-[29px] rounded-full bg-white">
            <RightArrowIcon />
          </span>
        </button>
      </a>
    </section>
  );
}
