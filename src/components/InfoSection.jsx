function InfoSection({ title, value }) {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/4 text-center lg:text-left lg:pl-[5%] lg:pr-[10%] mb-4 last:mb-0 lg:mb-0 lg:border-r-dark-gray/60 lg:border-r-2 lg:last:border-r-0">
      <h3 className="font-medium text-xs text-dark-gray mb-1">
        {title.toUpperCase()}
      </h3>
      <p className=" text-very-dark-gray text-xl font-bold">{value}</p>
    </div>
  );
}

export default InfoSection;
