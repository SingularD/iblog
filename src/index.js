import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import 'highlight.js/styles/github.css'

import HomePage from './Components/Content/HomePage'
import Archive from './Components/Content/Archive'
import Category from './Components/Content/Category'
import FriendLink from './Components/Content/FriendLink'
import About from './Components/Content/About'
import Initialize from './Components/Initialize/Initialize'
import Admin from './Components/Admin/Admin'
import Login from './Components/Admin/Login'
import Search from './Components/Content/Search'
import Post from './Components/Content/Post'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <div className="App row">
            <Switch>
              <Route path="/search" component={Search}/>
              <Route path="/post/:id?" component={Post}/>
              <Route path="/login" component={Login}/>
              <Route path="/initialize" component={Initialize}/>
              <Route path="/admin" component={Admin}/>
              <Route path="/friend-link" component={FriendLink}/>
              <Route path="/about" component={About}/>
              <Route path="/archive" component={Archive}/>
              <Route path="/category" component={Category}/>
              <Route path="/" component={HomePage}/>
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


