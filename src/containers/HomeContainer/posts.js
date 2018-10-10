import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faComments } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faThumbsUp, faComments);

export default class Posts extends Component {

  render() {
    return (
      <div className="post-container">

        <div className="post-box">
            <div className="post-by-info">
                <div className="post-by-img">
                    <img src="https://avatars0.githubusercontent.com/u/23500643?v=3&s=100" alt="profileimg" className="post-img" />
                </div>
                <div className="post-by-desc">
                    <span className="post-by-user ssp-400">Himanshu Tomar</span>
                    <span className="post-by-role ssp-400">Computer nerd</span>
                </div>
                <div className="post-timestamp">
                    <span className="p-ts ssp-400">35 mins ago</span>
                </div>
            </div>
            <p className="post-desc ssp-400">
                Our job description directory contains job description examples covering all the most popular roles. We have examples of job descriptions you can quickly download and modify to suit your unique business requirements.
            </p>
            <div className="post-image">
                <img src="https://static.bhphotovideo.com/explora/sites/default/files/styles/top_shot/public/TS-Night-Photography.jpg?itok=VO6dxBNS" alt="post" className="p-img" />
            </div>
            <div className="post-likes-container">
                <button className="ssp-400 like-button">
                    <FontAwesomeIcon 
                        icon="thumbs-up"
                        color="#90a4ae"
                    />
                    <span className="ssp-400" style={{color: '#90a4ae', marginLeft: '10px'}}>255</span>
                </button>
                <button className="ssp-400 comment-button">
                    <FontAwesomeIcon 
                        icon="comments"
                        color="#90a4ae"
                    />
                    <span className="ssp-400" style={{color: '#90a4ae', marginLeft: '10px'}}>12</span>
                </button>
            </div>
        </div>

        <div className="post-box">
            <div className="post-by-info">
                <div className="post-by-img">
                    <img src="https://avatars2.githubusercontent.com/u/13121330?s=460&v=4" alt="profileimg" className="post-img" />
                </div>
                <div className="post-by-desc">
                    <span className="post-by-user ssp-400">Ujjwal Sharma</span>
                    <span className="post-by-role ssp-400">Evangelist</span>
                </div>
                <div className="post-timestamp">
                    <span className="p-ts ssp-400">35 mins ago</span>
                </div>
            </div>
            <p className="post-desc ssp-400">
                Our job description directory contains job description examples covering all the most popular roles. We have examples of job descriptions you can quickly download and modify to suit your unique business requirements.
            </p>
            <div className="post-image">
                <img src="http://getwallpapers.com/wallpaper/full/1/0/6/1122076-new-aesthetic-wallpapers-1920x1080-windows-10.jpg" alt="post" className="p-img" />
            </div>
            <div className="post-likes-container">
                <button className="ssp-400 like-button">
                    <FontAwesomeIcon 
                        icon="thumbs-up"
                        color="#90a4ae"
                    />
                    <span className="ssp-400" style={{color: '#90a4ae', marginLeft: '10px'}}>255</span>
                </button>
                <button className="ssp-400 comment-button">
                    <FontAwesomeIcon 
                        icon="comments"
                        color="#90a4ae"
                    />
                    <span className="ssp-400" style={{color: '#90a4ae', marginLeft: '10px'}}>12</span>
                </button>
            </div>
        </div>

        <div className="post-box">
            <div className="post-by-info">
                <div className="post-by-img">
                    <img src="https://avatars0.githubusercontent.com/u/23500643?v=3&s=100" alt="profileimg" className="post-img" />
                </div>
                <div className="post-by-desc">
                    <span className="post-by-user ssp-400">Himanshu Tomar</span>
                    <span className="post-by-role ssp-400">Machine learner</span>
                </div>
                <div className="post-timestamp">
                    <span className="p-ts ssp-400">35 mins ago</span>
                </div>
            </div>
            <p className="post-desc ssp-400">
                Our job description directory contains job description examples covering all the most popular roles. We have examples of job descriptions you can quickly download and modify to suit your unique business requirements.
            </p>
            <div className="post-image">
                <img src="https://static.bhphotovideo.com/explora/sites/default/files/styles/top_shot/public/TS-Night-Photography.jpg?itok=VO6dxBNS" alt="post" className="p-img" />
            </div>
            <div className="post-likes-container">
                <button className="ssp-400 like-button">
                    <FontAwesomeIcon 
                        icon="thumbs-up"
                        color="#90a4ae"
                    />
                    <span className="ssp-400" style={{color: '#90a4ae', marginLeft: '10px'}}>255</span>
                </button>
                <button className="ssp-400 comment-button">
                    <FontAwesomeIcon 
                        icon="comments"
                        color="#90a4ae"
                    />
                    <span className="ssp-400" style={{color: '#90a4ae', marginLeft: '10px'}}>12</span>
                </button>
            </div>
        </div>

        <div className="post-box">
            <div className="post-by-info">
                <div className="post-by-img">
                    <img src="https://avatars0.githubusercontent.com/u/23500643?v=3&s=100" alt="profileimg" className="post-img" />
                </div>
                <div className="post-by-desc">
                    <span className="post-by-user ssp-400">Himanshu Tomar</span>
                    <span className="post-by-role ssp-400">Machine learner</span>
                </div>
                <div className="post-timestamp">
                    <span className="p-ts ssp-400">35 mins ago</span>
                </div>
            </div>
            <p className="post-desc ssp-400">
                Our job description directory contains job description examples covering all the most popular roles. We have examples of job descriptions you can quickly download and modify to suit your unique business requirements.
            </p>
            <div className="post-image">
                <img src="https://static.bhphotovideo.com/explora/sites/default/files/styles/top_shot/public/TS-Night-Photography.jpg?itok=VO6dxBNS" alt="post" className="p-img" />
            </div>
            <div className="post-likes-container">
                <button className="ssp-400 like-button">
                    <FontAwesomeIcon 
                        icon="thumbs-up"
                        color="#90a4ae"
                    />
                    <span className="ssp-400" style={{color: '#90a4ae', marginLeft: '10px'}}>255</span>
                </button>
                <button className="ssp-400 comment-button">
                    <FontAwesomeIcon 
                        icon="comments"
                        color="#90a4ae"
                    />
                    <span className="ssp-400" style={{color: '#90a4ae', marginLeft: '10px'}}>12</span>
                </button>
            </div>
        </div>

        <div className="post-box">
            <div className="post-by-info">
                <div className="post-by-img">
                    <img src="https://avatars0.githubusercontent.com/u/23500643?v=3&s=100" alt="profileimg" className="post-img" />
                </div>
                <div className="post-by-desc">
                    <span className="post-by-user ssp-400">Himanshu Tomar</span>
                    <span className="post-by-role ssp-400">Machine learner</span>
                </div>
                <div className="post-timestamp">
                    <span className="p-ts ssp-400">35 mins ago</span>
                </div>
            </div>
            <p className="post-desc ssp-400">
                Our job description directory contains job description examples covering all the most popular roles. We have examples of job descriptions you can quickly download and modify to suit your unique business requirements.
            </p>
            <div className="post-image">
                <img src="https://static.bhphotovideo.com/explora/sites/default/files/styles/top_shot/public/TS-Night-Photography.jpg?itok=VO6dxBNS" alt="post" className="p-img" />
            </div>
            <div className="post-likes-container">
                <button className="ssp-400 like-button">
                    <FontAwesomeIcon 
                        icon="thumbs-up"
                        color="#90a4ae"
                    />
                    <span className="ssp-400" style={{color: '#90a4ae', marginLeft: '10px'}}>255</span>
                </button>
                <button className="ssp-400 comment-button">
                    <FontAwesomeIcon 
                        icon="comments"
                        color="#90a4ae"
                    />
                    <span className="ssp-400" style={{color: '#90a4ae', marginLeft: '10px'}}>12</span>
                </button>
            </div>
        </div>

      </div>
    )
  }
}
