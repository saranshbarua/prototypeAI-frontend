import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperclip, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faPaperclip, faLocationArrow);

export default class uploadPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postDescription: ''
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  uploadPost() {
    console.log('Form Submitted');
  }

  render() {
    return (
      <form onSubmit={(e) => this.uploadPost(e)} className="upload-box">
        <textarea name="postDescription" value={this.state.postDescription} onChange={(e) => this.handleChange(e)} className="upload-textarea ssp-400" placeholder="Write something..."></textarea>
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
      </form>
    )
  }
}
