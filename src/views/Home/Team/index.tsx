import React from "react";

import Card, { CardProps } from "./Card";

const members: CardProps[] = [
  {
    name: "Joe Duque",
    position: "CEO",
    photo: "/assets/images/home/team/peter.png",
    description:
      "I feel inspired because I get to work on bold new ideas. It's also great to hear feedback from and be Joe Duque is a visionary leader with a passion for technology and innovation. With years of experience in the industry, he guides our web agency towards success.",
    socials: {},
  },
  {
    name: "Joe Duque",
    position: "CEO",
    photo: "/assets/images/home/team/peter.png",
    description:
      "I feel inspired because I get to work on bold new ideas. It's also great to hear feedback from and be Joe Duque is a visionary leader with a passion for technology and innovation. With years of experience in the industry, he guides our web agency towards success.",
    socials: {},
  },
  {
    name: "Joe Duque",
    position: "CEO",
    photo: "/assets/images/home/team/peter.png",
    description:
      "I feel inspired because I get to work on bold new ideas. It's also great to hear feedback from and be Joe Duque is a visionary leader with a passion for technology and innovation. With years of experience in the industry, he guides our web agency towards success.",
    socials: {},
  },
  {
    name: "Joe Duque",
    position: "CEO",
    photo: "/assets/images/home/team/peter.png",
    description:
      "I feel inspired because I get to work on bold new ideas. It's also great to hear feedback from and be Joe Duque is a visionary leader with a passion for technology and innovation. With years of experience in the industry, he guides our web agency towards success.",
    socials: {},
  },
];

export default function Team() {
  return (
    <section className="px-10 py-20" id="meet-team">
      <h2>
        Meet <b>Our Team</b>
      </h2>

      <div className="mt-16 flex flex-row flex-wrap items-center justify-center gap-12">
        {members.map((member, i) => (
          <Card key={`memeber_${i}`} {...member} />
        ))}
      </div>
    </section>
  );
}
