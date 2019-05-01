import React from 'react'
import { Redirect } from 'react-router-dom'

class Login extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      check: false
    }
    this.getUsername = this.getUsername.bind(this)
    this.getPassword = this.getPassword.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }
  getUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  getPassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  handleLogin() {
    const userInfo = {
      username: this.state.username,
      password: this.state.password
    }
    const check = {
      username: 'li',
      password: '123'
    }
    if (JSON.stringify(userInfo) === JSON.stringify(check)) {
      localStorage.setItem('iblog_login', 'true')
      this.setState({
        check: true
      })
    }
  }
  render() {
    return (
      <div className="login-container">
        <div className="login-input-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text d-none d-lg-block" id="basic-addon1">Username</span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              onChange={this.getUsername}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text d-none d-lg-block" id="basic-addon1">Password</span>
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={this.getPassword}
            />
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={this.handleLogin}
            >
              登录
            </button>
            {
              localStorage.getItem('iblog_login') === 'true' && this.state.check ?
                <Redirect to="/admin"/> : ''
            }
          </div>
        </div>
      </div>
    )
  }

}

export default Login
