import React, { Component } from 'react'

class SignupOne extends Component {

  updateEmailInvoke = () => {
    this.props.someMethod();
  }

  invokeSubmit = (e) => {
    e.preventDefault();
    this.props.submitOne();
  }

  render() {
    return (
      <div className="su-con">
        <form className="form-one" onSubmit={this.invokeSubmit}>
          <input 
            type="text"
            className="standard-input"
            placeholder="Enter a display name"
            onChange={this.handleDisplay}
            required
          />
          <input 
            type="text"
            className="standard-input"
            placeholder="Enter email"
            onChange={this.handleDisplay}
            required
          />
          <input 
            type="text"
            className="standard-input"
            placeholder="Choose username"
            onChange={this.handleDisplay}
            required
          />
          <input 
            type="text"
            className="standard-input"
            placeholder="Choose password"
            onChange={this.handleDisplay}
            required
          />
          <input 
            type="text"
            className="standard-input"
            placeholder="Re-enter password"
            onChange={this.handleDisplay}
            required
          />
          <input 
            type="text"
            className="standard-input"
            placeholder="Enter address"
            onChange={this.handleDisplay}
            required
          />
          <button className="standard-button" onClick={this.invokeSubmit}>Next</button>
        </form>
      </div>
    )
  }
}

class SignupTwo extends Component {

  invokeSecondSubmit = () => {
    this.props.submitTwo();
  }

  render() {
    return (
      <div>
        <p>Add skills</p>
        <button onClick={this.invokeSecondSubmit}>Proceed</button>
      </div>
    )
  }
}

class SignupThree extends Component {
  invokeFinalSubmit = () => {
    this.props.submitFinal();
  }


  render() {
    return (
      <div>
        <div>Component 3</div>
        <button onClick={this.invokeFinalSubmit}>Finish</button>
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
      isShowing: '1'
  }

  updateEmail = () => {
    this.setState({
      email: 'baruasaransh@gmail.com'
    });
  }

  componentDidUpdate() {
    console.log(this.state.isShowing);
  }

  submitFirstPart = () => {
    console.log('first part submitted');
    this.setState({
      isShowing: '2'
    })
  }

  submitSecondPart = () => {
    this.setState({
      isShowing: '3'
    })
  }

  submitFinalPart = () => {
    alert('form submitted');
    this.props.history.push('/');
  }

  showView = (state) => {
    return (
      <div>
        {(() => {
          switch(state) {
            case '1':
              return <SignupOne submitOne = {this.submitFirstPart} />;
            case '2':
              return <SignupTwo submitTwo = {this.submitSecondPart} />;
            case '3':
              return <SignupThree submitFinal = {this.submitFinalPart} />;
            default:
              return <SignupOne submitOne = {this.submitFirstPart} />;
          }
        })()}
      </div>
    );
  }

  render() {
    return (
      <div className="test-form">
        <div className="signup-container">
          <p className="ssp-300" style={{fontSize: '35px', color: '#263238'}}>Signup for your account</p>
          <div style={{height: '95%', width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            { this.showView(this.state.isShowing) }
          </div>
        </div>
      </div>
    )
  }
}
