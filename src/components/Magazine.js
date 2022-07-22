import React from "react";
import styled from "styled-components";
import MagazineImg from "../images/ART/MYcovercopy-s.jpg";

import FosterBanner from "./FosterBanner";

import ArticlesList from "./ArticlesList";

const Magazine = () => {
  const pictureWidth = 250;
  const pictureHeight = 130;
  return (
    <>
      <div className="flex flex-col bg-primary-yellow py-4">
        <FosterBanner />
        <MagazineContainer>
          <Column>
            <MagazineCard>
              <a href="https://www.issuu.com/myvoicecanada" target="_blank">
                <img
                  src={MagazineImg}
                  className="w-80 h-96 border-b-8 border-r-8 border-black"
                ></img>
              </a>

              <MagazineCardText>READ NOW-SPRING-2022</MagazineCardText>
            </MagazineCard>
          </Column>
          <ColumnTwo>
            <ArticlesList />
          </ColumnTwo>
        </MagazineContainer>
      </div>
    </>
  );
};

export default Magazine;

const MagazineContainer = styled.div`
  background: #ffb500;
  padding: 5rem 2rem;

  min-height: 80vh;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(440px, 1fr));
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Column = styled.ul`
  @media screen and (max-width: 768px) {
    padding: 0rem 1rem;
  }
`;

const ColumnTwo = styled.ul`
  @media screen and (max-width: 768px) {
    padding: 0rem 1rem;
  }
  @media (max-width: 944px) {
    display: flex;
    flex-direction: column;

    align-items: center;

    padding: 2rem 0rem;
  }
`;

const MagazineCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MagazineCardTwo = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
  line-height: 1.8rem;
  padding-bottom: 1rem;
`;
const MagazineCardWrapper = styled.div`
  padding: 0.3rem;
  margin-left: 1rem;
`;
const MagazineCardTitle = styled.p`
  color: #fff;
  font-size: clamp(1.5rem, 2vh, 2rem);
  font-weight: bold;
`;
const MagazineCardP = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: clamp(0.5rem, 2vh, 2rem);
`;

const MagazineCardText = styled.h1`
  padding: 1rem 0;
  font-size: clamp(1.5rem, 2vh, 1rem);
  letter-spacing: 5px;
`;
