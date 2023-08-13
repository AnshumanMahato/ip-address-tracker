function InfoSection({ title, value }) {
  return (
    <div className="text-center mb-4 last:mb-0">
      <h3 className="font-medium text-xs text-dark-gray mb-1">
        {title.toUpperCase()}
      </h3>
      <p className=" text-very-dark-gray text-xl font-bold">{value}</p>
    </div>
  );
}

export default InfoSection;
