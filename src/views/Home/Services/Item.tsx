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
          "flex items-center justify-around " +
          (reverse ? "flex-row-reverse" : "flex-row")
        }
        variants={cardVariants}
      >
        <Image src={image} alt="logo" width={width} height={height} />
        <div className="flex flex-col gap-2">
          <h4>{title} : </h4>
          <p className="max-w-md">{description}</p>
        </div>
      </m.div>
    </m.div>
  );
}
