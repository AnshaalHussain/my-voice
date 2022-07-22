import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import ApplicationsCard from "./ApplicationsCard";
import ApplicationsList from "./ApplicationsList";
import TeamsList from "./TeamsList";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleUp,
  FaArrowRight,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/Io";

import { BsArrowReturnRight } from "react-icons/Bs";
import BreadCrumbs from "../BreadCrumbs";

const Header = () => {
  const text =
    "Payroll management Grant writing (if applicable) Managing team roles and execution Orientation of team members HR management (with team members's help creating applications and hiring contracts and criteria)";

  const buttonStateChange = () => {
    setPositionDuties(!positionDuties);
  };

  const [positionDuties, setPositionDuties] = useState(false);

  const jobsArray = [
    "Payroll management",
    "Grant writing (if applicable)",
    "Managing team roles and execution",
    "Orientation of team members",
    "HR management (with team members’s help creating applications and hiring contracts and criteria)",
  ];

  const learningOutcomes = [
    "Team management skills",
    "Communication skills",
    "Filmmaking skills",
    "Learning to tell a story effectively using digital media",
    "Creating a narrative with purpose",
    "Administrative and organizational skills",
  ];

  return (
    <>
      <BreadCrumbs />
      <TextContainer>
        <Title>Teams</Title>
        <Subtitle>
          MY Voice is an organization that encourages creative ways to express
          yourself and come up with ideas and solutions. Each team has a project
          you will complete in that year. Each team has a list of roles that
          contribute to the completion of the Project. Learning outcomes stem
          from your role individually and also collectively as a team. Some
          teams are Support teams for the Project teams. These are marked with a
          <SupportIcon /> below.
        </Subtitle>
        <Divider></Divider>

        <TeamsList />
      </TextContainer>
    </>
  );
};
const TextContainer = styled.div`
  padding: 1rem calc((100vh - 175px) / 2);

  @media screen and (max-width: 768px) {
    padding: 0rem 1rem;
  }
`;
const Title = styled.h1`
  font-size: clamp(4.3rem, 3vw, 2rem);
`;

const Divider = styled.div`
  height: 1px;
  background-color: gray;

  margin: 1rem auto;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const SupportIcon = styled(RiTeamFill)`
  display: inline;
  color: orange;
  padding-bottom: 2px;
  font-size: 1.5rem;
`;

const PositionsContainer = styled.div`
  margin-bottom: 3rem;
`;

const CardTitle = styled.div`
  font-size: clamp(4.5rem, 3vw, 2rem);
  color: gray;
`;
const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: grey;
  overflow: scroll;
  height: 50vh;

  border-top: 1px black solid;
  border-bottom: 1px black solid;


  &::-webkit-scrollbar {

    
    display: none;
`;
const Card = styled.div`
  background-color: #fff;
  width: 95%;
  margin: auto;
  border-bottom: 1px black solid;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;
const CardP = styled.p`
  margin-bottom: 3px;
  margin-left: 2rem;
  display: flex;
  align-items: center;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 12vh;
  align-items: center;
  padding: 0rem 1rem;
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

const PositionTitle = styled.div`
  font-size: 2em;
  color: #e2a000;
  margin-top: 1rem;
`;

const PositionTeam = styled.div`
  font-size: 4em;
`;

const PositionLearningOutcomes = styled.p`
  font-size: 1rem;
  font-weight: bold;
  line-height: 2rem;
  display: flex;
  align-items: center;

  columns: 2 auto;
  margin-top: 1rem;
`;

const PositionColumns = styled.div`
  display: grid;
  grid-template-columns: 500px auto;
  grid-gap: 10px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Column = styled.div``;

export default Header;
