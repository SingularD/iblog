import React from 'react'
import {categoryData} from "../../Data";
import {Link} from "react-router-dom";

import SiteInfo from "./SiteInfo";
import NavBar from './NavBar'


class Category extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      categoryTitle: '专题',
      categoryResume: categoryData.resume,
      categoryData: categoryData.categoryData
    }
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="col-12 col-lg-9 row category">
          <div className="category-header col-12">
            <div className="category-header-title"><p>{this.state.categoryTitle}</p></div>
            <div className="category-content row justify-content-between">
              <div className="category-header-resume col-12 col-lg-8 row">
                <p >{this.state.categoryResume}</p>
                <ul className="list-group border-0 pt-3">
                  {
                    this.state.categoryData.map((item, index) => (
                      <li className="pb-5" key={index}>
                        <a name={item.categoryTitle}></a>
                        <h3>{item.categoryTitle}</h3>
                        <p>{item.categoryResume}</p>
                        <ul>
                          {
                            item.titleList.map((cell, _index) => (
                              <li className="pt-2" key={_index}>
                                <Link to={`/post/${cell.id}`}>
                                  {cell.title}
                                </Link>
                                {cell.date}
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
                <li className="list-group-item">专题分类</li>
                {
                  this.state.categoryData.map((item, index) => (
                    <li className="list-group-item" key={index}>
                      <a href={`#${item.categoryTitle}`}>
                        {item.categoryTitle}
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

export default Category
