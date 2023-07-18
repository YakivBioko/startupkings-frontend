import React from "react";

import Card, { CardProps } from "./Card";

const members: CardProps[] = [
  {
    name: "Joe Duque",
    position: "CEO",
    photo: "",
    description: "",
    socials: {},
  },
  {
    name: "Joe Duque",
    position: "CEO",
    photo: "",
    description: "",
    socials: {},
  },
  {
    name: "Joe Duque",
    position: "CEO",
    photo: "",
    description: "",
    socials: {},
  },
];

export default function Team() {
  return (
    <section className="px-10 py-20">
      <h2>
        Meet <b>Our Team</b>
      </h2>

      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        {members.map((member, i) => (
          <Card key={`memeber_${i}`} {...member} />
        ))}
      </div>
    </section>
  );
}
