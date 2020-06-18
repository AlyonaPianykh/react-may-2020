import React from 'react';
import './UserInfo.scss';
import {CurrentUserContext} from "../../context/CurrentUserContext";

export const UserInfo = (props) => {

    return (
        <CurrentUserContext.Consumer>
            {
                value => (
                    <div className="user-info">
                        <img src={value.avatar} className="user-info-avatar rounded-circle" />
                        <div className="user-info-details">
                            <span>{value.firstName} </span>
                            <span>{value.lastName}</span>
                        </div>
                    </div>
                )
            }
        </CurrentUserContext.Consumer>

    );
};

//----------------------------------------
// export const UserInfo = (props) => {
//    // dtodo тут нужно использовать пользователя из CurrentUserContext
//   //   и тогда из пропсов мы его доставать не будем
//   //   попробуйте достать пользователя с помощью использования Consumer, код нужно будет поменять
//   const { user } = props;
//
//   if (!user) return null;
//
//   const { avatar, firstName, lastName } = user;
//   return (
//       <CurrentUserContext.Customer>
//           {
//               value => (
//                   <h1>{value}</h1>
//                   // <div className="user-info">
//                   //     <h1>{value}</h1>
//                   //     <img src={avatar} className="user-info-avatar rounded-circle" />
//                   //     <div className="user-info-details">
//                   //         <span>{firstName} </span>
//                   //         <span>{lastName}</span>
//                   //     </div>
//                   // </div>
//               )
//           }
//       </CurrentUserContext.Customer>
//
//   );
// };