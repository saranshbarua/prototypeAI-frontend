import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clearUser: '',
      redirect: false
    }
  }

  setstate = () => {
    this.setState({
      redirect: true
    })
  }

  componentDidMount() {
    localStorage.setItem('loggedInUser', this.state.clearUser);
    setTimeout(this.setstate,1000);
  }


  render() {
    if(this.state.redirect) {
      return <Redirect from="logout" to="/login" />
    }
    return (
      <div className="logout-screen ssp-700">
        Logging out
      </div>
    )
  }
}

