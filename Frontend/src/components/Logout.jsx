import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { useAuthContext } from "../context/AuthContext";
const Logout = () => {
  const { authUser, setAuthUser } = useAuthContext();
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/v1/auth/logout");
      const data = await response.json();
      console.log(data);
      setAuthUser(null);
    } catch (error) {
      console.error("Error while fetching : ", error.message);
    }
  };
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="w-10 h-10 rounded-full overflow-hidden ">
        <img
          className="w-full h-full   object-cover"
          src={authUser?.avatarUrl}
          alt=""
        />
      </div>
      <div
        onClick={handleLogout}
        className="  h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black"
      >
        <IoIosLogOut size={25} />
      </div>
    </div>
  );
};

export default Logout;
