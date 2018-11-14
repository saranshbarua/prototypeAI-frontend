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
          <div className="user-posts">

          </div>

          <div className="user-info">
            <div className="lb"></div>
            <div className="dis-name ssp-300">Saransh Barua</div>
            <div className="user-designation ssp-400">Designer | 5 </div>
            <p className="user-bio ssp-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span className="ssp-400" style={{alignSelf: 'flex-start', marginLeft: '20px'}}>Skills</span>
            <div className="user-skills">
              <div className="uskill ssp-400">Design</div>
              <div className="uskill ssp-400">Cooking</div>
              <div className="uskill ssp-400">Developing</div>
              <div className="uskill ssp-400">Direction</div>
            </div>
            <span className="ssp-400" style={{alignSelf: 'flex-start', marginLeft: '20px'}}>Interests</span>
            <div className="user-skills">
              <div className="uskill ssp-400">Design</div>
              <div className="uskill ssp-400">Cooking</div>
              <div className="uskill ssp-400">Developing</div>
              <div className="uskill ssp-400">Direction</div>
              <div className="uskill ssp-400">Design</div>
              <div className="uskill ssp-400">Cooking</div>
              <div className="uskill ssp-400">Developing</div>
              <div className="uskill ssp-400">Direction</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
