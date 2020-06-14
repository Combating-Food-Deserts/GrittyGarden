import React from 'react';
import Chart from "chart.js";
import GoogleApiWrapper from './components/GoogleMap'
import Problems from './components/Problems'
import Solution from './components/Solution'
import Facts from './components/Facts'
import Logo from './img/logo.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="navbar">
        <div className="logo">
          {/* <h1>Gritty Garden</h1> */}
          <img src={Logo}/>
          <div className="italic">An Urban Gardening Movement</div>
        </div>
      </div>
      <section id="intro">
        <div className="heading">
          <h2>Do you live in a food desert?</h2>
          <div className="quote">According to USDA data, an estimated <span className="bold">7%</span> of the total U.S. population live in low-access areas. Roughly <span className="bold">35%</span> of LA residents live in a food desert.</div>
        </div>
        <div className="embed">
          <iframe src="https://www.google.com/maps/d/embed?mid=1YJWjdk3fFHmVgQKyMgZwnODWh5w"></iframe>
        </div>
      </section>
      <section id="definition">
        <div className="heading">
          <h2>What is a food desert?</h2>
          <div className="quote">The term “food desert” describes neighborhoods and communities that have limited access to affordable and nutritious foods like fruits, vegetables, and whole grains.</div>
        </div>
        <div className="embed">
          <h3>LA Food Desert Map</h3>

          <iframe src="https://www.youtube.com/embed/wAu8Noo8CxA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </section>
      <Facts />
      <Problems />
      <Solution />
      <section id="signup">
        <div className="heading">
          <h2>Get Involved!</h2>
          <p>Do you believe in the power of community-led urban agriculture?</p>
          <p>Contact your local rep to bring a Gritty Garden to your community.</p>
          <div className="quote">
            Text your 5 digit zip code to <span className="italic">(201) 928-5709.</span>
          </div>
        </div>
      </section>


    </div>
  );
}

export default App;
