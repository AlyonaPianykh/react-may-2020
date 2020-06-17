import React from 'react';
import { UserCard } from '../user-card/UserCard';
import { withRouter } from 'react-router';
import {connect} from "react-redux";

class UserPageComponent extends React.Component {

    toUsersList = () => {
        const {history} = this.props;
        history.push('/users');
    };
    toHomePage = () => {
        const {history} = this.props;
        history.push('/home');
    };

    render() {
        const {match: {params: {userId}}, history, usersList} = this.props;
        const user = usersList.find(item => item.id === userId);

        return (
            <div>
                <button className="btn btn-primary m-2" type="button" onClick={this.toUsersList}> Go back to users list</button>
                <button className="btn btn-primary m-2" type="button" onClick={this.toHomePage}> Go back to homepage</button>
                { !!user && <UserCard user={user} /> }
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

export default connect(mapStateToProps)(withRouter(UserPageComponent));