import React, { Component } from 'react'

export default class groupChat extends Component {
  render() {
    return (
      <div className="groupchat-container">
        <div className="gpchat-header">
            <span className="ssp-400" style={{color: 'white', marginLeft: '10px', fontSize: '22px'}}>Group name</span>
            <span className="ssp-400" style={{color: 'white', marginLeft: '10px', fontStyle: 'italic', fontSize: '16px'}}>saransh shivansh himanshu param</span>
        </div>

        <div className="gp-input-container">
            <input type="text" className="gpchat-input"/>
            <button className="sendbutton"></button>
        </div>
      </div>
    )
  }
}
