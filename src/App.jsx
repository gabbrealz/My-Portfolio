import ClickSpark from './components/ClickSpark.jsx';
import Header from './sections/Header.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './sections/Footer.jsx';

export default function App() {
  return (
    <ClickSpark sparkSize={8} sparkRadius={25} duration={200}>
      <Header/>
      <Hero/>
      <span className="block h-[5vh] sm:h-[10vh] md:h-[15vh] lg:h-[20vh] xl:h-[25vh]"></span>
      <div className="px-8 sm:px-12 md:px-16 lg:px-20 xl:px-56">
        <About/>
        <span className="block h-[20vh] sm:h-[25vh] md:h-[30vh] lg:h-[40vh] xl:h-[45vh]"></span>
        <Skills/>
        <span className="block h-[20vh] sm:h-[25vh] md:h-[30vh] lg:h-[40vh] xl:h-[45vh]"></span>
        <Projects/>
        <span className="block h-[20vh] sm:h-[25vh] md:h-[30vh] lg:h-[40vh] xl:h-[45vh]"></span>
        <Contact/>
      </div>
      <span className="block h-[5vh] sm:h-[10vh] md:h-[15vh] lg:h-[20vh] xl:h-[25vh]"></span>
      <Footer/>
    </ClickSpark>
  );
}