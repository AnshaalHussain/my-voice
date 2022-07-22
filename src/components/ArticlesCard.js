import React from "react";
const ArticlesCard = ({ image, title, link }) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        class="flex flex-row items-center m-4 rounded-lg shadow-md md:flex-row md:max-w-lg bg-primary-red  hover:bg-primary-red md:bg-primary-yellow
        "
      >
        <div
          className="bg-no-repeat bg-cover bg-center w-full h-52 bg-fit"
          style={{ backgroundImage: `url(${image})` }}
        ></div>

        <div class="flex flex-col justify-between p-4 leading-normal ">
          <p class="mb-2 text-2xl font-bold tracking-wide text-white dark:text-white ">
            {title}
          </p>
        </div>
      </a>
    </>
  );
};

export default ArticlesCard;
