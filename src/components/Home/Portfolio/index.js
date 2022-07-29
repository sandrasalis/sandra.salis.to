// NPM
import React from 'react'

// Components
import Idap from "./Idap"
import VoteCompass from "./VoteCompass"
import DegreeHub from "./DegreeHub"
import Polimeter from "./Polimeter"
import Echoes from "./Echoes"

const Porfolio = ({}) => {

  return (
    <section className="Porfolio CommonSection">
      <h3 className="CommonSection__title">
        portfolio
      </h3>

      <div className="PorfolioItems">
        <VoteCompass />
        <Idap />
        <DegreeHub />
        <Polimeter />
        <Echoes />
      </div>
    </section>
  )

}

export default Porfolio