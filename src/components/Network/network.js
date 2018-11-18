import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Network extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userNetwork: [],
      loggedInUser: localStorage.getItem('loggedInUser'),
      networkDetails: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/user?username=${this.state.loggedInUser}`)
    .then(res => res.json())
    .then((result) => {
      this.setState({
        userNetwork: result[0].network
      })
    })
    .then(() => {
      this.state.userNetwork.map((user,i) => {
        return fetch(`http://localhost:3000/user?username=${user}`).then(res => res.json())
        .then((result) => {
          let newDetails = this.state.networkDetails.concat(result);
          this.setState({
            networkDetails: newDetails
          });
        })
      })
    })
  }

  render() {
    const networkList = this.state.networkDetails.map((user,i) => (
      <Link to={{
        pathname: `/profile/${user.username}`
      }} 
      className="network-card" key={i}>
        <div className="net-cover">
          <div className="net-avatar">
            <img height="100%" src={user.userAvatar} alt=""/>
          </div>
        </div>
        <span className="net-name ssp-400">
          {user.displayName}
        </span>
        <span className="ssp-400" style={{
          color: '#445a64'
        }}>
          {user.designation}
        </span>
      </Link>
    ))
    return (
      <div className="network-container">
        <div className="network-list">
          {networkList}
        </div>
      </div>
    )
  }
}
