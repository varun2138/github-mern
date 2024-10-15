import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "./context/AuthContext";
const App = () => {
  const { authUser } = useAuthContext();
  console.log(authUser);

  return (
    <div className="area flex gap-2 sm:gap-4 text-white bg-gray-950 fixed inset-0 ">
      <ul class="circles fixed inset-0 ">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <SideBar />
      <div className="border content-area w-full sm:w-10/12 my-10 sm:mx-auto overflow-y-auto z-10 sm:px-4 py-6 no-scrollbar">
        <Outlet />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
