import React from 'react';
import { UserCard } from '../user-card/UserCard';

export function UsersList(props) {
  const { users } = props;

  return (
    <div className="d-flex">
      {
        users.map((user) => {
          return <UserCard
                    user={user}
                    key={user.id}
                  />;
        })
      }
    </div>
  );
}
