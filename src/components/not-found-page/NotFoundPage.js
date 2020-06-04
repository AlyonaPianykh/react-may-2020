import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './NotFoundPage.scss'

function NotFoundPage(props) {
    const { history } = props;

    const toHomePage = () => {
        history.push('/home');
    };
    return (
        <div className="container">
            <div className="error-template">
                <h1>Oops!</h1>
                <h2>404 Not Found</h2>
                <div className="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div className="error-actions">
                    <button className="btn btn-primary m-2" type="button" onClick={toHomePage}>Take Me Home</button>
                </div>
            </div>
        </div>
    );

}

export default NotFoundPage;