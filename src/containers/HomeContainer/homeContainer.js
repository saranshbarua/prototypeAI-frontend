import React, { Component } from 'react'
import Popular from './popular'
import Suggestions from './suggestions'
import UploadBox from './uploadPosts'
import Posts from './posts'
import { Redirect } from 'react-router-dom'

class HomeContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: ''
    }
  }

  componentDidMount() {
    const User = localStorage.getItem('loggedInUser');
    this.setState({
      loggedInUser: User
    })
  }

  render() {
    if(localStorage.getItem('loggedinUser') === ''){
      return <Redirect to="/login" />
    }

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
