import React from 'react'

import NavBar from './NavBar'


class FriendLink extends React.Component{
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="col-12 col-lg-9 row friend-link">
          <h1>尚未开放，请期待...</h1>
        </div>
      </React.Fragment>
    )
  }
}

export default FriendLink
