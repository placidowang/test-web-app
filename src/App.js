import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='https://img.pokemondb.net/artwork/large/pikachu-lets-go.jpg' className="App-logo" alt="logo" />
        <h1>
          hi
        </h1>
        <p>
          Nothing to see here. Here's a silly video instead.
        </p>
        {/* eslint-disable-next-line */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/j6LjqDd_QcU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </header>
    </div>
  );
}

export default App;
