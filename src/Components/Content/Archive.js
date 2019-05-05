import React from 'react'
import { archiveData } from "../../Data";
import {Link} from "react-router-dom";

import SiteInfo from './SiteInfo'
import NavBar from './NavBar'


class Archive extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      archiveTitle: '归档',
      archiveResume: archiveData.resume,
      archiveData: archiveData.archiveData
    }
  }

  render() {
    return(
      <React.Fragment>
        <NavBar />
        <div className="col-12 col-lg-9 row archive">
          <div className="archive-header col-12">
            <div className="archive-header-title"><p>{this.state.archiveTitle}</p></div>
            <div className="archive-content row justify-content-between">
              <div className="archive-header-resume col-12 col-lg-8 row">
                <p >
                  {this.state.archiveResume}
                </p>
                <ul className="list-group border-0 pt-3">
                  {
                    this.state.archiveData.map((item, index) => (
                      <li className="pt-5" key={index}>
                        <a name={item.year}></a>
                        <h3>{item.year}</h3>
                        <ul>
                          {
                            item.titleList.map((cell, _index) => (
                              <li className="pt-2" key={_index}>
                                <Link to={`/post/${cell.id}`}>
                                  {cell.title}
                                </Link>
                                ({cell.date})
                              </li>
                            ))
                          }
                        </ul>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <ul className="list-group d-none d-lg-block col-lg-3">
                <li className="list-group-item">年份列表</li>
                {
                  this.state.archiveData.map((item, index) => (
                    <li className="list-group-item" key={index}>
                      <a href={`#${item.year}`}>
                        {item.year}
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

export default Archive
