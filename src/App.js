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
        <div className='vidWrap'>
          {/* eslint-disable-next-line */}
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/j6LjqDd_QcU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </header>
    </div>
  );
}

export default App;
