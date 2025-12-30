import { Children } from "react";

export default function SkillCard({ children }) {
  const [ techIcon, title ] = Children.toArray(children);

  return (
    <div className="
      w-16 h-fit m-auto group
      sm:w-18
      md:w-20
      lg:w-22
      xl:w-24
    ">
      <div className="
        p-1.75 flex justify-center items-center
        md:p-2.25
        lg:p-3
      ">
        {techIcon}
      </div>
      <div className="
        text-xs font-body text-center pt-0.75 pb-0.25 border-t
        sm:text-sm
        md:text-md
      ">
        {title}
      </div>
    </div>
  );
}