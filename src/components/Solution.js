import React from 'react'
import Map from '../components/Map'

function Solution() {
  return (
    <section id="solution">
      <div className="heading">
        <h2>Bring an Oasis into the Food Desert</h2>
        <div className="italic">An agricultural oasis can sprout from the most unlikely of settings </div>
      </div>
      <div clasName="content"></div>
      <div className="embed">
        <h3>Find the perfect plot of land for urban gardening!</h3>
        <div className="map">
          <Map/>
        </div>
      </div>
    </section>
  )
}

export default Solution
