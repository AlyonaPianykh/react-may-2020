import React from "react";
import {UserCard} from "../user-card/UserCard";
import {connect} from "react-redux";

const UserPage = (props) => {
    const { match: { url, path, params: { userId } }, history, users } = props;

    const user = users.find(item => item.id === userId);

    const toUsersList = () => {
        history.push('/users');
    };
    const toHomePage = () => {
        history.push('/home');
    };
    debugger
    return (
        <div>
            <button className="btn btn-primary m-2" type="button" onClick={toUsersList}> Go back to users list</button>
            <button className="btn btn-primary m-2" type="button" onClick={toHomePage}> Go back to homepage</button>
            {
                !!user && (
                    <UserCard user={user} />
                )
            }
        </div>
    );
};

const mapStateToProps = state => {
    const { usersReducer: {users} } = state;
    return {
        users
    };
};

export default connect(mapStateToProps)(UserPage);

