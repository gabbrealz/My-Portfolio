import { useState } from 'react';

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full min-h-12 px-8 py-2 flex justify-between items-center bg-secondary-1 shadow-lg">
        <a className="font-nunito text-xl">
          gabb.
        </a>
        <nav className="hidden mt-4 flex gap-4">
          <a className="font-nunito">About</a>
          <a className="font-nunito">Skills</a>
          <a className="font-nunito">Projects</a>
          <a className="font-nunito">Contact</a>
        </nav>
        <button className="cursor-pointer p-2 w-10 h-10 text-2xl flex justify-center items-center transition duration-200"
                onClick={() => setShow(!show)}>
          {show ? "✕" : "☰"}
        </button>
      </header>
      <div className="fixed top-20 w-1/2">
        <nav className="flex flex-col gap-3">
          <a className={`py-4 text-center font-nunito bg-secondary-1 transform ${show ? "translate-x-0" : "-translate-x-1/1"} transition-[translate] duration-350}`}>About</a>
          <a className={`py-4 text-center font-nunito bg-secondary-1 transform ${show ? "translate-x-0" : "-translate-x-1/1"} transition-[translate] duration-350} delay-50`}>Skills</a>
          <a className={`py-4 text-center font-nunito bg-secondary-1 transform ${show ? "translate-x-0" : "-translate-x-1/1"} transition-[translate] duration-350} delay-100`}>Projects</a>
          <a className={`py-4 text-center font-nunito bg-secondary-1 transform ${show ? "translate-x-0" : "-translate-x-1/1"} transition-[translate] duration-350} delay-150`}>Contact</a>
        </nav>
      </div>
    </>
  );
}