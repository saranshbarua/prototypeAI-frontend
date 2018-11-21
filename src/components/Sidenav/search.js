import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      searchedValue: '',
      users: [],
      redirect: false
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/user`).then(res => res.json())
    .then((result) => {
      this.setState({
        users: result
      })
    })
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
      searchedValue: event.target.value
    })
  }

  submitForm(event) {
    event.preventDefault();
    let isFound = false;
    this.state.users.map((user,id) => {
      if(user.username === this.state.inputValue) {
        isFound = true;
      }
    })
    if(isFound) {
      this.setState({
        redirect: true,
        inputValue: ''
      });
    }
    else {
      alert('user not found');
    }
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
