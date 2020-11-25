import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const test = () => {
  console.log('test');
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </div>
    </Router>
  );
}

export default App;
