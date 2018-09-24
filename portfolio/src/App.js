import React, { Component } from "react";
import logo from "./logo.svg";
import stamp from "./stamp.svg";
import squiggly from "./squiggly.svg";
import "./App.css";
import "./App.scss";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-social">
            <a className="highlightbkg-y" href="mailto:llp@lillianlepham.com" target="_blank" rel="noopener noreferrer">EMAIL</a>
            <a className="highlightbkg-y" href="https://www.linkedin.com/in/lillianlpham/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
            <a className="highlightbkg-y" href="https://www.instagram.com/lilphammy" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
          </div>
          <h1 className="App-intro">THE BRAND</h1>
            <img src={squiggly} className="squiggly" alt="line vector" />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-subtitle">developer + creative</h1>
          <div className="App-menu">
            <div className="col">
              <a className="highlight-yellow" href="#about" rel="noopener noreferrer">01. about</a>
              <a className="highlight-blue" href="#web" rel="noopener noreferrer">02. web</a>
              <a className="highlight-yellow" href="#contact" rel="noopener noreferrer">03. contact</a>
            </div>
            <div className="col">
              <a className="highlight-blue" href="./lillianlepham-resume.pdf" rel="noopener noreferrer">04. resume</a>
              <a className="highlight-yellow" href="https://www.rootandravish.co" target="_blank">05. blog</a>
              <a className="highlight-blue" href="https://www.instagram.com/lilphammy" target="_blank">06. insta</a>
            </div>
          </div>
          <div className="stamp">
            <div id="circle"></div>
            <img src={stamp} className="stamp spin" alt="stamp" />
          </div>
        </header>
        <div className="App-about">
        </div>
        <div className="App-web">
        </div>
        <div className="App-contact">
        </div>
      </div>
    );
  }
}

export default App;
