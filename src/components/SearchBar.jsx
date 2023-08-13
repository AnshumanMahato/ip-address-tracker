import classNames from "classnames";
import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
function SearchBar({ className, fetchData }) {
  const classes = classNames("w-full flex", className);

  const [IP, setIP] = useState("");

  const handleClick = async () => {
    await fetchData(IP);
  };

  return (
    <div className={classes}>
      <input
        type="text"
        name="search"
        id="search"
        value={IP}
        onChange={(e) => setIP(e.target.value)}
        placeholder="Search for any ip address or domain"
        className="px-6 py-4 grow rounded-l-2xl focus:outline-none text-lg"
      />
      <button
        className="bg-very-dark-gray px-5 rounded-r-2xl"
        onClick={handleClick}
      >
        <AiOutlineRight className="text-white text-lg font-bold" />
      </button>
    </div>
  );
}

export default SearchBar;
