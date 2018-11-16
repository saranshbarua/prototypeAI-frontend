import React from 'react'
import HomeContainer from '../../containers/HomeContainer/homeContainer'

const Home = (props) => {

  const noOfPosts = 5;
  const backgroundHeight = `${noOfPosts * 100}vh`;
  // console.log(`The log in prop is ${props.location.state.loggedIn}`); 

  return (
    <div className="home-comp" style={{minHeight: backgroundHeight}}>
      <HomeContainer loggedIn = {props.location.state.loggedIn} />
    </div>
  )
};

export default Home;
