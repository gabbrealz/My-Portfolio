import SkillCard from "../components/SkillCard.jsx";
import SkillsContainer from "../components/SkillsContainer.jsx";

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
      <div className="
        w-full mb-8 flex justify-center items-center gap-4
        sm:mb-10 sm:gap-8
        md:mb-12
        lg:mb-14
        xl:mb-16
      ">
        <span className="hidden w-full h-0.25 bg-highlight-1 sm:inline"></span>
        <h2>SKILLS</h2>
        <span className="w-full h-0.25 bg-highlight-1"></span>
      </div>
      <div className="w-full flex flex-wrap justify-around grow gap-4 lg:gap-6">
        <SkillsContainer gridColumns={3}>
          <>LANGUAGES</>
          <>
            <SkillCard>
              <img src={htmlIcon} alt="HTML Icon" className="size-8 sm:size-9 md:size-10 lg:size-11 xl:size-12"/>
              <>HTML</>
            </SkillCard>
            <SkillCard>
              <img src={cssIcon} alt="CSS Icon" className="size-8 sm:size-9 md:size-10 lg:size-11 xl:size-12"/>
              <>CSS</>
            </SkillCard>
            <SkillCard>
              <img src={jsIcon} alt="JS Icon" className="size-8 sm:size-9 md:size-10 lg:size-11 xl:size-12"/>
              <>JavaScript</>
            </SkillCard>
            <SkillCard>
              <img src={pythonIcon} alt="Python Icon" className="size-8 sm:size-9 md:size-10 lg:size-11 xl:size-12"/>
              <>Python</>
            </SkillCard>
            <SkillCard>
              <img src={javaIcon} alt="Java Icon" className="size-8 sm:size-9 md:size-10 lg:size-11 xl:size-12"/>
              <>Java</>
            </SkillCard>
            <SkillCard>
              <img src={cppIcon} alt="C++ Icon" className="size-8 sm:size-9 md:size-10 lg:size-11 xl:size-12"/>
              <>C++</>
            </SkillCard>
          </>
        </SkillsContainer>
        <div className="h-fit flex flex-wrap grow gap-4 lg:gap-6">
          <SkillsContainer>
            <>FRAMEWORKS</>
            <>
              <SkillCard>
                <img src={reactIcon} alt="React Icon" className="size-8 sm:size-9 md:size-10 lg:size-11 xl:size-12"/>
                <>React</>
              </SkillCard>
              <SkillCard>
                <img src={tailwindIcon} alt="Tailwind CSS Icon" className="size-8 sm:size-9 md:size-10 lg:size-11 xl:size-12"/>
                <>Tailwind</>
              </SkillCard>
              <SkillCard>
                <img src={bootstrapIcon} alt="Bootstrap Icon" className="size-8 sm:size-9 md:size-10 lg:size-11 xl:size-12"/>
                <>Bootstrap</>
              </SkillCard>
              <SkillCard>
                <img src={springIcon} alt="Spring Icon" className="size-8 sm:size-9 md:size-10 lg:size-11 xl:size-12"/>
                <>Spring</>
              </SkillCard>
            </>
          </SkillsContainer>
          <div className="flex flex-col grow gap-4 lg:gap-6">
            <SkillsContainer>
              <>DATABASES</>
              <>
                <SkillCard>
                  <img src={postgresIcon} alt="Postgres Icon" className="size-8 sm:size-9 md:size-10 lg:size-11 xl:size-12"/>
                  <>Postgres</>
                </SkillCard>
                <SkillCard>
                  <img src={mysqlIcon} alt="MySQL Icon" className="size-8 sm:size-9 md:size-10 lg:size-11 xl:size-12"/>
                  <>MySQL</>
                </SkillCard>
              </>
            </SkillsContainer>
            <SkillsContainer>
              <>TOOLS</>
              <>
                <SkillCard>
                  <img src={gitIcon} alt="Git Icon" className="size-8 sm:size-9 md:size-10 lg:size-11 xl:size-12"/>
                  <>Git</>
                </SkillCard>
                <SkillCard>
                  <img src={dockerIcon} alt="Docker Icon" className="size-8 sm:size-9 md:size-10 lg:size-11 xl:size-12"/>
                  <>Docker</>
                </SkillCard>
              </>
            </SkillsContainer>
          </div>
        </div>
      </div>
    </section>
  );
}