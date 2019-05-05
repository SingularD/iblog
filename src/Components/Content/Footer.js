import React from 'react'
import { Link } from "react-router-dom";

class Footer extends React.Component{
  render() {
    return (
      <div className="footer-container col-12 row justify-content-between">
        <div className="footer-page-turning col-12 row">
          <div className="col-4 text-left">
            <a href="#">上一页</a>
          </div>
          <div className="col-4 text-center">
            <Link to="/archive">归档</Link>
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
