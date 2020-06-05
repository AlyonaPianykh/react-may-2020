import React from 'react';
import { Link, withRouter} from 'react-router-dom';
// import { withRouter } from 'react-router';
import './UserCard.scss';

function UserCardComponent(props) {
  const { user, show, match: {url} } = props;

  if (!user) return null;

  const { first_name, last_name, email, address, _links: { avatar } = {} } = user;
  return (
    <div className="may-user-card card">
      {/*<img src={`${avatar.href}?dummy=${Math.random() * 1000}`} alt="user avatar" className="may-user-card-avatar rounded-circle"/>*/}

      <div className="card-body">
        <h4 className="card-title">{first_name} {last_name}</h4>
        <div className="card-text">
          <div>{email}</div>
          <div>{address}</div>
        </div>
      </div>

      {show && <Link to={`${url}/${user.id}`}>Show details</Link>}  {/*додав властивість show щоб керувати відображенням
                                                                        // кнопки "show details'*/}
    </div>
  );
}

export const UserCard = withRouter(UserCardComponent);