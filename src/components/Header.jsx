import { useState } from 'react';

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <header className="fixed w-full px-8 py-2 min-h-12 bg-dark-2">
      <div className="flex items-center justify-between">
        <a className="text-white font-open-sans text-xl">
          gabb.
        </a>
        <nav className="hidden mt-4 flex gap-4">
          <a className="text-white font-open-sans">About</a>
          <a className="text-white font-open-sans">Skills</a>
          <a className="text-white font-open-sans">Projects</a>
          <a className="text-white font-open-sans">Contact</a>
        </nav>
        <button className="cursor-pointer p-2 w-10 h-10 text-white text-2xl flex justify-center items-center hover:text-primary-1 active:text-white transition duration-200"
                onClick={() => setShow(!show)}>
          {show ? "✕" : "☰"}
        </button>
      </div>
      <div className={`${show ? "h-48" : "h-0"} w-full transition-[height] duration-200 overflow-hidden`}>
        <nav className="mt-8 flex flex-col gap-4">
          <a className="text-white font-open-sans">About</a>
          <a className="text-white font-open-sans">Skills</a>
          <a className="text-white font-open-sans">Projects</a>
          <a className="text-white font-open-sans">Contact</a>
        </nav>
      </div>
    </header>
  );
}