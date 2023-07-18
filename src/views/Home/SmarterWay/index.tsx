import { HTMLAttributes } from "react";
import Image from "next/image";
import { Badge } from "@/components";

export default function SmarterWay({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={["px-[148px] py-20", className].join(" ")} {...props}>
      <h2>
        Skip&nbsp;
        <b>
          Hiring Process & Follow
          <br />
          Smarter way
        </b>
      </h2>

      <div className="relative mt-[120px] grid grid-cols-2 gap-[500px_170px] text-[20px]">
        <div className="flex gap-[19px]">
          <Badge className="min-w-[56px] h-[56px] font-bold bg-[#9C7EFF]">
            1
          </Badge>
          <div>
            <h4 className="mb-[9px]">90% Faster Hiring</h4>
            <span className="text-[18px] -tracking-[0.54px]">
              We hire remote software engineers beforehand after evaluating them
              thoroughly to filter out the world‘s top 1% of full time remote
              developer talent.
            </span>
          </div>
        </div>

        <div className="flex gap-[19px]">
          <Badge className="min-w-[56px] h-[56px] font-bold bg-[#9C7EFF]">
            2
          </Badge>
          <div>
            <h4 className="mb-[9px]">Role-Specific Expertise</h4>
            <span className="text-[18px] -tracking-[0.54px]">
              We tested track record of brilliance in hiring remote developers.
              We connect your company with the best remote based talent with
              extensive experience
            </span>
          </div>
        </div>

        <Image
          src="/assets/images/home/smarter.svg"
          alt="smarter"
          width={470}
          height={358}
          className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"
        />

        <div className="flex gap-[19px]">
          <Badge className="min-w-[56px] h-[56px] font-bold bg-[#9C7EFF]">
            3
          </Badge>
          <div>
            <h4 className="mb-[9px]">Top Talent Quality</h4>
            <span className="text-[18px] -tracking-[0.54px]">
              Our talents are not just exceptional with great problem solving
              skills; they have brilliant soft skills too. Hence, they can fit
              perfectly into your team.
            </span>
          </div>
        </div>

        <div className="flex gap-[19px]">
          <Badge className="min-w-[56px] h-[56px] font-bold bg-[#9C7EFF]">
            4
          </Badge>
          <div>
            <h4 className="mb-[9px]">2-Week No-Risk Trial</h4>
            <span className="text-[18px] -tracking-[0.54px]">
              Our 2-week free trial allows you to work with our remote
              developers for two weeks without paying any upfront charges and
              only pay if you are satisfied.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
