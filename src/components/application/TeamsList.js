import React from "react";
import styled from "styled-components";

import TeamsCard from "./TeamsCard";
import { RiTeamFill } from "react-icons/ri";
import { teamsArray } from "../data/TeamsData";

const TeamsList = () => {
  return (
    <>
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-1 ">
        {teamsArray.map((projectItem) => (
          <TeamsCard
            title={projectItem.name}
            bgColor={projectItem.color}
            bgImg={projectItem.img}
            borderColor={projectItem.borderColor}
            teamPath={projectItem.path}
            supportTeam={projectItem.supportTeam}
            mailUrl={projectItem.mailurl}
          />
        ))}
      </div>
    </>
  );
};
const SupportIcon = styled(RiTeamFill)`
  display: inline;
  color: orange;
  padding-bottom: 2px;
  font-size: 1.5rem;
`;
export default TeamsList;
