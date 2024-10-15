import React from "react";
import Repo from "./Repo";
const Repos = ({ repos }) => {
  return (
    <div className={` w-full    bg-glass rounded-lg px-8 py-6`}>
      <ol className="relative border-s border-gray-200 ">
        {repos.map((repo) => (
          <Repo key={repo.id} repo={repo} />
        ))}
        {repos.length === 0 && (
          <p className="flex justify-center items-center mx-auto text-white text-lg font-semibold tracking-wide">
            No repos found
          </p>
        )}
      </ol>
    </div>
  );
};

export default Repos;
