import Lanyard from "../components/Lanyard.jsx";
import MailIcon from "../assets/svg/icons/envelope.svg?react";
import GitHubIcon from "../assets/svg/icons/github.svg?react";
import LinkedInIcon from "../assets/svg/icons/linkedin.svg?react";

export default function Hero() {
  return (
    <section id="hero" className="w-screen min-h-screen h-auto lg:h-screen">
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
            <span className="inline-block mb-1 text-highlight-1 text-sm sm:text-md md:text-lg md:mb-2 lg:text-xl">
              HEY THERE, I'M
            </span><br/>
            <span className="text-highlight-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
              CHRISTIAN AGOT
            </span>
          </h1>
          <span className="
            z-10 mt-4 font-body text-lg text-center leading-[1.3] text-shadow-md text-shadow-black
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
            mt-6 w-full flex flex-wrap justify-center gap-4
            md:mt-8 md:gap-8
            lg:mt-10 lg:justify-start lg:gap-10
            xl:mt-12 xl:gap-12
          ">
            <a className="z-10 px-3 border rounded-full font-body flex justify-center items-center sm:px-4 md:px-5 lg:px-6">
              <MailIcon className="size-4 sm:size-4.5" />
              <span className="text-sm ml-2 sm:ml-2.5 sm:text-md md:text-lg">Get In Touch</span>
            </a>
            <span className="hidden w-0.25 bg-white rounded-full sm:inline"></span>
            <div className="flex justify-center items-center gap-2 md:gap-3 lg:gap-4 xl:gap-5">
              <a className="z-10 p-2.5 border rounded-xl md:p-3">
                <GitHubIcon className="size-5 sm:size-6" />
              </a>
              <a className="z-10 p-2.5 border rounded-xl md:p-3">
                <LinkedInIcon className="size-5 sm:size-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-[45%]"></div>
      </div>
    </section>
  );
}