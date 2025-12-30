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
        <h1 className="mb-4 font-nunito font-bold text-2xl sm:mb-6 md:text-3xl">
          ABOUT ME
        </h1>
        <div className="flex flex-col gap-6">
          <p className="font-nunito text-sm md:text-md lg:text-lg leading-[1.5]">
            Hello! My name is Christian, and I’m a CS sophomore student at Asia Pacific College.
            I’m an aspiring software engineer with a passion for learning and building projects that help me grow.
          </p>
          <p className="font-nunito text-sm md:text-md lg:text-lg leading-[1.5]">
            I began my tech journey the summer before college, motivated to learn Python.
            From those times, even building simple projects ignited my curiosity and love for coding!
          </p>
          <p className="font-nunito text-sm md:text-md lg:text-lg leading-[1.5]">
            Since then, I've developed web app back-ends and standalone Python applications
            that strengthened my algorithmic thinking. Now, I'm exploring frontend frameworks
            like React, Bootstrap, and Tailwind CSS.
          </p>
          <p className="font-nunito text-sm md:text-md lg:text-lg leading-[1.5]">
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