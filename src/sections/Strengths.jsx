import SectionHeading from "../components/SectionHeading.jsx";
import { BorderTitleContainer } from "../components/Container.jsx";

import codeImgSrc from "../assets/images/strengths/code.jpg";
import planImgSrc from "../assets/images/strengths/plan.jpg";

export default function Strengths() {
  return (
    <section id="projects" className="mx-auto">
      <SectionHeading className="mb-8 sm:mb-12 md:mb-16">
        <>WHAT I'M GOOD AT</>
        <>These are my strengths in software development.</>
      </SectionHeading>
      <div className="flex flex-wrap justify-center gap-8 md:gap-2">
        <BorderTitleContainer className="group rounded-none hover:-translate-x-2 transition-transform duration-150 md:w-[49%]"
                              titleAlign="center"
                              titleClassName="z-10 whitespace-nowrap text-center text-sm sm:text-md lg:text-xl xl:text-2xl
        ">
          <>BACKEND DEVELOPMENT</>
          <>
            <img src={codeImgSrc} alt="Java Code" className="aspect-5/3 object-cover w-full opacity-20 group-hover:opacity-30 transition-opacity duration-250"/>
            <p className="
              text-xs p-12 absolute top-0 left-0 size-full flex justify-center items-center font-body text-center text-shadow-lg text-shadow-black
              sm:text-sm
              md:p-4
              lg:p-12 lg:text-base
              xl:leading-[2]
            ">
              I enjoy building robust backend systems using clean, maintainable code.
              Through projects, I have developed a good understanding of core backend principles and best practices.
            </p>
          </>
        </BorderTitleContainer>
        <BorderTitleContainer className="group rounded-none hover:translate-x-2 transition-transform duration-150 md:w-[49%]"
                              titleAlign="center"
                              titleClassName="z-10 whitespace-nowrap text-center text-sm sm:text-md lg:text-xl xl:text-2xl
        ">
          <>ARCHITECTURE PLANNING</>
          <>
            <img src={planImgSrc} alt="Notes on Data Structures" className="aspect-5/3 object-cover w-full opacity-20 group-hover:opacity-30 transition-opacity duration-250"/>
            <p className="
              text-xs p-12 absolute top-0 left-0 size-full flex justify-center items-center font-body text-center text-shadow-lg text-shadow-black
              sm:text-sm
              md:p-4
              lg:p-12 lg:text-base
              xl:leading-[2]
            ">
              I am great at planning efficient and scalable software architecture. I enjoy breaking
              down complex systems into manageable components, and structuring projects in a way that makes future
              management easier.
            </p>
          </>
        </BorderTitleContainer>
      </div>
    </section>
  );
}