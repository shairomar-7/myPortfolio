import React from 'react';
import './styles.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Interests from './components/Interests';
import Footer from './components/Footer';

const App: React.FC = () => (
  <div>
    <Header />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Interests />
    <Footer />
  </div>
);

export default App;
