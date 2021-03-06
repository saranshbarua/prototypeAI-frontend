import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faPlus);

export default class Suggestions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      suggestedUsers: [],
      suggestedUsersUsername: [],
      inNetworkUsername: [],
      inNetwork: [],
      finalNetworkUsername: [],
      loggedInUser: localStorage.getItem('loggedInUser'),
      loggedUserSuperSet: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/user').then(response => response.json())
    .then((result) => {
      const uname = result.filter(x => {
        return x.username !== this.state.loggedInUser
      })
      const unameArr = uname.map((u) => {
        return u.username
      })
       this.setState({
         suggestedUsersUsername: unameArr
      })
     }
    ).then(() => {
      fetch(`http://localhost:3000/user?username=${this.state.loggedInUser}`).then(res => res.json())
      .then((result) => {
        this.setState({
          inNetworkUsername: result[0].network,
          loggedUserSuperSet: result[0].set
        })
      }).then(() => {
        let temp = this.arr_diff(this.state.suggestedUsersUsername,this.state.inNetworkUsername);
        this.setState({
          finalNetworkUsername: temp
        })
      })
      .then(() => {
        this.state.finalNetworkUsername.map((username,i) => {
          fetch(`http://localhost:3000/user?username=${username}`).then(res => res.json())
          .then((result) => {
            this.setState({
              inNetwork: [...this.state.inNetwork,...result]
            })
          })
        })
      })
    })
  }
  
  arr_diff (a1, a2) {
    var a = [], diff = [];
    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }
    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }
    for (var k in a) {
        diff.push(k);
    }
    return diff;
  }

  sendRequest(user) {
    alert(`Your request is sent to ${user}`);
    let data = {
      "requestTo": `${user}`,
      "requestBy": `${this.state.loggedInUser}`,
      "status": "pending"
    }
    fetch('http://localhost:3000/requests', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then((res) => console.log(res.json))
  }

  render() {
    console.log(this.state.inNetwork)
    const lengthOfUsers = this.state.inNetwork.length;
    const finalList = this.state.inNetwork.filter((x) => {
      return x.set === this.state.loggedUserSuperSet
    })
    finalList.splice(3,lengthOfUsers - 3);
    const showTopThree = finalList.map((user, key) => {
      return (
        <div className="sugg-box" key = {key}>
          <div className="sugg-avatar">
            <img src={ user.userAvatar } alt="" className="sugg-img" />
          </div>
          <div className="sugg-desc ssp-400">
            <Link to={{
              pathname: `/profile/${user.username}`
            }}
            style={{
              textDecoration: 'none'
            }}
            >
              <span style={{color: '#2196f3'}}>{ user.displayName }</span>
            </Link>
            <span style={{color: '#607d8b', fontSize: '13px'}}>{ user.designation }</span>
          </div>
          <div className="sugg-add">
            <button onClick={(e) => {this.sendRequest(user.username,e)}} className="add-sugg">
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
