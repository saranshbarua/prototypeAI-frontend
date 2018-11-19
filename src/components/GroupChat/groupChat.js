import React, { Component } from 'react';
import io from 'socket.io-client';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faPaperPlane);

const keyword_extractor = require("keyword-extractor");

export default class groupChat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem('loggedInUser'),
      modal: false,
      businessTitle: '',
      businessBio: '',
      extractedKeywords: [],
      groupName: this.props.match.params.groupname,
      groupInfo: {},
      message: '',
      messages: []
    };
    this.socket = io('localhost:8080');
    this.socket.on('RECEIVE_MESSAGE', function(data){
        addMessage(data);
    });

    const addMessage = data => {
        console.log(data);
        this.setState({messages: [...this.state.messages, data]});
        console.log(this.state.messages);
    };
    this.sendMessage = ev => {
      ev.preventDefault();
      this.socket.emit('SEND_MESSAGE', {
          author: this.state.username,
          message: this.state.message
      });
      this.setState({message: ''});
  }
  }

  async componentWillMount() {
    const response = await fetch(`http://localhost:3000/groups?name=${this.state.groupName}`);
    const json = await response.json();
    this.setState({
      groupInfo: json
    })
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

    // const memberList = this.state.groupInfo[0].members.map((user,i) => {
    //   return <span key = {i} className="ssp-300">user</span>
    // })

    const messageList = this.state.messages.map((msg,i) => {
      if(msg.author === this.state.username) {
        return (
            <div key={i} className="chatSender">{msg.message}</div>  
        )
      }
      else {
        return (
            <div key={i}>
              <div className="ssp-400" style={{
                marginLeft: '50px',
                marginBottom: '-25px',
                color: 'rgba(33, 150, 243, 0.8)'
              }}>{msg.author}</div>
              <div className="chatReciever">{msg.message}</div>
            </div>
        )
      }
    })

    return (
      <div className="groupchat-container">
        <div className="gpchat-header">
            <span className="ssp-400" style={{color: 'white', marginLeft: '10px', fontSize: '22px'}}>{this.state.groupName}</span>
            <span className="ssp-400" style={{color: 'white', marginLeft: '10px', fontStyle: 'italic', fontSize: '16px'}}>{this.state.groupInfo.name}</span>
            <button className="cyw" onClick={(e) => this.openModal(e)}>Get your website</button> 
        </div>

        {this.showModal()}

        <div className="chat-container">
          {messageList}
        </div>

        <div className="gp-input-container">
            <form className="gp-input-container">
              <input 
                type="text" 
                className="ssp-400 gpchat-input"
                placeholder="Enter text"
                value={this.state.message}
                onChange={ev => this.setState({message: ev.target.value})}
              />
              <button
                onClick={(e) => this.sendMessage(e)}
                className="chatsendbutton">
                <FontAwesomeIcon
                  icon="paper-plane"
                />
              </button>
            </form>
        </div>
      </div>
    )
  }
}
