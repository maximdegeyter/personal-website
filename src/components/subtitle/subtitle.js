import React from "react"
import PropTypes from "prop-types"
import "./subtitle.css"

const SubTitle = title => (
  <h3 className="title--section">
    <span>{"<"}</span> {title.title} <span>{">"}</span>
  </h3>
)

SubTitle.defaultProps = {
  title: ``,
}

SubTitle.propTypes = {
  title: PropTypes.string,
}

export default SubTitle
