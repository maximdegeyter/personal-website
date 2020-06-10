import { Link } from "gatsby"
import React from "react"
import Image from "../components/image"
import "./header.css"

const Header = () => (
  <header>
    <h1 className="header--title">Maxim De Geyter</h1>
    <div className="header--wrap">
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <div className="header--img">
          <Image />
        </div>
      </Link>
      <nav>
        <Link activeClassName="navItem__active" to="/">
          Home
        </Link>
        <Link activeClassName="navItem__active" to="/projects/">
          Projects
        </Link>
        <Link activeClassName="navItem__active" to="/contact/">
          Contact
        </Link>
        <Link activeClassName="navItem__active" to="/blog/">
          Blog
        </Link>
      </nav>
    </div>
  </header>
)

export default Header
