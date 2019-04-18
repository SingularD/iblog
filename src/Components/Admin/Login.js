import React from 'react'

class Login extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-input-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text d-none d-lg-block" id="basic-addon1">Username</span>
            </div>
            <input type="text" className="form-control" placeholder="Username" />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text d-none d-lg-block" id="basic-addon1">Password</span>
            </div>
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <div>
            <button className="btn btn-primary">登录</button>
          </div>
        </div>
      </div>
    )
  }

}

export default Login
