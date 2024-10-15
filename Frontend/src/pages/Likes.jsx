import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";

const Likes = () => {
  const [likes, setLikes] = useState([]);
  useEffect(() => {
    const getLikes = async () => {
      try {
        const response = await fetch("/api/v1/users/likes", {
          credentials: "include",
        });
        const data = await response.json();
        if (data.error) throw new Error(data.error);
        setLikes(data.likedBy);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getLikes();
  }, []);

  return (
    <div className="  overflow-x-auto shadow-md rounded-lg px-4 w-full">
      <table className="w-full text-sm text-left rtl:text-right bg-glass overflow-hidden">
        <thead className="text-xs uppercase bg-glass">
          <tr>
            <th scope="col" className="p-4 hidden sm:table-cell">
              <div className="flex items-center">No</div>
            </th>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3 hidden sm:table-cell">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {likes.map((user, index) => (
            <tr className="bg-glass border-b">
              <th className="w-4 p-4 hidden sm:table-cell ">
                <div className="flex items-center">
                  <span>{index + 1}</span>
                </div>
              </th>
              <th
                scope="row"
                className="flex flex-col sm:flex-row sm:items-center px-6 py-4 whitespace-nowrap "
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.avatarUrl}
                  alt="Jese image"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">{user.username}</div>
                </div>
              </th>
              <td className="px-6 py-4 hidden sm:table-cell">
                {formatDate(user.likedDate)}
              </td>
              <td className="px-6 py-4">
                <div className="flex sm:items-center  flex-col  sm:text-start  sm:flex-row">
                  <FaHeart size={22} className="text-red-500 mx-2" />
                  Liked your profile
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Likes;
