import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      success: false
    }
  }

  handleInputEmail = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleInputPassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <div className="test-form">
        <form onSubmit={this.submitForm}>
          Login Here  <br />
          <input 
            type="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleInputEmail}
          />
          <br/>
          <input 
            type="password"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handleInputPassword}
          />
          <br />
          <button type="submit" onClick={this.submitForm}>Log in</button> 
        </form>
      </div>
    )
  }
}
