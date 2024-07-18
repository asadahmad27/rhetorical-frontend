/* eslint-disable */

import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Background from "./components/pages/Background";

function App({ socket }) {
  return (
    <div className="App">
      <div className="Content">
        <Routes>
          <Route exact path="/" element={<Home socket={socket} />} />
          <Route exact path="/background" element={<Background />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
