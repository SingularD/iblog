import React from 'react'

import NavBar from '../NavBar/NavBar'
import SiteInfo from '../Base/SiteInfo';
import PostItem from '../Content/PostItem'

class Search extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <React.Fragment>
        <NavBar />
        <div className="col-12 col-lg-9 row search">
          <div className="search-header col-12">
            <div className="search-header-title"><p>站内搜索</p></div>
            <div className="search-content">
              <div className="input-group mb-3 pl-3">
                <input type="text" className="form-control" placeholder="请输入关键字..."/>
                  <div className="input-group-append">
                    <button className="btn btn-primary">搜索</button>
                  </div>
              </div>
              <div className="search-hot-words pl-3">
                <p>搜索热词：HTTP、JAVA、ReactJs...</p>
              </div>
              <ul className="list-group list-group-flush search-list">
                <li className="list-group-item">
                  <PostItem />
                </li>
                <li className="list-group-item">
                  <PostItem />
                </li>
                <li className="list-group-item">
                  <PostItem />
                </li>
                <li className="list-group-item">
                  <PostItem />
                </li>
              </ul>
            </div>
          </div>
          <SiteInfo />
        </div>
      </React.Fragment>
    )
  }
}

export default Search
