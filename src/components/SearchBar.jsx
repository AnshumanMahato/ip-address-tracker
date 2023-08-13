import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

function SearchBar() {
  const [value, setValue] = useState("");
  return (
    <div className="w-full flex">
      <input
        type="text"
        name="search"
        id="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search for any ip address or domain"
        className="px-6 py-4 grow rounded-l-2xl focus:outline-none text-lg"
      />
      <button className="bg-very-dark-gray px-5 rounded-r-2xl">
        <AiOutlineRight className="text-white text-lg font-bold" />
      </button>
    </div>
  );
}

export default SearchBar;
