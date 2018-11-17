import React from 'react'

const ProfileBox = (props) => {
  return (
    <div className="profile-box">
       <div className="img-container">
         <img src="https://avatars0.githubusercontent.com/u/23500643?v=3&s=100" alt="profile" height="60px" width="60px" style={{borderRadius: '50%'}} />
       </div>
       <div className="profile-name ssp-400">Saransh Barua</div>
       <div className="profile-profession ssp-400">Designer</div>
    </div>
  )
};

export default ProfileBox;
