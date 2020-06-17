import React from 'react';
import queryString from 'query-string';
import { UserCard } from '../user-card/UserCard';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { userAddTodo} from "../../actions";
class UsersListPageComponent extends React.Component {

  constructor(props) {
    super(props);

    const { location: { search },usersList } = props;

    const { page } = queryString.parse(search);
    debugger
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
  const {  usersReducer:{usersList} } = state;
  return {
    usersList
  };
};


export const UsersListPage = connect(mapStateToProps) (withRouter(UsersListPageComponent));
