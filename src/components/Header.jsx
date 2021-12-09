import React from "react"
import { Link } from "react-router-dom"

import PropTypes from "prop-types"

import "./Header.scss"

const Header = ({ search, setSearch }) => {
  const handleChange = e => {
    setSearch(e.target.value)
  }

  return (
    <header className="header">
      <Link to="/" className="header__brand">
        Wookie <br />
        Movies
      </Link>
      <div className="header__search">
        <span>
          <i className="fas fa-search" />
        </span>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
        />
      </div>
    </header>
  )
}

Header.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
}

export default Header
