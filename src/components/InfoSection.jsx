function InfoSection({ title, value }) {
  return (
    <div className="text-center">
      <h3>{title.toUpperCase()}</h3>
      <p>{value}</p>
    </div>
  );
}

export default InfoSection;
