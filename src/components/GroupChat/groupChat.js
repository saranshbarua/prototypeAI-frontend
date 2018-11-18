import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faPaperPlane);

const keyword_extractor = require("keyword-extractor");

export default class groupChat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      businessTitle: '',
      businessBio: '',
      extractedKeywords: []
    }
  }

  openModal() {
    let toggle = this.state.modal ? false : true;
    this.setState({
      modal: toggle
    })
  }

  handleTitle(e) {
    this.setState({
      businessTitle: e.target.value
    })
  }

  handleBio(e) {
    this.setState({
      businessBio: e.target.value
    })
  }

  submitInfo(event){
    event.preventDefault();
    let keywords = keyword_extractor.extract(this.state.businessBio,{
      language:"english",
      remove_digits: true,
      return_changed_case:true,
      remove_duplicates: false
    });
    this.setState({
      extractedKeywords: this.state.extractedKeywords.concat(keywords)
    })
    console.log(this.state.extractedKeywords);
  }

  showModal = () => {
    if(this.state.modal) {
      return (
        <div className="modal open-modal">
          <div className="ssp-300" style={{fontSize: '35px'}}>Describe your startup</div>
          <form onSubmit={this.submitInfo} className="main-form">
            <span className="ssp-400" style={{marginTop: '15px'}}>Enter a name for your business</span>
            <input style={{
              marginTop: '15px',
              height: '35px',
              width: '680px',
              paddingLeft: '7px',
              fontSize: '17px'
            }} 
            value={this.state.businessTitle}
            onChange={(e) => this.handleTitle(e)}
            type="text" 
            placeholder="Enter title"
            className="ssp-400"
            />
            <span className="ssp-400" style={{marginTop: '15px'}}>Describe your business in 200 words</span>
            <textarea style={{
              marginTop: '15px',
              height: '335px',
              width: '680px',
              padding: '7px',
              fontSize: '17px',
              resize: 'none'
            }} 
            value={this.state.businessBio}
            onChange={(e) => this.handleBio(e)}
            type="text" 
            placeholder="Enter description"
            className="ssp-400"
            />
            <div style={{
              width: '680px',
              display: 'flex',
              justifyContent: 'flex-end'
            }}>
              <button style={{
                height: '40px',
                width: '130px',
                backgroundColor: '#2196f3',
                color: 'white',
                textAlign: 'center',
                fontSize: '18px',
                marginRight: '-11px',
                marginTop: '10px',
                border: '0px',
                boxShadow: '0px 4px 10px 0px rgba(0,0,0,0.21)'
              }}
              className="ssp-400"
              onClick={(e) => this.submitInfo(e)}
              >Submit</button>
            </div>
          </form>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="groupchat-container">
        <div className="gpchat-header">
            <span className="ssp-400" style={{color: 'white', marginLeft: '10px', fontSize: '22px'}}>Group name</span>
            <span className="ssp-400" style={{color: 'white', marginLeft: '10px', fontStyle: 'italic', fontSize: '16px'}}>saransh shivansh himanshu param</span>
            <button className="cyw" onClick={(e) => this.openModal(e)}>Get your website</button> 
        </div>

        {this.showModal()}

        <div className="chat-container">
          <div className="chatSender">Hey!</div>
          <div className="chatReciever">Hi :)</div>
          <div className="chatSender">Lorem ipsum is placeholder text commonly used in the graphic,</div>
          <div className="chatReciever">Lorem ipsum is placeholder text commonly used in the graphic, print, 
          and publishing industries for previewing layouts and visual mockups.</div>
          <div className="chatSender">Lorem ipsum is placeholder text commonly used in the graphic, print,
          Lorem ipsum is placeholder text commonly used in the graphic, print,
           and publishing industries for previewing layouts and visual mockups.
           and publishing industries for previewing layouts and visual mockups
           Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups..</div>
          <div className="chatReciever">Let's collect the data in userbase.</div>
          <div className="chatSender">hey this is good.</div>
        </div>

        <div className="gp-input-container">
            <input 
              type="text" 
              className="ssp-400 gpchat-input"
              placeholder="Enter text"
            />
            <button className="chatsendbutton">
              <FontAwesomeIcon
                icon="paper-plane"
              />
            </button>
        </div>
      </div>
    )
  }
}
