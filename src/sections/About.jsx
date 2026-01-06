import SectionHeading from '../components/SectionHeading.jsx';
import profileImg from '../assets/images/profile/read.jpg';

export default function About({ ref }) {
  return (
    <section ref={ref} className="
      mt-16 flex flex-col gap-8
      sm:px-0 sm:grid sm:grid-cols-2 sm:[grid-template-areas:'image_content']
      lg:gap-12
      xl:gap-16
    ">
      <div className="mx-auto [grid-area:content]">
        <SectionHeading className="mb-4 sm:mb-6">
          ABOUT ME
        </SectionHeading>
        <div className="animate-entry-slideleft flex flex-col gap-6 text-shadow-md text-shadow-black">
          <p className="font-body text-sm md:text-base lg:text-lg leading-[1.5]">
            Hello! My name is Christian, and I’m a CS sophomore student at Asia Pacific College.
            I’m an aspiring software engineer with {" "}
            <span className="text-highlight-2">a passion for learning and building projects that help me grow.</span>
          </p>
          <p className="font-body text-sm md:text-base lg:text-lg leading-[1.5]">
            I began my tech journey the summer before college, when I was motivated to learn Python.
            From those times, even building simple projects ignited my curiosity and love for coding!
          </p>
          <p className="font-body text-sm md:text-base lg:text-lg leading-[1.5]">
            Since then, {" "}
            <span className="text-highlight-2">
              I've developed web app back-ends and standalone Python applications {" "}
            </span>
            that strengthened my algorithmic thinking.
            Now, I'm exploring frontend frameworks like React, Bootstrap, and Tailwind CSS.
          </p>
          <p className="font-body text-sm md:text-base lg:text-lg leading-[1.5]">
            When I’m not building projects, {" "}
            <span className="text-highlight-2">
              you’ll find me learning new technologies, {" "}
            </span>
            watching Netflix,
            reading manga, or gaming.
          </p>
        </div>
      </div>
      <div className="animate-entry-slideright flex justify-center items-center [grid-area:image] h-full">
        <img src={profileImg} alt="Christian Agot"
             className="aspect-video object-cover rounded-md shadow-lg shadow-black sm:h-full sm:rounded-lg"/>
      </div>
    </section>
  );
}