import { BadgeProps } from "./types";

export default function Badge({ className, ...props }: BadgeProps) {
  return <div className={["badge", className].join(" ")} {...props} />;
}
