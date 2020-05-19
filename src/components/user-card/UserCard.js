import React from 'react';

// if (!props) return null;
//
// const { first_name, last_name, email, address, _links: {self: {href}} = props


import './UserCard.scss';

function UserCard( {props} ) {


    const user  = props;


    const { first_name, last_name, email, address, _links: { avatar: { href }} } = user;





    return (
        <div className="may-user-card card" >
            <img className="may-user-card-avatar rounded-circle"
                src={href} alt="avatar"/>
            <div className="card=body">
                <h4 className="card-title">
                    {first_name} {last_name}
                </h4>
                <div className="card-text">
                    <div>
                        {email}
                    </div>
                    <div>
                        {address}
                    </div>
                </div>
            </div>

        </div>
    )

}

export default UserCard;




//  1) блок img c src равным avatar.href и классом "may-user-card-avatar rounded-circle"
//  2) div с классом card-body
//  этот div будет содержать:
//  - блок h4 с классом card-title, он должен вывести имя и фамилию (first_name, last_name)
//  - блок div c классом "card-text", содержащий 2 div блока для поля email и поля address
