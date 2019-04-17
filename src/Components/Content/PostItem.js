import React from 'react'
import PropTypes from 'prop-types'

class PostItem extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="post-item-container">

        <div className="post-item-header row justify-content-between">
          <div className="post-item-header-title col-12 col-lg-10">
            <h2>
              如何使用JavaScript如何使用JavaScript
            </h2>
          </div>
          <div className="post-item-header-date col-lg-2 d-none d-lg-block">
            <p>
              2019-4-19
            </p>
          </div>
        </div>

        <div className="post-item-content col-12">
          <p>
            今年早些时候，奇舞团开源的 Node.js 框架 ── ThinkJS 迎来了她的 3.0 版本。
            尽管今年我很少更新博客，但「每次 ThinkJS 发布大版本，我都要更新博客程序」
            的老传统还是不能丢。所以，你现在看到的这个博客，已经是基于 ThinkJS 3
            全面重构后的新版。
          </p>
        </div>

        <div className="post-item-footer col-12">
          <a href="#">继续阅读...</a>
        </div>
      </div>
    )
  }
}

export default PostItem
