// NPM
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Hero = () => {
  return (
    <section className="Hero">
      <div className="columns">
        <div className="column is-6">
          <h1 className="Hero__title">
            Jon Salis
          </h1>

          <h2 className="Hero__subtitle">
            Chief Technology Officer, full-stack developer with 15 years of experience
          </h2>

          <div className="Hero__contact">
            <a href="mailto:jon@salis.to">
              <FontAwesomeIcon icon={ ["fas", "envelope"] } />
            </a>

            <a href="https://linkedin.com/in/jonathan-salis-a9567147" target="_blank">
              <FontAwesomeIcon icon={ ["fab", "linkedin"] } />
            </a>

            <a href="https://github.com/sailias" target="_blank">
              <FontAwesomeIcon icon={ ["fab", "github"] } />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero