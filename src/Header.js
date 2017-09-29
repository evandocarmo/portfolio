import React, { Component } from 'react';
import './Header.css';
import Typist from 'react-typist';

class Header extends Component {
  render(){
    return (
      <div id="header" className="grey darken-4 block valign-wrapper">
          <div className="nav-wrapper grey darken-4">
            <nav className="pushpin-demo-nav pinned z-depth-0" data-target="header" style={{top: 0+'px'}}>
              <div className="container">
                <a href="#" className="brand-logo left">
                  evan
                  <span className="deep-orange-text text-accent-4">.</span>
                  carmo
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li className="active"><a href="#!">Home</a></li>
                  <li><a href="#!">Skills</a></li>
                  <li><a href="#!">Projects</a></li>
                  <li><a href="#!">Contact</a></li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="row center-align">
            <Typist
              avgTypingSpeed={40}
              startDelay={2000}
            >
              <h3 className="white-text intro">Hi, I'm Evan!</h3>
              <br />
              <br />
              <h5 className="white-text intro">And I develop for the web.</h5>
            </Typist>
            <br />
            <button className='btn deep-orange accent-4 z-depth-5 waves-effect waves-default'>Talk to me!</button>
          </div>
        </div>
      );
    }
}

export default Header;
