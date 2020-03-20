import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Corona Crusaders</h1>
        <p>
          Build your base. Protect your pod. Save the world.
        </p>
      </div>
    </div>
    {/* <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('mission')
            }}
          >
            Your Mission
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('apple')
            }}
          >
            Apple
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('android')
            }}
          >
            Android
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('future-missions')
            }}
          >
            Future Missions
          </button>
        </li>
      </ul>
    </nav> */}
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
