import React, { Component } from 'react'

export default class Requests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedUser: localStorage.getItem('loggedInUser'),
      requestBy: [],
      requestByUserDetails: [],
      noRequests: false
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/requests?requestTo=${this.state.loggedUser}`).then(res => res.json())
    .then((result) => {
      result.map((re) => {
        this.setState({
          requestBy: [...this.state.requestBy, re.requestBy]
        })
      })
    }).catch(() => {
      this.setState({
        noRequests: true
      })
    })
    .then(() => {
      this.state.requestBy.map((user) => {
        fetch(`http://localhost:3000/user?username=${user}`).then(res => res.json())
        .then((result) => {
          let newDetails = this.state.requestByUserDetails.concat(result);
          this.setState({
            requestByUserDetails: newDetails
          });
        })
      })
    })
  }   

  acceptRequest(username) {
      fetch(`http://localhost:3000/requests?requestTo=${this.state.loggedUser}&requestBy=${username}`,{
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
      }).then(response => response.json());
  }

  noRequestsDisplay() {
    if(this.state.noRequests) {
      return(
        <div className="ssp-300" style={{
          color: '#607d8b',
          fontSize: '30px',
          marginTop: '280px'
        }}>
          No new requests found!
        </div>
      )
    }
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
          <button onClick={(e) => this.acceptRequest(req.username,e)} className="accept-req ssp-400">Accept</button>
        </div>
      )
    })
    return (
      <div className="network-container">
        <p className="ssp-300" style={{
          fontSize: '40px'
        }}>Network Requests</p>
        {this.noRequestsDisplay()}
        {reqList}
      </div>
    )
  }
}
