import React from "react";
import { FaHeart } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";
const LikeProfile = ({ profileData }) => {
  const { authUser } = useAuthContext();
  const ownProfile = authUser?.username === profileData.login;
  const handleLikeProfile = async () => {
    try {
      const response = await fetch(`/api/v1/users/like/${profileData.login}`, {
        method: "POST",
        credentials: "include",
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      toast.success(data.message);
    } catch (error) {
      console.error("Error while fetching : ", error.message);
      toast.error(error.message);
    }
  };
  if (!authUser || ownProfile) return null;
  return (
    <div>
      <button
        onClick={handleLikeProfile}
        className="bg-glass font-medium w-full text-xs p-2 rounded-md cursor-pointer border border-blue-400 flex items-center gap-2"
      >
        <FaHeart size={15} className="text-red-600" />
        Like profile
      </button>
    </div>
  );
};

export default LikeProfile;
