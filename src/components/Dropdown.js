import React from "react";
const Dropdown = ({ roleList }) => {
  let dropdownCount = 1;
  const increaseDropDownCount = () => {
    dropdownCount++;
  };
  return (
    <>
      <div class="accordion" id="accordionExample">
        {roleList.map((item) => {
          increaseDropDownCount();
          return (
            <div class="accordion-item bg-white border border-gray-200">
              <h2 class="accordion-header mb-0" id={`heading${dropdownCount}`}>
                <button
                  class="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${dropdownCount}`}
                  aria-expanded="true"
                  aria-controls={`collapse${dropdownCount}`}
                >
                  {item.roleTitle}
                </button>
              </h2>
              <div
                id={`collapse${dropdownCount}`}
                class="accordion-collapse collapse"
                aria-labelledby={`heading${dropdownCount}`}
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body py-4 px-5">
                  <ul>
                    {item.roleDuties.map((duty) => {
                      return <p> ● {" " + duty}</p>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Dropdown;
