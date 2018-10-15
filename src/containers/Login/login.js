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
    if(this.state.password === 'abc') {
      this.props.history.push('/');
    }
  }
  
  render() {
    return (
      <div className="test-form">
        <div className="login-container">
          <div className="lc-left">
            <div className="ssp-900 lg-title">PrototypeAI</div>
          </div>
          <div className="lc-right">
            <p className="ssp-300" style={{fontSize: '35px', color: '#263238'}}>Login to your account</p>
            <form className="login-form" onSubmit={this.submitForm}>
              <input 
                type="email"
                placeholder="Enter email address"
                value={this.state.email}
                onChange={this.handleInputEmail}
                className="standard-input"
              />
               <input 
                type="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.handleInputPassword}
                className="standard-input"
              />
              <button 
                type="submit" 
                onClick={this.submitForm}
                className="standard-button"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
};
