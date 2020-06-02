import React from 'react';
import DefaultImage from '../../assets/react.png'

import './UserCard.scss'

export function UserCard(props) {
  const { user } = props;

  if (!user) return null;

  const { first_name,
          last_name,
          email,
          address,
          _links: { avatar },
          dob,
          phone,
          gender,
          website,
  } = user;
  return (
    <div className="may-user-card card card text-white bg-dark">
      <img src={avatar.href || DefaultImage} alt="user avatar" className="may-user-card-avatar rounded-circle"/>

      <div className="card-body">
        <h4 className="card-header  bg-light text-dark">{first_name} {last_name}</h4>
          <div className='card-title'>{email}</div>
          <h6 className='card-subtitle mb-2 text-muted'>{address}</h6>
        <div className='card-text'>
          <div>{phone || ''}</div>
          <div>{dob || ''}</div>
          <div>{gender || ''}</div>
        </div>
          {website && <a href={website} className="card-link">Card link</a>}
      </div>
    </div>
  );
}
