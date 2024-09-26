import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tanvir Bhathal</h1>
      </header>
      <main>
        <Home />
        <About />
        <Experience />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
