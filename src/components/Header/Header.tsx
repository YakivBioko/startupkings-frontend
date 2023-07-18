"use client";

import { HTMLAttributes } from "react";

import Image from "next/image";
import Link from "next/link";

import { clsxm } from "@/helpers";
import { useScrollCounter } from "@/hooks";
import { HTMLMotionProps, motion } from "@/libs/framer-motion";

export interface HeaderProps {
  title?: string;
  offsetHeight?: number;
  showProgressBarOnMobile?: boolean;
}

const headerVariants = {
  open: {
    height: 120,
    transition: { ease: "easeInOut", duration: 0.3 },
  },
  collapsed: {
    height: 60,
    transition: { ease: "easeInOut", duration: 0.3, delayChildren: 0.5 },
  },
};

export default function Header(props: HeaderProps) {
  const { title, offsetHeight = 120, showProgressBarOnMobile } = props;

  const reached = useScrollCounter(offsetHeight / 2);

  return (
    <motion.header
      className={clsxm(
        "fixed z-10  flex w-full items-center justify-between border-b py-[45px] pl-[50px] pr-[70px] backdrop-blur-md transition-colors",
        reached ? "border-b-[#051245]" : "border-b-transparent"
      )}
      initial="open"
      animate={reached ? "collapsed" : "open"}
      variants={headerVariants}
      {...props}
    >
      <Image
        src="/assets/images/logo.png"
        alt="logo"
        width={210}
        height={120}
      />
      <div className="flex items-center gap-[50px] text-[14px] font-bold leading-[1.437] -tracking-[0.56px] text-white">
        <Link href="#home">Home</Link>
        <Link href="#testinominals" scroll={false}>
          Testimonials
        </Link>
        <Link href="#meet-team">About</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </motion.header>
  );
}
