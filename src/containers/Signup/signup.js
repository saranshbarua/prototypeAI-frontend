import React, { Component } from 'react'

class SigupOne extends Component {

  updateEmailInvoke = () => {
    this.props.someMethod();
  }

  render() {
    return (
      <div>
        Container 1
        <br/>
        {this.props.email}
        <br/>
        <button onClick={this.updateEmailInvoke}>Update email</button>
      </div>
    )
  }
}

export default class Signup extends Component {

  state= {
    name: '',
      email: 'saranshbarua@gmail.com',
      password: '',
      username: '',
      address: '',
      skillset: [],
      interests: []
  }

  updateEmail = () => {
    this.setState({
      email: 'baruasaransh@gmail.com'
    })
  }

  render() {
    return (
      <div className="test-form">
        <div className="signup-container">
          <p className="ssp-300" style={{fontSize: '35px', color: '#263238'}}>Signup for your account</p>
          <SigupOne {...this.state} someMethod = {this.updateEmail} />
        </div>
      </div>
    )
  }
}
