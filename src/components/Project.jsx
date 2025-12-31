import { Children } from "react";

export default function Project({ imgSrc, left = false, className, children }) {
  const [ name, description, techStack, githubLink ] = Children.toArray(children);
  const techStackArray = Children.toArray(techStack);

  return (
    <div className={`group ${className}`}>

    </div>
  );
}