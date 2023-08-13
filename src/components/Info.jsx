import InfoSection from "./InfoSection";

function Info() {
  const data = {
    "ip address": "192.212.174.101",
    location: "Brooklyn , NY 10001",
    timezone: "UTC -5:00",
    isp: "SpaceX Starlink",
  };

  const renderedSections = Object.keys(data).map((key) => (
    <InfoSection key={key} title={key} value={data[key]} />
  ));

  return (
    <div className="bg-white w-full rounded-2xl p-4 flex flex-col justify-between items-center">
      {renderedSections}
    </div>
  );
}

export default Info;
