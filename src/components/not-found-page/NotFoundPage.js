import React from "react";
import './NotFoundPage.scss'

// done_todo 1: вынести эту функцию в отдельную компоненту: сощздать папку, js файл
export const NotFoundPage = ({history}) => {
    // done_todo 1: добавить кнопку навигации на back to home page
    //  подумайте, как для этого надо изменить эту страницу

    const toHomePage = () => {
        history.push('/home')
    };

    return (
        <div className="not-found-card">
            <div className="not-found-card-text">Page not found</div>
            <button className="btn btn-primary m-2" type="button" onClick={toHomePage}>Back to home</button>
        </div>
    )
};