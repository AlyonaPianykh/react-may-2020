import React from 'react';
import queryString from 'query-string';
import { UserCard } from '../user-card/UserCard';
import { usersList } from '../../constants';
import { withRouter } from 'react-router';
import {connect} from "react-redux";

class UsersListPage extends React.Component {

  constructor(props) {
    super(props);

    const { location: { search } } = props;

    const { page } = queryString.parse(search);
    debugger
    this.state = {
      users: usersList,
      page: page || 1
    };
  }

  render() {
    const { users } = this.props;

    return (
      <div className="d-flex">
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
}
const mapStateToProps = state => {
  const { usersReducer: {users} } = state;
  return {
    users
  };
};

export default connect(mapStateToProps)(UsersListPage);