import React, { Component } from 'react'

class Popular extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      title: '',
      desc: '',
      image: '',
      pos: 0,
      pPosts: []
    }

    this.changePost = this.changePost.bind(this);
  }

  componentDidMount() {

    fetch('http://localhost:3000/posts').then(res => res.json()).then(
      (result) => {
        this.setState({
          pPosts: result
        })
      }
    ).then(() => {
      this.state.pPosts.sort((a,b) => {
        return b.likes - a.likes
      })  
    }).then(() => {
      this.setState({
        desc: this.state.pPosts[0].description,
        image: this.state.pPosts[0].imageUrl
      })
    })
  }

   changePost = () => {
    console.log(this.state.pPosts);
    let nextPos = this.state.pos;
    if(this.state.pos === (this.state.pPosts.length - 1)) {
      nextPos = 0;
    }
    else {
      nextPos++;
    }
    this.setState({
      pos: nextPos,
      title: this.state.pPosts[nextPos].tit,
      desc: this.state.pPosts[nextPos].description,
      image: this.state.pPosts[nextPos].imageUrl
    })
   }

  render() {
    return (
      <div className="popular-back">
        <div className="popular-container">
          <div className="popular-img">
            <img src={this.state.image} style={{height: 'auto', width: '100%'}} alt="Popular posts"/>
          </div>
          <p className="ssp-400" style={{color: 'rgb(33, 150, 243)', marginLeft: '15px', fontSize: '13px'}}>Popular</p>
          {/* <span className="popular-title ssp-400">{this.state.title}</span> */}
          <p className="popular-desc ssp-400">{this.state.desc}</p>
          <div className="pop-next-container ssp-400"><button onClick={this.changePost} className="next-pop-button ssp-400">Next post</button></div>
        </div>
      </div>
    )
  }
};

export default Popular;
