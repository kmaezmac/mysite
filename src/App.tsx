import React from 'react';
import logo from './logo.png';
import './App.css';
import Typewriter from 'typewriter-effect';


function App() {
 const typewriter = (<Typewriter
  options={{
    strings: ['I\'m maezmac.'],
    autoStart: true,
    loop: true,
  }}
/>);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {typewriter}
        <form id="mainForm">
          <div className="inputform">
            <input type="email"  name="email" placeholder="email" aria-label="email"></input>
          </div>
          <div className="inputform">
            <input type="password" name="password" placeholder="password" aria-label="password"></input>
          </div>
        </form>
        <div id="forgot">
          Forgot me?
        </div>
        <button>Sign In</button>
        <div id="signUp">
          Sign Up?
        </div>
      </header>
    </div>
  );
}

export default App;