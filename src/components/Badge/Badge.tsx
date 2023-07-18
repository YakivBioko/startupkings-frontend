"use client";

import { opacityVariants } from "@/components/animations";
import { m, Variants } from "@/libs/framer-motion";

import { BadgeProps } from "./types";

export default function Badge({ className, ...props }: BadgeProps) {
  return (
    <m.div
      className={["badge", className].join(" ")}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      variants={opacityVariants}
      {...props}
    />
  );
}
