import React, { useState } from "react";
import { toast } from "react-toastify";

import Repos from "../components/Repos";

const Explore = () => {
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const exploreRepos = async (language) => {
    try {
      setLoading(true);
      const response = await fetch(`/api/v1/explore/repos/${language}`);

      const { data } = await response.json();

      setRepos(data);
      setSelectedLanguage(language);
    } catch (error) {
      console.error("error while fetching the reposotories : ", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sm:px-4">
      <div className="bg-glass w-full sm:max-w-2xl sm:mx-auto rounded-md p-4">
        <h1 className="text-xl font-bold text-center mb-6">
          Explore Popular Repositories
        </h1>
        <div className="flex flex-wrap gap-2 my-2 justify-center">
          <img
            src="/javascript.svg"
            alt="JavaScript"
            className="h-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos("javascript")}
          />
          <img
            src="/typescript.svg"
            alt="TypeScript logo"
            className="h-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos("typescript")}
          />
          <img
            src="/c++.svg"
            alt="C++ logo"
            className="h-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos("c++")}
          />
          <img
            src="/python.svg"
            alt="Python logo"
            className="h-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos("python")}
          />
          <img
            src="/java.svg"
            alt="Java logo"
            className="h-11 sm:h-20 cursor-pointer"
            onClick={() => exploreRepos("java")}
          />
        </div>
        {repos.length > 0 && (
          <h2 className="text-lg flex flex-wrap font-semibold text-center my-4 ">
            <span className="bg-glass text-blue-800 border text-sm px-3 py-0.5 rounded-full mr-2">
              {selectedLanguage.toUpperCase()}
            </span>
            Repositories
          </h2>
        )}
        {!loading && repos.length > 0 && (
          <Repos repos={repos} alwaysFullWidth />
        )}
        {loading && <p>loading...</p>}
      </div>
    </div>
  );
};

export default Explore;
