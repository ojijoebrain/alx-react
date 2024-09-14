import React from 'react';
import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">email:</label>
        <input type="email" id="email" />
        <br />
        <label htmlFor="password">password:</label>
        <input type="password" id="password" name="password" />
        <br />
        <button type="button">Ok</button>
      </div>
      <div className="App-footer">
        <p>© {getFullYear()} - {getFooterCopy(false)}</p>
      </div>
    </div>
  );
}

export default App;
