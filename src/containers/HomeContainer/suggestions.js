import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faPlus);

export default class Suggestions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      suggestedUsers: [],
      loggedInUser: this.props.loggedIn,
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/user').then(response => response.json())
    .then((result) => {
       this.setState({
         suggestedUsers: result.filter(x => {
           return x.displayName !== this.state.loggedInUser
         })
       });
     }
    )
  }

  render() {
    const lengthOfUsers = this.state.suggestedUsers.length;
    this.state.suggestedUsers.splice(3,lengthOfUsers - 3);
    const showTopThree = this.state.suggestedUsers.map((user, key) => {
      return (
        <div className="sugg-box" key = {key}>
          <div className="sugg-avatar">
            <img src={ user.userAvatar } alt="" className="sugg-img" />
          </div>
          <div className="sugg-desc ssp-400">
            <span style={{color: '#2196f3'}}>{ user.displayName }</span>
            <span style={{color: '#607d8b', fontSize: '13px'}}>{ user.designation }</span>
          </div>
          <div className="sugg-add">
            <button className="add-sugg">
              <FontAwesomeIcon 
                icon="plus"
                size="sm"
                color="grey"
              />
            </button>
          </div>
        </div>
      )
    })

    return (
      <div className="suggestion-container">
        <div className="sugg-title ssp-400">
            Suggested people
        </div>
        {showTopThree}
      </div>
    )
  }
}
