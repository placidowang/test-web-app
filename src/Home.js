import React from 'react';
import pika from './pikachu-lets-go.png';

const Home = () => <main className="App-main">
  <img src={pika} className="App-logo" alt="logo" />
  <h1>
    hi
  </h1>
  <p>
    Website coming soon. In the meantime, here's a silly video.
  </p>
  <div className='vidWrap'>
    {/* eslint-disable-next-line */}
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/j6LjqDd_QcU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>
</main>

export default Home;