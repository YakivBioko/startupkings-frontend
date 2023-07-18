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
    position: "CTO",
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
    name: "Julie",
    position: "Marketing Manager",
    photo: "/assets/images/home/team/julie.png",
    description:
      "The Marketing Manager at StartupKings spearheads the development and execution of comprehensive marketing strategies, leveraging their expertise to enhance brand visibility, drive customer engagement, and boost business growth.",
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
