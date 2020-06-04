import React from "react";

import {withRouter} from "react-router";

const NotFoundPageComponent = (props) => {
    const { match: { params: { userId } }, history } = props;

    const toHomePage = () => {
        history.push('/home');
    };
    // donetodo 1: добавить кнопку навигации на back to home page
    //  подумайте, как для этого надо изменить эту страницу
    return (
        <div>
            <div>Page not found</div>
            <button className="btn btn-primary m-2" type="button" onClick={toHomePage}>Back to home page</button>
        </div>
    )
};

export const NotFoundPage = withRouter(NotFoundPageComponent);