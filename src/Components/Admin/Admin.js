import React from 'react'

class Admin extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <div className="admin-container col-12">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
              <div className="navbar-nav">
                <a className="nav-item nav-link" href="#">主页 <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="#">写作</a>
                <a className="nav-item nav-link" href="#">流量统计</a>
                <a className="nav-item nav-link" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
              </div>
          </nav>
        </div>
      </React.Fragment>
    )
  }

}

export default Admin
