import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

class NavBar extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="col-lg-3 bg-light d-none d-lg-block"
        >
          <div className="text-center">
            <h1>导航栏</h1>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default NavBar
