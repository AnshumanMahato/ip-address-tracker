import Info from "./Info";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className="relative bg-pattern-mob bg-cover bg-no-repeat bg-center h-2/6 py-6 px-[6%]">
      <div className="w-max absolute flex flex-col justify-between items-center">
        <h1 className=" text-white text-2xl font-bold">IP Address Tracker</h1>
        <SearchBar className="my-4" />
        <Info />
      </div>
    </header>
  );
}

export default Header;
