import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

import NavBar from './Components/NavBar/NavBar'
import HomePage from './Components/Content/HomePage'

class App extends React.Component {
  render() {
    return (
      <div className="App row">
        <NavBar />
        <HomePage />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


