import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/NavBar/Navbar';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

function App() {
  
  return(
    <div className="App">
      <Navbar/>
      <div className='container'>
        <Hero/>
        <Skills/>
        < Projects />
        <ContactMe/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
