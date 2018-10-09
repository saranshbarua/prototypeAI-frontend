import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faPlus);

export default class Suggestions extends Component {

  render() {
    return (
      <div className="suggestion-container">
        <div className="sugg-title ssp-400">
            Suggested people
        </div>
        <div className="sugg-box">
          <div className="sugg-avatar">
            <img src="https://avatars0.githubusercontent.com/u/23500643?v=3&s=100" alt="" className="sugg-img" />
          </div>
          <div className="sugg-desc ssp-400">
            <span style={{color: '#2196f3'}}>Saransh Barua</span>
            <span style={{color: '#607d8b', fontSize: '13px'}}>Photographer</span>
          </div>
          <div className="sugg-add">
            <button className="add-sugg">
              <FontAwesomeIcon 
                icon="plus"
                size="sm"
                color="grey"
              />
            </button>
          </div>
        </div>

        <div className="sugg-box">
          <div className="sugg-avatar">
            <img src="https://avatars0.githubusercontent.com/u/23500643?v=3&s=100" alt="" className="sugg-img" />
          </div>
          <div className="sugg-desc ssp-400">
            <span style={{color: '#2196f3'}}>Param Nagar</span>
            <span style={{color: '#607d8b', fontSize: '13px'}}>Cyber Punk</span>
          </div>
          <div className="sugg-add">
            <button className="add-sugg">
              <FontAwesomeIcon 
                icon="plus"
                size="sm"
                color="grey"
              />
            </button>
          </div>
        </div>

        <div className="sugg-box">
          <div className="sugg-avatar">
            <img src="https://avatars0.githubusercontent.com/u/23500643?v=3&s=100" alt="" className="sugg-img" />
          </div>
          <div className="sugg-desc ssp-400">
            <span style={{color: '#2196f3'}}>Aditya Dimri</span>
            <span style={{color: '#607d8b', fontSize: '13px'}}>Evangelist</span>
          </div>
          <div className="sugg-add">
            <button className="add-sugg">
              <FontAwesomeIcon 
                icon="plus"
                size="sm"
                color="grey"
              />
            </button>
          </div>
        </div>
       
      </div>
    )
  }
}
