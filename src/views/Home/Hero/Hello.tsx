"use client";
"use client";

import React from "react";

import { m } from "@/libs/framer-motion";

const Hello = () => {
  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div>
      <m.div
        className="mb-[19px] text-6xl font-bold leading-[1.277] -tracking-[1.74px] text-white"
        style={{ overflow: "hidden", display: "flex" }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <m.span className="mr-2 text-[#C27E01]" variants={child}>
          Get
        </m.span>
        <m.span className="mr-2" variants={child}>
          The Perfect&nbsp;
        </m.span>
        <m.span className="mr-2 text-[#14E410]" variants={child}>
          Talent
        </m.span>
      </m.div>
      <m.div
        className="mb-[19px] text-6xl font-bold leading-[1.277] -tracking-[1.74px] text-white"
        style={{ overflow: "hidden", display: "flex" }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <m.span className="mr-2" variants={child}>
          For Your&nbsp;
        </m.span>
        <m.span className="mr-2 text-[#D67F04]" variants={child}>
          Startup
        </m.span>
      </m.div>
    </div>
  );
};

export default Hello;
