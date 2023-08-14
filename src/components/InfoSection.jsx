import classNames from "classnames";

function InfoSection({ title, value }) {
  const classes = classNames(
    "w-full sm:w-1/2 xl:w-1/4",
    "text-center xl:text-left",
    "xs:py-2 lg:first:pl-0 lg:pl-[3%] lg:pr-[8%] mb-2 xs:mb-4 last:mb-0 lg:mb-0",
    "xl:border-r-dark-gray/60 xl:border-r-2 xl:last:border-r-0"
  );

  return (
    <div className={classes}>
      <h3 className="font-medium text-xs xl-up:text-sm text-dark-gray xs:mb-1">
        {title.toUpperCase()}
      </h3>
      <p className="text-very-dark-gray text-base xs:text-xl xl-up:text-2xl font-bold">
        {value}
      </p>
    </div>
  );
}

export default InfoSection;
