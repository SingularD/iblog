import React from 'react'

import SiteInfo from '../Base/SiteInfo'
import NavBar from '../NavBar/NavBar'

class About extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="col-12 col-lg-9 row about">
          <div className="about-header col-12">
            <div className="about-header-title"><p>关于</p></div>
            <div className="about-content row justify-content-between">
              <div className="about-header-resume col-12 col-lg-8 row">
                <p >
                  声明：本站所有文章均为本人原创，仅代表个人思想，与其他任何人或组织无关！
                </p>
                <ul className="list-group border-0 pt-3">
                  <li>
                    <h3>个人介绍</h3>
                    <p>博客写了这么多年，数量一直没上去。大部分时候遇上有意思的东西，
                      研究明白之后只是多了几篇收藏，或者是 Evernote 里多了几段零散的记录，
                    </p>
                  </li>
                  <li className="pt-5">
                    <h3>版权声明</h3>
                    <p>博客写了这么多年，数量一直没上去。大部分时候遇上有意思的东西，
                      研究明白之后只是多了几篇收藏，或者是 Evernote 里多了几段零散的记录，
                    </p>
                  </li>
                  <li className="pt-5">
                    <h3>支持本站</h3>
                    <p>博客写了这么多年，数量一直没上去。大部分时候遇上有意思的东西，
                      研究明白之后只是多了几篇收藏，或者是 Evernote 里多了几段零散的记录，
                    </p>
                  </li>
                  <li className="pt-5">
                    <h3>关于本站</h3>
                    <p>博客写了这么多年，数量一直没上去。大部分时候遇上有意思的东西，
                      研究明白之后只是多了几篇收藏，或者是 Evernote 里多了几段零散的记录，
                    </p>
                  </li>
                </ul>
              </div>
              <ul className="list-group d-none d-lg-block col-lg-3">
                <li className="list-group-item">文章目录</li>
                <li className="list-group-item"><a href="#">个人介绍</a></li>
                <li className="list-group-item"><a href="#">版权说明</a></li>
                <li className="list-group-item"><a href="#">支持本站</a></li>
                <li className="list-group-item"><a href="#">关于本站</a></li>
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
