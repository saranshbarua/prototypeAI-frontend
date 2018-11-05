import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faPlus);

export default class Groups extends Component {

  constructor(props) {
    super(props);
    this.state = {
      groups: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/groups')
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          groups: result
        })
      })
  }

  render() {

    const groupList = this.state.groups.map((group,key) => {
      return (
        <div className="group-card">
          <p className="group-name ssp-300">{ group.name }</p>
          <p className="group-topic ssp-400">
            { group.bio }
          </p>
          <p className="group-members ssp-400">{ group.members.length } Members</p>
        </div>
      )
    })

    return (
      <div className="groups-container">
        <button className="add-group-card">
            <FontAwesomeIcon 
              icon="plus"
              color="white"
              size="2x"
            />
        </button>
        {groupList}
      </div>
    )
  }
}
