import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperclip, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faPaperclip, faLocationArrow);

export default class uploadPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: localStorage.getItem('loggedInUser'),
      authorTitle: "",
      authorAvatar: "",
      timePosted: "",
      postDescription: "",
      imageUrl: "",
      likes: 1184,
      comments: [
        "",
        "",
        ""
      ],
      imageUpload: false
    }
  }

  componentDidMount() {
    let un = localStorage.getItem('loggedInUser');
    fetch(`http://localhost:3000/user?username=${un}`).then(res => res.json())
    .then((result) => {
      this.setState({
        authorTitle: result[0].designation,
        authorAvatar: result[0].userAvatar
      })
    })
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

  openImageUpload() {
    this.setState({
      imageUpload: true
    })
  }

  showIU = () => {
    if(this.state.imageUpload) {
      return (
        <div className="upload-image-box">
          <form action="">

          </form>
        </div>
      )
    }
  }


  render() {
    console.log(this.state.authorTitle);
    return (
      <form onSubmit={(e) => this.uploadPost(e)} className="upload-box">
        <textarea name="postDescription" value={this.state.postDescription} onChange={(e) => this.handleChange(e)} className="upload-textarea ssp-400" placeholder="Write something..."></textarea>
        <div className="ub-low">
          <div className="upload-icons-tab">
            <div onClick={(e) => this.openImageUpload(e)}>
              <FontAwesomeIcon 
                icon="paperclip"
                color="#445a64"
                size="sm"
              />
            </div>
            <FontAwesomeIcon 
              icon="location-arrow"
              color="#445a64"
              size="sm"
            />
          </div>
          <button onClick={(e) => {this.uploadPost(e)}} className="upload-button ssp-400">Upload</button>
          {this.showIU()} 
        </div>
      </form>
    )
  }
}
