import React, { useCallback, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterRepos from "../components/FilterRepos";
import ProfileInfo from "../components/ProfileInfo";
import Repos from "../components/Repos";
//
const Home = () => {
  const [profileData, setProfileData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortrepos, setSortRepos] = useState("");
  const UserDetails = useCallback(async (username = "varun2138") => {
    try {
      setLoading(true);
      const response = await fetch(`/api/v1/users/profile/${username}`);

      const { userProfile, repos } = await response.json();
      setProfileData(userProfile);

      setRepos(repos);

      return { userProfile, repos };
    } catch (error) {
      console.error("Error while fetching :", error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    UserDetails();
  }, [UserDetails]);

  const onSearch = async (e, username) => {
    e.preventDefault();
    setLoading(true);
    setRepos([]);
    setProfileData(null);
    setSortRepos("");
    const { userProfile, repos } = await UserDetails(username);
    setProfileData(userProfile);
    setRepos(repos);

    setLoading(false);
  };

  const SortFun = async (sortrepos) => {
    if (sortrepos === "recent") {
      repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (sortrepos === "stars") {
      repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    } else if (sortrepos === "forks") {
      repos.sort((a, b) => b.forks_count - a.forks_count);
    }
    setSortRepos(sortrepos);
    setRepos([...repos]);
  };
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      {repos?.length > 0 && (
        <FilterRepos SortFun={SortFun} sortrepos={sortrepos} />
      )}
      <div className=" w-full flex flex-col lg:flex-row lg:items-start lg:justify-center gap-4">
        {profileData && !loading && <ProfileInfo profileData={profileData} />}
        {!loading && <Repos repos={repos} />}
      </div>
      {loading && <p className="text-white">loading...</p>}
    </div>
  );
};

export default Home;
