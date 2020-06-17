import React from 'react';

import './UserInfo.scss';


export const UserInfo = (props) => {
  console.log(props)
   // todo тут нужно использовать пользователя из CurrentUserContext
  //   и тогда из пропсов мы его доставать не будем
  //   попробуйте достать пользователя с помощью использования Consumer, код нужно будет поменять
  const { user } = props;

  if (!user) return null;

  const { avatar, firstName, lastName } = user;
  return (
    <div className="user-info">
      <img src={avatar} className="user-info-avatar rounded-circle" />
      <div className="user-info-details">
        <span>{firstName} </span>
        <span>{lastName}</span>
      </div>
    </div>
  );
};