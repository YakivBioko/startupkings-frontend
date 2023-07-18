import { HTMLAttributes } from "react";

import Image from "next/image";

export default function Companies({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={[
        "flex flex-wrap items-center justify-center gap-[30px_58px] py-20",
        className,
      ].join(" ")}
      {...props}
    >
      <div className="-mr-[30px] text-center text-[18px] -tracking-[0.54px] text-[#DCD3FB] md:text-left">
        Trusted by <b>leading enterprises</b>
        <br />
        and <b>startups</b>
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
        className="-my-[25px]"
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
