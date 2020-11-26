import React from 'react';
import { UserContext } from '../../context/UserContext';
import './UserInfo.scss';


export const UserInfo = (props) => {

   // вtodo тут нужно использовать пользователя из CurrentUserContext
  //   и тогда из пропсов мы его доставать не будем
  //   попробуйте достать пользователя с помощью использования Consumer, код нужно будет поменять
  //
  // const { user } = props;
  //
  //
  //
  //
  return (
      <UserContext.Consumer>
          {
              (value) => {
                  if (!value) return null;
                  const {avatar, firstName, lastName} = value;
                  return (

                      <div className="user-info">
                          <img src={avatar} className="user-info-avatar rounded-circle"/>
                          <div className="user-info-details">
                              <span>{firstName} </span>
                              <span>{lastName}</span>
                          </div>
                      </div>
                  )
              }
          }

      </UserContext.Consumer>
  );
};