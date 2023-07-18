import { Variants } from "@/libs/framer-motion";

export const opacityVariants: Variants = {
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
