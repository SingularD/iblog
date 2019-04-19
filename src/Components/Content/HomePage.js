import React from 'react'
import PropTypes from 'prop-types'
import {DataHomepage} from "../../Data";

import PostItem from './PostItem'
import Footer from '../Base/Footer'
import SiteInfo from '../Base/SiteInfo'
import NavBar from '../NavBar/NavBar'

class HomePage extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      postList: DataHomepage,
      currentPage: 1
    }
  }


  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="col-12 col-lg-9 row
          justify-content-center justify-content-lg-around homepage">
          <ul className="list-group list-group-flush">
            {
              this.state.postList.map((item, index) => (
                <li className="list-group-item" key={index}>
                  <PostItem
                    id={item.id}
                    title={item.title}
                    date={item.date}
                    abstract={item.abstract}
                  />
                </li>
              ))
            }
          </ul>
          <Footer />
          <SiteInfo />
        </div>
      </React.Fragment>
    )
  }
}

export default HomePage
