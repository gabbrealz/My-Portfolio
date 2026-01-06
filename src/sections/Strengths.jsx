import { Children } from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import { Container } from "../components/Container.jsx";

import codeImgSrc from "../assets/images/strengths/code.jpg";
import planImgSrc from "../assets/images/strengths/plan.jpg";
import studyImgSrc from "../assets/images/strengths/study.jpg";
import coffeeImgSrc from "../assets/images/strengths/coffee.jpg";

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
            I can build robust backend systems while following the best practices.
            I also have a strong foundation in algorithmic thinking!
          </>
        </Strength>
        <Strength bgImgSrc={planImgSrc} hoverDirection="right" className="animate-entry-slideleft">
          <>SYSTEM DESIGN</>
          <>
            I enjoy breaking down complex systems into manageable components, and
            structuring projects in a way that makes future management easier.
          </>
        </Strength>
        <Strength bgImgSrc={studyImgSrc} hoverDirection="left" className="animate-entry-slideright">
          <>ADAPTABILITY</>
          <>
            I can quickly learn new technologies that are critical for projects.
            I also like experimenting with different approaches that improve my projects.
          </>
        </Strength>
        <Strength bgImgSrc={coffeeImgSrc} hoverDirection="right" className="animate-entry-slideleft">
          <>ATTENTION TO DETAIL</>
          <>
            I focus on writing reliable code and catching edge cases before they become
            issues. This helps me build maintainable and error-resistant projects.
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
      <img src={bgImgSrc} alt={`${title}`} className="aspect-5/2 object-cover w-full opacity-20 group-hover:opacity-30 transition-opacity duration-150 sm:aspect-3/2 lg:aspect-2/1"/>
      <div className="size-full absolute top-0 left-0 flex flex-col justify-center items-center p-4 gap-2 md:gap-4 lg:gap-6 lg:p-12">
        <h3 className="font-heading text-center text-highlight-2 text-shadow-lg text-shadow-black max-w-[300px] text-xs sm:text-sm md:text-base lg:text-lg lg:max-w-[360px] xl:text-xl xl:max-w-[400px]">
          {title}
        </h3>
        <p className="font-body text-center text-shadow-lg text-shadow-black max-w-[300px] text-xs sm:text-sm lg:text-base lg:max-w-[360px] xl:text-lg xl:leading-[2] xl:max-w-[400px]">
          {description}
        </p>
      </div>
    </Container>
  );
}