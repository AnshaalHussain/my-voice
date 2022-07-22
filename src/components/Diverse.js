import React from "react";
import styled from "styled-components";
import DiverseImage from "../images/ART/together.jpg";
const diverseBgColor = "#ded1c7";

const Diverse = () => {
  return (
    <>
      <DiverseWrapper>
        <TextContainer>
          <DiverseTitle className="">
            We Build Communities Around Diverse Youth
          </DiverseTitle>

          <DiverseH2>
            MY Voice strives to create a strong sense of community for young
            muslims and builds connections with a diverse range of other groups
            to promote unity and social harmony.
          </DiverseH2>
          <DiverseH2>
            We aim to provide opportunities and engage with a variety of youth
            and communities outside of our own. This includes (but is not
            limited) to other religious minorities, racialized, low-income or
            ethnic minority youth/communities.
          </DiverseH2>
        </TextContainer>
      </DiverseWrapper>
      <div className="bg-[#ded1c7] m-4">
        <TextContainer>
          <img className="max-h-96" src={DiverseImage} />
        </TextContainer>
      </div>
    </>
  );
};

export default Diverse;

const TextContainer = styled.div`
  padding: 1rem calc((100vh - 175px) / 2);

  @media screen and (max-width: 768px) {
    padding: 0rem 1rem;
  }
`;

const DiverseContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 25vh);
`;

const DiverseWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const DiverseBg = styled.div`
  height: 100%;
  min-width: 100%;
  min-height: calc(100vh - 20vh);
  transform: scaleX(-1);
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.img});

  @media (max-width: 768px) {
    background-image: url(${(props) => props.img});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    padding: 0rem 1rem;
  }
`;

const DiverseContent = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr, 1fr;
`;

const DiverseTitle = styled.h1`
  font-size: clamp(3rem, 4rem, 4.3rem);
  line-height: 4rem;
`;

const DiverseH1 = styled.div`
  min-height: calc(100vh - 20vh);
  font-size: clamp(2rem, 3vw, 4.3rem);
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: left;
  line-height: 0.9;
  font-weight: normal;
  padding: 6rem 9rem;
  position: absolute;

  margin:0
  z-index: 3;
  @media (max-width: 768px) {
    // padding: 11.5rem 0rem;
    // padding-left: 3rem;
    padding: 0;
  }
`;

const DiverseH2 = styled.p`
  font-size: clamp(1.2rem, 3vw, 1rem);

  padding: 1rem 0rem;
  z-index: 3;
  // @media (max-width: 768px) {
  //   padding: 0.5rem 1rem;
  // }
`;
