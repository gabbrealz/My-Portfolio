import Lanyard from "../../components/Lanyard.jsx";
import GitHubIcon from "../../assets/svg/github.svg?react";
import LinkedInIcon from "../../assets/svg/linkedin.svg?react";
import InstagramIcon from "../../assets/svg/instagram.svg?react";

export default function Hero() {
  return (
    <section id="hero" className="w-screen h-screen">
      <div className="absolute w-full h-screen overflow-hidden -translate-y-20 sm:-translate-y-20">
        <div className="w-[175vw] sm:w-[150vw] lg:w-[135vw] h-screen origin-center scale-80 sm:scale-105 lg:scale-110">
          <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
        </div>
      </div>
      <div className="w-1/2 h-110 sm:h-full pl-12 sm:p-8 flex justify-center items-center">
        <div className="mt-0 flex flex-col">
          <h1 className="font-nunito font-bold text-xl sm:text-3xl md:text-5xl text-white">
            Hi, I'm Gabb
          </h1>
          <span className="mt-2 text-sm sm:text-md">
            A tech student and aspiring developer!
          </span>
          <div className="mt-4 w-fit flex gap-4">
            <GitHubIcon className="w-8 h-8 fill-white" />
            <LinkedInIcon className="w-8 h-8 fill-white" />
            <InstagramIcon className="w-8 h-8 fill-white" />
          </div>
        </div>
      </div>
    </section>
  );
}