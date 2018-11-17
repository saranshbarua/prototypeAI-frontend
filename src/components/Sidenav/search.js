import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      searchedValue: '',
      redirect: false
    }
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
      searchedValue: event.target.value
    })
  }

  submitForm(event) {
    event.preventDefault();
    this.setState({
      redirect: true,
      inputValue: ''
    });
    console.log(this.state.searchedValue)
  }

  render() {
    const redirection = this.state.redirect;
    if(redirection) {
      return <Redirect to={{
        pathname: `/profile/${this.state.searchedValue}`,
        state: {
          searchedFor: this.state.searchedValue
        }
      }} />
    }
    return (
      <div className="search-bar">
        <form 
          onChange={(e) => (this.handleChange(e))} value={this.state.searchedValue}
          onSubmit={(e) => (this.submitForm(e))}
        >
          <input className="search-input ssp-600" placeholder="Search username" />        
        </form>
      </div>
    )
  }
}
