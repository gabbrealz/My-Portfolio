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
      <div className="flex flex-wrap justify-center gap-8 md:gap-2">
        <Container className="group rounded-none hover:-translate-x-2 transition-transform duration-150 md:w-[49%]">
          <img src={codeImgSrc} alt="Java Code" className="aspect-5/3 object-cover w-full opacity-20 group-hover:opacity-30 transition-opacity duration-150"/>
          <div className="h-full absolute top-0 left-0 flex flex-col justify-center items-center p-4 gap-2 sm:p-24 md:gap-4 md:p-4 lg:gap-6 lg:p-12">
            <h3 className="font-heading text-center text-highlight-2 text-shadow-lg text-shadow-black text-sm sm:text-lg md:text-base lg:text-xl">
              BACKEND DEVELOPMENT
            </h3>
            <p className="font-body text-center text-shadow-lg text-shadow-black text-xs sm:text-sm lg:text-base xl:text-lg xl:leading-[2]">
              I enjoy building robust backend systems using clean, maintainable code.
              I also have a strong foundation in algorithmic thinking!
            </p>
          </div>
        </Container>
        <Container className="group rounded-none hover:translate-x-2 transition-transform duration-150 md:w-[49%]">
          <img src={planImgSrc} alt="Notes on Data Structures" className="aspect-5/3 object-cover w-full opacity-20 group-hover:opacity-30 transition-opacity duration-150"/>
          <div className="h-full absolute top-0 left-0 flex flex-col justify-center items-center p-4 gap-2 sm:p-24 md:gap-4 md:p-4 lg:gap-6 lg:p-12">
            <h3 className="font-heading text-center text-highlight-2 text-shadow-lg text-shadow-black text-sm sm:text-lg md:text-base lg:text-xl">
              ARCHITECTURE PLANNING
            </h3>
            <p className="font-body text-center text-shadow-lg text-shadow-black text-xs sm:text-sm lg:text-base xl:text-lg xl:leading-[2]">
              I enjoy breaking down complex systems into manageable components, and structuring
              projects in a way that makes future management easier.
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}