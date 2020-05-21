import React from "react";
import "./App.css";
import MyProject from "./Components/MyProject";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navbar />
      <Landing />
      <MyProject />
    </div>
  );
}

export default App;
