import SkillCard from "../components/SkillCard.jsx";

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
    <section id="skills" className="px-8 pt-32 flex flex-col justify-center items-center">
      <h1 className="mb-12 md:mb-16 font-nunito font-bold text-center text-3xl md:text-4xl lg:text-5xl">
        Some technologies I've worked with
      </h1>
      <div className="flex flex-wrap justify-around grow gap-4 md:gap-5 lg:gap-6 lg:w-[90%] xl:w-[75%]">
        <div className="relative px-2 md:px-4 py-6 grid grid-cols-3 place-content-around gap-1 grow border rounded-lg">
          <span className="px-2 md:px-4 absolute top-0 left-0 -translate-y-1/2 translate-x-4 bg-secondary-2 font-nunito font-bold text-sm md:text-md lg:text-lg xl:text-xl">
            Languages
          </span>
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
        </div>
        <div className="h-fit flex flex-wrap grow gap-4 sm:gap-5 md:gap-6">
          <div className="relative px-2 md:px-4 py-6 grid grid-cols-2 place-content-around gap-1 grow border rounded-lg">
            <span className="px-2 md:px-4 absolute top-0 left-0 -translate-y-1/2 translate-x-4 bg-secondary-2 font-nunito font-bold text-sm md:text-md lg:text-lg xl:text-xl">
              Frameworks
            </span>
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
          </div>
          <div className="flex flex-col grow gap-4 sm:gap-5 md:gap-6">
            <div className="relative px-2 md:px-4 py-6 grid grid-cols-2 place-content-around gap-1 grow border rounded-lg">
              <span className="px-2 md:px-4 absolute top-0 left-0 -translate-y-1/2 translate-x-4 bg-secondary-2 font-nunito font-bold text-sm md:text-md lg:text-lg xl:text-xl">
                Databases
              </span>
              <SkillCard>
                <img src={postgresIcon} alt="Postgres Icon" className="size-8 sm:size-9 md:size-10 lg:size-11 xl:size-12"/>
                <>Postgres</>
              </SkillCard>
              <SkillCard>
                <img src={mysqlIcon} alt="MySQL Icon" className="size-8 sm:size-9 md:size-10 lg:size-11 xl:size-12"/>
                <>MySQL</>
              </SkillCard>
            </div>
            <div className="relative px-2 md:px-4 py-6 grid grid-cols-2 place-content-around gap-1 grow border rounded-lg">
              <span className="px-2 md:px-4 absolute top-0 left-0 -translate-y-1/2 translate-x-4 bg-secondary-2 font-nunito font-bold text-sm md:text-md lg:text-lg xl:text-xl">
                Tools
              </span>
              <SkillCard>
                <img src={gitIcon} alt="Git Icon" className="size-8 sm:size-9 md:size-10 lg:size-11 xl:size-12"/>
                <>Git</>
              </SkillCard>
              <SkillCard>
                <img src={dockerIcon} alt="Docker Icon" className="size-8 sm:size-9 md:size-10 lg:size-11 xl:size-12"/>
                <>Docker</>
              </SkillCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}