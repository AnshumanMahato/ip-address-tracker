import classNames from "classnames";
import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

function SearchBar({ className, fetchData }) {
  const classes = classNames("w-full sm:w-2/3 lg:w-1/2 flex", className);

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
        className="px-6 py-4 grow rounded-l-2xl focus:outline-none text-lg"
      />
      <button className="bg-very-dark-gray px-5 rounded-r-2xl">
        <AiOutlineRight className="text-white text-lg font-bold" />
      </button>
    </form>
  );
}

export default SearchBar;
