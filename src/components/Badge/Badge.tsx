"use client";

import { m, Variants } from "@/libs/framer-motion";

import { BadgeProps } from "./types";

const cardVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5,
    },
  },
};

export default function Badge({ className, ...props }: BadgeProps) {
  return (
    <m.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      className={["badge", className].join(" ")}
      variants={cardVariants}
      {...props}
    />
  );
}
