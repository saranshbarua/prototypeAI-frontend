import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faThumbsUp, faComments);

export default class Posts extends Component {

  constructor(props) {
    super (props);
    this.state = {
      posts: [],
      likePostData: {},
    }
  }
  
  componentDidMount(){
    fetch('http://localhost:3000/posts').then(response => response.json())
    .then((result) => {
       this.setState({
         posts: result
       })
     }
    )
  }

  likePost(i) {
    console.log(`You liked ${this.state.posts[i].author}'s post`);
    fetch(`http://localhost:3000/posts/${i+1}`).then(
      (res) => (res.json())
    ).then(
      (result) => {
        this.setState({
          likedPostData: JSON.stringify(result)
        });
        console.log(this.state.likedPostData);
      }
    ).then(
      fetch(`http://localhost:3000/posts/${i+1}`, {
        method: "PUT",
        body: this.state.likedPostData,
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function(response) {
        console.log(response.text);
        return response.text();
      }, function(error) {
        console.log(error.message)
      })
    )
  }

  render() {

    const postList = this.state.posts.reverse();
    const finalPostList = postList.map((post,i) => (
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

    return (
      <div className="post-container">
        {finalPostList}
      </div>
    )
  }
}
