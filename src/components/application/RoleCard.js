import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";

import {
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
  FaArrowRight,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/Io";

import { BsArrowReturnRight } from "react-icons/Bs";

const RoleCard = ({ roleTitle, roleDuties }) => {
  const buttonStateChange = () => {
    setPositionDuties(!positionDuties);
  };

  const [positionDuties, setPositionDuties] = useState(false);
  return (
    <>
      <PositionsContainer>
        <Card>
          <CardContent>
            <CardTitle>{roleTitle}</CardTitle>
            <Button>
              Apply <FaArrowRight />
            </Button>
          </CardContent>

          <CardReadMoreButton onClick={buttonStateChange}>
            {positionDuties ? (
              <CardP>
                Position Duties
                <IoIosArrowUp />
              </CardP>
            ) : (
              <CardP>
                Position Duties
                <IoIosArrowDown />
              </CardP>
            )}
          </CardReadMoreButton>

          {positionDuties ? (
            roleDuties.map((items) => <CardP> - {items}</CardP>)
          ) : (
            <div></div>
          )}
        </Card>
      </PositionsContainer>
    </>
  );
};

const PositionsContainer = styled.div`
  margin-bottom: 3rem;
`;

const PositionTitle = styled.div`
  font-size: 2em;
  color: #e2a000;
  margin-top: 1rem;
`;

const Card = styled.div`
  background-color: #fff;
  width: 95%;
  margin: auto;

  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;
const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 12vh;
  align-items: center;
  padding: 0rem 1rem;
`;
const CardTitle = styled.div`
  font-size: clamp(4.5rem, 3vw, 2rem);
  color: gray;
`;

const CardP = styled.p`
  margin: 5px 0px;
  margin-left: 2rem;
  display: flex;
  align-items: center;
`;
const CardReadMoreButton = styled.div`
  text-decoration: none;
  border: none;
  background-color: orange;
  color: white;
  border: dark-gray 1px solid;
  padding: 10px 5px;
  font-weight: bold;
  cursor: pointer;
  min-height: 1vh;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #00d3ca;
  }
`;

export default RoleCard;
