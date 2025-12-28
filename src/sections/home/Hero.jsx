import Lanyard from "../../components/Lanyard.jsx";
import GitHubIcon from "../../assets/svg/github.svg?react";
import LinkedInIcon from "../../assets/svg/linkedin.svg?react";
import InstagramIcon from "../../assets/svg/instagram.svg?react";

export default function Hero() {
  return (
    <section id="hero" className="w-screen h-screen">
      <div className="z-1 absolute w-full h-fit overflow-hidden -translate-y-20">
        <div className="h-fit lg:w-[140vw] lg:scale-110">
          <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
        </div>
      </div>

      <div className="w-full h-full flex justify-center lg:items-center">
        <div className="
          mt-[410px] w-3/4 flex flex-col
          md:mt-[620px]
          lg:mt-0 lg:pl-10 lg:w-[55%]
          xl:pl-32
        ">
          <h1 className="
            font-nunito font-bold text-3xl text-white text-center leading-[1.4]
            sm:text-4xl
            md:text-5xl
            lg:text-6xl lg:text-left
          ">
            Hey there! I'm <br/>
            <span>
              Christian Agot
            </span>
          </h1>
          <span className="
            mt-3 font-nunito text-lg text-center leading-[1.3]
            sm:text-xl
            lg:mt-4 lg:text-3xl lg:text-left lg:leading-[1.5]
          ">
            A passionate Computer Science student and aspiring developer.
          </span>
          <div className="
            w-full mt-6 flex justify-center items-center gap-3
            sm:mt-8
            md:mt-10 md:gap-4
            lg:mt-12 lg:justify-start lg:gap-5
          ">
            <a className="
              z-10 p-2.5 border border-white rounded-lg
              sm:rounded-xl
              md:p-3
              md:border-2
            ">
              <GitHubIcon className="w-5 h-5 fill-white" />
            </a>
            <a className="
              z-10 p-2.5 border border-white rounded-lg
              sm:rounded-xl
              md:p-3
              md:border-2
            ">
              <LinkedInIcon className="w-5 h-5 fill-white" />
            </a>
            <a className="
              z-10 p-2.5 border border-white rounded-lg
              sm:rounded-xl
              md:p-3
              md:border-2
            ">
              <InstagramIcon className="w-5 h-5 fill-white" />
            </a>
          </div>
        </div>
        <div className="hidden lg:block lg:w-[45%]"></div>
      </div>
    </section>
  );
}