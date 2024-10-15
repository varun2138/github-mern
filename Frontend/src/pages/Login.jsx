import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { handleLoginWithGithub } from "../lib/function.js";

const Login = () => {
  return (
    <div className="  flex flex-col justify-center items-center mx-auto h-full sm:px-8 sm:py-4 ">
      <div className="bg-glass  rounded-lg shadow shadow-[rgba(62,59,59,0.8)] w-full sm:w-1/2  flex flex-col gap-4 items-center   py-4  ">
        <h1 className="text-lg font-semibold tracking-wide m-2">
          Login to your account
        </h1>
        <button
          onClick={handleLoginWithGithub}
          className=" flex items-center justify-center gap-4 w-5/6 sm:w-3/4 h-10 py-1 px-4 bg-white text-black font-bold rounded-full hover:bg-gray-100"
        >
          <FaGithub size={20} />
          Login with Github
        </button>

        <p className="text-cyan-50 text-semibold flex  gap-2">
          Don't have an account ?
          <Link to="/signup">
            <p className="text-blue-600 hover:underline cursor-pointer ">
              signup
            </p>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
