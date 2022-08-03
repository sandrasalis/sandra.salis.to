// NPM
import React from 'react'

// Components
import VoteCompass from "./VoteCompass"
import DegreeHub from "./DegreeHub"
import Polimeter from "./Polimeter"

const Portfolio = ({ expanded }) => {
  return (
    <section className={ `Portfolio CommonSection ${ expanded ? "expanded" : "" }` }>
      <h3 className="CommonSection__title">
        portfolio
      </h3>

      <div className="PortfolioItems">
        <VoteCompass expanded={ expanded } />
        <DegreeHub expanded={ expanded }/>
        <Polimeter expanded={ expanded } />
      </div>
    </section>
  )
}

export default Portfolio
