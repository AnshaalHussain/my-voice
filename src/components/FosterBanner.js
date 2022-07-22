import React from "react";
import styled from "styled-components";
import Typist from "react-typist";

const FosterBanner = () => {
  return (
    <>
      <FosterContainer>
        <FosterContent>
          <FosterH1>
            Engaging youth with
            <Typist
              startDelay={1000}
              cursor={{
                show: false,
                hideWhenDone: true,
                hideWhenDoneDelay: 2000,
              }}
            >
              <span
                style={{
                  color: "#fff",
                }}
              >
                leadership,{" "}
              </span>{" "}
              <Typist.Delay ms={500} />
              <span style={{ color: "#fff" }}> journalism,</span> <br />
              <Typist.Delay ms={500} />
              and the <span style={{ color: "#fff" }}>arts. </span>
            </Typist>
          </FosterH1>
        </FosterContent>
      </FosterContainer>
    </>
  );
};

export default FosterBanner;

const FosterContainer = styled.div`
  background: #ff0064;
  min-height: 30vh;
  max-width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  border: 2px solid black;
  margin: 1rem auto;
  box-shadow: 13px 10px;
  border-radius: 5px;
`;

const FosterContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 13rem;

  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
    padding: 0rem 1rem;
  }
`;
const FosterH1 = styled.h1`
  color: #0e1821;
  font-size: 2.5rem;
  max-width: 100%;
  max-height: 100%;
  line-height: 0.9;
  letter-spacing: 1.5px;
  font-weight: bold;
  text-align: center;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
