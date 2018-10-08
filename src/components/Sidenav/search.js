import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

export default class Search extends Component {
  render() {
    return (
      <div className="search-bar">
        <FontAwesome icon="envelop" />
        <input className="search-input ssp-600" placeholder="Search" />
      </div>
    )
  }
}
