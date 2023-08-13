import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className="bg-pattern-mob bg-cover bg-no-repeat bg-center h-2/6 flex flex-col justify-between items-center py-6 px-[6%]">
      <h1 className=" text-white text-2xl font-bold">IP Address Tracker</h1>
      <SearchBar />
    </header>
  );
}

export default Header;
