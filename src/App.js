import logo from './logo.svg';
import './App.css';
import Navbar from './comp/Navbar';
import HeroSection from './comp/HeroSection';
import Skills from './comp/Skills';
import Work from './comp/Work';
import Contact from './comp/Contact';
import Footer from './comp/Footer';
import Life from './comp/Life';
import About from './comp/About';
import ResumePage from './Pages/ResumePage';

function App() {
  return (
    <div className="App bg-white md:w-[70vw] mx-auto w-full text-red-500  scroll-smooth md:scroll-auto">
      <Navbar />
      <HeroSection />
      <About />
      <Life />
      <Skills />
      <Work />
      <Contact />
      <Footer />
      {/* <ResumePage/> */}
    </div>
  );
}

export default App;
