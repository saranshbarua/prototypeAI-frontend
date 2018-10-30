import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faPlus);

export default class Groups extends Component {
  render() {
    return (
      <div className="groups-container">
        <button className="add-group-card">
            <FontAwesomeIcon 
              icon="plus"
              color="white"
              size="2x"
            />
        </button>

        <div className="group-card">
          <p className="group-name ssp-300">Group name</p>
          <p className="group-topic ssp-400">
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="group-members ssp-400">35 Members</p>
        </div>
        
        <div className="group-card">
          <p className="group-name ssp-300">Group name</p>
          <p className="group-topic ssp-400">
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="group-members ssp-400">35 Members</p>
        </div>

        <div className="group-card">
          <p className="group-name ssp-300">Group name</p>
          <p className="group-topic ssp-400">
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="group-members ssp-400">35 Members</p>
        </div>

        <div className="group-card">
          <p className="group-name ssp-300">Group name</p>
          <p className="group-topic ssp-400">
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="group-members ssp-400">35 Members</p>
        </div>

        <div className="group-card">
          <p className="group-name ssp-300">Group name</p>
          <p className="group-topic ssp-400">
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="group-members ssp-400">35 Members</p>
        </div>

        <div className="group-card">
          <p className="group-name ssp-300">Group name</p>
          <p className="group-topic ssp-400">
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="group-members ssp-400">35 Members</p>
        </div>


      </div>
    )
  }
}
