import { useState, useEffect, useRef } from 'react';

export default function Header({ sections, sectionRefs }) {
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(0);
  const navRef = useRef(null);
  const pillRef = useRef(null);

  const scrollToIndex = (i) => {
    const navItem = navRef.current.children[i];
    pillRef.current.style.width = `${navItem.offsetWidth}px`;
    pillRef.current.style.transform = `translateX(${navItem.offsetLeft}px)`;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveIndex(sectionRefs.current.indexOf(entry.target));
        });
      }, { threshold: 0.5 }
    );
    sectionRefs.current.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hoverIndex === 0) {
      if (activeIndex === 0) return;
      scrollToIndex(activeIndex);
    } else scrollToIndex(hoverIndex);
  }, [hoverIndex, activeIndex]);

  return (
    <>
      <header className="z-50 fixed top-0 left-0 w-full h-14 px-[7.5%] flex justify-between items-center transition-transform duration-160 md:h-16">
        <a className="select-none font-body text-sm px-1.5 border whitespace-nowrap sm:text-md md:text-lg lg:border-2">
          AGOT_
        </a>
        <nav ref={navRef} className="
          hidden
          md:relative md:flex md:mx-auto md:w-3/5 md:h-1/2 md:justify-between md:items-center md:gap-x-4
          lg:gap-x-8 lg:w-2/5
          xl:gap-x-12"
          onMouseLeave={() => { setHoverIndex(0); }}
        >
          <span ref={pillRef} className="hidden z-0 absolute h-full bg-gray-800 rounded-full origin-center transition duration-150 md:block"
                style={{ opacity: activeIndex === 0 && hoverIndex === 0 ? 0 : 1 }}>
          </span>
          {
            sections.map((section, i) => {
              if (i === 0) return null;
              else return (
                <a key={i}>
                  <span className="relative z-10 px-4 font-body cursor-pointer select-none"
                        onClick={() => { sectionRefs.current[i].scrollIntoView({ behavior: "smooth", block: "center" }) }}
                        onMouseEnter={() => { setHoverIndex(i); }}
                  >
                    {section}
                  </span>
                </a>
              );
            })
          }
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
            Strengths
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
            ${show ? "translate-x-0" : "-translate-x-1/1"} transition-transform duration-350 delay-100
          `}>
            Contact
          </a>
        </nav>
      </div>
    </>
  );
}