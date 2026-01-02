import SendIcon from "../assets/svg/icons/paper-plane.svg?react";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto min-h-[40vh] mb-[5vh] sm:mb-[10vh] md:mb-[15vh] lg:mb-[20vh] xl:mb-[25vh]">
      <h1 className="mb-4 sm:mb-6 md:mb-8">
        <span className="block mb-1 text-center text-highlight-1 text-sm sm:text-md md:text-lg md:mb-2 lg:text-xl">
          GOT AN IDEA? LET'S
        </span>
        <span className="block text-center text-highlight-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
          GET IN TOUCH
        </span>
      </h1>
      <div className="flex flex-col justify-center items-center gap-8 sm:gap-10 md:gap-12">
        <p className="w-3/5 font-body text-center text-shadow-md text-shadow-black text-xs sm:w-1/2 sm:text-sm md:text-md lg:text-lg">
          My inbox is always open! Whether you have an idea
          for a project or just want to say hi, {" "}
          <span className="text-highlight-2">
            Feel free to send me an email!
          </span>
        </p>
        <a className="
          px-3.5 py-2.25 relative group border rounded-lg font-body flex justify-center items-center
          sm:rounded-xl sm:px-4 sm:py-2.5
          md:px-4.5 md:py-2.75
          lg:px-5 lg:py-3
        " href="mailto:christianagot11@gmail.com">
          <span className="absolute z-0 size-full rounded-lg bg-white origin-center scale-0 group-hover:scale-100 transition-transform duration-150 sm:rounded-xl"></span>
          <span className="z-10 group-hover:text-black transition-colors duration-150 select-none text-sm mr-2 sm:mr-3 sm:text-md md:text-lg">
            Say Hello
          </span>
          <SendIcon className="z-10 group-hover:fill-black transition-colors duration-150 size-4 sm:size-4.5" />
        </a>
      </div>
    </section>
  );
}