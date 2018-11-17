import React, { Component } from 'react';
import Sidenav from '../components/Sidenav/sidenav';


export default class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: ''
    }
  }

  componentDidMount() {
    const user = localStorage.getItem('loggedInUser');
    this.setState({
      loggedInUser: user
    })
  }

  render() {
    return (
      <div className="layout">
        <Sidenav loggedIn = {this.state.loggedInUser} />
          <div>
            {this.props.children}
          </div>
      </div>
    )
  }
}


