import { HTMLAttributes } from "react";
import Image from "next/image";

import { RightArrowIcon } from "@/components";

import Circle from "./Circle";

export default function Header({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={["", className].join(" ")} {...props}>
      <div className="relative float-right pr-[40px] w-[380px] h-[330px]">
        <Image
          src="/assets/images/home/avatars.png"
          alt="avatars"
          width={380}
          height={330}
        />
      </div>

      <div className="max-w-[670px] mt-[58px]">
        <div className="flex items-center gap-[14px] pl-[15px] mb-[17px]">
          <Circle className="text-[#D67F04]" />
          <Circle className="text-[#14E410]" />
          <Circle className="text-[#9C7EFF]" />
        </div>
        <span className="text-white text-[58px] font-bold leading-[1.277] -tracking-[1.74px] mb-[19px]">
          <span className="text-[#C27E01]">Get</span> The Perfect{" "}
          <span className="text-[#14E410]">Talent</span>
          <br />
          For Your <span className="text-[#D67F04]">Startup</span>
        </span>
        <p className="text-white text-[18px] leading-[158.7%] -tracking-[0.54px] mt-[18px] mb-[25px]">
          Hire Pre-Vetted Remote Developers, Designers & Product Managers With
          World Class Technical And Communication Skills, Without Worrying About
          Crazy Fees Or The Legal Hassle.
        </p>
        <button className="rounded-[40px_40px_0_40px] text-black bg-[#14E410] text-[15px] font-bold leading-[1.587] px-[32px] py-[22px] gap-2.5">
          Hire Talent{" "}
          <span className="w-[29px] h-[29px] rounded-full bg-white">
            <RightArrowIcon />
          </span>
        </button>
      </div>

      <div className="flex justify-center w-full mt-[92px]">
        <div className="relative rounded-full border-4 border-[#DCD3FB] w-[36px] h-[55px]">
          <p className="absolute left-[50%] top-[8px] -translate-x-[50%] rounded-full bg-[#DCD3FB] w-[6px] h-[12px] "></p>
        </div>
      </div>
    </div>
  );
}
