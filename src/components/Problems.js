import React from 'react'
import { Polygon } from 'google-maps-react'

function Problems() {
  return (
    <section id="problems">
        <div className="heading">
          <h2>What are the problems of food deserts?</h2>
          <p>It has impact on health, education, crime, etc...(write a general statement of issues)</p>
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
            <h3>Crime</h3>
            <p>Crime is tied to poverty.  A feature of poverty is lack of adequate access to food.  More food that floods the community, the less that feature will contribute to crime, cutting back on crime overall.</p>
          </div>
          <div className="half">
            <h3>Poverty</h3>
            <p>
            The wish is to eradicate all poverty.  While doing so, a feature of poverty we want to tackle is hunger.  No low income family should ever feel they should go without food or have low quality food.  Community gardens in conjunction with an earth that is plentiful in producing food will conquer hunger and lack of nutrition.
            </p>
          </div>
      </div>
    </section>
  )
}

export default Problems
