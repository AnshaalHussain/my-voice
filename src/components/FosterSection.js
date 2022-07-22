import React from "react";
import styled from "styled-components";

const FosterSection = ({ h2Text, primary }) => {
  return (
    <FosterContainer primary={primary}>
      <FosterContent>
        <FosterItems primary={primary}>
          <FosterH2 primary={primary}>{h2Text}</FosterH2>
        </FosterItems>
      </FosterContent>
    </FosterContainer>
  );
};

export default FosterSection;

const FosterContainer = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 40vh;

  padding: 0;
`;

const FosterContent = styled.div`
  // padding: 0rem calc((100vh - 400px) / 2);
  display: flex;

  align-items: center;
  height: calc(100vh - 60vh);
  max-height: 100%;

  padding: 0rem calc((100vh - 400px) / 2);

  @media (max-width: 768px) {
    padding: 0rem 3rem;
  }
`;

const FosterItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  text-align: center;
  max-height: 100%;

  background: ${({ primary }) => (primary ? "#fff" : "#ff0064")};

  // background: #ff0064;
  padding: 2rem;
  border-radius: 25px;
`;

const FosterH2 = styled.div`
  color: ${({ primary }) => (primary ? "#00d3ca" : "#fff")};

  font-size: clamp(2rem, 6vw, 2.3rem);
  line-height: 0.9;
  text-transform: uppercase;
  font-weight: bold;
  padding: 1rem 0;
  z-index: 3;
  letter-spacing: 1.5px;
`;
