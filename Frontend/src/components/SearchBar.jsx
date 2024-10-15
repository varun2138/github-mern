import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  return (
    <form
      onSubmit={(e) => onSearch(e, username)}
      className="mt-2 flex flex-col gap-2 sm:flex-row justify-center w-3/4 sm:w-1/2 h-20 sm:h-12 mx-auto"
    >
      <div className="flex border bg-glass border-gray-800 rounded-md items-center gap-3 w-full h-12 px-2 text-white">
        <CiSearch size={25} />

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className="z-10 w-full h-full outline-none bg-transparent text-white"
          placeholder="Search repos..."
        />
      </div>

      <button
        type="submit"
        className="bg-white text-black font-semibold py-1  sm:mx-2 rounded-full sm:rounded-md w-full sm:w-1/3"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
