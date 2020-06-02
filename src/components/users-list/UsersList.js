import React from 'react';
import { UserCard } from '../user-card/UserCard';
import './UsersList.scss';

export function UsersList(props) {
  const { users } = props;

  return (
    <div className="users-list-wrapper">
      {
        users.map((user, index) => {
          return <UserCard
            user={user}
            key={user.id}
          />;
        })
      }
    </div>
  );
}
