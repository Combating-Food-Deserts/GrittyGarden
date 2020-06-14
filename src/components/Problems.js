import React from 'react'
import { Polygon } from 'google-maps-react'

function Problems() {
  return (
    <section id="problems">
        <div className="heading">
          <h2>The Socio-Economic Impact of Food Deserts</h2>
        </div>
        <div className="content">
          <div className="half">
            <h3>Health</h3>
            <p>People often do not know the nutritional benefits of simple fruits and vegetables.  Those who grow up in food deserts view the food culture in their neighborhood as normal.  Living in a food desert is shown to exacerbate pre-existing medical conditions such as cardiovascular diseASE, diabetes.</p>
            <p>[charts or graphs]</p>
            <p>According to food desert researchers, when more healthy options come into the neighborhood the level of hospital for chronic disease declines. </p>
          </div>
          <div className="half">
            <h3>Commerce</h3>
            <p>There are not enough businesses in the local community in the food desert to sustain a healthy local economy.  More stores, restaurants, and urban farmers will bring jobs to this community.</p>
          </div>
          <div className="half">
            <h3>Education</h3>
            <p>
            Our children are suffering and developing very unhealthy habits and views towards food and nutrition.  We flood schools in food deserts and seek to add Urban Gardening and Black Entrepreneurship to the curriculum.  We want the ocal community on board and involved en masse!
            </p>
          </div>
          <div className="half">
            <h3>Poverty & Crime</h3>
            <p>
            There is a correlation between poverty and violent crime rate. A distinct feature of poverty is lack of adequate access to food. Take active steps toward eradicating food insecurity and poverty. No family should have to go without food or have access to low-quality food. Prioritize ways to provide aid, services, outreach in communities to mitigate the triggers that often contribute to crime.

            </p>
          </div>
      </div>
    </section>
  )
}

export default Problems
