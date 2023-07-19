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
    <div className="mx-auto flex max-w-xl flex-col-reverse items-center gap-2 rounded-xl border-2 border-[#051245] bg-card-gradient p-4 shadow-xl lg:flex-row">
      <div className="flex flex-col gap-1">
        <div className="text-center lg:text-left">{name}</div>
        <div className="mb-1 text-center uppercase text-[#14E410] lg:text-left">
          {position}
        </div>
        <p className="text-center lg:text-left">{description}</p>
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
