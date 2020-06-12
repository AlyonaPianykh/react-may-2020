import React from 'react';
import { UserCard } from '../user-card/UserCard';

import "./UsersList.scss"

export function UsersList(props) {
  const { users } = props;

  return (
    <div className="d-flex flex-0 flex-wrap user-card">
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
