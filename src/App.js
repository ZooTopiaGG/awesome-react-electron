import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
// import Router from 'router/index';
import Home from 'views/home/index';
import 'assets/css/reset.css';
import 'assets/css/common.css';
import './App.less';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Home />
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
