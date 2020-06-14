import React from 'react';
import queryString from 'query-string';
import { UserCard } from '../user-card/UserCard';
import { withRouter } from 'react-router';
import {connect} from 'react-redux';

class UsersListPageComponent extends React.Component {

  constructor(props) {
    super(props);

    const { location: { search } } = props;

    const { page } = queryString.parse(search);
    debugger
    this.state = {
      page: page || 1
    };
  }

  render() {
    const { users } = this.props;

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
}
const mstp = (store) => {
  const { usersReducer: { users } } = store;
  return {
    users
  };
};

export const UsersListPage = withRouter(connect(mstp)(UsersListPageComponent));