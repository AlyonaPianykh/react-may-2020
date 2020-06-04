import React from "react";

import {usersList} from "../../constants";
import {UserCard} from "../user-card/UserCard";

export const UserPage = (props) => {
    const { match: { params: { userId } }, history } = props;

    const user = usersList.find(item => item.id === userId);

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
                    <UserCard user={user}/>
                )
            }
        </div>
    );
};