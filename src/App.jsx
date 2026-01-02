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
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>

      <div className="h-screen"></div>

      <Footer/>
    </ClickSpark>
  );
}