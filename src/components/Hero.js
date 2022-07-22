import React, { useState, useEffect } from "react";
import styled from "styled-components";

import CrossFadeImage from "image-crossfade-react";

import { Button } from "./Button";
import HeroBackground1 from "../images/ART/luke-stackpoole--J1Z32zolUY-unsplash.jpg";
import HeroBackground2 from "../images/ART/justin-luebke-tmtizwShVRo-unsplash.jpg";
import HeroBackground3 from "../images/ART/happy-young-girl-laughing-with-friends.jpg";
import HeroBackground4 from "../images/ART/omid-bonyadian-92foQAl3lNc-unsplash.jpg";
import HeroBackground5 from "../images/ART/helena-lopes-DkGIAjlIJu0-unsplash.jpg";
import HeroBackground6 from "../images/ART/sithamshu-manoj-bik_lIl9Nco-unsplash.jpg";

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

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroBg img={HeroBackground1}>
          <HeroContent>
            <HeroItems>
              <HeroH1>
                We create <br />
                skill-building <br />
                opportunities
                <br /> for youth.
              </HeroH1>
              <Button to="/teams" primary big>
                See Roles
              </Button>
            </HeroItems>
          </HeroContent>
        </HeroBg>
      </HeroContainer>
    </>
  );
};
export default Hero;

const HeroContainer = styled.div`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 15vh);

  padding: 0;
  position: relative;
  color: #fff;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    height: 100%;

    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`;

const HeroBg = styled.div`
  height: 100%;
  width: 100%;
  height: calc(100vh - 15vh);

  overflow: hidden;
  background-attachment: scroll;

  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.img});

  @media (max-width: 768px) {
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const HeroContent = styled.div`
  z-index: 3;
  display: flex;

  align-items: center;
  height: calc(100vh - 15vh);
  max-height: 100%;

  padding: 0rem calc((100vh - 400px) / 2);

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    text-align: center;
    @media screen and (max-width: 768px) {
      padding: 0rem 1rem;
    }
  }
`;

const HeroItems = styled.h1`
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: left;
  height: calc(100vh - 15vh);
  max-height: 100%;
  padding: 0 6rem;
  color: #fff;
  line-height: 0.9;
  font-weight: bold;
`;

const HeroH1 = styled.div`
  font-size: clamp(4.3rem, 3vw, 2rem);
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: normal;
  padding: 1rem 0;
  z-index: 3;
`;
