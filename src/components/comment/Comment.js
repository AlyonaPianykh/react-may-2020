import React from "react";
import {allComments} from "../../constants";

import './Comment.css'

export const Comment = ({name,email,body}) => {
    return (
        <div className={'container'}>
            <p3>{name}</p3>
            <p4>{email}</p4>
            <div>{body}</div>
        </div>
    )
};