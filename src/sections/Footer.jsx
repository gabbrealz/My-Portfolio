import GitHubIcon from "../assets/svg/icons/github.svg?react";
import LinkedInIcon from "../assets/svg/icons/linkedin.svg?react";

export default function Footer() {
  return (
    <footer className="p-6 h-[15vh] flex justify-around items-center border-t border-neutral-1/60">
      <span className="font-body text-highlight-1 text-sm leading-[1.5] text-center md:text-md lg:text-lg">
        © 2026 · Christian Agot
      </span>
      <div className="flex justify-center gap-4">
        <a className="p-2.5 border border-highlight-1 rounded-full md:p-2.75">
          <GitHubIcon className="fill-highlight-1 size-4.5 sm:size-5.5" />
        </a>
        <a className="p-2.5 border border-highlight-1 rounded-full md:p-2.75">
          <LinkedInIcon className="fill-highlight-1 size-4.5 sm:size-5.5" />
        </a>
      </div>
    </footer>
  );
}