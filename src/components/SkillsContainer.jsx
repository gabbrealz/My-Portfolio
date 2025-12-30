import { Children } from "react";

const gridColsMap = {
  2: "grid-cols-2",
  3: "grid-cols-3"
};

export default function SkillsContainer({ gridColumns = 2, children }) {
  const [ title, content ] = Children.toArray(children);

  return (
    <div className={`
      relative px-2 py-6 bg-neutral-2/60 backdrop-blur-xs grid ${gridColsMap[gridColumns]} place-content-around gap-1 grow border-2 border-neutral-1 rounded-lg
      sm:gap-1.5
      md:px-4 md:gap-2
    `}>
      <span className="
        px-2 py-0.25 absolute top-0 left-0 -translate-y-1/2 translate-x-4 font-body text-xs text-highlight-2 bg-neutral-2 border-2 border-neutral-1 rounded-md
        md:text-sm md:px-3
        lg:text-md
      ">
        {title}
      </span>
      {content}
    </div>
  );
}