import { HTMLAttributes } from "react";
import Image from "next/image";

export default function Companies({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={[
        "flex items-center justify-between gap-[58px]",
        className,
      ].join(" ")}
      {...props}
    >
      <div className="text-[18px] text-[#DCD3FB] font-bold -tracking-[0.54px] -mr-[30px]">
        Trusted by leading enterprises
        <br />
        and startups
      </div>
      <Image
        src="/assets/images/home/shippo.png"
        alt="shippo"
        width={201}
        height={62}
      />
      <Image
        src="/assets/images/home/sardine.png"
        alt="sardine"
        width={221}
        height={123}
      />
      <Image
        src="/assets/images/home/intuit.png"
        alt="intuit"
        width={160}
        height={33}
      />
      <Image
        src="/assets/images/home/dell.png"
        alt="dell"
        width={71}
        height={70}
      />
    </div>
  );
}