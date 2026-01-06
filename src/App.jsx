import { useEffect, useRef } from "react";
import ClickSpark from './components/ClickSpark.jsx';
import Header from './sections/Header.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Strengths from './sections/Strengths.jsx';
import TechSkills from './sections/TechSkills.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
  // Attaching ref hooks per section for the nav bar scroll functionality
  const sectionRefs = useRef([]);
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
  };

  // This ref stores the div seen in the intro that hides the real background of the page
  const introRef = useRef(null);

  // This effect is for executing code when the page freshly loads
  useEffect(() => {

    // Initialize an IntersectionObserver. This triggers animations when elements enter the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {                     // If the element enters the viewport,
            entry.target.classList.add("animate-play");   // play its animation
            observer.unobserve(entry.target);             // Then stop observing the element
          }
        })
      }, { threshold: 0.15 }    // 15% of the element must be visible for it to trigger
    )
    // Observe all elements that have an entry animation
    document.querySelectorAll('[class*="animate-entry-"]').forEach(el => observer.observe(el));

    // Upon page load, automatically scroll to the top of the page (prevents scroll position from being retained across refreshes)
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    document.body.style.overflow = "hidden";
    window.scrollTo(0,0);

    // Wait for the intro animations to finish, then remove the introduction div and allow user to scroll
    setTimeout(() => {
      introRef.current.style.opacity = 0;
      document.body.style.overflow = "visible";
      setTimeout(() => introRef.current.remove(), 500);
    }, (window.innerWidth < 640 ? 3000 : 3500));

    return () => observer.disconnect();
  }, []);


  return (
    // Disclaimer: the ClickSpark element was taken from reactbits.dev
    <ClickSpark sparkSize={8} sparkRadius={35} duration={400}>
      <div ref={introRef} className="-z-1 fixed size-full bg-radial from-primary-1 to-secondary-2 transition-opacity duration-500"></div>

      {/* Pass sectionRefs to the header to be used by nav links, then add each section to sectionRefs via addToRefs function */}
      <Header sectionRefs={sectionRefs} />
      <Hero ref={addToRefs} />
      <div className="px-8 sm:px-12 md:px-16 lg:px-20 xl:px-56">
        <About ref={addToRefs} />
        <Strengths ref={addToRefs} />
        <TechSkills ref={addToRefs} />
        <Projects ref={addToRefs} />
        <Contact ref={addToRefs} />
      </div>
      <Footer/>
    </ClickSpark>
  );
}