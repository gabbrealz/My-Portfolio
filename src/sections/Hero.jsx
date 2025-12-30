import Lanyard from "../components/Lanyard.jsx";
import GitHubIcon from "../assets/svg/github.svg?react";
import LinkedInIcon from "../assets/svg/linkedin.svg?react";
import InstagramIcon from "../assets/svg/instagram.svg?react";

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
            <span className="text-highlight-2 text-3xl sm:text-4xl md:text-5xl xl:text-6xl">
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
            w-full mt-8 flex justify-center items-center gap-3
            md:mt-10 md:gap-4
            lg:mt-12 lg:justify-start lg:gap-5
            xl:mt-14 xl:gap-6
          ">
            <a className="z-10 p-2.5 border rounded-xl md:p-3 md:border-2">
              <GitHubIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a className="z-10 p-2.5 border rounded-xl md:p-3 md:border-2">
              <LinkedInIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a className="z-10 p-2.5 border rounded-xl md:p-3 md:border-2">
              <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
        <div className="hidden lg:block lg:w-[45%]"></div>
      </div>
    </section>
  );
}