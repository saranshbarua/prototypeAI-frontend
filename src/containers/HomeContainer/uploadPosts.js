import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperclip, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faPaperclip, faLocationArrow);

export default class uploadPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: this.props.loggedIn,
      authorTitle: "Designer",
      authorAvatar: "https://avatars1.githubusercontent.com/u/23500643?s=400&u=9611ca60ed6b48103c3272a195b68702e287757e&v=4",
      timePosted: "",
      postDescription: "",
      imageUrl: "https://gozags.com/images/2015/8/31/8870367.jpeg",
      likes: 1184,
      comments: [
        "",
        "",
        ""
      ]
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  uploadPost(event) {
    event.preventDefault();
    var d = new Date(); 
    let data = {
      "author": this.state.author,
      "authorTitle": this.state.authorTitle,
      "authorAvatar": this.state.authorAvatar,
      "timePosted": d.toLocaleString(),
      "description": this.state.postDescription,
      "imageUrl": this.state.imageUrl,
      "likes": this.state.likes,
      "comments": this.state.comments
    }
    fetch('http://localhost:3000/posts', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then((res) => console.log(res.json))
    .then(() => (
      this.setState({
        postDescription: ''
      })
    ))
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
          <button onClick={(e) => {this.uploadPost(e)}} className="upload-button ssp-400">Upload</button> 
        </div>
      </form>
    )
  }
}
