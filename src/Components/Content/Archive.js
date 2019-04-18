import React from 'react'

import SiteInfo from '../Base/SiteInfo'
import NavBar from '../NavBar/NavBar'


class Archive extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <React.Fragment>
        <NavBar />
        <div className="col-12 col-lg-9 row archive">
          <div className="archive-header col-12">
            <div className="archive-header-title"><p>归档</p></div>
            <div className="archive-content row justify-content-between">
              <div className="archive-header-resume col-12 col-lg-8 row">
                <p >
                  本博客最早一篇文章创建于 2008 年 7 月，当时我从自己开发的
                  ASP 博客系统迁到 WordPress，之前的文章未迁移。2013 年 3 月，
                  又从 WordPress 迁到自己开发的 Python 博客系统（详情），
                  文章迁移了一部分。2014 年初再次改用 NodeJS 重新开发了博客系统（详情）
                  ，数据完全保留，使用至今。
                  我有使用 Kindle 阅读的习惯，从 Paperwhite 到 Voyage 到 Oasis，
                  我都第一时间入手。几年下来，我在亚马逊和图灵社区购买并读过的 Kindle
                  版书籍加起来也有几十本了。如果你也喜欢用 Kindle 阅读，请下载本站合辑
                  Kindle 版。
                </p>
                <ul className="list-group border-0 pt-3">
                  <li>
                    <h3>2019</h3>
                    <ul>
                      <li className="pt-1"><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li className="pt-1"><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li className="pt-1"><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li className="pt-1"><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li className="pt-1"><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li className="pt-1"><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li className="pt-1"><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                    </ul>
                  </li>
                  <li className="pt-5">
                    <h3>2018</h3>
                    <ul>
                      <li><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                    </ul>
                  </li>
                  <li className="pt-5">
                    <h3>2017</h3>
                    <ul>
                      <li><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                    </ul>
                  </li>
                  <li className="pt-5">
                    <h3>2016</h3>
                    <ul>
                      <li><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                      <li><a href="#">这是一篇文章这是一篇文章</a>(2019-04-01)</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <ul className="list-group d-none d-lg-block col-lg-3">
                <li className="list-group-item">年份列表</li>
                <li className="list-group-item"><a href="#">2019</a></li>
                <li className="list-group-item"><a href="#">2019</a></li>
                <li className="list-group-item"><a href="#">2019</a></li>
                <li className="list-group-item"><a href="#">2019</a></li>
                <li className="list-group-item"><a href="#">2019</a></li>
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
