import {
  Badge,
  BudgetIcon,
  DetailIcon,
  PhoneIcon,
  TeamIcon,
} from "@/components";
import { HTMLAttributes } from "react";

export default function HowItWorks({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={["text-white text-center", className].join(" ")} {...props}>
      <div className="text-[58px] leading-[1.277] -tracking-[1.74px] mx-auto">
        How <span className="font-bold">It Works</span>
      </div>
      <div className="mt-[59px] rounded-[10px] border border-[#051245] bg-[linear-gradient(138deg,#05042F_0%,#050E3E_100%)] px-[69px] py-[78px] grid grid-cols-4 gap-[56px] font-bold leading-[1.587] -tracking-[0.48px]">
        <Badge className="gap-[25px]">
          <div className="rounded-full px-[33px] py-[10px] bg-[#D67F04]">
            <BudgetIcon />
          </div>
          <p className="text-[#FFD4D4]">
            Define your budget, skills and requirements
          </p>
        </Badge>

        <Badge className="gap-[25px]">
          <div className="rounded-full px-[33px] py-[10px] bg-[#152B70]">
            <DetailIcon />
          </div>
          <p className="text-[#FFD4D4]">
            Our team members send you a detail offer
          </p>
        </Badge>

        <Badge className="gap-[25px]">
          <div className="rounded-full px-[33px] py-[10px] bg-[#617389]">
            <PhoneIcon />
          </div>
          <p className="text-[#FFD4D4]">
            Schedule a call to discuss your goals objectives
          </p>
        </Badge>

        <Badge className="gap-[25px]">
          <div className="rounded-full px-[33px] py-[10px] bg-[#9C7EFF]">
            <TeamIcon />
          </div>
          <p className="text-[#FFD4D4]">
            Get relevant remote team within 24 hours
          </p>
        </Badge>
      </div>
    </div>
  );
}
