import React from "react";

import Card, { CardProps } from "./Card";

const contents: CardProps[] = [
  {
    name: "Joe Duque",
    position: "CEO",
    photo: "",
    description: "",
  },
  {
    name: "Joe Duque",
    position: "CEO",
    photo: "",
    description: "",
  },
  {
    name: "Joe Duque",
    position: "CEO",
    photo: "",
    description: "",
  },
];

export default function Testinominals() {
  return (
    <section>
      <h2>Testinominals</h2>
      <p>Work with contractors that are excited about working with you</p>

      <div className="flex flex-row flex-wrap items-center justify-center gap-4">
        {contents.map((feedback, i) => (
          <Card key={`memeber_${i}`} {...feedback} />
        ))}
      </div>
    </section>
  );
}
