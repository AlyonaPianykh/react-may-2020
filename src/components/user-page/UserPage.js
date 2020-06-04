import React, {Component} from 'react';
import {usersList} from "../../constants";
import {UserCard} from "../user-card/UserCard";

function UserPage(props) {
    const { match: { params: { userId } }, history } = props;

    const user = usersList.find(item => item.id === userId);

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
                !!user && (
                    <UserCard user={user}/>
                )
            }
        </div>
    );
}

export default UserPage;