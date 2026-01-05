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
  const sectionRefs = useRef([]);
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
  };

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0,0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-play");
            observer.unobserve(entry.target);
          }
        })
      }, { threshold: 0.15 }
    )
    document.querySelectorAll('[class*="animate-entry-"]').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <ClickSpark sparkSize={8} sparkRadius={35} duration={400}>
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