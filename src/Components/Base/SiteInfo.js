import React from 'react'
import PropTypes from 'prop-types'


class SiteInfo extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="site-info-container col-12 row
      justify-content-center align-items-center
      border-top pt-4
      ">
        <p>© 2019 - 225 的小站 - 京 ICP 备2016100104号</p>
        <p>Powered by Bootstrap & React JS</p>
      </div>
    )
  }
}

export default SiteInfo
