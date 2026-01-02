import { Children } from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import { Container } from "../components/Container.jsx";
import ArrowRight from "../assets/svg/icons/arrow-small-right.svg?react"

import directClothingImg from "../assets/images/projects/Direct-Clothing.png";
import hoverDirectClothingImg from "../assets/images/projects/hover-Direct-Clothing.png";
import pharmaSearchImg from "../assets/images/projects/PharmaSearch.png";
import hoverPharmaSearchImg from "../assets/images/projects/hover-PharmaSearch.png";
import urlScannerImg from "../assets/images/projects/URL-Scanner.png";
import hoverURLScannerImg from "../assets/images/projects/hover-URL-Scanner.png";
import logicSolverImg from "../assets/images/projects/Logic-Solver.png";
import hoverLogicSolverImg from "../assets/images/projects/hover-Logic-Solver.png";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto">
      <SectionHeading className="mb-8 sm:mb-12 md:mb-16">
        <>FEATURED PROJECTS</>
        <>Some of the projects I've built that showcase my ability as a developer.</>
      </SectionHeading>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6">
        <Project imgSrc={directClothingImg} hoverImgSrc={hoverDirectClothingImg}
                 githubLink="https://github.com/gabbrealz/Direct-Clothing"
                 className="w-[300px] sm:w-[45%]
        ">
          <>Direct Clothing</>
          <>
            A Spring Boot web application using the mock brand, Direct Clothing.
            It is an e-commerce clothing website with features including clothing
            catalogs, monthly specials, and a check-out workflow.
          </>
          <>
            <>Spring Boot</>
            <>Thymeleaf</>
            <>Maven</>
          </>
        </Project>
        <Project imgSrc={pharmaSearchImg} hoverImgSrc={hoverPharmaSearchImg}
                 githubLink="https://github.com/gabbrealz/Pharma-Search"
                 className="w-[300px] sm:w-[45%]
        ">
          <>PharmaSearch</>
          <>
            A full-text search application focusing on over-the-counter and
            prescription drugs. You can search drugs, filter results by drug
            type, or undo/redo operations. Results are also paginated.
          </>
          <>
            <>Python</>
            <>Qt</>
          </>
        </Project>
        <Project imgSrc={urlScannerImg} hoverImgSrc={hoverURLScannerImg}
                 githubLink="https://github.com/gabbrealz/Malicious-URL-Scanner"
                 className="w-[300px] sm:w-[45%]
        ">
          <>Malicious URL Scanner</>
          <>
            The project uses two Python programs, client and server, featuring
            a mini version of Google Safe Browsing v2's system architecture.
            It mimics how Google checks if a site being visited is safe or not.
          </>
          <>
            <>Python</>
            <>FastAPI</>
          </>
        </Project>
        <Project imgSrc={logicSolverImg} hoverImgSrc={hoverLogicSolverImg}
                 githubLink="https://github.com/gabbrealz/Logic-Solver"
                 className="w-[300px] sm:w-[45%]
        ">
          <>Logic Solver</>
          <>
            A Python program that can solve propositional statements and generate
            truth tables. It's a simple side project, but it highlights my
            programming skills and algorithmic thinking.
          </>
          <>
            <>Python</>
            <>Matplotlib</>
          </>
        </Project>
      </div>
    </section>
  );
}

function Project({ imgSrc, hoverImgSrc, className = "", githubLink = "https://github.com/gabbrealz", children }) {
  const [ name, description, techStack ] = Children.toArray(children);
  const techStackArray = Children.toArray(techStack.props.children);

  return (
    <Container className={`flex flex-col hover:-translate-y-2 transition-transform ${className}`}>
      <div className="relative">
        <img src={imgSrc} alt={`${name}`} className="absolute top-0 left-0 object-contain rounded-t-lg hover:opacity-0 transition-opacity duration-150" />
        <img src={hoverImgSrc} alt={`${name} hover`} className="object-contain rounded-t-lg" />
      </div>
      <a href={`${githubLink}`} target="_blank" className="group grow p-2 flex flex-col md:p-3 lg:p-4">
        <div className="mb-1 flex justify-center items-center gap-2 md:mb-1.25 lg:mb-1.5">
          <h3 className="w-fit font-heading text-highlight-1 group-hover:text-highlight-2 transition-color duration-150 text-md md:text-lg lg:text-xl">
            {name}
          </h3>
          <ArrowRight className="float-right size-5 origin-center -rotate-45 fill-highlight-1 group-hover:fill-highlight-2 group-hover:translate-x-1/4 group-hover:-translate-y-1/4 transition-transform transition-colors duration-150" />
        </div>
        <div className="mb-3 text-xs font-body sm:mb-4 sm:text-sm md:text-md">
          {description}
        </div>
        <div className="mt-auto flex flex-wrap gap-0.75 md:gap-1">
          {
            techStackArray.map((techName, index) => (
              <span key={index} className="px-2 py-0.25 rounded-full border-2 border-neutral-1 bg-neutral-2 font-body text-xs lg:px-3 lg:py-0.5">
                {techName}
              </span>
            ))
          }
        </div>
      </a>
    </Container>
  );
}