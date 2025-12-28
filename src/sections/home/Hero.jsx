import Lanyard from "../../components/Lanyard.jsx";
import GitHubIcon from "../../assets/svg/github.svg?react";
import LinkedInIcon from "../../assets/svg/linkedin.svg?react";
import InstagramIcon from "../../assets/svg/instagram.svg?react";

export default function Hero() {
  return (
    <section id="hero" className="w-1/2 h-[70vh] md:h-screen">
      <div className="z-1 absolute w-full h-fit overflow-hidden -translate-y-20">
        <div className="w-[190vw] sm:w-[180vw] md:w-[150vw] lg:w-[135vw] h-fit origin-center scale-75 md:scale-100 lg:scale-105">
          <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
        </div>
      </div>

      <div className="w-full h-full flex justify-center items-center">
        <div className="pl-6 md:pl-8 lg:pl-10 w-9/10 z-2 flex flex-col justify-center">
          <h1 className="font-nunito font-bold text-xl sm:text-3xl md:text-5xl lg:text-6xl text-white leading-[1.4]">
            Hey there! I'm <span className="whitespace-nowrap">Christian Agot</span>
          </h1>
          <span className="mt-2 lg:mt-4 text-sm sm:text-md md:text-xl lg:text-2xl leading-[1.3] lg:leading-[1.5]">
            A passionate Computer Science student and aspiring developer!
          </span>
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 w-fit flex gap-2 sm:gap-3 md:gap-4">
            <a className="p-2 sm:p-2.5 md:p-3 border md:border-2 border-white rounded-lg sm:rounded-xl">
              <GitHubIcon className="w-4 h-4 md:w-5 md:h-5 fill-white" />
            </a>
            <a className="p-2 sm:p-2.5 md:p-3 border md:border-2 border-white rounded-lg sm:rounded-xl">
              <LinkedInIcon className="w-4 h-4 md:w-5 md:h-5 fill-white" />
            </a>
            <a className="p-2 sm:p-2.5 md:p-3 border md:border-2 border-white rounded-lg sm:rounded-xl">
              <InstagramIcon className="w-4 h-4 md:w-5 md:h-5 fill-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}