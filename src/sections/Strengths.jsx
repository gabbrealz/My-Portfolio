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
      <div className="flex flex-wrap justify-center gap-4 md:gap-3 lg:gap-4">
        <Strength bgImgSrc={codeImgSrc} hoverDirection="left">
          <>BACKEND DEVELOPMENT</>
          <>
            I enjoy building robust backend systems using clean, maintainable code.
            I also have a strong foundation in algorithmic thinking!
          </>
        </Strength>
        <Strength bgImgSrc={planImgSrc} hoverDirection="right">
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

function Strength({ bgImgSrc, hoverDirection, children }) {
  const [title, description] = Children.toArray(children);

  return (
    <Container className={`
      group rounded-none transition-transform duration-150 md:w-[49%]
      ${
        hoverDirection === "right" ? "hover:translate-x-2" :
        hoverDirection === "up" ? "hover:-translate-y-2" :
        hoverDirection === "down" ? "hover:translate-y-2" : "hover:-translate-x-2"
      }
    `}>
      <img src={bgImgSrc} alt={`${title}`} className="aspect-5/3 object-cover w-full opacity-20 group-hover:opacity-30 transition-opacity duration-150"/>
      <div className="h-full absolute top-0 left-0 flex flex-col justify-center items-center p-4 gap-2 sm:p-24 md:gap-4 md:p-4 lg:gap-6 lg:p-12">
        <h3 className="font-heading text-center text-highlight-2 text-shadow-lg text-shadow-black text-sm sm:text-lg md:text-base lg:text-xl">
          {title}
        </h3>
        <p className="font-body text-center text-shadow-lg text-shadow-black text-xs sm:text-sm lg:text-base xl:text-lg xl:leading-[2]">
          {description}
        </p>
      </div>
    </Container>
  );
}