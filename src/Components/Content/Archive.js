import React from 'react'
import {DataArchive} from "../../Data";
import {Link} from "react-router-dom";

import SiteInfo from '../Base/SiteInfo'
import NavBar from '../NavBar/NavBar'


class Archive extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      archiveTitle: '归档',
      archiveResume: '本博客最早一篇文章创建于 2008 年 7 月，当时我从自己开发的\n' +
        '                  ASP 博客系统迁到 WordPress，之前的文章未迁移。2013 年 3 月，\n' +
        '                  又从 WordPress 迁到自己开发的 Python 博客系统（详情），\n' +
        '                  文章迁移了一部分。2014 年初再次改用 NodeJS 重新开发了博客系统（详情）\n' +
        '                  ，数据完全保留，使用至今。\n' +
        '                  我有使用 Kindle 阅读的习惯，从 Paperwhite 到 Voyage 到 Oasis，\n' +
        '                  我都第一时间入手。几年下来，我在亚马逊和图灵社区购买并读过的 Kindle\n' +
        '                  版书籍加起来也有几十本了。如果你也喜欢用 Kindle 阅读，请下载本站合辑\n' +
        '                  Kindle 版。',
      archiveData: DataArchive
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
