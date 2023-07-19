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
      className={["py-16 text-center text-white lg:py-56", className].join(" ")}
      {...props}
    >
      <h2 className="mx-auto">
        How <b>It Works</b>
      </h2>

      <div className="mt-11 grid grid-cols-1 gap-[35px] rounded-[10px] border-none border-transparent bg-none px-0 py-0 font-bold leading-[1.587] -tracking-[0.48px] md:mt-[59px] md:grid-cols-2 md:border md:border-[#051245] md:bg-[linear-gradient(138deg,#05042F_0%,#050E3E_100%)] md:px-[69px] md:py-[78px] lg:grid-cols-4 xl:gap-[56px]">
        <Badge className="mx-auto max-w-[290px] flex-col justify-between gap-[25px] rounded-[10px] border border-[#051245] bg-[linear-gradient(138deg,#05042F_0%,#050E3E_100%)] px-6 py-20 md:rounded-none md:border-none md:border-transparent md:bg-none md:px-0 md:py-0">
          <div className="rounded-full bg-[#D67F04] px-[33px] py-[10px]">
            <BudgetIcon />
          </div>
          <p className="text-[#FFD4D4]">
            Define your budget, skills and requirements
          </p>
        </Badge>

        <Badge className="mx-auto max-w-[290px] flex-col justify-between gap-[25px] rounded-[10px] border border-[#051245] bg-[linear-gradient(138deg,#05042F_0%,#050E3E_100%)] px-6 py-20 md:rounded-none md:border-none md:border-transparent md:bg-none md:px-0 md:py-0">
          <div className="rounded-full bg-[#152B70] px-[33px] py-[10px]">
            <DetailIcon />
          </div>
          <p className="text-[#FFD4D4]">
            Our team members send you a detail offer
          </p>
        </Badge>

        <Badge className="mx-auto max-w-[290px] flex-col justify-between gap-[25px] rounded-[10px] border border-[#051245] bg-[linear-gradient(138deg,#05042F_0%,#050E3E_100%)] px-6 py-20 md:rounded-none md:border-none md:border-transparent md:bg-none md:px-0 md:py-0">
          <div className="rounded-full bg-[#617389] px-[33px] py-[10px]">
            <PhoneIcon />
          </div>
          <p className="text-[#FFD4D4]">
            Schedule a call to discuss your goals objectives
          </p>
        </Badge>

        <Badge className="mx-auto max-w-[290px] flex-col justify-between gap-[25px] rounded-[10px] border border-[#051245] bg-[linear-gradient(138deg,#05042F_0%,#050E3E_100%)] px-6 py-20 md:rounded-none md:border-none md:border-transparent md:bg-none md:px-0 md:py-0">
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
