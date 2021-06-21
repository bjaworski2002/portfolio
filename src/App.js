import './App.css';
import React from "react";
import Header from "./header/Header"
import Body from "./body/Body";
import Projects from "./projects/Projects";
function App() {
  return (
  <React.Fragment>
      <Header />
      <Body />
      <Projects />
  </React.Fragment>
  );
}

export default App;
