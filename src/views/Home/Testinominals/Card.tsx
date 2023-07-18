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
    <div className="bg-card-gradient min-w-[36rem] max-w-xl rounded-xl border-2 border-[#051245] shadow-xl">
      <div className="flex flex-row gap-2">
        <Image
          className="rounded-full"
          src={photo}
          alt={name}
          width={120}
          height={120}
        />
        <div className="flex flex-col">
          <div>{name}</div>
          <div>{position}</div>
          <div>socasd</div>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}
