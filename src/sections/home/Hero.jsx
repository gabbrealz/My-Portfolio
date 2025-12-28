import Lanyard from "../../components/Lanyard.jsx";
import GitHubIcon from "../../assets/svg/github.svg?react";
import LinkedInIcon from "../../assets/svg/linkedin.svg?react";
import InstagramIcon from "../../assets/svg/instagram.svg?react";

export default function Hero() {
  return (
    <section id="hero" className="w-screen h-screen">
      <div className="z-1 absolute w-full h-fit overflow-hidden -translate-y-20">
        <div className="lg:w-[150vw] h-fit">
          <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
        </div>
      </div>

      <div className="w-full h-full flex justify-center lg:items-center">
        <div className="mt-[420px] md:mt-[650px] lg:mt-0 lg:pl-10 xl:pl-32 w-3/4 lg:w-[55%] flex flex-col">
          <h1 className="font-nunito font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white text-center lg:text-left leading-[1.4]">
            Hey there! I'm <br/>
            <span>
              Christian Agot
            </span>
          </h1>
          <span className="mt-3 lg:mt-4 font-nunito text-lg sm:text-xl lg:text-3xl text-center lg:text-left leading-[1.3] lg:leading-[1.5]">
            A passionate Computer Science student and aspiring developer.
          </span>
          <div className="w-full mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex justify-center lg:justify-start items-center gap-3 md:gap-4 lg:gap-5">
            <a className="z-10 p-2.5 md:p-3 border md:border-2 border-white rounded-lg sm:rounded-xl">
              <GitHubIcon className="w-5 h-5 fill-white" />
            </a>
            <a className="z-10 p-2.5 md:p-3 border md:border-2 border-white rounded-lg sm:rounded-xl">
              <LinkedInIcon className="w-5 h-5 fill-white" />
            </a>
            <a className="z-10 p-2.5 md:p-3 border md:border-2 border-white rounded-lg sm:rounded-xl">
              <InstagramIcon className="w-5 h-5 fill-white" />
            </a>
          </div>
        </div>
        <div className="hidden lg:block lg:w-[45%] h-1/3"></div>
      </div>
    </section>
  );
}