import React, { useState } from "react";
import styled from "styled-components";
import RoleCard from "./RoleCard";
import { Button } from "../Button";

import { BsArrowReturnRight } from "react-icons/Bs";
const ApplicationsCard = ({
  team,
  learningOutcomes,
  prerequisites,
  projects,
  roleData,
}) => {
  return (
    <>
      <ProjectsContainer>
        <PositionTitle>Team: </PositionTitle>
        <PositionTeam>{team}</PositionTeam>

        <PositionColumns>
          <Column>
            <PositionTitle>Learning Outcomes:</PositionTitle>

            <ul>
              {learningOutcomes.map((item) => (
                <PositionLearningOutcomes>
                  <BsArrowReturnRight /> {item}
                </PositionLearningOutcomes>
              ))}
            </ul>
          </Column>
          <Column>
            <PositionTitle>Projects: </PositionTitle>
            {projects.map((item, index) => (
              <PositionLearningOutcomes>
                {index + 1}. {item}
              </PositionLearningOutcomes>
            ))}
          </Column>
          <Column>
            <PositionTitle>Prerequisites: </PositionTitle>
            {prerequisites.map((item) => (
              <PositionLearningOutcomes>{item}</PositionLearningOutcomes>
            ))}
          </Column>
        </PositionColumns>

        <PositionTitle>Roles:</PositionTitle>

        <CardsContainer>
          {roleData.map((item) => (
            <RoleCard roleTitle={item.roleTitle} roleDuties={item.roleDuties} />
          ))}
        </CardsContainer>
      </ProjectsContainer>

      {/* <PositionsContainer>
        <CardsContainer>
          <Card>
            <CardContent>
              <CardTitle>Team Lead</CardTitle> */}

      {/* <CardP>
                  Payroll management Grant writing (if applicable) Managing team
                  roles and execution Orientation of team members HR management
                  (with team members's help creating applications and hiring
                  contracts and criteria)
                </CardP> */}
      {/* <Button>
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
              data.jobsArray.map((items) => <CardP> - {items}</CardP>)
            ) : (
              <div></div>
            )}
          </Card>

          <Card>
            <CardContent>
              <CardTitle>Web Coordinator (x1-2)</CardTitle>
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
              data.jobsArray.map((items) => <CardP> - {items}</CardP>)
            ) : (
              <div></div>
            )}
          </Card>
          <Card>
            <CardContent>
              <CardTitle>App Developer (x2)</CardTitle>
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
              data.jobsArray.map((items) => <CardP> - {items}</CardP>)
            ) : (
              <div></div>
            )}
          </Card>
          <Card>
            <CardTitle>UI Designers (x3)</CardTitle>
            <CardP>
              Payroll management Grant writing (if applicable) Managing team
              roles and execution Orientation of team members HR management
              (with team members's help creating applications and hiring
              contracts and criteria)
            </CardP>
          </Card>
          <Card>
            <CardTitle>Copy & Content Writing</CardTitle>
            <CardP>
              Payroll management Grant writing (if applicable) Managing team
              roles and execution Orientation of team members HR management
              (with team members's help creating applications and hiring
              contracts and criteria)
            </CardP>
          </Card>
          <Card>
            <CardTitle>Business & Marketing</CardTitle>
            <CardP>
              Payroll management Grant writing (if applicable) Managing team
              roles and execution Orientation of team members HR management
              (with team members's help creating applications and hiring
              contracts and criteria)
            </CardP>
          </Card>
        </CardsContainer> 
      </PositionsContainer>*/}
    </>
  );
};

const ProjectsContainer = styled.div`
  padding: 1rem calc((100vh - 150px) / 2);

  @media screen and (max-width: 768px) {
    padding: 0rem 1rem;
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
const PositionLearningOutcomes = styled.p`
  font-size: 1rem;
  font-weight: bold;
  line-height: 2rem;
  display: flex;
  align-items: center;

  columns: 2 auto;
  margin-top: 1rem;
`;
const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  overflow: scroll;
  height: 50vh;
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);
  // border-top: 1px black solid;
  // border-bottom: 1px black solid;


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

const CardTitle = styled.div`
  font-size: clamp(4.5rem, 3vw, 2rem);
  color: gray;
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
export default ApplicationsCard;
