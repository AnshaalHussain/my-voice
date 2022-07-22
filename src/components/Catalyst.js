import React from "react";
import styled from "styled-components";
import Video from "../images/svg/video.svg";
import Zine from "../images/svg/zine.svg";
import Events from "../images/svg/events.svg";
import Proj from "../images/svg/proj.svg";

const Catalyst = () => {
  return (
    <>
      <TextContainer>
        <CatalystContainer>
          <CatalystWrapper>
            <CatalystDivider></CatalystDivider>
            <CatalystH1>
              A Catalyst for <br />
              Projects and Ideas
            </CatalystH1>
            <Column className="py-6">
              <ImgContainer>
                <img src={Video} alt="video" />
                <CatalystH2>Video Production</CatalystH2>
              </ImgContainer>
              <ImgContainer>
                <img src={Proj} alt="projects" />
                <CatalystH2>Creative Projects</CatalystH2>
              </ImgContainer>
              <ImgContainer>
                <img src={Events} alt="events" />
                <CatalystH2>Events</CatalystH2>
              </ImgContainer>
              <ImgContainer>
                <img src={Zine} alt="zine" />
                <CatalystH2>My Voice Magazine</CatalystH2>
              </ImgContainer>
            </Column>
            <CatalystDivider></CatalystDivider>
          </CatalystWrapper>
        </CatalystContainer>
      </TextContainer>
    </>
  );
};

export default Catalyst;

const TextContainer = styled.div`
  padding: 1rem calc((100vh - 175px) / 2);

  @media screen and (max-width: 768px) {
    padding: 0rem 1rem;
  }
`;

const CatalystContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4rem 0rem;
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const CatalystWrapper = styled.div``;
const CatalystContent = styled.div``;

const Column = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;

  column-gap: 2rem;
  row-gap: 4em;
`;

const CatalystH1 = styled.h1`
  font-size: clamp(4.3rem, 3vw, 3rem);
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: normal;
  text-align: center;
  padding: 1rem 0;
  z-index: 3;
`;

const CatalystH2 = styled.h1`
  font-size: clamp(2.3rem, 3vw, 2rem);
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  line-height: 2rem;
  font-weight: normal;
  padding: 1rem 0;
  z-index: 3;
`;

const CatalystDivider = styled.div`
  background: #000;
  height: 10px;
  text-align: center;
`;

const ImgContainer = styled.div``;
