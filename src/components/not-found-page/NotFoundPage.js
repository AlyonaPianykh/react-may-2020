import React from "react";

import './NotFoundPage.css';


const NotFoundPage = (props) => {
    const {history} = props;
    const toHomePage = () => history.push('/home');

    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                    <h2>404 - The Page not found</h2>
                </div>
                <button onClick={toHomePage}>Go back to homepage</button>
            </div>
        </div>
    );
};

export default NotFoundPage;