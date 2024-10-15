import React from "react";

import { IoLocationOutline } from "react-icons/io5";
import {
  RiGitRepositoryFill,
  RiUserFollowFill,
  RiUserFollowLine,
} from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { TfiThought } from "react-icons/tfi";
import { FaEye } from "react-icons/fa";
import LikeProfile from "./LikeProfile";

const ProfileInfo = ({ profileData }) => {
  if (!profileData) {
    return <div className="text-white">loading...</div>;
  }

  return (
    <div className="w-full sm:w-3/4 flex flex-col gap-2 md:sticky md:top-10">
      <div className="bg-glass rounded-lg p-4">
        <div className="flex gap-4 items-center">
          <a href={profileData?.html_url} target="_blank" rel="noreferrer">
            <img
              src={profileData?.avatar_url}
              className="rounded-md w-12 h-12 mb-2"
              alt=""
            />
          </a>

          <div className="flex gap-2 items-center flex-col">
            <a
              href={profileData?.html_url}
              target="_blank"
              rel="noreferrer"
              className="bg-glass font-medium w-full text-xs p-2 rounded-md cursor-pointer border border-blue-400 flex items-center gap-2"
            >
              <FaEye size={16} />
              View on Github
            </a>
          </div>
          <LikeProfile profileData={profileData} />
        </div>

        {profileData?.bio ? (
          <div className="flex items-center gap-2">
            <TfiThought />
            <p className="text-sm">{profileData?.bio.substring(0, 60)}...</p>
          </div>
        ) : null}

        {profileData?.location ? (
          <div className="flex items-center gap-2">
            <IoLocationOutline />
            {profileData?.location}
          </div>
        ) : null}

        {profileData?.twitter_username ? (
          <a
            href={`https://twitter.com/${profileData.twitter_username}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-sky-500"
          >
            <FaXTwitter />
            {profileData?.twitter_username}
          </a>
        ) : null}

        <div className="my-2">
          <p className="text-gray-600 font-bold text-sm">Member since</p>
          <p className="">
            {new Date(profileData.created_at).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
        <div className="flex flex-row flex-wrap  gap-6">
          {profileData?.email && (
            <div className="my-2">
              <p className="text-gray-600 font-bold text-sm">Email address</p>
              <p className="">{profileData.email}</p>
            </div>
          )}

          {profileData?.name && (
            <div className="my-2">
              <p className="text-gray-600 font-bold text-sm">Full name</p>
              <p className="">{profileData?.name}</p>
            </div>
          )}

          <div className="my-2">
            <p className="text-gray-600 font-bold text-sm">Username</p>
            <p className="">{profileData?.login}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mx-4">
        {/* Followers Count */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
          <RiUserFollowFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Followers: {profileData?.followers}</p>
        </div>

        {/* Following count */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
          <RiUserFollowLine className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Following: {profileData?.following}</p>
        </div>

        {/* Number of public repos */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
          <RiGitRepositoryFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Public repos: {profileData?.public_repos}</p>
        </div>

        {/* Number of public gists */}
        <div className="flex items-center gap-2 bg-glass rounded-lg p-2 flex-1 min-w-24">
          <RiGitRepositoryFill className="w-5 h-5 text-blue-800" />
          <p className="text-xs">Public gists: {profileData?.public_gists}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
