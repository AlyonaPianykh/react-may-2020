import React from "react";
import {withRouter} from 'react-router';

export const NotFoundPageComponent = (props) => {
    // todo 1: добавить кнопку навигации на back to home page
    //  подумайте, как для этого надо изменить эту страницу

    const {history} = props;

    let onBackToHomePage=()=>{
        history.push('/home');
    };



    return (
        <div>
            Page not found
            <button onClick={onBackToHomePage}>back to home page</button>
        </div>
    )
};

export const NotFoundPage = withRouter(NotFoundPageComponent);