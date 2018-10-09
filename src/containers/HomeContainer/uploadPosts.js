import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperclip, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faPaperclip, faLocationArrow);

export default class uploadPosts extends Component {
  render() {
    return (
      <div className="upload-box">
        <textarea className="upload-textarea ssp-400" placeholder="Write something..."></textarea>
        <div className="ub-low">
          <div className="upload-icons-tab">
            <FontAwesomeIcon 
              icon="paperclip"
              color="#445a64"
              size="sm"
            />
            <FontAwesomeIcon 
              icon="location-arrow"
              color="#445a64"
              size="sm"
            />
          </div>
          <button className="upload-button ssp-400">Upload</button> 
        </div>
      </div>
    )
  }
}
