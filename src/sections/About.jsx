import profileImg from '../assets/images/profile/read.jpg';

export default function About() {
  return (
    <section id="about" className="
      pt-16 px-8 flex flex-col gap-8
      sm:pt-20 sm:px-0 sm:grid sm:grid-cols-[30%_50%] sm:[grid-template-areas:'image_content'] sm:place-content-center
      md:pt-24
      lg:pt-28 lg:gap-16
      xl:pt-32 xl:gap-20 xl:grid-cols-[20%_40%]
    ">
      <div className="mx-auto [grid-area:content]">
        <div className="
          mb-4 flex items-center gap-4
          sm:mb-6 sm:gap-8
        ">
          <h2 className="whitespace-nowrap">ABOUT ME</h2>
          <span className="w-1/2 h-0.5 bg-highlight-1"></span>
        </div>
        <div className="flex flex-col gap-6">
          <p className="font-body text-sm md:text-md lg:text-lg leading-[1.5]">
            Hello! My name is Christian, and I’m a CS sophomore student at Asia Pacific College.
            I’m an aspiring software engineer with {" "}
            <span className="text-highlight-2">a passion for learning and building projects that help me grow.</span>
          </p>
          <p className="font-body text-sm md:text-md lg:text-lg leading-[1.5]">
            I began my tech journey the summer before college, motivated to learn Python.
            From those times, even building simple projects ignited my curiosity and love for coding!
          </p>
          <p className="font-body text-sm md:text-md lg:text-lg leading-[1.5]">
            Since then, {" "}
            <span className="text-highlight-2">
              I've developed web app back-ends and standalone Python applications {" "}
            </span>
            that strengthened my algorithmic thinking, and {" "}
            <span className="text-highlight-2">
              led projects that earned the respect of my peers. {" "}
            </span>
            Now, I'm exploring frontend frameworks
            like React, Bootstrap, and Tailwind CSS.
          </p>
          <p className="font-body text-sm md:text-md lg:text-lg leading-[1.5]">
            When I’m not building projects, you’ll find me learning new technologies, watching Netflix,
            reading manga, or gaming.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center [grid-area:image] h-full">
        <img src={profileImg} alt="" className="aspect-video object-cover rounded-md lg:rounded-lg shadow-lg shadow-black sm:aspect-auto sm:h-full"/>
      </div>
    </section>
  );
}