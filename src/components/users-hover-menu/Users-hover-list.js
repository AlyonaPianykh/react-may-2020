import React from "react";
import './Users-hover-list.scss'

function UserHoverListItem(props) {
    const {user, num} = props;
    return (
        <a href={'#user'+num} key={num} className="users-menu-item">{user.first_name + " " + user.last_name}</a>
    )
}

export const UsersHoverList = function (props) {
    const {users} = props;
    return (
        <div className='users-menu'>
            {
                users.map(function (val,num) {
                    return(<UserHoverListItem user={val} num={num}/>)
                })
            }
        </div>
    )
}