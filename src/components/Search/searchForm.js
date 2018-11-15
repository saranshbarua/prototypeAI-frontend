// import React from 'react'

// export default function SearchForm(props) {
//   return (
//     <div className="up-container">
//       {`Props passed are ${props.location.state.searchedFor}`}
//     </div>
//   )
// }

import React, { Component } from 'react'

export default class SearchForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchedUser: this.props.location.state.searchedFor,
      searchedUserInfo: {
        id: null,
        displayName: "",
        userAvatar: "",
        username: "",
        email: "",
        password: "",
        location: [],
        network: [],
        interests: [],
        skills: [],
        designation: "",
        bio: "",
        Address: ""
      }
    }
  }

  componentDidMount() {
    console.log('HEykd' + this.state.searchedUser)
    fetch(`http://localhost:3000/user?username=${this.state.searchedUser}`)
    .then(res => res.json()).then(
      (result) => {
        this.setState({
          searchedUserInfo: {
            id: result[0].id,
            displayName: result[0].displayName,
            userAvatar: result[0].userAvatar,
            username: result[0].username,
            email: result[0].email,
            password: result[0].password,
            location: result[0].location,
            network: result[0].network,
            interests: result[0].interests,
            skills: result[0].skills,
            designation: result[0].designation,
            bio: result[0].bio,
            Address: result[0].Address
          }
        });
        console.log(`The info given is ${this.state.searchedUserInfo.skills}`);
    })
  }

  render() {
    console.log(`Props passed are ${this.state.searchedUser}`)
    return (
      <div className="up-container">
        Hey there 
      </div>
    )
  }
}

