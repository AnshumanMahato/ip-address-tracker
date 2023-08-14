import axios from "axios";
import isURL from "validator/es/lib/isURL";
import isIP from "validator/es/lib/isIP";
import { useState } from "react";
import Info from "./Info";
import SearchBar from "./SearchBar";

function Header({ setCoords }) {
  const [ipData, setIpData] = useState({
    "ip address": "192.212.174.101",
    location: "Brooklyn , NY 10001",
    timezone: "UTC -5:00",
    isp: "SpaceX Starlink",
  });

  const fetchData = async (address) => {
    let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${
      import.meta.env.VITE_IPGEO_KEY
    }`;
    try {
      if (isIP(address)) url += `&ipAddress=${address}`;
      if (isURL(address)) {
        address = address.replace("https://", "").split("/")[0];
        url += `&domain=${address}`;
      }
      const { data } = await axios.get(url);

      setIpData({
        "ip address": data.ip,
        location: `${data.location.city} , ${data.location.country}`,
        timezone: `UTC ${data.location.timezone}`,
        isp: data.isp,
      });

      setCoords({
        lng: data.location.lng,
        lat: data.location.lat,
      });
    } catch (error) {
      alert(`failed to fetch data: ${error.message}`);
      console.error(error);
    }
  };

  return (
    <header className="relative bg-pattern-mob bg-cover bg-no-repeat bg-center h-2/6 py-6 px-[6%] lg:px-[10%] flex flex-col justify-between items-center z-50">
      <h1 className=" text-white text-2xl font-bold">IP Address Tracker</h1>
      <SearchBar className="my-4" fetchData={fetchData} />
      <Info data={ipData} />
    </header>
  );
}

export default Header;
