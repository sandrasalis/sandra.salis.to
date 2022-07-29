// NPM
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

// Components
import Header from "src/components/Header"

// Styles
import "src/styles/index.scss"

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas)
library.add(fab)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>
          { children }
        </main>
        <footer>
          <nav className="navbar is-light">
            <div className="navbar-brand">
              <div className="navbar-item">
                <StaticImage 
                  src="../images/sailias.png" 
                  alt="Jon Salis"
                />
              </div>
              <div className="navbar-item">
                Jon Salis
              </div>
            </div>
          </nav>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
