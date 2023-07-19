"use client";

import * as React from "react";

import Image from "next/image";
import Link from "next/link";

import { clsxm } from "@/helpers";
import { useScrollCounter } from "@/hooks";
import { motion } from "@/libs/framer-motion";

import { CloseIcon, HamburgerIcon } from "../Icons";

export interface HeaderProps {
  title?: string;
  offsetHeight?: number;
  showProgressBarOnMobile?: boolean;
}

const headerVariants = {
  open: {
    height: 175,
    transition: { ease: "easeInOut", duration: 0.3 },
  },
  collapsed: {
    height: 145,
    transition: { ease: "easeInOut", duration: 0.3, delayChildren: 0.5 },
  },
};

export default function Header(props: HeaderProps) {
  const { offsetHeight = 120 } = props;

  const reached = useScrollCounter(offsetHeight / 2);

  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <motion.header
      className={clsxm(
        "fixed z-10 flex w-full flex-wrap items-center justify-between border-b px-8 py-4 backdrop-blur-md transition-colors md:px-[50px] md:py-[45px]",
        reached ? "border-b-[#051245]" : "border-b-transparent"
      )}
      initial="open"
      animate={reached ? "collapsed" : "open"}
      variants={headerVariants}
      {...props}
    >
      <Link href="#home">
        <Image
          className={reached ? "w-[100px]" : "w-[150px]"}
          src="/assets/images/logo.png"
          alt="logo"
          width={150}
          height={120}
        />
      </Link>
      <button className="block md:hidden" onClick={() => setOpen(!open)}>
        {open ? <CloseIcon /> : <HamburgerIcon />}
      </button>
      <div
        className={
          (open ? "block" : "hidden") +
          " absolute left-0 top-[145px] w-full bg-[rgb(2,1,45)] px-8 backdrop-blur-md md:static md:flex md:w-auto md:items-center md:bg-transparent md:px-0 md:backdrop-blur-none"
        }
      >
        <ul className="gap-[18px] pt-4 text-[14px] font-bold leading-[1.437] -tracking-[0.56px] text-white backdrop-blur-md md:flex md:justify-between md:pt-0">
          <li>
            <Link href="#home" className="block py-2 md:p-4">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#testinominals"
              scroll={false}
              className="block py-2 md:p-4"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="#meet-team" className="block py-2 md:p-4">
              About
            </Link>
          </li>
          <li>
            <Link href="#contact" className="block py-2 md:p-4">
              Contact
            </Link>
          </li>
          <li className="block py-2 md:hidden md:p-4">
            <button className="rounded-[40px] bg-[#DCD3FB] px-5 py-2 text-black">
              Sign In
            </button>
          </li>
        </ul>
      </div>
      <button className="hidden rounded-[40px] bg-[#DCD3FB] px-5 py-2 text-black md:block">
        Sign In
      </button>
    </motion.header>
  );
}
