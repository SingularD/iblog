import React from 'react'
import {categoryData} from "../../Data";
import {Link} from "react-router-dom";

import SiteInfo from "../Base/SiteInfo";
import NavBar from '../NavBar/NavBar'


class Category extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      categoryTitle: '专题',
      categoryResume: '博客写了这么多年，数量一直没上去。大部分时候遇上有意思的东西，\n' +
        '                  研究明白之后只是多了几篇收藏，或者是 Evernote 里多了几段零散的记录，\n' +
        '                  又或者是电脑某个文件夹多了几个 Demo 文件。很难再有耐心和精力把整个过程记录一遍。\n' +
        '                  这里把本站部分文章以专题的形式整理出来，一方面方便新同学阅读，另一方面也希望借此激励自己：\n' +
        '                  能在这个浮躁的时代，坚持阅读和写作',
      categoryData: categoryData
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
