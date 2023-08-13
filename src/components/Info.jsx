import InfoSection from "./InfoSection";

function Info({ data }) {
  const renderedSections = Object.keys(data).map((key) => (
    <InfoSection key={key} title={key} value={data[key]} />
  ));

  return (
    <div className="bg-white w-full rounded-2xl p-6 flex flex-col justify-between items-center">
      {renderedSections}
    </div>
  );
}

export default Info;
