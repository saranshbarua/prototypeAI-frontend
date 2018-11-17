import React, { Component } from 'react'
import Popular from './popular'
import Suggestions from './suggestions'
import UploadBox from './uploadPosts'
import Posts from './posts'

class HomeContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: ''
    }
  }

  componentDidMount() {
    const User = localStorage.getItem('loggedInUser');
    console.log(`The username from local storage is ${User}`)
    this.setState({
      loggedInUser: User
    })
  }

  render() {
    return (
      <div className="home-con">
        <div className="home-con-left">
            <UploadBox loggedIn = {this.state.loggedInUser}/>
            <Posts loggedIn = {this.state.loggedInUser}/>
        </div>
        <div className="home-con-right">
           <Popular />
           <Suggestions loggedIn = {this.state.loggedInUser} />
        </div>
      </div>
    )
  }
}

export default HomeContainer;
