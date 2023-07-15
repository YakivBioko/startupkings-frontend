import { HTMLAttributes } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={[
        "fixed w-full flex items-center justify-between py-[45px] pl-[50px] pr-[70px] z-[100]",
        className,
      ].join(" ")}
      {...props}
    >
      <Image
        src="/assets/images/logo.png"
        alt="logo"
        width={210}
        height={120}
      />
      <div className="flex items-center gap-[50px] text-white text-[14px] font-bold leading-[1.437] -tracking-[0.56px]">
        <Link href="/#home">Home</Link>
        <Link href="/#testimonials">Testimonials</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
      </div>
    </div>
  );
}
