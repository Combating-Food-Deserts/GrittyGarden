import React from 'react'

function Facts() {
  return (
    <section>
      <div className="heading">
        <h2>Food deserts are also more likely to have</h2>
        <ul className="list">
          <li>Smaller populations.</li>
          <li>Lower levels of education among residents.</li>
          <li>Higher unemployment rates.</li>
          <li>Higher rates of vacant homes.</li>
          <li>Higher concentrations of minority residents.</li>
        </ul>
      </div>
      <div className="content">
        <div className="quote">
        “<span className="bold">50%</span> of all low-income zip codes with a median income under <span className="bold">$25,000</span> qualify as food deserts.”
        </div>
        <div className="quote">
        “children and adolescents consumed on average <span className="bold">12.4%</span> of their daily calories from fast food restaurants.”
        </div>
        <div className="quote">
        “Excessive weight may even increase your risk of cancer, with one study estimating <span className="bold">481,000</span> new cases of cancer  worldwide in 2012 were due to being overweight or obese.”
        </div>
      </div>
    </section>
  )
}

export default Facts
