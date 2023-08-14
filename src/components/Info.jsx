import InfoSection from "./InfoSection";

function Info({ data }) {
  const renderedSections = Object.keys(data).map((key) => (
    <InfoSection key={key} title={key} value={data[key]} />
  ));

  return (
    <div className="bg-white w-full rounded-2xl p-4 xs:p-6 lg:p-8 flex flex-wrap shadow-xl">
      {renderedSections}
    </div>
  );
}

export default Info;
