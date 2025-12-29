import { Children } from "react";

export default function SkillCard({ children }) {
  const [ techIcon, title ] = Children.toArray(children);

  return (
    <div className="group p-2 rounded-lg md:rounded-xl">
      <div className="p-4 flex justify-center items-center">
        {techIcon}
      </div>
      <span className="">
        {title}
      </span>
    </div>
  );
}