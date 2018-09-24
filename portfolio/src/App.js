import React, { Component } from "react";
import logo from "./logo.svg";
import stamp from "./stamp.svg";
import squiggly from "./squiggly.svg";
import squiggly2 from "./squiggly2.svg";
import "./App.css";
import "./App.scss";
import ReallySmoothScroll from 'really-smooth-scroll'
import ScrollableAnchor from 'react-scrollable-anchor'
import Draggable from 'react-draggable';

ReallySmoothScroll.shim();

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
        </header>
        <div className="stamp">
          <div id="circle"></div>
          <img src={stamp} className="stamp spin" alt="stamp" />
        </div>
        <ScrollableAnchor id={'about'}>
          <div className="App-about">
            <h1 className="App-subtitle">about</h1>
            <p className="pt50">let's see if you know me - drag the words and fill in the blanks</p>
            <img src={squiggly2} className="squiggly2" alt="vector line" />
            <h1 className="App-intro">hi, my name is _________! <br></br>i'm addicted to ________,<br></br>
            absolutely love ________,<br></br> and enjoy ________!</h1>
            <Draggable>
              <p className="drag" id="lillian">lillian</p>
            </Draggable>
            <Draggable>
              <p className="drag" id="cheetos">hot cheetos</p>
            </Draggable>
            <Draggable>
              <p className="drag" id="stories">stories</p>
            </Draggable>
            <Draggable>
              <p className="drag" id="yoga">yoga</p>
            </Draggable>
            <Draggable>
              <p className="drag" id="exploring">exploring</p>
            </Draggable>
            <Draggable>
              <p className="drag" id="coconut">coconut water</p>
            </Draggable>
            <Draggable>
              <p className="drag" id="lilly">lilly</p>
            </Draggable>
            <Draggable>
              <p className="drag" id="documenting">documenting everything</p>
            </Draggable>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'web'}>
          <div className="App-web">
          </div>
        </ScrollableAnchor>
        <div className="App-contact">
        </div>
      </div>
      
    );
  }
}


export default App;

