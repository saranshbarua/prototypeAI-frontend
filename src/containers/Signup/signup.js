import React, { Component } from 'react'

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state= {
      name: '',
      email: '',
      password: '',
      username: '',
      address: '',
      skillset: [],
      interests: []
    }
  }

  render() {
    return (
      <div className="test-form">
        <div className="signup-container">
          
        </div>
      </div>
    )
  }
}
