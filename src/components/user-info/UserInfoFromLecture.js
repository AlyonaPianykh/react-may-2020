import React from 'react';
import './UserInfo.scss';
import { CurrentUserContext } from '../../context/CurrentUserContext';


export const UserInfo = () => {
   // dtodo тут нужно использовать пользователя из CurrentUserContext
  //   и тогда из пропсов мы его доставать не будем
  //   попробуйте достать пользователя с помощью использования Consumer, код нужно будет поменять

  return (
      <CurrentUserContext.Consumer>
          {(user)=>{
              console.log('UserInfo:',user)
              if (!user) return null;
              const { avatar, firstName, lastName } = user;
              return(<div className="user-info">
      <img src={avatar} className="user-info-avatar rounded-circle" />
      <div className="user-info-details">
        <span>{firstName} </span>
        <span>{lastName}</span>
      </div>
    </div>)
          }}
      </CurrentUserContext.Consumer>
  );
};