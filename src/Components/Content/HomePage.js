import React from 'react'
import PropTypes from 'prop-types'

import PostItem from './PostItem'
import Footer from '../Base/Footer'

class HomePage extends React.Component{
  constructor(props) {
    super(props)
  }

  list(n) {
    let arr = []
    for (let i = 0; i < n; i++) {
      arr.push(<li className="list-group-item"><PostItem /></li>)
    }
    return arr
  }


  render() {
    return (
      <React.Fragment>
        <div className="col-12 col-lg-9 row
        justify-content-center justify-content-lg-around homepage ">
          <ul className="list-group list-group-flush">
            {
              this.list(8)
            }
          </ul>
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

export default HomePage
