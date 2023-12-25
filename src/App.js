import './components/Navbar/Navbar'
import Navbar from './components/Navbar/Navbar';
import styles from './App.module.css';
import Hero from './components/Hero/Hero';
import About from './components/About/about';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className= {styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <Project/>
    <Contact/>
    </div>
  );
}

export default App;
