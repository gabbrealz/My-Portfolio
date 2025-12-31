import { useState } from 'react';

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <>
      <header className="z-50 fixed top-0 left-0 w-full h-14 px-[7.5%] flex justify-between items-center md:h-16">
        <a className="font-body text-sm px-2.5 py-0.25 border-2 rounded-xl whitespace-nowrap sm:text-md md:text-lg">
          AGOT_
        </a>
        <nav className="hidden md:flex md:w-full md:justify-center md:items-center md:gap-x-8 lg:gap-x-12 xl:gap-x-16">
          <a className="font-body">About</a>
          <a className="font-body">Skills</a>
          <a className="font-body">Projects</a>
          <a className="font-body">Journey</a>
          <a className="font-body">Contact</a>
        </nav>
        <button className="cursor-pointer p-2 w-10 h-10 text-2xl flex justify-center items-center transition duration-200 md:hidden"
                onClick={() => setShow(!show)}>
          {show ? "✕" : "☰"}
        </button>
      </header>
      <div className="z-50 fixed top-20 w-1/2 sm:w-1/3 md:hidden">
        <nav className="flex flex-col gap-3">
          <a className={`
            py-1 text-center font-body bg-secondary-1 rounded-r-lg 
            ${show ? "translate-x-0" : "-translate-x-1/1"} transition-transform duration-350
          `}>
            About
          </a>
          <a className={`
            py-1 text-center font-body bg-secondary-1 rounded-r-lg 
            ${show ? "translate-x-0" : "-translate-x-1/1"} transition-transform duration-350 delay-50
          `}>
            Skills
          </a>
          <a className={`
            py-1 text-center font-body bg-secondary-1 rounded-r-lg 
            ${show ? "translate-x-0" : "-translate-x-1/1"} transition-transform duration-350 delay-80
          `}>
            Projects
          </a>
          <a className={`
            py-1 text-center font-body bg-secondary-1 rounded-r-lg 
            ${show ? "translate-x-0" : "-translate-x-1/1"} transition-transform duration-350 delay-80
          `}>
            Journey
          </a>
          <a className={`
            py-1 text-center font-body bg-secondary-1 rounded-r-lg 
            ${show ? "translate-x-0" : "-translate-x-1/1"} transition-transform duration-350 delay-100
          `}>
            Contact
          </a>
        </nav>
      </div>
    </>
  );
}