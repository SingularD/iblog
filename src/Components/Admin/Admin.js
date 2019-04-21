import React from 'react'
import {BrowserRouter, Route, Link} from "react-router-dom";
import './style.css'


import AdminNav from './AdminNav'
import AdminHome from './AdminHome'

class Admin extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <AdminNav />
          <Route path="/admin/" component={AdminHome}/>
        </BrowserRouter>
      </React.Fragment>
    )
  }

}

export default Admin
