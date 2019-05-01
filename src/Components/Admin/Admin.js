import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import './style.css'


import AdminNav from './AdminNav'
import Statistics from './Statistics'
import Writing from './Writing'
import Edit from './Edit'
import EditItem from './EditItem'

class Admin extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      login: ''
    }
  }
  componentWillMount() {
    this.setState({
      login: localStorage.getItem('iblog_login')
    })
  }

  render() {
    return (
      <React.Fragment>
      {
        this.state.login === 'true' ?
            <BrowserRouter>
              <AdminNav />
              <Switch>
                <Route path="/admin/edit" component={Edit}/>
                <Route path="/admin/writing" component={Writing}/>
                <Route path="/admin/edit-item/:id" component={EditItem} />
                <Route path="/admin/" component={Statistics}/>
              </Switch>
            </BrowserRouter>
           :
          <Redirect to="/login"/>
      }
      </React.Fragment>
    )
  }

}

export default Admin
