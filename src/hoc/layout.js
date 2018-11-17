import React, { Component } from 'react';
import Sidenav from '../components/Sidenav/sidenav';
import { Redirect } from 'react-router-dom';


export default class Layout extends Component {
  render() {
    if(localStorage.getItem('loggedInUser') === ''){
      return <Redirect to="/login" />
    }
    return (
      <div className="layout">
        <Sidenav loggedIn = {localStorage.getItem('loggedInUser')} />
          <div>
            {this.props.children}
          </div>
      </div>
    )
  }
}


