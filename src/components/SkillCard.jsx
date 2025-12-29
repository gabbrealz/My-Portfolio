import { Children } from "react";

export default function SkillCard({ children }) {
  const [ techIcon, title ] = Children.toArray(children);

  return (
    <div className="
      w-18 h-fit m-auto group
      sm:w-20
      md:w-22
      lg:w-24
      xl:w-26
    ">
      <div className="
        p-2 flex justify-center items-center shadow-[inset_0_0_8px_4px_rgba(0,0,0,0.25)]
        md:p-2.5
        lg:p-3
        xl:p-4
      ">
        {techIcon}
      </div>
      <div className="
        bg-secondary-3 font-nunito text-center text-xs py-0.5 border-t-2
        sm:text-sm
        md:text-md
      ">
        {title}
      </div>
    </div>
  );
}