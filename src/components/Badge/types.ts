import { HTMLAttributes } from "react";

import { HTMLMotionProps } from "@/libs/framer-motion";

export interface BadgeProps extends HTMLMotionProps<"div"> {
  variant?: string;
}
