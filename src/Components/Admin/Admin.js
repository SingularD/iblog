import React from 'react'
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import './style.css'


import AdminNav from './AdminNav'
import Statistics from './Statistics'
import Writing from './Writing'
import Edit from './Edit'
import EditItem from './EditItem'

class Admin extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <AdminNav />
          <Switch>
            <Route path="/admin/edit" component={Edit}/>
            <Route path="/admin/writing" component={Writing}/>
            <Route path="/admin/edit-item/:id" component={EditItem} />
            <Route path="/admin/" component={Statistics}/>
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
  }

}

export default Admin
