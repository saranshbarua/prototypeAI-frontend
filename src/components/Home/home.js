import React from 'react'
import HomeContainer from '../../containers/HomeContainer/homeContainer'

const Home = (props) => {

  const noOfPosts = 5;
  const backgroundHeight = `${noOfPosts * 94}vh`;
  console.log(props.loggedIn); 

  return (
    <div className="home-comp" style={{minHeight: backgroundHeight}}>
      <HomeContainer loggedIn = {props.loggedIn} />
    </div>
  )
};

export default Home;
