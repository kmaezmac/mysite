import React from 'react';
import logo from './logo.png';
import Typewriter from 'typewriter-effect';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  Photo
} from "./Photo"

export const Home: React.VFC = () => {
  const typewriter = (<Typewriter
    options={{
      strings: ['I\'m maezmac.'],
      autoStart: true,
      loop: true,
    }}
  />);
  return <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {typewriter}
      <form id="mainForm">
        <div className="inputform">
          <input type="email" name="email" placeholder="email" aria-label="email"></input>
        </div>
        <div className="inputform">
          <input type="password" name="password" placeholder="password" aria-label="password"></input>
        </div>
      </form>
      <a id="twitter" href="https://twitter.com/maezmac" target="_blank">
        Twitter
        </a>
      <button>About Me</button>
      <Link to="/mysite/photo" id="photos" target="_blank">Photos</Link>
    </header>
  </div>
};