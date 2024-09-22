import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/education" component={Education} />
                <Route path="/experience" component={Experience} />
                <Route path="/projects" component={Projects} />
                <Route path="/skills" component={Skills} />
                <Route path="/contact" component={Contact} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;