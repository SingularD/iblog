import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

class App extends React.Component {
  render() {
    return (
      <div className="App row">
        <div
          className="col-lg-3 bg-light d-none d-lg-block"
        >
          <div className="text-center">
            <h1>导航栏</h1>
          </div>
        </div>
        <div className="col-12 col-lg-9 bg-info row justify-content-center justify-content-lg-around ">
          <div className="col-8 overflow-auto">
            <h1>简介：</h1>
            <p>
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
          </div>
          <div className="col-3 d-none d-lg-block">
            <ul>
              <li>这是一篇文章</li>
              <li>这是一篇文章</li>
              <li>这是一篇文章</li>
              <li>这是一篇文章</li>
              <li>这是一篇文章</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


