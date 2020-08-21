import React from 'react'
import { Link } from "react-router-dom";

class AdminNav extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="admin-nav-container col-2 row justify-content-center bg-light">
        <div className="col-10 pt-5">
          <h2>后台管理</h2>
          <ul className="list-group admin-nav-link">
            <li className="list-group-item border-0"><Link to="/admin/">Home</Link></li>
            <li className="list-group-item border-0"><Link to="/admin/writing">写作</Link></li>
            <li className="list-group-item border-0"><Link to="/admin/edit">编辑</Link></li>
          </ul>
        </div>
      </div>
    )
  }

}

export default AdminNav
