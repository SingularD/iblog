import React from 'react'
import { Link } from "react-router-dom";
import { navbarData } from "../../Data";

import GithubUrl from '../../assets/images/github.png'
import RssUrl from '../../assets/images/rss.png'
import SearchUrl from '../../assets/images/search.png'


class NavBar extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      portraitUrl: navbarData.portraitUrl,
      username: navbarData.username,
      resume: navbarData.resume,
      githubUrl: navbarData.githubUrl,
      rssUrl: navbarData.rssUrl
    }
  }

  render() {
    return (
        <div
          className="col-lg-3 bg-light
          d-lg-block nav-bar"
        >
          <div className="nav-bar-container">
            <div className="nav-bar-head-portrait">
              <img src={this.state.portraitUrl} alt="头像"/>
            </div>
            <div className="nav-bar-resume">
              <h3>{this.state.username}</h3>
              <p>{this.state.resume}</p>
            </div>
            <div className="nav-bar-links">
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-0"><Link to="/">首页</Link></li>
                <li className="list-group-item border-0"><Link to="/archive">归档</Link></li>
                <li className="list-group-item border-0"><Link to="/category">专题</Link></li>
                <li className="list-group-item border-0"><Link to="/friend-link">友链</Link></li>
                <li className="list-group-item border-0"><Link to="/about">关于</Link></li>
              </ul>
            </div>
            <div className="nav-bar-hrefs">
              <a href={this.state.githubUrl}>
                <img src={GithubUrl} alt="github"/>
              </a>
              <img src={RssUrl} alt="rss"/>
              <Link to="/search">
                <img src={SearchUrl} alt="search"/>
              </Link>
            </div>
          </div>
        </div>
    )
  }
}

export default NavBar
