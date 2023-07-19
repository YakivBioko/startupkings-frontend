import React from "react";

import Item, { ItemProps } from "./Item";

const contents: ItemProps[] = [
  {
    image: "/assets/images/home/services/ai.svg",
    title: "AI/ML Services",
    description:
      "Our company offers cutting-edge AI and ML services. We develop intelligent applications that analyze data, make predictions, and automate processes. With a skilled team of data scientists and engineers, we provide custom AI/ML solutions tailored to clients' needs. Our expertise includes recommendation systems, natural language processing, and predictive models for driving business growth.",
    width: 518,
    height: 306,
  },
  {
    image: "/assets/images/home/services/blockchain.svg",
    title: "Blockchain Solutions",
    description:
      "We provide Blockchain solutions for secure and transparent digital transactions. Our expertise includes designing smart contracts, building private/public blockchains, and developing DApps. Industries like finance, supply chain, and healthcare benefit from our robust systems. By integrating blockchain technology, we enhance security, efficiency, and reduce costs for our clients.",
    width: 603,
    height: 326,
  },
  {
    image: "/assets/images/home/services/web.svg",
    title: "Web Development",
    description:
      "We offer exceptional web development services, creating customized websites that fulfill clients' needs. Our skilled team uses diverse programming languages and modern frameworks for visually appealing and responsive web applications. From basic pages to advanced e-commerce platforms, we prioritize user experience, performance, and brand alignment. Our expertise enhances websites and supports clients' business objectives.",
    width: 566,
    height: 371,
  },
  {
    image: "/assets/images/home/services/marketing.svg",
    title: "Social Marketing Strategies",
    description:
      "We provide strategic social marketing services to boost businesses' online presence and audience engagement. Using social media platforms, we create tailored strategies for brand awareness, customer engagement, and lead generation. Our data-driven approach helps identify suitable channels, content formats, and messaging. With a team of experts staying updated on trends and algorithms, we ensure clients stay ahead in the dynamic world of social marketing.",
    width: 473,
    height: 344,
  },
];

export default function OurServices() {
  return (
    <section className="px-12 py-20">
      <h2 className="hidden py-10 text-[58px] md:block">
        Our <b>Services</b>
      </h2>
      <h2 className="block py-10 text-[30px] md:hidden">
        The Rapid <b>Rise of AI </b>
      </h2>
      <div className="mt-16 flex flex-col gap-9 md:gap-44">
        {contents.map((content, i) => (
          <Item key={`services_${i}`} {...content} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
