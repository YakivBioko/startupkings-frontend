"use client";

import React from "react";

import Image from "next/image";

import { m, motion, Variants } from "@/libs/framer-motion";
export interface ItemProps {
  image: string;
  title: string;
  description: string;
  width: number;
  height: number;
  reverse?: boolean;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2,
    },
  },
};

export default function Item({
  image,
  title,
  description,
  width,
  height,
  reverse,
}: ItemProps) {
  return (
    <m.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <m.div
        className={
          "mx-auto flex max-w-[348px] flex-col items-center justify-between gap-10 lg:max-w-7xl " +
          (reverse ? "lg:flex-row-reverse" : "lg:flex-row")
        }
        variants={cardVariants}
      >
        {/* <Image src={image} alt="logo" width={width} height={height} /> */}
        <Image src={image} alt="logo" width={width} height={height} />
        <div className="flex flex-col gap-2">
          <h4 className="mb-4 text-center text-[20px] font-bold lg:text-left lg:text-[28px]">
            {title} :{" "}
          </h4>
          <p className="text-center text-[16px] lg:max-w-md lg:text-left lg:text-[18px]">
            {description}
          </p>
        </div>
      </m.div>
    </m.div>
  );
}
