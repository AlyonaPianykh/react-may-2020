import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export  function NotFoundPage(props) {
    // donetodo 1: добавить кнопку навигации на back to home page
    //  подумайте, как для этого надо изменить эту страницу

    return (
        <div>
        <Link to="/home">back to home page</Link>
        <div>Page not found</div>
        </div>
    )
};