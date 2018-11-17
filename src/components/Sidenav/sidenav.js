import React, { Component } from 'react'
import Search from './search'
import ProfileBox from './profileBox'
import SidenavItems from './sidenavItems'

export default class Sidenav extends Component {
  render() {
    return (
      <div className="sidenav">
        <Search />
        <ProfileBox loggedIn={this.props.loggedIn} />
        <SidenavItems loggedIn={this.props.loggedIn} />
      </div>
    )
  }
}
