import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Link from "@jsport/lordgun-design-system-link";
import Button from "@jsport/lordgun-design-system-button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link> - Hello Link</Link>
            <Button> - Hello Button</Button>
          </a>
        </header>
      </div>
    );
  }
}

export default App;
