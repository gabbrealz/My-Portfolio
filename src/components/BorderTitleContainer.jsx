import { Children } from "react";

export default function SkillsContainer({ className, children }) {
  const [ title, content ] = Children.toArray(children);

  return (
    <div className={`relative px-2 py-6 bg-neutral-2/60 backdrop-blur-xs border-2 border-neutral-1 rounded-lg md:px-4 ${className}`}>
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