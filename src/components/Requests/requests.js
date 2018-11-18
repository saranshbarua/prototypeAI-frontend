import React, { Component } from 'react'

export default class Requests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedUser: localStorage.getItem('loggedInUser'),
      requestBy: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/requests?username=${this.state.loggedUser}`).then(res => res.json())
    .then((result) => {
      this.setState({
        requestBy: result[0].requestsBy
      })
    })
  }    

  render() {
    const pendingRequests = this.state.requestBy.filter((request) => {
      return request.status === "pending"
    })
    return (
      <div className="network-container">
        <p className="ssp-300" style={{
          fontSize: '40px'
        }}>Network Requests</p>
        <div className="network-req">
          <div className="req-avatar">
            <img height="85px;" src="https://avatars3.githubusercontent.com/u/13121330?s=400&v=4" alt=""/>
          </div>
          <span className="req-name ssp-400">Ujjwal Sharma</span>
          <span className="req-designation ssp-400">Evangelist</span>
          <span className="ssp-400" style={{
            position: 'absolute',
            top: '85px',
            left: '138px',
            fontSize: '14px',
            color: '#607d8b'
          }}>sent you a connection request</span>
          <button className="reject-req ssp-400">Ignore</button>
          <button className="accept-req ssp-400">Accept</button>
        </div>
      </div>
    )
  }
}
