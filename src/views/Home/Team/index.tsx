import React from "react";

import Card, { CardProps } from "./Card";

const members: CardProps[] = [
  {
    name: "Joe Duque",
    position: "CEO",
    photo: "/assets/images/home/team/joe.png",
    description:
      "I feel inspired because I get to work on bold new ideas. It's also great to hear feedback from and be Joe Duque is a visionary leader with a passion for technology and innovation. With years of experience in the industry, he guides our web agency towards success.",
    socials: {},
  },
  {
    name: "Ryo Kanazawa",
    position: "Co-founder, CTO",
    photo: "/assets/images/home/team/ryo.png",
    description:
      "As a visionary leader, the CTO at StartupKings is responsible for identifying emerging technologies that align with the company's goals and objectives. They continuously explore new avenues to leverage these technologies effectively to provide cutting-edge solutions to clients.",
    socials: {},
  },
  {
    name: "Peter",
    position: "Adviser",
    photo: "/assets/images/home/team/peter.png",
    description:
      "Peter provides valuable guidance and expertise to the company, leveraging their industry knowledge and experience to support strategic decision-making and drive growth.",
    socials: {},
  },
  {
    name: "Syed",
    position: "Marketing Manager",
    photo: "/assets/images/home/team/syed.png",
    description:
      "The Marketing Manager at StartupKings spearheads the development and execution of comprehensive marketing strategies, leveraging their expertise to enhance brand visibility, drive customer engagement, and boost business growth.",
    socials: {},
  },
];

export default function Team() {
  return (
    <section className="px-12 pb-24 pt-48 md:pb-64 md:pt-64" id="meet-team">
      <h2 className="text-[30px] md:text-[58px]">
        Meet <b>Our Executives</b>
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
        {members.map((member, i) => (
          <Card key={`memeber_${i}`} {...member} />
        ))}
      </div>
    </section>
  );
}
