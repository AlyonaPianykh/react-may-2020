import React from "react";

export const NotFoundPage = (props) => {
    const { history } = props;

    const toHomePage = () => {
        history.push('/home');
    };
    // dtodo 1: добавить кнопку навигации на back to home page
    //  подумайте, как для этого надо изменить эту страницу
    return (
        <div>
            <h1 className="text-center">Page not found ...</h1>
            <button className="btn btn-primary m-2" type="button" onClick={toHomePage}> Go back to homepage</button>
        </div>

    );
};