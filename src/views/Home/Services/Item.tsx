import React from "react";

import Image from "next/image";

export interface ItemProps {
  image: string;
  title: string;
  description: string;
  width: number;
  height: number;
  reverse?: boolean;
}

export default function Item({
  image,
  title,
  description,
  width,
  height,
  reverse,
}: ItemProps) {
  return (
    <div
      className={
        "flex items-center justify-around " +
        (reverse ? "flex-row-reverse" : "flex-row")
      }
    >
      <Image src={image} alt="logo" width={width} height={height} />
      <div className="flex flex-col gap-2">
        <h4>{title} : </h4>
        <p className="max-w-md">{description}</p>
      </div>
    </div>
  );
}
