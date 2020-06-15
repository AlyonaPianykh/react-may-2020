import React from "react";
import {connect} from "react-redux";
import {UserCard} from "../user-card/UserCard";

const UserPage = (props) => {
    const {match: {params: {userId}}, history, users} = props;
    const user = users.find(item => item.id === userId);

    const toUsersList = () => {
        history.push('/users');
    };

    const toHomePage = () => {
        history.push('/home');
    };

    return (
        <div>
            <button className="btn btn-primary m-2" type="button" onClick={toUsersList}> Go back to users list</button>
            <button className="btn btn-primary m-2" type="button" onClick={toHomePage}> Go back to homepage</button>
            {
                !!user && <UserCard user={user}/>
            }
        </div>
    );
};

const mapStateToProps = state => {
    const {usersReducer: {users}} = state;
    return {users};
};

export default connect(mapStateToProps)(UserPage);