import './App.css';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Project from './components/projects/Projects';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
