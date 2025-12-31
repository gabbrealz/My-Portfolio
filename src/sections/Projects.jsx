import { Children } from "react";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Projects() {
  return (
    <section id="projects" className="
      mt-24 mx-auto px-8
      sm:mt-30
      md:mt-36 md:w-[85%] md:px-0
      lg:mt-42 lg:w-[80%]
      xl:mt-48 xl:w-[70%]
    ">
      <SectionHeading className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
        PROJECTS
      </SectionHeading>
      <div className="flex flex-col gap-2">

      </div>
    </section>
  );
}

function Project({ imgSrc, left = false, className, children }) {
  const [ name, description, techStack, githubLink ] = Children.toArray(children);
  const techStackArray = Children.toArray(techStack);

  return (
    <div className={`group ${className}`}>

    </div>
  );
}