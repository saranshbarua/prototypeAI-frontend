import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faThumbsUp, faComments);

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      userDetails: {
        id: null,
        displayName: "",
        userAvatar: "",
        username: "",
        email: "",
        password: "",
        location: [],
        network: [],
        interests: [],
        skills: [],
        designation: "",
        Address: ""
      }
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/user?displayName=${this.props.match.params.id}`)
    .then(res => res.json()).then(
      (result) => {
        this.setState({
          userDetails: result[0]
        });
        console.log(this.state.userDetails);
      }
    )
    .then(
      fetch(`http://localhost:3000/posts?author=${this.props.match.params.id}`).then(response => response.json())
        .then((result) => {
          this.setState({
            posts: result
          })
        }
        )
    )
  }

  render() {
    const userPostList = this.state.posts.map((post,i) => (
        <div key={i} className="post-box">
            <div className="post-by-info">
                <div className="post-by-img">
                    <img src={ post.authorAvatar } alt="profileimg" className="post-img" />
                </div>
                <div className="post-by-desc">
                    <span className="post-by-user ssp-400">{ post.author }</span>
                    <span className="post-by-role ssp-400">{ post.authorTitle}</span>
                </div>
                <div className="post-timestamp">
                    <span className="p-ts ssp-400">{ post.timePosted }</span>
                </div>
            </div>
            <p className="post-desc ssp-400">{ post.description }</p>
            <div className="post-image">
                <img src={ post.imageUrl} alt="post" className="p-img" />
            </div>
            <div className="post-likes-container">
                <button onClick={(e) => this.likePost(i, e)} className="ssp-400 like-button">
                    <FontAwesomeIcon 
                        icon="thumbs-up"
                        color="#90a4ae"
                    />
                    <span className="ssp-400" style={{color: '#90a4ae', marginLeft: '10px'}}>{ post.likes }</span>
                </button>
                <button className="ssp-400 comment-button">
                    <FontAwesomeIcon 
                        icon="comments"
                        color="#90a4ae"
                    />
                    <span className="ssp-400" style={{color: '#90a4ae', marginLeft: '10px'}}>{ post.comments.length}</span>
                </button>
            </div>
        </div>
    ))

    const us = this.state.userDetails.skills.map((skill,i) => (
      <div key={i} className="uskill ssp-400">{skill}</div>
    ))

    const ui = this.state.userDetails.interests.map((interest,i) => (
      <div key={i} className="uskill ssp-400">{interest}</div>
    ))

    return (
      <div className="up-container">
        <div className="user-cover">
          <div className="user-dp">
            <img src={this.state.userDetails.userAvatar} height="100%" alt="Avatar"/>
          </div>
        </div>

        <div className="up-down">
          <div className="user-posts">
            {userPostList}
          </div>

          <div className="user-info">
            <div className="lb"></div>
            <div className="dis-name ssp-300">{this.state.userDetails.displayName}</div>
            <div className="user-designation ssp-400">{this.state.userDetails.designation} | 5 </div>
            <p className="user-bio ssp-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span className="ssp-400" style={{alignSelf: 'flex-start', marginLeft: '20px'}}>Skills</span>
            <div className="user-skills">
              {us}
            </div>
            <span className="ssp-400" style={{alignSelf: 'flex-start', marginLeft: '20px'}}>Interests</span>
            <div className="user-skills">
              {ui}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
