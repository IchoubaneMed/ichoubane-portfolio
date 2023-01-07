import './App.css';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
