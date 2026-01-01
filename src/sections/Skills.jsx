import SectionHeading from "../components/SectionHeading.jsx";
import { BorderTitleContainer } from "../components/Container.jsx";

import htmlIcon from "../assets/images/skill-icons/language/html-5.png";
import cssIcon from "../assets/images/skill-icons/language/css-3.png";
import jsIcon from "../assets/images/skill-icons/language/js.png";
import pythonIcon from "../assets/images/skill-icons/language/python.png";
import javaIcon from "../assets/images/skill-icons/language/java.png";
import cppIcon from "../assets/images/skill-icons/language/cpp.png";

import reactIcon from "../assets/images/skill-icons/framework/react.png";
import tailwindIcon from "../assets/images/skill-icons/framework/tailwind.png";
import bootstrapIcon from "../assets/images/skill-icons/framework/bootstrap.png";
import springIcon from "../assets/images/skill-icons/framework/spring.png";

import mysqlIcon from "../assets/images/skill-icons/database/mysql.png";
import postgresIcon from "../assets/images/skill-icons/database/postgre.png";

import gitIcon from "../assets/images/skill-icons/tool/git.png";
import dockerIcon from "../assets/images/skill-icons/tool/docker.png";

export default function Skills() {
  return (
    <section id="skills" className="
      mt-24 mx-auto px-8 flex flex-col justify-center items-center
      sm:mt-30
      md:mt-36 md:w-[85%] md:px-0
      lg:mt-42 lg:w-[80%]
      xl:mt-48 xl:w-[70%]
    ">
      <SectionHeading heading="center" className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
        SKILLS
      </SectionHeading>
      <div className="w-full flex flex-wrap justify-around grow gap-4 lg:gap-6">
        <BorderTitleContainer className="px-2 py-6 grid grid-cols-3 place-content-around gap-1 grow sm:gap-1.5 md:gap-2 md:px-4" titleClassName="text-xs sm:text-sm md:text-md">
          <>LANGUAGES</>
          <>
            <Skill iconSrc={htmlIcon} title="HTML"/>
            <Skill iconSrc={cssIcon} title="CSS"/>
            <Skill iconSrc={jsIcon} title="JavaScript"/>
            <Skill iconSrc={pythonIcon} title="Python"/>
            <Skill iconSrc={javaIcon} title="Java"/>
            <Skill iconSrc={cppIcon} title="C++"/>
          </>
        </BorderTitleContainer>
        <div className="h-fit flex flex-wrap grow gap-4 lg:gap-6">
          <BorderTitleContainer className="px-2 py-6 grid grid-cols-2 place-content-around gap-1 grow sm:gap-1.5 md:gap-2 md:px-4" titleClassName="text-xs sm:text-sm md:text-md">
            <>FRAMEWORKS</>
            <>
              <Skill iconSrc={reactIcon} title="React" iconClassName="rotate-30"/>
              <Skill iconSrc={tailwindIcon} title="Tailwind"/>
              <Skill iconSrc={bootstrapIcon} title="Bootstrap"/>
              <Skill iconSrc={springIcon} title="Spring"/>
            </>
          </BorderTitleContainer>
          <div className="flex flex-col grow gap-4 lg:gap-6">
            <BorderTitleContainer className="px-2 py-6 grid grid-cols-2 place-content-around gap-1 grow sm:gap-1.5 md:gap-2 md:px-4" titleClassName="text-xs sm:text-sm md:text-md">
              <>DATABASES</>
              <>
                <Skill iconSrc={postgresIcon} title="PostgreSQL"/>
                <Skill iconSrc={mysqlIcon} title="MySQL"/>
              </>
            </BorderTitleContainer>
            <BorderTitleContainer className="px-2 py-6 grid grid-cols-2 place-content-around gap-1 grow sm:gap-1.5 md:gap-2 md:px-4" titleClassName="text-xs sm:text-sm md:text-md">
              <>DEVOPS</>
              <>
                <Skill iconSrc={gitIcon} title="Git"/>
                <Skill iconSrc={dockerIcon} title="Docker"/>
              </>
            </BorderTitleContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skill({ iconSrc, title, iconClassName = "" }) {
  return (
    <div className="
      w-16 h-fit m-auto group
      sm:w-18
      md:w-20
      lg:w-22
      xl:w-24
    ">
      <div className="
        p-1.75 flex justify-center items-center
        md:p-2.25
        lg:p-3
      ">
        <img src={iconSrc} alt={`${title} Icon`} className={`size-8 sm:size-9 md:size-10 lg:size-11 xl:size-12 ${iconClassName}`}/>
      </div>
      <div className="
        text-xs font-body text-center pt-0.75 pb-0.25 border-t-3 border-neutral-1
        sm:text-sm
        md:text-md
      ">
        {title}
      </div>
    </div>
  );
}