import { useState } from 'react';

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <>
      <header className="z-50 fixed top-0 left-0 w-full h-14 md:h-16 px-[7.5%] flex justify-between items-center bg-secondary-1 shadow-lg">
        <a className="font-nunito text-md sm:text-lg md:text-xl whitespace-nowrap">
          Christian Agot
        </a>
        <nav className="hidden md:flex md:w-full md:justify-center md:items-center md:gap-x-14 xl:gap-x-16">
          <a className="font-nunito">About</a>
          <a className="font-nunito">Skills</a>
          <a className="font-nunito">Projects</a>
          <a className="font-nunito">Contact</a>
        </nav>
        <button className="md:hidden cursor-pointer p-2 w-10 h-10 text-2xl flex justify-center items-center transition duration-200"
                onClick={() => setShow(!show)}>
          {show ? "✕" : "☰"}
        </button>
      </header>
      <div className="md:hidden z-50 fixed top-20 w-1/2 sm:w-1/3">
        <nav className="flex flex-col gap-3">
          <a className={`py-1 text-center font-nunito bg-secondary-1 rounded-r-lg ${show ? "translate-x-0" : "-translate-x-1/1"} transition-transform duration-350}`}>About</a>
          <a className={`py-1 text-center font-nunito bg-secondary-1 rounded-r-lg ${show ? "translate-x-0" : "-translate-x-1/1"} transition-transform duration-350} delay-50`}>Skills</a>
          <a className={`py-1 text-center font-nunito bg-secondary-1 rounded-r-lg ${show ? "translate-x-0" : "-translate-x-1/1"} transition-transform duration-350} delay-80`}>Projects</a>
          <a className={`py-1 text-center font-nunito bg-secondary-1 rounded-r-lg ${show ? "translate-x-0" : "-translate-x-1/1"} transition-transform duration-350} delay-100`}>Contact</a>
        </nav>
      </div>
    </>
  );
}