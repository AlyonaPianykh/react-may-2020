import React from "react";
import "../UserCard/UserCard.scss"
export const UserCard = (props) => {
    const {user} = props;
    if (!user) return null;
    const {first_name, last_name, email, address, _links} = user;
    return(
    <div className="my-user-card">
            <img className="my-user-card-avatar" src={_links.avatar.href}/>
            <h4 className="card-title">
                <div>{first_name}{last_name}</div>
            </h4>
            <div className="card-text">
                <div>{email}<br/>{address}</div>
        </div>
    </div>
    )
};