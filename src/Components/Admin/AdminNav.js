import React from 'react'

class AdminNav extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="admin-nav-container col-2 row justify-content-center bg-light">
        <div className="col-10">
          <h2>后台管理</h2>
          <ul className="list-group admin-nav-link">
            <li className="list-group-item border-0">首页</li>
            <li className="list-group-item border-0">首页</li>
            <li className="list-group-item border-0">首页</li>
            <li className="list-group-item border-0">首页</li>
          </ul>
        </div>
      </div>
    )
  }

}

export default AdminNav
