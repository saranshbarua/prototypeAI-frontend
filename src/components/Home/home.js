import React from 'react'
import HomeContainer from '../../containers/HomeContainer/homeContainer'

const Home = () => {

  const noOfPosts = 5;
  const backgroundHeight = `${noOfPosts * 94}vh`;
  console.log(backgroundHeight); 

  return (
    <div className="home-comp" style={{minHeight: backgroundHeight}}>
      <HomeContainer />
    </div>
  )
};

export default Home;
