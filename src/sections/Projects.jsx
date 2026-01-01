import { Children } from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import { Container } from "../components/Container.jsx";

import directClothingImg from "../assets/images/projects/Direct-Clothing.png";
import pharmaSearchImg from "../assets/images/projects/PharmaSearch.png";
import urlScannerImg from "../assets/images/projects/URL-Scanner.png";
import logicSolverImg from "../assets/images/projects/Logic-Solver.png";

export default function Projects() {
  return (
    <section id="projects" className="
      mt-24 mx-auto px-8
      sm:mt-30
      md:mt-36 md:w-[85%] md:px-0
      lg:mt-42 lg:w-[80%]
      xl:mt-48 xl:w-[70%]
    ">
      <SectionHeading heading="center" className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
        PROJECTS
      </SectionHeading>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-6">
        <Project imgSrc={directClothingImg} className="w-full md:w-[45%]">
          <>Direct Clothing</>
          <>
            A Spring Boot web application using the mock brand, Direct Clothing.
            It is an e-commerce clothing website with features including clothing
            catalogs, monthly specials, and a check-out workflow.
          </>
          <> <>Spring Boot</><>Thymeleaf</><>Maven</> </>
        </Project>
        <Project imgSrc={pharmaSearchImg} className="w-full md:w-[45%]">
          <>PharmaSearch</>
          <>
            A full-text search application focusing on over-the-counter and
            prescription drugs. You can search drugs, filter results by drug
            type, or undo/redo operations. Results are also paginated.
          </>
          <> <>Python</><>Qt</> </>
        </Project>
        <Project imgSrc={urlScannerImg} className="w-full md:w-[45%]">
          <>Malicious URL Scanner</>
          <>
            The project uses two Python programs, client and server, featuring
            a mini version of Google Safe Browsing v2's system architecture.
            It mimics how Google checks if a site being visited is safe or not.
          </>
          <> <>Python</><>FastAPI</> </>
        </Project>
        <Project imgSrc={logicSolverImg} className="w-full md:w-[45%]">
          <>Logic Solver</>
          <>
            A Python program that can solve propositional statements and generate
            truth tables. It's a simple side project, but it highlights my
            programming skills and algorithmic thinking.
          </>
          <> <>Python</><>Matplotlib</> </>
        </Project>
      </div>
    </section>
  );
}

function Project({ imgSrc, className = "", children }) {
  const [ name, description, techStack, githubLink ] = Children.toArray(children);
  const techStackArray = Children.toArray(techStack.props.children);

  return (
    <Container className={className}>
      <img src={imgSrc} alt={`${name}`} className="object-contain w-full rounded-t-lg%" />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="">
          {name}
        </h3>
        <div className="">
          {description}
        </div>
        <div className="flex flex-wrap gap-2">
          {
            techStackArray.map((techName, index) => (
              <span key={index} className="px-1">
                {techName}
              </span>
            ))
          }
        </div>
      </div>
    </Container>
  );
}