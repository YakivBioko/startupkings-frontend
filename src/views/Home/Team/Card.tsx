import React from "react";

import Image from "next/image";

import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/components";
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
    <div className="mx-auto max-w-xl rounded-xl p-4 shadow-xl md:border-2 md:border-[#051245] md:bg-card-gradient">
      <div className="m-2 flex flex-col items-center gap-4 md:flex-row">
        <Image
          className="rounded-full"
          src={photo}
          alt={name}
          width={120}
          height={120}
        />
        <div className="flex flex-col items-center md:items-start">
          <div>{name}</div>
          <div className="text-[#14E410]">{position}</div>
          <div className="flex flex-row items-center gap-[9px]">
            <a href="#">
              <FacebookIcon size={24} />
            </a>
            <a href="#">
              <InstagramIcon size={24} />
            </a>
            <a href="#">
              <TwitterIcon size={24} />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center md:text-left">{description}</p>
    </div>
  );
}
