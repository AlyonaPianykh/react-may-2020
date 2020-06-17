import React from 'react';
import queryString from 'query-string';
import { UserCard } from '../user-card/UserCard';
import { withRouter } from 'react-router';
import {connect} from "react-redux";

class UsersListPageComponent extends React.Component {

  constructor(props) {
    super(props);

    const { location: { search } } = props;

    const { page } = queryString.parse(search);
    // debugger
    this.state = {
      // users: usersList,
      page: page || 1
    };
  }

  render() {
    const {usersList} = this.props;

    return (
      <div className="d-flex flex-wrap">
        {
            usersList.map((user) => {
            return <UserCard
              user={user}
              key={user.id}
              isShownDetails
            />;
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
    const { usersReducer: { usersList }} = state;

    return {
        usersList
    };
};


export default connect(mapStateToProps)(withRouter(UsersListPageComponent));