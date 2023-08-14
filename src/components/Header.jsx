import axios from "axios";
import isURL from "validator/es/lib/isURL";
import isIP from "validator/es/lib/isIP";
import { useState } from "react";
import Info from "./Info";
import SearchBar from "./SearchBar";
import classNames from "classnames";

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

  const classes = classNames(
    "relative z-50",
    "bg-pattern-mob lg:bg-pattern-desk bg-cover bg-no-repeat bg-center",
    "h-1/3 py-6 lg:py-8 px-[6%] lg:px-[10%]",
    "flex flex-col justify-between items-center"
  );

  return (
    <header className={classes}>
      <h1 className="text-white text-xl xs:text-2xl lg:text-3xl font-bold">
        IP Address Tracker
      </h1>
      <SearchBar
        className="my-4 sm:mt-6 sm:mb-10 xl-up:mt-8 xl-up:mb-12"
        fetchData={fetchData}
      />
      <Info data={ipData} />
    </header>
  );
}

export default Header;
