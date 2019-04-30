import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

class PostItem extends React.Component{
  render() {
    const { id, title, date, abstract } = this.props
    return (
      <div className="post-item-container">

        <div className="post-item-header row justify-content-between">
          <div className="post-item-header-title col-12 col-lg-10">
            <h3>
              {title}
            </h3>
          </div>
          <div className="post-item-header-date col-lg-2 col-12">
            <p>
              {date}
            </p>
          </div>
        </div>

        <div className="post-item-content col-sm-12 d-none d-sm-block">
          <p>
            {abstract}
          </p>
        </div>

        <div className="post-item-footer col-12">
          <Link to={`/post/${id}`}>继续阅读...</Link>
        </div>
      </div>
    )
  }
}
PostItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  abstract: PropTypes.string
}

export default PostItem
