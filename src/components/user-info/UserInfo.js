import React from 'react';
import { user } from '../../constants';
import './UserInfo.scss';

export function UserInfo(props) {
  return (
    <div className="user-info">
      <img className="user-info-avatar rounded-circle" alt="current user" src={user.avatar}/>
      <div className="user-info-details">
        <span>{user.firstName} </span>
        <span>{user.lastName}</span>
      </div>
    </div>
  );
}

export default UserInfo;