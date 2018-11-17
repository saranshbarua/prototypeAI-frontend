import React, { Component } from 'react';
import Sidenav from '../components/Sidenav/sidenav';


export default class Layout extends Component {
  render() {
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


