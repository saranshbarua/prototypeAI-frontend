import React, { Component } from 'react'
import Search from './search'
import ProfileBox from './profile'

export default class Sidenav extends Component {
  render() {
    return (
      <div className="sidenav">
        <Search />
        <ProfileBox name = "Saransh Barua" />
      </div>
    )
  }
}
