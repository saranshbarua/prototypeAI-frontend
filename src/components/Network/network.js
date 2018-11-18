import React, { Component } from 'react'

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
      <div key={i}>
        {user.displayName}
      </div>
    ))
    return (
      <div className="network-container">
        <div className="network-req">
            {networkList}
        </div>
      </div>
    )
  }
}
