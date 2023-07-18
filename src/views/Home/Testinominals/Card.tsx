import React from "react";

import Image from "next/image";

export interface CardProps {
  name: string;
  photo: string;
  position: string;
  description: string;
}

export default function Card({
  name,
  photo,
  position,
  description,
}: CardProps) {
  return (
    <div className="flex min-w-[36rem] max-w-xl flex-row items-center gap-2 rounded-xl border-2 border-[#051245] bg-card-gradient p-4 shadow-xl">
      <div className="flex flex-col gap-1">
        <div>{name}</div>
        <div className="mb-1 text-[#14E410]">{position}</div>
        <p>{description}</p>
      </div>
      <Image
        className="m-2 rounded-full"
        src={photo}
        alt={name}
        width={120}
        height={120}
      />
    </div>
  );
}
