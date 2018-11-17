import React from 'react'
import HomeContainer from '../../containers/HomeContainer/homeContainer'

const Home = (props) => {

  const noOfPosts = 10;
  const backgroundHeight = `${(noOfPosts * 100)}vh`;

  return (
    <div className="home-comp" style={{minHeight: backgroundHeight}}>
      <HomeContainer />
    </div>
  )
};

export default Home;
