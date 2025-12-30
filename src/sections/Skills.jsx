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
      pt-16 px-8 flex flex-col justify-center items-center
      sm:pt-20
      md:pt-24
      lg:pt-28
      xl:pt-32
    ">
      <h2 className="mb-8 text-center sm:text-left sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
        SKILLS
      </h2>
      <div className="flex flex-wrap justify-around grow gap-4 lg:gap-6 lg:w-[90%] xl:w-[75%]">
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