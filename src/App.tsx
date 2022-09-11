import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form id="test">
<input type="email" name="email" placeholder="email" aria-label="email"></input>
        </form>
        <p>
          I'm maezmac.
        </p>
        <a
          className="App-link"
          href="https://twitter.com/maezmac"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </header>
    </div>
  );
}

export default App;
