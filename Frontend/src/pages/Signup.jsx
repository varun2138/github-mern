import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaUnlockKeyhole } from "react-icons/fa6";
import { handleLoginWithGithub } from "../lib/function.js";
const Signup = () => {
  return (
    <div className="  flex flex-col justify-center items-center mx-auto h-full sm:px-8 sm:py-4 ">
      <div className="bg-glass  rounded-lg shadow shadow-[rgba(62,59,59,0.8)] w-full sm:w-1/2  flex flex-col gap-4 items-center   py-4  ">
        <h1 className="text-lg font-semibold tracking-wide m-2">
          Create account
        </h1>
        <button
          onClick={handleLoginWithGithub}
          className=" flex items-center justify-center gap-4 w-5/6 sm:w-3/4 h-10 py-1 px-4 bg-white text-black font-bold rounded-full hover:bg-gray-100"
        >
          <FaGithub size={20} />
          sign up with github
        </button>

        <p className="text-gray-500 w-3/4 sm:w-4/6    ">
          By Signing up, you will unlock all the features of the app.
          <span className="">
            <FaUnlockKeyhole className="text-blue-400 inline mx-2 w-4 h-4" />
          </span>
        </p>

        <p className="text-cyan-50 text-semibold flex  gap-2">
          Already have an account ?
          <Link to="/login">
            <p className="text-blue-600 hover:underline cursor-pointer ">
              login
            </p>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
