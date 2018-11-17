import React, { Component } from 'react'

export default class ProfileBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
        avatar: '',
        name: '',
        designation: ''
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/user?username=${this.props.loggedIn}`)
    .then(res => res.json())
    .then((result) => {
      this.setState({
        avatar: result[0].userAvatar,
        name: result[0].displayName,
        designation: result[0].designation
      })
    })
  }

  render() {
    return (
    <div className="profile-box">
       <div className="img-container">
         <img src={this.state.avatar} alt="profile" height="60px" width="60px" style={{borderRadius: '50%'}} />
       </div>
       <div className="profile-name ssp-400">{this.state.name}</div>
       <div className="profile-profession ssp-400">{this.state.designation}</div>
    </div>
    )
  }
}

