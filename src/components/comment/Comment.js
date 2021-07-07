import React from 'react';

export const Comment = ({comment}) => {
    const {name, email, body} = comment;
    return (
        <div className="media">
            <div className="media-body">
                <h5 className="mt-0 mb-1">{name} | {email}</h5>
                {body}
            </div>
        </div>
    )
};