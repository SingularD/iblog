import React from 'react'

import SiteInfo from "../Base/SiteInfo";
import NavBar from '../NavBar/NavBar'


class Category extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="col-12 col-lg-9 row category">
          <div className="category-header col-12">
            <div className="category-header-title"><p>专题</p></div>
            <div className="category-content row justify-content-between">
              <div className="category-header-resume col-12 col-lg-8 row">
                <p >
                  博客写了这么多年，数量一直没上去。大部分时候遇上有意思的东西，
                  研究明白之后只是多了几篇收藏，或者是 Evernote 里多了几段零散的记录，
                  又或者是电脑某个文件夹多了几个 Demo 文件。很难再有耐心和精力把整个过程记录一遍。
                  这里把本站部分文章以专题的形式整理出来，一方面方便新同学阅读，另一方面也希望借此激励自己：
                  能在这个浮躁的时代，坚持阅读和写作
                </p>
                <ul className="list-group border-0 pt-3">
                  <li>
                    <h3>HTTP相关</h3>
                    <p>博客写了这么多年，数量一直没上去。大部分时候遇上有意思的东西，
                      研究明白之后只是多了几篇收藏，或者是 Evernote 里多了几段零散的记录，
                    </p>
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
                    <h3>JAVA</h3>
                    <p>博客写了这么多年，数量一直没上去。大部分时候遇上有意思的东西，
                      研究明白之后只是多了几篇收藏，或者是 Evernote 里多了几段零散的记录，
                    </p>
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
                    <h3>数据结构</h3>
                    <p>博客写了这么多年，数量一直没上去。大部分时候遇上有意思的东西，
                      研究明白之后只是多了几篇收藏，或者是 Evernote 里多了几段零散的记录，
                    </p>
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
                    <h3>前端框架</h3>
                    <p>博客写了这么多年，数量一直没上去。大部分时候遇上有意思的东西，
                      研究明白之后只是多了几篇收藏，或者是 Evernote 里多了几段零散的记录，
                    </p>
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
                <li className="list-group-item">专题分类</li>
                <li className="list-group-item"><a href="#">HTTP相关</a></li>
                <li className="list-group-item"><a href="#">JAVA</a></li>
                <li className="list-group-item"><a href="#">数据结构</a></li>
                <li className="list-group-item"><a href="#">前端框架</a></li>
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

export default Category
