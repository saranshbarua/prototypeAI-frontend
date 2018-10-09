import React, { Component } from 'react'
import Popular from './popular'
import Suggestions from './suggestions'
import UploadBox from './uploadPosts'

class HomeContainer extends Component {
  render() {
    return (
      <div className="home-con">
        <div className="home-con-left">
            <UploadBox />
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