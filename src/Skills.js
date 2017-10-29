import React, { Component } from 'react';
import './Skills.css';
import Materialize from 'materialize-css';
import $ from 'jquery';
import { Launcher } from 'react-chat-window';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

class Skills extends Component {
  constructor(){
    super();
    this.state = {
      messageList:[]
    };
  }
  onMessageWasSent(message) {
    this.setState({
      messageList:[...this.state.messageList, message]
    });
    socket.emit('message',message);
    console.log(this.state.messageList,message);
  }
  
  sendMessage(text){console.log(text)}

  componentDidMount(){
    let options = [{selector: '#skills', offset: 300, callback: function(el) {
      Materialize.showStaggeredList($(el));
    } }];
    Materialize.scrollFire(options);
  }
  render(){
    return (
    <div>
      <ul id="skills" className="grey-text text-darken-4  block white">
        <br/>
        <li className="row">
          <div>
            <div className="col s12 m4 offset-m2 left-align" id="firstSkill">
              <h4>What can I do?</h4>
              <p>I develop using the most modern languages, frameworks and tools</p>
            </div>
          </div>
          <div>
            <div className="col s12 m4 left-align">
              <h5 className="left-align">Languages</h5>
              <p>
                <i className="devicon-javascript-plain yellow-text text-accent-4"></i>&nbsp;
                <i className="devicon-typescript-plain light-blue-text text-darken-4"></i>&nbsp;
                <i className="devicon-php-plain indigo-text text-lighten-2"></i>&nbsp;
                <i className="devicon-css3-plain blue-text text-darken-3"></i>&nbsp;
                <i className="devicon-html5-plain orange-text text-darken-4"></i>&nbsp;
              </p>
              <p>
                I'm a Javascript guy. I love how the language has grown with 
                ES6. I'm also a fan of what the Typescript team has accomplished
                in bringing type safety to the frontend. I can also write PHP and a little C++, alongside with
                CSS3 and HTML5.
              </p>
            </div>
          </div>
        </li>
        <li className="row">
        <div>
            <div className="col s12 m4 left-align offset-m2">
            <h5 className="left-align">Frameworks</h5>
              <p>
                <i className="devicon-angularjs-plain red-text text-darken-2"></i>
                <i className="devicon-react-plain blue-text text-lighten-2"></i>
                <i className="devicon-nodejs-plain light-green-text text-darken-2"></i>
              </p>
              <p>
                Angular is my go-to framework. It provides instant structure
                and it's just so easy to setup and start coding. It plays nice with the RxJs library
                which is a most useful tool. This portfolio is built in React. Code is just so easy to read and to maintain. I'm looking
                forward to more opportunities of using it. Node powers all of that, and doesn't stop surprising
                me with solid updates and a strong community.
              </p>
            </div>
          </div>
          <div>
            <div className="col s12 m4 left-align">
            <h5>And other tools</h5>
            <p>
              <i className="devicon-mongodb-plain light-green-text text-darken-2"></i>&nbsp;
              <i className="devicon-mysql-plain blue-text text-darken-4"></i>&nbsp;
              <i className="devicon-express-original black-text"></i>&nbsp;        
              <i className="devicon-photoshop-plain blue-text text-darken-4"></i>&nbsp;     
              <i className="devicon-linux-plain black-text"></i>&nbsp;
            </p>
            <p>
              <i className="devicon-git-plain deep-orange-text text-darken-1"></i>&nbsp;         
              <i className="devicon-heroku-plain deep-purple-text text-darken-3"></i>&nbsp;
              <i className="devicon-jquery-plain blue-text text-darken-2"></i>&nbsp;
              <i className="devicon-wordpress-plain light-blue-text text-darken-4"></i>&nbsp;
            </p>
            </div>
          </div>
        </li>
      </ul>

      <div>
      <Launcher
        agentProfile={{
          teamName: 'Evan do Carmo',
          imageUrl: '../public/'
        }}
        onMessageWasSent={this.onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
      />
    </div>
  </div>
    );
  }
}

export default Skills;
