import { Children } from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import { Container } from "../components/Container.jsx";

import codeImgSrc from "../assets/images/strengths/code.jpg";
import planImgSrc from "../assets/images/strengths/plan.jpg";

export default function Strengths({ ref }) {
  return (
    <section ref={ref} className="mx-auto">
      <SectionHeading className="mb-8 sm:mb-12 md:mb-16">
        <>WHAT I'M GOOD AT</>
        <>These are my strengths in software development.</>
      </SectionHeading>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-2 md:gap-3 lg:gap-4">
        <Strength bgImgSrc={codeImgSrc} hoverDirection="left" className="animate-entry-slideright">
          <>BACKEND DEVELOPMENT</>
          <>
            I enjoy building robust backend systems using clean, maintainable code.
            I also have a strong foundation in algorithmic thinking!
          </>
        </Strength>
        <Strength bgImgSrc={planImgSrc} hoverDirection="right" className="animate-entry-slideleft">
          <>ARCHITECTURE PLANNING</>
          <>
            I enjoy breaking down complex systems into manageable components, and structuring
            projects in a way that makes future management easier.
          </>
        </Strength>
      </div>
    </section>
  );
}

function Strength({ bgImgSrc, hoverDirection, className, children }) {
  const [title, description] = Children.toArray(children);

  return (
    <Container className={`
      group rounded-none transition-transform duration-150 sm:w-[49%]
      ${
        hoverDirection === "right" ? "hover:translate-x-2" :
        hoverDirection === "up" ? "hover:-translate-y-2" :
        hoverDirection === "down" ? "hover:translate-y-2" : "hover:-translate-x-2"
      }
      ${className}
    `}>
      <img src={bgImgSrc} alt={`${title}`} className="aspect-2/1 object-cover w-full opacity-20 group-hover:opacity-30 transition-opacity duration-150 sm:aspect-square md:aspect-5/4 lg:aspect-5/3"/>
      <div className="size-full absolute top-0 left-0 flex flex-col justify-center items-center p-4 gap-2 md:gap-4 lg:gap-6 lg:p-12">
        <h3 className="font-heading text-center text-highlight-2 text-shadow-lg text-shadow-black max-w-[300px] text-sm sm:text-base lg:text-xl lg:max-w-[360px] xl:max-w-[400px]">
          {title}
        </h3>
        <p className="font-body text-center text-shadow-lg text-shadow-black max-w-[300px] text-xs sm:text-sm lg:text-base lg:max-w-[360px] xl:text-lg xl:leading-[2] xl:max-w-[400px]">
          {description}
        </p>
      </div>
    </Container>
  );
}