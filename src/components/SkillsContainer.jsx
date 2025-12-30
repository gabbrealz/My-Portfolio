import { Children } from "react";

const gridColsMap = {
  2: "grid-cols-2",
  3: "grid-cols-3"
};

export default function SkillsContainer({ gridColumns = 2, children }) {
  const [ title, content ] = Children.toArray(children);

  return (
    <div className={`relative px-2 md:px-4 py-6 grid ${gridColsMap[gridColumns]} place-content-around gap-1 sm:gap-1.5 md:gap-2 grow border rounded-lg`}>
      <span className="
        px-2 absolute top-0 left-0 -translate-y-1/2 translate-x-4 bg-secondary-2 font-heading text-sm
        md:text-md md:px-3
        lg:text-lg
        xl:text-xl
      ">
        {title}
      </span>
      {content}
    </div>
  );
}