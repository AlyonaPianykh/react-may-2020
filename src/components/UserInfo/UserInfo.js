import React from "react";

import '../UserInfo/UserInfo.scss'

export const UserInfo = (props) =>{
   const {user} = props;
   if (!user) return null;
   const {avatar, firstName, lastName} = user;
    return (
        <div className="user-info">
            <img className="user-info-avatar" src={avatar}/>
            <div className="user-info-details">
            <span>{firstName}</span>
            <span>{lastName}</span>
            </div>
        </div>
    )
};