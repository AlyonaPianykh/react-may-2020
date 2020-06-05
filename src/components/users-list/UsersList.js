import React from 'react';
import queryString from 'query-string';
import { UserCard } from '../user-card/UserCard';
import { usersList } from '../../constants';
import { withRouter } from 'react-router';

class UsersListPageComponent extends React.Component {

  constructor(props) {
    super(props);

    const { location: { search } } = props;

    const { page } = queryString.parse(search);
    // debugger
    this.state = {
      users: usersList,
      page: page || 1
    };
  }

  render() {
    const { users } = this.state;

    return (
      <div className="d-flex">
        {
          users.map((user) => {
            return <UserCard
              user={user}
              key={user.id}
              show          //додав властивість show щоб керувати відображенням
                            // кнопки "show details'
            />;
          })
        }
      </div>
    );
  }
}

export const UsersListPage = withRouter(UsersListPageComponent);