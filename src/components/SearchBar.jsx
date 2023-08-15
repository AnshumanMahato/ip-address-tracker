import classNames from "classnames";
import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

function SearchBar({ className, fetchData }) {
  const classes = classNames("w-full sm:w-2/3 xl:w-3/5 flex", className);

  const [IP, setIP] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchData(IP);
    setIP("");
  };

  return (
    <form onSubmit={handleSubmit} className={classes}>
      <input
        type="text"
        name="search"
        id="search"
        value={IP}
        onChange={(e) => setIP(e.target.value)}
        placeholder="Search for any ip address or domain"
        className="px-4 py-3 xs:px-6 sm:py-4 grow rounded-l-xl xs:rounded-l-2xl focus:outline-none text-sm xs:text-lg xl-up:text-xl hover:cursor-pointer"
      />
      <button className="bg-very-dark-gray px-4 xs:px-5 rounded-r-xl xs:rounded-r-2xl">
        <AiOutlineRight className="text-white text-base xs:text-lg font-bold" />
      </button>
    </form>
  );
}

export default SearchBar;
