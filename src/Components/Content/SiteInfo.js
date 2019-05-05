import React from 'react'

import { siteInfo } from "../../Data";

class SiteInfo extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      siteInfoHeader: siteInfo.siteInfoHeader,
      siteInfoFooter: siteInfo.siteInfoFooter
    }
  }
  render() {
    return (
      <div className="site-info-container col-12 row
      justify-content-center align-items-center
      border-top pt-4
      ">
        <p className="site-info-header">{this.state.siteInfoHeader}</p>
        <p className="site-info-footer">{this.state.siteInfoFooter}</p>
      </div>
    )
  }
}

export default SiteInfo
