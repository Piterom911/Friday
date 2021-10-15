import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

function App() {
  return (
    <div className="App">
      <HashRouter>
        {/*<Provider store={'1'}>*/}
          Main
        {/*</Provider>*/}
      </HashRouter>
    </div>
  );
}

export default App;
