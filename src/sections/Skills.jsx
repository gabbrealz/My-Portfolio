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
    <section id="skills" className="px-8 pt-16">
      <h1 className="mb-12 md:mb-16 font-nunito font-bold text-center text-3xl md:text-4xl lg:text-5xl">
        Skills
      </h1>
      <div className="flex gap-2">
        <div className="grid grid-cols-3 gap-2">
          <SkillCard>
            <img src={htmlIcon} alt="HTML Icon" className=""/>
            <>HTML 5</>
          </SkillCard>
          <SkillCard>
            <img src={cssIcon} alt="CSS Icon" className=""/>
            <>CSS</>
          </SkillCard>
          <SkillCard>
            <img src={jsIcon} alt="JS Icon" className=""/>
            <>JavaScript</>
          </SkillCard>
          <SkillCard>
            <img src={pythonIcon} alt="Python Icon" className=""/>
            <>Python</>
          </SkillCard>
          <SkillCard>
            <img src={javaIcon} alt="Java Icon" className=""/>
            <>Java</>
          </SkillCard>
          <SkillCard>
            <img src={cppIcon} alt="C++ Icon" className=""/>
            <>C++</>
          </SkillCard>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <SkillCard>
            <img src={reactIcon} alt="React Icon" className=""/>
            <>React</>
          </SkillCard>
          <SkillCard>
            <img src={tailwindIcon} alt="Tailwind CSS Icon" className=""/>
            <>Tailwind CSS</>
          </SkillCard>
          <SkillCard>
            <img src={bootstrapIcon} alt="Bootstrap Icon" className=""/>
            <>Bootstrap</>
          </SkillCard>
          <SkillCard>
            <img src={springIcon} alt="Spring Icon" className=""/>
            <>Spring</>
          </SkillCard>
        </div>
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-2">
            <SkillCard>
              <img src={postgresIcon} alt="Postgres Icon" className=""/>
              <>Postgres</>
            </SkillCard>
            <SkillCard>
              <img src={mysqlIcon} alt="MySQL Icon" className=""/>
              <>MySQL</>
            </SkillCard>
          </div>
          <div className="grid grid-cols-2">
            <SkillCard>
              <img src={gitIcon} alt="Git Icon" className=""/>
              <>Git</>
            </SkillCard>
            <SkillCard>
              <img src={dockerIcon} alt="Docker Icon" className=""/>
              <>Docker</>
            </SkillCard>
          </div>
        </div>
      </div>
    </section>
  );
}