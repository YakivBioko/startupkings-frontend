import React from "react";

import Image from "next/image";

export interface CardProps {
  name: string;
  photo: string;
  position: string;
  description: string;
  socials: {
    [key: string]: string;
  };
}

export default function Card({
  name,
  photo,
  position,
  description,
  socials,
}: CardProps) {
  return (
    <div className="min-w-[36rem] max-w-xl rounded-xl border-2 border-[#051245] bg-card-gradient p-4 shadow-xl">
      <div className="m-2 flex flex-row items-center gap-4">
        <Image
          className="rounded-full"
          src={photo}
          alt={name}
          width={120}
          height={120}
        />
        <div className="flex flex-col">
          <div>{name}</div>
          <div className="text-[#14E410]">{position}</div>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}
