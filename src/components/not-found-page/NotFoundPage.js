import React from "react";
import {Link} from "react-router-dom";
import './NotFoundPage.css';

const NotFoundPage = () => {

    // donetodo 1: добавить кнопку навигации на back to home page
    //  подумайте, как для этого надо изменить эту страницу
    return (

        <div class="center-block">
            <div><b>Page not found</b></div>
            <div><Link to="/home">Go back to home page</Link></div>
        </div>
    )
};
export default NotFoundPage;