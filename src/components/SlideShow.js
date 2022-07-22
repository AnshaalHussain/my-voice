import React from "react";
import { Fade } from "react-slideshow-image";

import HeroBackground1 from "../images/ART/luke-stackpoole--J1Z32zolUY-unsplash.jpg";
import HeroBackground2 from "../images/ART/justin-luebke-tmtizwShVRo-unsplash.jpg";
import HeroBackground3 from "../images/ART/happy-young-girl-laughing-with-friends.jpg";
import HeroBackground4 from "../images/ART/omid-bonyadian-92foQAl3lNc-unsplash.jpg";
import HeroBackground5 from "../images/ART/helena-lopes-DkGIAjlIJu0-unsplash.jpg";
import HeroBackground6 from "../images/ART/sithamshu-manoj-bik_lIl9Nco-unsplash (1).jpg";

const slideImages = [
  {
    title: "Hero Image One",
    path: HeroBackground1,
  },
  {
    title: "Hero Image Two",
    path: HeroBackground2,
  },
  {
    title: "Hero Image Three",
    path: HeroBackground3,
  },
  {
    title: "Hero Image Four",
    path: HeroBackground4,
  },
  {
    title: "Hero Image Five",
    path: HeroBackground5,
  },
  {
    title: "Hero Image Six",
    path: HeroBackground6,
  },
];

const fadeImages = [HeroBackground1, HeroBackground2, HeroBackground3];

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  },
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
          <h2>First Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
          <h2>Second Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
          <h2>Third Slide</h2>
        </div>
      </Fade>
    </div>
  );
};

export default Slideshow;
