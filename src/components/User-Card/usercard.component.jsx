import React from 'react';
import './usercard.style.css'
 let UserCard =({userData}) => (
     <div className="card-container">
        <div className="item">
            <span>Team: <br/> </span>
            <span>{userData.personalDetails.Team}</span>
        </div>
        <div className="item">
          <span>avatar: <br/></span>
            <img src={userData.personalDetails.avatar}></img>            
        </div>
        <div className="item">
            <span>joinedAt: <br/> </span>
            <span>{userData.personalDetails.joinedAt}</span>       
        </div>
        <div className="item">
            <span>name: <br/> </span>
            <span>{userData.personalDetails.name}</span>
        </div>
    </div>

 );
 
 export default UserCard;
