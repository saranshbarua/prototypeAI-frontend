import React, { Component } from 'react'

class Popular extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      title: '',
      desc: '',
      pos: 0,
      pPosts: [
        {
          'tit': 'Eastern pots',
          'description': 'Using lorem ipsum to focus attention on graphic elements.' 
        },
        {
          'tit': 'Handicrafts design course',
          'description': 'Handicrafts design course for students interested in learning hand made stuff.' 
        },
        {
          'tit': 'Eastern pots',
          'description': 'Using lorem ipsum to focus attention on graphic elements.' 
        },
        {
          'tit': 'Free zumba classes',
          'description': 'Let your child first steps be marked in zumba. Specialized in 13 categories.'
        }
      ]
    }

    this.changePost = this.changePost.bind(this);
  }

  componentDidMount() {
    this.setState({
      title: this.state.pPosts[0].tit,
      desc: this.state.pPosts[0].description
    })
  }

   changePost = () => {
    console.log(this.state.pPosts);
    let nextPos = this.state.pos;
    if(this.state.pos == (this.state.pPosts.length - 1)) {
      nextPos = 0;
    }
    else {
      nextPos++;
    }
    this.setState({
      pos: nextPos,
      title: this.state.pPosts[nextPos].tit,
      desc: this.state.pPosts[nextPos].description
    })
   }

  render() {

    return (
      <div className="popular-back">
        <div className="popular-container">
          <div className="popular-img">
            {/* <img src="" alt="Popular posts"/> */}
          </div>
          <p className="ssp-400" style={{color: 'rgb(33, 150, 243)', marginLeft: '15px', fontSize: '13px'}}>Popular</p>
          <span className="popular-title ssp-400">{this.state.title}</span>
          <p className="popular-desc ssp-400">{this.state.desc}</p>
          <div className="pop-next-container ssp-400"><button onClick={this.changePost} className="next-pop-button ssp-400">Next post</button></div>
        </div>
      </div>
    )
  }
};

export default Popular;
