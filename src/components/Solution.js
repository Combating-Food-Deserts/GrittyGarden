import React from 'react'
import Map from '../components/Map'
import Garden1 from '../img/garden1.jpg'
import Garden2 from '../img/garden2.jpg'
import Garden3 from '../img/garden3.jpg'

function Solution() {
  return (
    <section id="solution">
      <div className="heading">
        <h2>Bring an Oasis into the Food Desert</h2>
        <div className="italic">An agricultural oasis can sprout from the most unlikely of settings </div>
        <ul className="list">
          <li><strong>Home-grown:</strong> Create an abundance of fresh produce for your community.</li>
          <li><strong>Community-Led:</strong> Active participation is encouraged for all.</li>
          <li><strong>Inspire:</strong> Develop healthy habits for a positive impact on health and wellness</li>
          <li><strong>Empowerment:</strong> Create economic sustainability to uplift your community.</li>
        </ul>
      </div>
      <div className="content">
        <div className="gallery">
          <img src={Garden1} />
          <img src={Garden3} />
          <img src={Garden2} />
        </div>
      </div>
      <div className="embed">

        <div className="italic">Find the perfect plot of land for urban gardening!</div>
        <h3>The map of optimal urban gardening areas</h3>
        <div className="map">
          <Map/>
        </div>
      </div>
    </section>
  )
}

export default Solution
