import React from 'react';
import Chart from "chart.js";
import GoogleApiWrapper from './components/Map'
import Problems from './components/Problems'
import Facts from './components/Facts'
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="navbar">
        <div className="logo">
          <h1>Gritty Garden</h1>
        </div>
      </div>
      <section id="intro">
        <div className="heading">
          <h2>Do you live in a food desert?</h2>
          <p>If you live on the Southside of Chicago, South Central LA, or parts of East New York then likely you do!</p>
        </div>
        <div className="embed">
          <iframe src="https://www.google.com/maps/d/embed?mid=1YJWjdk3fFHmVgQKyMgZwnODWh5w"></iframe>
        </div>
      </section>
      <section id="definition">
        <div className="heading">
          <h2>What is a food desert?</h2>
          <p>Food deserts are generally considered to be places where residents don’t have access to affordable nutritious foods like fruits, vegetables, and whole grains.</p>
        </div>
        <div className="embed">
          <iframe src="https://www.youtube.com/embed/wAu8Noo8CxA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </section>
      <Facts />
      <Problems />
      <section id="solution">
        <div className="heading">
          <h2>Urban Gardening is Our Solution!</h2>
          <p>Find the perfect plot of land for urban gardening! - grow a garden in any urban setting.</p>
        </div>
        <div className="embed">
          <div className="map">
            <GoogleApiWrapper />
          </div>
        </div>
      </section>
      <section id="signup">
        <div className="heading">
          <h2>Get Involved!</h2>
          <p>Do you believe in the power of community-led urban agriculture?</p>
          <p>Contact your local rep to bring a Gritty Garden to your community.</p>
          <h4>Text your 5 digit zip code to (201) 928-5709.</h4>
        </div>
      </section>


    </div>
  );
}

export default App;
