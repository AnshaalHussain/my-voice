import React from "react";
import ArticlesCard from "./ArticlesCard";

import imageOne from "../images/magazine-cards/compassion.jpg";
import imageTwo from "../images/magazine-cards/mental-health.jpg";
import imageThree from "../images/magazine-cards/passion.jpg";

const ArticlesData = [
  {
    image: imageOne,
    title: "CARE TO READ ABOUT COMPASSION? (I KNOW YOU DO)",
    subtitle:
      "It is no hidden fact that humans have an innate quality of compassion, but where does this come from?",
    link: "https://myvoicecanada.com/care-to-read-about-compassion-i-know-you-do/",
  },
  {
    image: imageTwo,
    title: "HONEST REFLECTIONS: DOES ISLAM ADDRESS MENTAL HEALTH?",
    subtitle:
      "There should be less stigma in Muslim communities to admit that getting help and taking care of yourself is part of deen!",
    link: "https://myvoicecanada.com/honest-reflections-does-islam-address-mental-health/",
  },
  {
    image: imageThree,
    title: "I FOUND MY PASSION IN QUARANTINE AND YOU CAN TOO",
    subtitle: "Stop searching for your passion and start acting.",
    link: "https://myvoicecanada.com/i-found-my-passion-in-quarantine-and-you-can-too/",
  },
];

const ArticlesList = () => {
  return (
    <>
      <div className="">
        {ArticlesData.map((item) => {
          return (
            <ArticlesCard
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              link={item.link}
            />
          );
        })}
      </div>
    </>
  );
};

export default ArticlesList;
