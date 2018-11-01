import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faPaperPlane);

export default class groupChat extends Component {
  render() {
    return (
      <div className="groupchat-container">
        <div className="gpchat-header">
            <span className="ssp-400" style={{color: 'white', marginLeft: '10px', fontSize: '22px'}}>Group name</span>
            <span className="ssp-400" style={{color: 'white', marginLeft: '10px', fontStyle: 'italic', fontSize: '16px'}}>saransh shivansh himanshu param</span>
        </div>

        <div className="chat-container">
          <div className="chatSender">Hey!</div>
          <div className="chatReciever">Hi :)</div>
          <div className="chatSender">Lorem ipsum is placeholder text commonly used in the graphic,</div>
          <div className="chatReciever">Lorem ipsum is placeholder text commonly used in the graphic, print, 
          and publishing industries for previewing layouts and visual mockups.</div>
          <div className="chatSender">Lorem ipsum is placeholder text commonly used in the graphic, print,
          Lorem ipsum is placeholder text commonly used in the graphic, print,
           and publishing industries for previewing layouts and visual mockups.
           and publishing industries for previewing layouts and visual mockups
           Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups..</div>
          <div className="chatReciever">Let's collect the data in userbase.</div>
          <div className="chatSender">hey this is good.</div>
        </div>

        <div className="gp-input-container">
            <input 
              type="text" 
              className="ssp-400 gpchat-input"
              placeholder="Enter text"
            />
            <button className="chatsendbutton">
              <FontAwesomeIcon
                icon="paper-plane"
              />
            </button>
        </div>
      </div>
    )
  }
}
