import React from "react";

const FilterRepos = ({ SortFun, sortrepos }) => {
  return (
    <div className="m-2 flex justify-center  w-full lg:justify-end">
      <button
        onClick={() => SortFun("recent")}
        type="button"
        className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${
          sortrepos === "recent" ? "border border-blue-700" : ""
        }`}
      >
        Most Recent
      </button>
      <button
        onClick={() => SortFun("stars")}
        type="button"
        className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${
          sortrepos === "stars" ? "border border-blue-700" : ""
        }`}
      >
        Most Stars
      </button>
      <button
        onClick={() => SortFun("forks")}
        type="button"
        className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${
          sortrepos === "forks" ? "border border-blue-700" : ""
        }`}
      >
        Most Forks
      </button>
    </div>
  );
};

export default FilterRepos;
