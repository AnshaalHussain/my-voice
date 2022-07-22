import React from "react";
import BreadCrumbs from "./BreadCrumbs";
import styled from "styled-components";
import "tw-elements";
import { Button } from "./Button";
import { projectDataArr } from "./data/ProjectsData";

import { BsArrowReturnRight } from "react-icons/Bs";
import Dropdown from "./Dropdown";

const RoleTemplate = ({ teamName }) => {
  const roleArray = projectDataArr.filter((item) => {
    return item.team === teamName;
  });

  const roleObject = roleArray[0];
  console.log(roleObject);

  const roleImage = roleObject.image;

  const jobs = roleObject.jobsArray.map((item) => {
    return <PositionLearningOutcomes> {item}</PositionLearningOutcomes>;
  });

  const learningOutcomes = roleObject.learningOutcomes.map((item) => {
    return <PositionLearningOutcomes>{item}</PositionLearningOutcomes>;
  });

  const roleData = roleObject.roleData.map((item) => {
    return (
      <div>
        <div>{item.roleTitle}</div>
        <p>
          {item.roleDuties.map((item) => {
            return <p>{item}</p>;
          })}
        </p>
      </div>
    );
  });

  const prereqs = roleObject.prerequisites.map((item) => {
    return <PositionLearningOutcomes> {item}</PositionLearningOutcomes>;
  });

  const roleList = roleObject.roleData;

  const roleProjects = roleObject.projects.map((item) => {
    return <PositionLearningOutcomes> {item}</PositionLearningOutcomes>;
  });

  const overlayColor = "rgba(0, 0, 0, 0.75)";

  return (
    <>
      <BreadCrumbs
        teamTitle={roleObject.team}
        teamPage="true"
        teamPath={roleObject.path}
      />
      <div className="pb-6">
        <div
          className="py-12 relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
          style={{
            backgroundImage: `url(${roleImage})`,
            height: 400 + "px",
            backgroundPosition: "50%",
          }}
        >
          <div
            class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={
              {
                // backgroundColor: overlayColor,
              }
            }
          ></div>
        </div>

        <div className="">
          <TextContainer>
            <div className="flex flex-col sm:flex-row justify-between items-center items-baseline my-4">
              <div>
                <PositionTitle>Team: </PositionTitle>
                <PositionTeam>{roleObject.team} </PositionTeam>
              </div>
            </div>

            {roleObject.teamDesc ? (
              <div>
                <ul className="text-gray-700">
                  {" "}
                  <PositionLearningOutcomes>
                    {" "}
                    {roleObject.teamDesc[0]}{" "}
                  </PositionLearningOutcomes>{" "}
                </ul>
              </div>
            ) : (
              <div></div>
            )}

            <PositionTitle>Roles: </PositionTitle>
            <div className="my-9">
              <Dropdown roleList={roleList} />
            </div>

            <div className="my-7">
              <Button to="/join-us" primary>
                Go To Application Form
              </Button>
            </div>
          </TextContainer>

          {/* Team roles */}

          <TextContainer>
            {roleObject.projects[0] === "N/A" ? (
              // <Column>
              <div></div>
            ) : (
              // </Column>
              <div>
                <PositionTitle>Projects:</PositionTitle>

                <ul className="text-gray-700">{roleProjects}</ul>
              </div>
            )}
            <PositionTitle>Prerequisites: </PositionTitle>
            <ul className="text-gray-700"> {prereqs}</ul>
            {/* <PositionColumns> */}
            {/* <Column> */}

            {roleObject.jobsArray[0] ? (
              <div>
                {/* <Column> */}
                <PositionTitle>Jobs: </PositionTitle>
                <ul> {jobs}</ul>
                {/* </Column> */}
              </div>
            ) : (
              <div></div>
            )}
            <PositionTitle>Learning Outcomes:</PositionTitle>

            <ul className="text-gray-700">{learningOutcomes}</ul>
          </TextContainer>
        </div>
      </div>
    </>
  );
};

const TextContainer = styled.div`
  padding: 1rem calc((100vh - 175px) / 2);

  @media screen and (max-width: 768px) {
    padding: 0rem 1rem;
  }
`;
const PositionsContainer = styled.div`
  margin-bottom: 3rem;
`;

const PositionTitle = styled.h1`
  font-size: 2em;
  color: #e2a000;
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

const PositionTeam = styled.h1`
  font-size: 4em;
`;

const PositionLearningOutcomes = styled.p`
  font-size: 1rem;
  // font-weight: bold;
  line-height: 2rem;
  display: flex;
  align-items: center;

  columns: 2 auto;
  margin-top: 1rem;
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

const CardTitle = styled.div`
  font-size: clamp(4.5rem, 3vw, 2rem);
  color: gray;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 12vh;
  align-items: center;
  padding: 0rem 1rem;
`;

export default RoleTemplate;
