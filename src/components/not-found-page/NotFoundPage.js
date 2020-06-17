// donetodo 1: вынести эту функцию в отдельную компоненту: создать папку, js файл
import React from "react";
import {Link} from "react-router-dom";
const NotFoundPage = () => {
    //donetodo: добавить кнопку навигации на back to home page
    return (
        <div>Page not found
        <br/>
            <link to="/home">back to home page</link>
        </div>
    )
};
export default NotFoundPage;