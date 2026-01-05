import GitHubIcon from "../assets/svg/icons/github.svg?react";
import LinkedInIcon from "../assets/svg/icons/linkedin.svg?react";

export default function Footer() {
  return (
    <footer className="p-6 h-[15vh] flex justify-around items-center border-t border-neutral-1/60">
      <span className="font-body text-sm leading-[1.5] text-center md:text-base lg:text-lg">
        © 2026 · Christian Agot
      </span>
      <div className="flex justify-center gap-4">
        <a className="group p-2.5 border rounded-full hover:border-highlight-1 transition-colors duration-150 md:p-2.75" href="https://github.com/gabbrealz" target="_blank">
          <GitHubIcon className="size-4.5 group-hover:fill-highlight-1 transition-colors duration-150 sm:size-5.5" />
        </a>
        <a className="group p-2.5 border rounded-full hover:border-highlight-1 transition-colors duration-150 md:p-2.75" href="https://www.linkedin.com/in/christian-gabriel-agot" target="_blank">
          <LinkedInIcon className="size-4.5 group-hover:fill-highlight-1 transition-colors duration-150 sm:size-5.5" />
        </a>
      </div>
    </footer>
  );
}