import React, { Component } from "react";
import logo from "./logo.svg";
import stamp from "./stamp.svg";
import squiggly from "./squiggly.svg";
import squiggly2 from "./squiggly2.svg";
import headshot from "./headshot.jpg";
import themojitobar from "./themojitobar.gif";
import mojitobar from "./mojitobar.png";
import cursor from "./cursor.png";
import "./App.css";
import "./App.scss";
import ReallySmoothScroll from 'really-smooth-scroll'
import ScrollableAnchor from 'react-scrollable-anchor'
import Draggable from 'react-draggable';
import InstagramEmbed from 'react-instagram-embed'
import $ from 'jquery'

ReallySmoothScroll.shim();

$("img", "#project-img").hover(function() {
  $('.png').toggle();
  $('.gif').toggle();
});

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
            <p className="pt50">let's see if you know me - drag the words and fill in the blanks<br></br><br></br>p.s. - i'll send you $1 if you screenshot and send your answers to me</p>
            <img src={squiggly2} className="squiggly2" alt="vector line" />
            <div className="draggable-aboutme">
              <h1 className="App-intro">hi, my name is _________ <br></br>i'm addicted to ________,<br></br>
              absolutely love ________<br></br> wholeheartedly enjoy ________</h1>
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
            <div className="bio">
              <div className="bio-img">
              <h1 className="App-headers">oh,hey</h1>
                <img src={headshot} className="headshot" alt="lillian pham headshot" />
              </div>
              <div className="bio-info">
                <p>My passion lies at the intersection of creative design and pragmatic web development. I
                strive to create meaningful and engaging digital experiences.<br></br>
                <button>Let's Chat</button></p>

              </div>
            </div>
          </div>
        </ScrollableAnchor>

        <ScrollableAnchor id={'web'}>
          <div className="App-web">
            <h1 className="App-subtitle">web</h1>
            <div className="projects">

              <div className="project">
                <div className="project-title">
                  <h2>The Mojito Bar</h2>
                  <div id="project-img">
                    <img src={mojitobar} className="png" alt="the mojitobar project" />
                    <img src={themojitobar} className="gif" alt="the mojitobar project" />
                  </div>
                  <p>Built on WordPress during my time at The Brand Collective, it displays the restaurant's new brandy in a
                  playful and interactive manner with layered elements along, vibrant colors, and patterns.</p> 
                </div>
                <div className="project-img">
                </div>
              </div>

              <div className="project">
                <div className="project-title">
                  <h2>H Design Group</h2>
                  <p>Built on WordPress during my time at The Brand Collective, it displays the restaurant's new brandy in a
                  playful and interactive manner with layered elements along, vibrant colors, and patterns.</p> 
                </div>
                <div className="project-img">
                </div>
              </div>

              <div className="project">
                <div className="project-title">
                  <h2>ALMA Wedding</h2>
                  <p>Built on WordPress during my time at The Brand Collective, it displays the restaurant's new brandy in a
                  playful and interactive manner with layered elements along, vibrant colors, and patterns.</p> 
                </div>
                <div className="project-img">
                </div>
              </div>

              <div className="project">
                <div className="project-title">
                  <h2>Olivia</h2>
                  <p>Built on WordPress during my time at The Brand Collective, it displays the restaurant's new brandy in a
                  playful and interactive manner with layered elements along, vibrant colors, and patterns.</p> 
                </div>
                <div className="project-img">
                </div>
              </div>

              <div className="project">
                <div className="project-title">
                  <h2>Beloved</h2>
                  <p>Built on WordPress during my time at The Brand Collective, it displays the restaurant's new brandy in a
                  playful and interactive manner with layered elements along, vibrant colors, and patterns.</p> 
                </div>
                <div className="project-img">
                </div>
              </div>

            </div>

          </div> 
        </ScrollableAnchor>

        <ScrollableAnchor id={'contact'}>
        <div className="App-contact">
          <h1 className="App-subtitle">contact</h1>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>
          <p>lorem ipsum</p>

        </div>
        </ScrollableAnchor>

      </div>

      
    );
  }
}


export default App;

