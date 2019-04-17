import React from 'react'
import PropTypes from 'prop-types'

class Footer extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="footer-container col-12 row justify-content-between">
        <div className="footer-page-turning col-12 row">
          <div className="col-4 text-left">
            <a href="#">上一页</a>
          </div>
          <div className="col-4 text-center">
            <a href="#">博客归档</a>
          </div>
          <div className="col-4 text-right">
            <a href="#">下一页</a>
          </div>
        </div>
      </div>
    )
  }
}
export default Footer
