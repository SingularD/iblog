import React from 'react'
import {aboutData} from "../../Data";

import SiteInfo from '../Base/SiteInfo'
import NavBar from '../NavBar/NavBar'

class About extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      aboutTitle: '关于',
      aboutResume: '声明：本站所有文章均为本人原创，仅代表个人思想，与其他任何人或组织无关',
      aboutData: aboutData
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="col-12 col-lg-9 row about">
          <div className="about-header col-12">
            <div className="about-header-title"><p>{this.state.aboutTitle}</p></div>
            <div className="about-content row justify-content-between">
              <div className="about-header-resume col-12 col-lg-8 row">
                <p >
                  {this.state.aboutResume}
                </p>
                <ul className="list-group border-0 pt-3">
                  {
                    this.state.aboutData.map((item, index) => (
                      <li className="pt-5" key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.content}</p>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <ul className="list-group d-none d-lg-block col-lg-3">
                <li className="list-group-item">文章目录</li>
                {
                  this.state.aboutData.map((item, index) => (
                    <li className="list-group-item" key={index}>
                      <a href={`#${item.title}`}>
                        {item.title}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <SiteInfo />
        </div>
      </React.Fragment>
    )
  }
}

export default About
