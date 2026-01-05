import Lanyard from "../components/Lanyard.jsx";
import MailIcon from "../assets/svg/icons/envelope.svg?react";
import GitHubIcon from "../assets/svg/icons/github.svg?react";
import LinkedInIcon from "../assets/svg/icons/linkedin.svg?react";

export default function Hero({ ref }) {
  return (
    <section ref={ref} className="w-screen min-h-screen h-auto mb-[5vh] sm:mb-[10vh] md:mb-[15vh] lg:mb-[20vh] lg:h-screen xl:mb-[25vh]">
      <div className="z-1 absolute w-full h-fit overflow-hidden -translate-y-20">
        <div className="h-fit lg:w-[130vw] lg:scale-110">
          <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
        </div>
      </div>

      <div className="w-full h-full flex justify-center lg:items-center">
        <div className="
          mt-[60vh] w-3/4 flex flex-col
          lg:mt-0 lg:pl-10 lg:w-[55%]
          xl:pl-32
        ">
          <h1 className="z-10 font-heading text-center leading-[1.3] lg:text-left">
            <span className="inline-block mb-1 text-highlight-1 text-sm sm:text-base md:text-lg md:mb-2 lg:text-xl">
              HEY THERE, I'M
            </span><br/>
            <span className="text-highlight-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
              CHRISTIAN AGOT
            </span>
          </h1>
          <span className="
            z-10 mt-6 font-body text-lg text-center leading-[1.3] text-shadow-md text-shadow-black
            sm:text-xl md:text-2xl
            lg:text-left lg:leading-[1.5]
            xl:text-3xl
          ">
            A passionate{" "}
            <span className="whitespace-nowrap">
              CS student{" "}
            </span>
            and aspiring{" "}
            <span className="whitespace-nowrap">
              Software Engineer.
            </span>
          </span>
          <div className="
            mt-8 w-full flex flex-wrap justify-center gap-4
            md:mt-10 md:gap-8
            lg:mt-12 lg:justify-start lg:gap-10
            xl:mt-14 xl:gap-12
          ">
            <a className="
              group z-10 px-3 border-2 border-white/40 rounded-full font-body flex justify-center items-center hover:border-white hover:bg-neutral-1/25 transition-colors duration-150
              sm:px-4 md:px-5 lg:px-6
            " href="mailto:christianagot11@gmail.com">
              <MailIcon className="size-4 sm:size-4.5" />
              <span className="select-none text-sm ml-2 sm:ml-2.5 sm:text-base md:text-lg">
                Get In Touch
              </span>
            </a>
            <span className="hidden w-0.25 bg-white rounded-full sm:inline"></span>
            <div className="flex justify-center items-center gap-2 md:gap-3 lg:gap-4 xl:gap-5">
              <a className="z-10 p-2.5 bg-gray-800 rounded-xl hover:scale-110 transition-transform duration-150 md:p-3" href="https://github.com/gabbrealz" target="_blank">
                <GitHubIcon className="size-5 sm:size-6 lg:size-7" />
              </a>
              <a className="z-10 p-2.5 bg-blue-500 rounded-xl hover:scale-110 transition-transform duration-150 md:p-3" href="https://www.linkedin.com/in/christian-gabriel-agot" target="_blank">
                <LinkedInIcon className="size-5 sm:size-6 lg:size-7" />
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-[45%]"></div>
      </div>
    </section>
  );
}