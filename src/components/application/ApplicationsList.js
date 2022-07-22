import React from "react";
import ApplicationsCard from "./ApplicationsCard";
import { projectDataArr } from "../data/ProjectsData";

const ApplicationsList = () => {
  return (
    <>
      {projectDataArr.map((item) => (
        <ApplicationsCard
          team={item.team}
          learningOutcomes={item.learningOutcomes}
          projects={item.projects}
          prerequisites={item.prerequisites}
          roleData={item.roleData}
        />
      ))}
    </>
  );
};

export default ApplicationsList;
