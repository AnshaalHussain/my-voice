import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { RiTeamFill } from "react-icons/ri";

const TeamsCard = ({
  title,
  bgColor,
  bgImg,
  borderColor,
  teamPath,
  supportTeam,
  mailUrl,
}) => {
  return (
    <>
      {mailUrl ? (
        <a href={`${mailUrl}`} rel="noreferrer" target="_blank">
          <div className="transition ease-in-out delay-50 hover:-translate-y-1 md:hover:scale-110 my-2 sm:mx-6 md:mx-1 rounded-xl hover:shadow-lg shadow-slate-400 hover:shadow-slate-500 lg:w-50">
            <div className={`${bgColor} rounded-md`}>
              <div className="text-white text-center text-2xl tracking-wide py-3">
                {supportTeam ? <SupportIcon /> : ""}

                {title}
              </div>
              <div className="relative h-40 w-full">
                <img
                  className={`object-cover w-full h-full border-2 border-t-0 ${borderColor} `}
                  src={`${bgImg}`}
                  alt="team card image"
                />
              </div>
            </div>
          </div>
        </a>
      ) : (
        <Link to={`${teamPath}`}>
          <div className="transition ease-in-out delay-50 hover:-translate-y-1 md:hover:scale-110 my-2 sm:mx-6 md:mx-1 rounded-xl hover:shadow-lg shadow-slate-400 hover:shadow-slate-500 lg:w-50">
            <div className={`${bgColor} rounded-md`}>
              <div className="text-white text-center text-2xl tracking-wide py-3">
                {supportTeam ? <SupportIcon /> : ""}

                {title}
              </div>
              <div className="relative h-40 w-full">
                <img
                  className={`object-cover w-full h-full border-2 border-t-0 ${borderColor} `}
                  src={`${bgImg}`}
                  alt="team card image"
                />
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default TeamsCard;

const SupportIcon = styled(RiTeamFill)`
  display: inline;
  color: orange;
  padding-bottom: 2px;
  font-size: 1.5rem;
  padding-right: 3px;
`;
