import { Children } from "react";

const gridColsMap = {
  2: "grid-cols-2",
  3: "grid-cols-3"
};

export default function SkillsContainer({ gridColumns = 2, children }) {
  const parts = Children.toArray(children);

  return (
    <div className={`relative px-2 md:px-4 py-6 grid ${gridColsMap[gridColumns]} place-content-around gap-1 grow border rounded-lg`}>
      <span className="px-2 md:px-4 absolute top-0 left-0 -translate-y-1/2 translate-x-4 bg-secondary-2 font-nunito font-bold text-sm md:text-md lg:text-lg xl:text-xl">
        {parts[0]}
      </span>
      {parts[1]}
    </div>
  );
}