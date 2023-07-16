import { HTMLAttributes } from "react";

import { RightArrowIcon } from "@/components";

export default function ReadyToStart({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={[
        "relative px-[100px] pt-[90px] pb-[71px] flex flex-col items-center gap-[38px] bg-[url('/assets/images/home/ready_background.svg')] bg-cover",
        className,
      ].join(" ")}
      {...props}
    >
      <div className="text-white text-[58px] font-light leading-[1.277] -tracking-[1.74px]">
        <span className="font-bold">Ready to contract talent</span> in a new,
        <br />
        smarter way{" "}
        <span className="font-bold">
          with Your Team<span className="text-[#D67F04]">?</span>
        </span>
      </div>
      <button className="rounded-full text-[15px] text-[#152B70] bg-[#14E410] font-semibold gap-1 px-[15px] py-[8px]">
        Build My Team
        <span className="w-[29px] h-[29px] rounded-full bg-white">
          <RightArrowIcon />
        </span>
      </button>
    </div>
  );
}