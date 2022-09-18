import React from 'react';
import './App.css';
import Typewriter from 'typewriter-effect';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Photo } from "./Photo";

function App() {
  return (
    <Routes>
      <Route path="/mysite" element={<Home />} />
      <Route path="/mysite/photo" element={<Photo />} />
    </Routes>
  );
}

export default App;