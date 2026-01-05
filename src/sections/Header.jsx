import { useState, useEffect, useRef } from 'react';

import aboutImg from "../assets/images/header-nav/about.png";
import strengthsImg from "../assets/images/header-nav/strengths.png";
import skillsImg from "../assets/images/header-nav/skills.png";
import projectsImg from "../assets/images/header-nav/projects.png";
import contactImg from "../assets/images/header-nav/contact.png";

export default function Header({ sectionRefs }) {
  const sections = ["Hero", "About", "Strengths", "Skills", "Projects", "Contact"];
  const sectionImages = [null, aboutImg, strengthsImg, skillsImg, projectsImg, contactImg];

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
      }, { threshold: 0.33 }
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
      <header className="animate-entry-slidedown [animation-delay:1.5s] z-50 fixed top-0 left-0 w-full h-14 px-[7.5%] flex justify-between items-center transition-transform duration-160 md:h-16">
        <a className="cursor-pointer select-none font-body text-sm px-1.5 border whitespace-nowrap
                      hover:text-highlight-1 transition-[color] duration-150
                      sm:text-base md:text-lg lg:border-2"
           onClick={() => { sectionRefs.current[0].scrollIntoView({ behavior: "smooth", block: "center" }) }}
        >
          AGOT_
        </a>
        <nav ref={navRef} className="
          hidden
          md:relative md:flex md:mx-auto md:w-3/5 md:h-1/2 md:justify-between md:items-center md:gap-x-2
          lg:gap-x-6 lg:w-2/5
          xl:gap-x-10"
          onMouseLeave={() => { setHoverIndex(0); }}
        >
          <span ref={pillRef} className="hidden z-0 absolute h-full bg-gray-800 rounded-full origin-center transition duration-150 md:block"
                style={{ opacity: activeIndex === 0 && hoverIndex === 0 ? 0 : 1 }}>
          </span>
          {
            sections.map((section, i) => {
              if (i === 0) return null;
              else return (
                <a key={i} className="relative z-10 px-4 font-body cursor-pointer select-none animate-entry-slidedown"
                   style={{ animationDelay: `${1.6 + i * 0.15}s` }}
                   onClick={() => { sectionRefs.current[i].scrollIntoView({ behavior: "smooth", block: "center" }) }}
                   onMouseEnter={() => { setHoverIndex(i); }}>
                  {section}
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
      <div className={`
        fixed w-screen h-screen bg-black/70 md:hidden transition-opacity duration-150
        ${show ? "z-40" : "-z-10 opacity-0"}
      `}>
        <nav className="mx-auto w-3/5 h-full flex flex-col justify-center gap-1.5">
          {
            sections.map((section, i) => {
              if (i === 0) return null;
              else return (
                <a key={i}
                   className="relative border overflow-hidden first:rounded-t-xl last:rounded-b-xl"
                   onClick={() => { sectionRefs.current[i].scrollIntoView({ behavior: "smooth", block: "center" }) }}
                >
                  <img src={sectionImages[i]} alt={`${section} img`} className={`
                    object-cover object-top transition-all duration-150
                    ${activeIndex === i ? "aspect-3/1" : "aspect-9/2"}
                  `}/>
                  <div className={`
                    absolute top-0 left-0 size-full transition-colors duration-150
                    ${activeIndex === i ? "" : "bg-black/75"}
                  `}></div>
                  <span className="absolute top-1/2 left-1/2 -translate-1/2 px-4 py-1 bg-black/80 rounded-full font-body">
                    {section.toUpperCase()}
                  </span>
                </a>
              )
            })
          }
        </nav>
      </div>
    </>
  );
}