import React, { Component } from 'react'
import Popular from './popular'
import Suggestions from './suggestions'
import UploadBox from './uploadPosts'
import Posts from './posts'

class HomeContainer extends Component {

  render() {
    return (
      <div className="home-con">
        {console.log(`currently logged in as ${this.props.loggedIn}`)}
        <div className="home-con-left">
            <UploadBox loggedIn = {this.props.loggedIn}/>
            <Posts loggedIn = {this.props.loggedIn}/>
        </div>
        <div className="home-con-right">
           <Popular />
           <Suggestions />
        </div>
      </div>
    )
  }
}

export default HomeContainer;
