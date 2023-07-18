import React from "react";

import Card, { CardProps } from "./Card";

const contents: CardProps[] = [
  {
    name: "John Smith",
    position: "GENERAL DIRECTOR",
    photo: "/assets/images/home/testinominals/jhon.png",
    description:
      "Working with StartupKings has been an absolute pleasure! Their team of experts delivered a top-notch web development solution for our company. The website they built was not only visually appealing but also highly functional and user-friendly. I highly recommend their services to anyone looking for exceptional software development.",
  },
  {
    name: "Emily",
    position: "Marketing Manager",
    photo: "/assets/images/home/testinominals/emily.png",
    description:
      "We engaged StartupKings to take charge of our social marketing campaigns, and we couldn't be happier with the results! Their expertise in crafting effective marketing strategies combined with their profound knowledge of AI-based tools have significantly boosted our online presence and customer engagement levels.",
  },
  {
    name: "Lucas",
    position: "Technical Lead",
    photo: "/assets/images/home/testinominals/lucas.png",
    description:
      "Collaborating with StartupKings on multiple projects involving web development has exceeded all expectations set forth by us at LMN Industries. Their attention to detail is commendable as they meticulously crafted each page ensuring seamless functionality across different platforms and devices.",
  },
  {
    name: "Mia",
    position: "Marketing Manager",
    photo: "/assets/images/home/testinominals/mia.png",
    description:
      "StartupKings' team truly excels in creating innovative solutions by leveraging artificial intelligence techniques. With their guidance and support, we were able to streamline our marketing efforts through automated processes that increased efficiency while reducing costs",
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
