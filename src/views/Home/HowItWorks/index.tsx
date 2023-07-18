"use client";

import {
  Badge,
  BudgetIcon,
  DetailIcon,
  PhoneIcon,
  TeamIcon,
} from "@/components";
import {
  HTMLMotionProps,
  LayoutGroup,
  m,
  motion,
  Variants,
} from "@/libs/framer-motion";

export default function HowItWorks({
  className,
  ...props
}: HTMLMotionProps<"section">) {
  return (
    <m.section
      layout
      className={["py -20 text-center text-white", className].join(" ")}
      {...props}
    >
      <h2 className="mx-auto">
        How <b>It Works</b>
      </h2>

      <div className="mt-[59px] grid grid-cols-4 gap-[30px] rounded-[10px] border border-[#051245] bg-[linear-gradient(138deg,#05042F_0%,#050E3E_100%)] px-[69px] py-[78px] font-bold leading-[1.587] -tracking-[0.48px] xl:gap-[56px]">
        <Badge className="bg-[linear-gradient(138deg,#05042F_0%,#050E3E_100%))] flex-col justify-between gap-[25px] px-[26px] py-[77px] md:bg-transparent md:px-0 md:py-0">
          <div className="rounded-full bg-[#D67F04] px-[33px] py-[10px]">
            <BudgetIcon />
          </div>
          <p className="text-[#FFD4D4]">
            Define your budget, skills and requirements
          </p>
        </Badge>

        <Badge className="flex-col justify-between gap-[25px]">
          <div className="rounded-full bg-[#152B70] px-[33px] py-[10px]">
            <DetailIcon />
          </div>
          <p className="text-[#FFD4D4]">
            Our team members send you a detail offer
          </p>
        </Badge>

        <Badge className="flex-col justify-between gap-[25px]">
          <div className="rounded-full bg-[#617389] px-[33px] py-[10px]">
            <PhoneIcon />
          </div>
          <p className="text-[#FFD4D4]">
            Schedule a call to discuss your goals objectives
          </p>
        </Badge>

        <Badge className="flex-col justify-between gap-[25px]">
          <div className="rounded-full bg-[#9C7EFF] px-[33px] py-[10px]">
            <TeamIcon />
          </div>
          <p className="text-[#FFD4D4]">
            Get relevant remote team within 24 hours
          </p>
        </Badge>
      </div>
    </m.section>
  );
}
