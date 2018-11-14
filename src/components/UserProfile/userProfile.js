import React, { Component } from 'react'

export default class UserProfile extends Component {
  render() {
    return (
      <div className="up-container">
        <div className="user-cover">
          <div className="user-dp">
      
          </div>
        </div>

        <div className="up-down">
          <div className="user-posts"></div>
          <div className="user-info">
            <div className="dis-name ssp-300">Saransh Barua</div>
            <div className="user-designation ssp-400">Designer | 5 </div>
            <p className="user-bio ssp-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
          </div>
        </div>
      </div>
    )
  }
}
