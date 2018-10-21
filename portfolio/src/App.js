import React, { Component } from "react";
import logo from "./logo.svg";
import stamp from "./stamp.svg";
import squiggly from "./squiggly.svg";
import squiggly2 from "./squiggly2.svg";
import headshot from "./headshot.jpg";
import mojitobar from "./mojitobar.png";
import hdg from "./hdesigngroup.png";
import alma from "./alma.png";
import olivia from "./olivia.png";
import beloved from "./beloved.png";
import resume from "./llp_resume.pdf";
import "./App.css";
import "./App.scss";
import ReallySmoothScroll from 'really-smooth-scroll'
import ScrollableAnchor from 'react-scrollable-anchor'
import Draggable from 'react-draggable';
import $ from 'jquery'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';


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
          <Fade bottom>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-subtitle">developer + creative</h1>
          </Fade>
          <div className="App-menu">
            <div className="col">
              <a className="highlight-yellow" href="#about" rel="noopener noreferrer">01. about</a>
              <a className="highlight-blue" href="#work" rel="noopener noreferrer">02. work</a>
              <a className="highlight-yellow" href="#contact" rel="noopener noreferrer">03. contact</a>
            </div>
            <div className="col">
              <a className="highlight-blue" href={resume} target="_blank" rel="noopener noreferrer">04. resume</a>
              <a className="highlight-yellow" href="https://www.rootandravish.co" target="_blank" rel="nofollow noopener noreferrer">05. blog</a>
              <a className="highlight-blue" href="http://rootandravish.co/photography/" target="_blank" rel="nofollow noopener noreferrer">06. photography</a>
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
            <Fade bottom cascade>
            <div className="draggable-aboutme">
            <p className="pt50">let's see if you know me - drag the words and fill in the blanks<br></br><br></br>bonus points if you screenshot & send your answers to me</p>
            <img src={squiggly2} className="squiggly2" alt="vector line" />
              <h1 className="App-intro">hi, my name is _________ <br></br>i'm obsessed with ________<br></br>
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
            </Fade>
            <div className="bio">
              <div className="bio-img">
            <Slide left>
              <h1 className="App-headers highlightbkg-y">oh,hey</h1>
            </Slide>
                <img src={headshot} className="headshot" alt="lillian pham headshot" />
              </div>
              <div className="bio-info">
              <Fade bottom cascade>
                <p>My name is Lillian but you can call me Lilly, Lil, or Lilpham. Welcome to my digital corner of the world! I’m a creator specializing in web development, photography, digital marketing, and content creation. Nothing brings me greater joy than the ability to create, collaborate, and share things that can benefit someone or bring someone else’s vision to life. <br></br><br></br>You’ll find me scouring CodePen for the coolest interactions, photographing cute couples and families in Miami, or meticulously documenting my travels via my blog. I firmly believe in the power of collaboration and would love to meet you, work with you, or extend a helping hand!<br></br>
                <a href='mailto:llp@lillianlepham.com' rel="nofollow noopener noreferrer"><button>Let's Chat</button></a></p>
              </Fade>
              </div>
            </div>
          </div>
        </ScrollableAnchor>

        <ScrollableAnchor id={'work'}>
          <div className="App-web">
            <h1 className="App-subtitle">work</h1>
            <Fade bottom>
              <h1 className="App-headers">the work</h1>
            </Fade>
            <div className="projects">
            <Fade bottom>

              <div className="project">
                <div className="project-title">
                  <a href="http://www.oliviarestaurantandbar.com/" target="_blank" rel="nofollow noopener noreferrer"><h2 className="highlightbkg-b">Olivia Restaurant & Bar</h2></a>
                  <div id="project-img">
                    <a href="http://www.oliviarestaurantandbar.com/" target="_blank" rel="nofollow noopener noreferrer"><img src={olivia} className="png" alt="Olivia Restaurant & Bar website" /></a>
                  </div>
                  <p>Built on WordPress at The Brand Collective.</p> 
                </div>
                <div className="project-img">
                </div>
              </div>
              <div className="project">
                <div className="project-title">
                  <a href="http://www.themojitobar.com/" target="_blank" rel="nofollow noopener noreferrer"><h2 className="highlightbkg-b">The Mojito Bar</h2></a>
                  <div id="project-img">
                    <a href="http://www.themojitobar.com/" target="_blank" rel="nofollow noopener noreferrer"><img src={mojitobar} className="png" alt="the mojitobar website" /></a>
                  </div>
                  <p>Built on WordPress at The Brand Collective.</p> 
                </div>
                <div className="project-img">
                </div>
              </div>
              <div className="project">
                <div className="project-title">
                  <a href="http://www.alma-wedding.com/" target="_blank" rel="nofollow noopener noreferrer"><h2 className="highlightbkg-b">ALMA Wedding</h2></a>
                  <div id="project-img">
                    <a href="http://www.alma-wedding.com/" target="_blank" rel="nofollow noopener noreferrer"><img src={alma} className="png" alt="ALMA wedding website" /></a>
                  </div>
                  <p>Built on WordPress at The Brand Collective.</p> 
                </div>
                <div className="project-img">
                </div>
              </div>
              <div className="project">
                <div className="project-title">
                  <a href="http://www.hdesigngroupusa.com/" target="_blank" rel="nofollow noopener noreferrer"><h2 className="highlightbkg-b">H Design Group</h2></a>
                  <div id="project-img">
                    <a href="http://www.hdesigngroupusa.com/" target="_blank" rel="nofollow noopener noreferrer"><img src={hdg} className="png" alt="h design group website" /></a>
                  </div>
                  <p>Built on WordPress at The Brand Collective.</p> 
                </div>
                <div className="project-img">
                </div>
              </div>
              <div className="project">
                <div className="project-title">
                  <a href="http://www.belovedapp.co/" target="_blank" rel="nofollow noopener noreferrer"><h2 className="highlightbkg-b">Beloved</h2></a>
                  <div id="project-img">
                    <a href="http://www.belovedapp.co/" target="_blank" rel="nofollow noopener noreferrer"><img src={beloved} className="png" alt="Beloved app screenshot" /></a>
                  </div>
                  <p>Built on Ruby on Rails in 2 weeks for my final project at Ironhack. A wedding planning application built and designed for the modern millennial. The Beloved application integrates streamlined planning features such as a budgeter, guest list organizer, and checklists. Beloved also generates monthly tasks based on the user’s wedding date and sends out task reminders via e-mail and SMS messages.</p> 
                </div>
                <div className="project-img">
                </div>
              </div>

            </Fade>
            </div>

          </div> 
        </ScrollableAnchor>

        <ScrollableAnchor id={'contact'}>
        <div className="App-contact">
          <h1 className="App-subtitle">contact</h1>
          <h1 className="App-headers highlightbkg-p">wanna collaborate?</h1><br></br>
          <Slide bottom>
          <a href='mailto:llp@lillianlepham.com' rel="nofollow noopener noreferrer"><button>Let's Chat</button></a>
          </Slide>
        </div>
        </ScrollableAnchor>

      </div>

      
    );
  }
}


export default App;

