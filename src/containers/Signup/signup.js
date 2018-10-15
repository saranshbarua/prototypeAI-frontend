import React, { Component } from 'react'

class SigupOne extends Component {

  updateEmailInvoke = () => {
    this.props.someMethod();
  }

  render() {
    return (
      <div className="su-one">
        <form onSubmit={this.nextStepInvoke}>
          <input 
            type="text"
          />
        </form>
        {this.props.email}
        <br/>
        <button onClick={this.updateEmailInvoke}>Update email</button>
      </div>
    )
  }
}

class SignupTwo extends Component {
  render() {
    return (
      <div style={{display: 'none'}}>
        Component 2
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
      interests: [],
      isShowing: 1
  }

  updateEmail = () => {
    this.setState({
      email: 'baruasaransh@gmail.com'
    });
  }

  componentDidUpdate() {
    console.log(this.state.email);
  }

  render() {
    return (
      <div className="test-form">
        <div className="signup-container">
          <p className="ssp-300" style={{fontSize: '35px', color: '#263238'}}>Signup for your account</p>
          <div>{
            () => {
              switch(this.state.isShowing) {
                case(1):
                  return <SigupOne {...this.state} someMethod = {this.updateEmail} />;
                case(2):
                  return <SignupTwo />;
              }
            }
          }</div>
        </div>
      </div>
    )
  }
}
