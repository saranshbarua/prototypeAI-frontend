import React, { Component } from 'react'

export default class Popular extends Component {
  render() {
    return (
      <div className="popular-back">
        <div className="popular-container">
          <div className="popular-img">
            {/* <img src="" alt="Popular posts"/> */}
          </div>
          <p className="ssp-400" style={{color: 'rgb(33, 150, 243)', marginLeft: '15px', fontSize: '13px'}}>Popular</p>
          <span className="popular-title ssp-400">Zumba classes</span>
          <p className="popular-desc ssp-400">Let your child first steps be marked in zumba. Specialized in 13 categories.</p>
          <div className="pop-next-container ssp-400"><span style={{marginRight: '19px'}}>Next post</span></div>
        </div>
      </div>
    )
  }
}
