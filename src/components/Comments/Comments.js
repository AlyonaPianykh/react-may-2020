import React from 'react';
import './Comments_stule.scss'

export function Comments(props) {
    const {comment} = props;
    const {name, email, body} = comment;

    return (
        <div className='main-comment-div'>
            <div className='info_Author'>
                {name} <br/>
                {email}
            </div>
            <div className='com_box'>
                {body}
            </div>
        </div>
    );
}