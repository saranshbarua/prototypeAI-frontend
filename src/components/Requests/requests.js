import React, { Component } from 'react'

export default class Requests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedUser: localStorage.getItem('loggedInUser'),
      requestBy: [],
      requestByUserDetails: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/requests?username=${this.state.loggedUser}`).then(res => res.json())
    .then((result) => {
      this.setState({
        requestBy: result[0].requestsBy
      })
    })
    .then(() => {
      this.state.requestBy.map((user,i) => {
        return fetch(`http://localhost:3000/user?username=${user.user}`).then(res => res.json())
        .then((result) => {
          let newDetails = this.state.requestByUserDetails.concat(result);
          this.setState({
            requestByUserDetails: newDetails
          });
        })
      })
    })
  }   

  render() {
    // const pendingRequests = this.state.requestBy.filter((request) => {
    //   return request.status === "pending"
    // });
    const reqList = this.state.requestByUserDetails.map((req,i) => {
      return (
        <div key={i} className="network-req">
          <div className="req-avatar">
            <img height="85px;" src={req.userAvatar} alt=""/>
          </div>
          <span className="req-name ssp-400">{req.displayName}</span>
          <span className="req-designation ssp-400">{req.designation}</span>
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
      )
    })
    return (
      <div className="network-container">
        <p className="ssp-300" style={{
          fontSize: '40px'
        }}>Network Requests</p>
        {reqList}
      </div>
    )
  }
}
