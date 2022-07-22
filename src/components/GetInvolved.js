import React from "react";
import styled from "styled-components";
import Img from "gatsby-plugin-image";

import GetInvolvedBg from "../images/ART/bw-greek-statue-image-torn-paper-style-remixed-media.jpg";

const GetInvolved = () => {
  return (
    <>
      <PositionsContainer>
        <PositionsBg img={GetInvolvedBg}>
          <PositionsContent>
            <PositionsH1>Get Involved</PositionsH1>
          </PositionsContent>
        </PositionsBg>
      </PositionsContainer>
    </>
  );
};

export default GetInvolved;

// const PositionsContainer = styled.div`
// min-height: 100vh;
// padding: 5rem calc((100vw - 800px) / 2)
// width: 100vw;
// display: flex;
// justify-content: center
// `;

const PositionsContainer = styled.div`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0;
`;

const PositionsBg = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;

  background-image: url(${(props) => props.img});

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    mask-image: radial-gradient(ellipse, black 50%, rgba(0, 0, 0, 0.5) 50%);
  }

  @media (max-width: 768px) {
    background-image: url(${(props) => props.img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const PositionsH1 = styled.div`
  font-size: clamp(1.5rem, 6vw, 3rem);
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0 1rem;
  z-index: 3;
`;

const PositionsContent = styled.div`
  padding: 0rem calc((100vw - 550px) / 2);
  @media (max-width: 768px) {
    align-items: end;
    justify-content: center;
    text-align: center;
  }
`;
