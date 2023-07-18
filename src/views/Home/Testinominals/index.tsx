import React from "react";

import Card, { CardProps } from "./Card";

const contents: CardProps[] = [
  {
    name: "Joe Duque",
    position: "GENERAL DIRECTOR",
    photo: "/assets/images/home/team/peter.png",
    description:
      "I feel inspired because I get to work on bold new ideas. It's also great to hear feedback from and be mentored by a seasoned VP Engineering!",
  },
  {
    name: "Joe Duque",
    position: "GENERAL DIRECTOR",
    photo: "/assets/images/home/team/peter.png",
    description:
      "I feel inspired because I get to work on bold new ideas. It's also great to hear feedback from and be mentored by a seasoned VP Engineering!",
  },
  {
    name: "Joe Duque",
    position: "GENERAL DIRECTOR",
    photo: "/assets/images/home/team/peter.png",
    description:
      "I feel inspired because I get to work on bold new ideas. It's also great to hear feedback from and be mentored by a seasoned VP Engineering!",
  },
  {
    name: "Joe Duque",
    position: "GENERAL DIRECTOR",
    photo: "/assets/images/home/team/peter.png",
    description:
      "I feel inspired because I get to work on bold new ideas. It's also great to hear feedback from and be mentored by a seasoned VP Engineering!",
  },
];

export default function Testinominals() {
  return (
    <section id="testinominals" className="px-10 py-20">
      <h2>Testinominals</h2>
      <p className="text-center">
        Work with contractors that are excited about working with you
      </p>

      <div className="mt-16 flex flex-row flex-wrap items-center justify-center gap-12">
        {contents.map((feedback, i) => (
          <Card key={`memeber_${i}`} {...feedback} />
        ))}
      </div>
    </section>
  );
}
