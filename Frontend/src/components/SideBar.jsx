import React from "react";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { BsCompassFill } from "react-icons/bs";
import { RiFileEditFill } from "react-icons/ri";
import Logout from "./Logout";
import { useAuthContext } from "../context/AuthContext";
const SideBar = () => {
  const { authUser } = useAuthContext();
  return (
    <aside className=" flex flex-col  shadow   shadow-[rgba(248,245,245,0.4)] items-center sticky  top-0 left-0 w-16 sm:w-16 h-screen py-8 overflow-y-auto    bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10   hover:bg-gray-950 ">
      <nav className="h-full flex flex-col gap-3 text-white">
        <Link
          className="p-2 flex justify-center items-center transition-colors duration-200 rounded-full hover:bg-black"
          to="/"
        >
          <img src="./github.svg" className="h-8" alt="" />
        </Link>
        <Link
          className="h-10 w-10 flex justify-center items-center transition-colors duration-200 rounded-full hover:bg-black"
          to="/"
        >
          <IoHome className="text-blue-400" size={25} />
        </Link>

        {authUser ? (
          <Link
            className="h-10 w-10 flex justify-center items-center transition-colors duration-200 rounded-full hover:bg-black"
            to="/likes"
          >
            <FaHeart className="text-pink-800" size={25} />
          </Link>
        ) : (
          <Link
            className="h-10 w-10 flex justify-center items-center transition-colors duration-200 rounded-full hover:bg-black"
            to="/login"
          >
            <FiLogIn className="text-green-200" size={25} />
          </Link>
        )}

        {authUser ? (
          <Link
            className="h-1- w-10  flex justify-center items-center transition-colors duration-200 rounded-full hover:bg-black"
            to="/explore"
          >
            <BsCompassFill className="text-orange-600" size={25} />
          </Link>
        ) : (
          <Link
            className=" h-10 w-10 rounded-full flex justify-center items-center transition-colors duration-200   hover:bg-black"
            to="/signup"
          >
            <RiFileEditFill className="text-teal-200" size={25} />
          </Link>
        )}

        {authUser && (
          <div className="mt-auto   ">
            <Logout />
          </div>
        )}
      </nav>
    </aside>
  );
};

export default SideBar;
