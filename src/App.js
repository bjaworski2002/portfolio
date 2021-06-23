import './App.css';
import React from "react";
import Header from "./header/Header"
import { Helmet } from 'react-helmet'
import Body from "./body/Body";
import Projects from "./projects/Projects";
function App() {

  return (
  <React.Fragment>
      <Helmet>
          <title>{ "Portfolio - Bartosz Jaworski" }</title>
      </Helmet>
      <Header />
      <Body />
      <Projects />
  </React.Fragment>
  );
}

export default App;
