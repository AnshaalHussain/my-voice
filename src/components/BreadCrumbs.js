import React from "react";
import { Link } from "gatsby";

const BreadCrumbs = ({ teamTitle, teamPage, teamPath }) => {
  const active =
    "ml-1 font-medium text-gray-700 hover:text-gray-900 md:ml-2 text-xl";

  const inactive =
    "inline-flex items-center font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white  text-xl";

  return (
    <div>
      <nav
        className="flex bg-gray-50 px-5 py-2 border border-gray-300 rounded"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center md:space-x-1">
          <li className="inline-flex items-center">
            <Link to="/" className={inactive}>
              <svg
                className="mr-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <Link to="/teams" className={teamPage ? inactive : active}>
                Teams
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              {teamTitle && (
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              )}
              <span className={teamPage ? active : inactive}>
                <Link to={`${teamPath ? teamPath : "/"}`}>{teamTitle}</Link>
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumbs;
